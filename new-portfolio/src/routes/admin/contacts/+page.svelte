<script lang="ts">
	import { getContacts } from '../data.remote';

	let contacts = $state<any[]>([]);
	let loaded = $state(false);
	let selectedContact = $state<any | null>(null);

	$effect(() => {
		getContacts().then((c) => {
			contacts = c;
			loaded = true;
		});
	});
</script>

<h1 class="mb-8 text-3xl font-black tracking-tight">Contact Submissions</h1>

{#if loaded}
	{#if contacts.length > 0}
		<div class="overflow-x-auto rounded-2xl border border-neutral-800">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b border-neutral-800 bg-neutral-900/50 text-left text-xs font-semibold tracking-wide text-neutral-500 uppercase">
						<th class="px-5 py-4">Name</th>
						<th class="px-5 py-4">Email</th>
						<th class="px-5 py-4 hidden md:table-cell">Message</th>
						<th class="px-5 py-4 text-right">Action</th>
					</tr>
				</thead>
				<tbody>
					{#each contacts as contact}
						<tr class="border-b border-neutral-800/50 last:border-0">
							<td class="px-5 py-4 font-medium">{contact.name}</td>
							<td class="px-5 py-4 text-neutral-400">{contact.email}</td>
							<td class="px-5 py-4 text-neutral-500 max-w-xs truncate hidden md:table-cell">
								{contact.message}
							</td>
							<td class="px-5 py-4 text-right">
								<button
									onclick={() => (selectedContact = contact)}
									class="rounded-lg border border-neutral-700 px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-neutral-800"
								>
									View
								</button>
							</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{:else}
		<div class="rounded-2xl border border-dashed border-neutral-800 p-16 text-center">
			<p class="text-lg font-semibold text-neutral-500">No submissions yet</p>
		</div>
	{/if}
{/if}

{#if selectedContact}
	<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
		onclick={() => (selectedContact = null)}
	>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div
			class="max-w-lg w-full rounded-2xl border border-neutral-800 bg-neutral-950 p-6"
			onclick={(e) => e.stopPropagation()}
		>
			<div class="flex items-start justify-between gap-4 mb-4">
				<div>
					<h2 class="text-lg font-bold">{selectedContact.name}</h2>
					<p class="text-sm text-neutral-400">{selectedContact.email}</p>
				</div>
				<button
					onclick={() => (selectedContact = null)}
					class="rounded-lg border border-neutral-700 px-3 py-1 text-xs transition-colors hover:bg-neutral-800"
				>
					Close
				</button>
			</div>
			<div class="rounded-xl bg-neutral-900/50 p-4">
				<p class="text-sm leading-relaxed text-neutral-300 whitespace-pre-wrap">{selectedContact.message}</p>
			</div>
		</div>
	</div>
{/if}

<style>
	@reference 'tailwindcss';
</style>
