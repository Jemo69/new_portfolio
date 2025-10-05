import { command, form } from "$app/server";
import { db } from "$lib/server/db";
import { contact } from "$lib/server/db/schema";
import { env } from "$env/dynamic/private";
import { tryCatch } from "$lib/TryCatch";
import { z } from "zod";

/**
 * Contact form schema and handler
 */

const contactSchema = z.object({
  name: z.string().min(1),
  // Fix: z.email() doesn't exist; use z.string().email()
  email: z.string().email(),
  message: z.string().min(1)
});

export type ContactType = z.infer<typeof contactSchema>;

type PostContactResult =
  | { ok: true }
  | { ok: false; error: string };

export const postContact = form(contactSchema, async (input): Promise<PostContactResult> => {
  const result = await tryCatch(
    db.insert(contact).values({
      name: input.name,
      email: input.email,
      message: input.message
    })
  );

  if (result.error) {
    // Ensure the error is serializable
    const message = result.error instanceof Error ? result.error.message : String(result.error);
    return { ok: false, error: message };
  }
  return { ok: true };
});

/**
 * Download resume from private GitHub repo
 * - Reads SOURCE_RESUME (a raw GitHub URL or any URL) and GITHUB_PRIVATE_TOKEN from server env
 * - For raw.githubusercontent.com URLs, it converts to the GitHub API contents endpoint for private access
 * - Returns filename, MIME type, and file bytes for client to trigger a download
 */

type DownloadResumeResult =
  | {
      ok: true;
      status: number;
      filename: string;
      mimeType: string;
      // Uint8Array is serializable in SvelteKit remote functions
      data: Uint8Array;
    }
  | {
      ok: false;
      status: number;
      error: string;
    };

/**
 * Convert a raw.githubusercontent.com URL into the GitHub REST API contents URL,
 * which supports token-based auth for private repos with Accept: application/vnd.github.v3.raw
 * Example:
 *  raw: https://raw.githubusercontent.com/owner/repo/branch/path/to/file.ext
 *  api: https://api.github.com/repos/owner/repo/contents/path/to/file.ext?ref=branch
 */
function toGithubApiContentsUrl(rawUrl: string): string | null {
  try {
    const u = new URL(rawUrl);
    if (u.hostname !== "raw.githubusercontent.com") return null;

    const parts = u.pathname.split("/").filter(Boolean);
    if (parts.length < 4) return null;
    const [owner, repo, branch, ...pathParts] = parts;
    const path = pathParts.join("/");

    const apiUrl = new URL(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`);
    apiUrl.searchParams.set("ref", branch);
    return apiUrl.toString();
  } catch {
    return null;
  }
}

// function parseFilenameFromUrlOrHeader(urlStr: string, contentDisposition: string | null): string { if (contentDisposition) {
//     const match = /filename\*=UTF-8''([^;]+)|filename="?([^"]+)"?/i.exec(contentDisposition);
//     if (match) {
//       return decodeURIComponent(match[1] || match[2]);
//     }
//   }
//   try {
//     const u = new URL(urlStr);
//     const last = u.pathname.split("/").filter(Boolean).pop();
//     if (last) return last;
//   } catch {
//     // ignore
//   }
//   return "download.bin";
// }

export const DownloadResume = command(async (): Promise<DownloadResumeResult> => {
let arrayBuffer = null
  let uint8 = null
  const token = env.GITHUB_PRIVATE_TOKEN;
  const rawUrl = env.SOURCE_RESUME;

  if (!rawUrl) {
    return { ok: false, status: 500, error: "Missing SOURCE_RESUME in environment" };
  }
  if (!token) {
    return { ok: false, status: 500, error: "Missing GITHUB_PRIVATE_TOKEN in environment" };
  }

  try {
    // Prefer the GitHub API for private repos
    const targetUrl = toGithubApiContentsUrl(rawUrl) ?? rawUrl;

    const res = await fetch(targetUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        // The GitHub API will return the raw bytes of the file with this Accept header.
        // If targetUrl is not a GitHub API URL, this header is harmless.
        Accept: "application/vnd.github.v3.raw"
      }
    });

    if (!res.ok) {
      return {
        ok: false,
        status: res.status,
        error: `GitHub fetch failed: ${res.status} ${res.statusText}`
      };
    }

    const contentType = res.headers.get("content-type") ?? "application/octet-stream";
    const filename = 'resume.pdf';

     arrayBuffer = await res.arrayBuffer();
     uint8 = new Uint8Array(arrayBuffer);

    return {
      ok: true,
      status: 200,
      filename,
      mimeType: contentType,
      data: uint8
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return { ok: false, status: 500, error: message };
  }
});
