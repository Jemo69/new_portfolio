<script lang="ts">
	let { form } = $props<{ form?: { error?: string } }>();
</script>

<div class="flex min-h-[80vh] flex-col items-center justify-center">
	<div class="w-full max-w-sm">
		<h1 class="mb-2 text-3xl font-black tracking-tight">Admin Login</h1>
		<p class="mb-8 text-sm text-neutral-500">Enter the secret code to access the admin panel.</p>

		<form method="POST" action="/admin/login">
			{#if form?.error}
				<p class="mb-4 rounded-lg bg-red-950/60 px-4 py-3 text-sm font-medium text-red-400">{form.error}</p>
			{/if}
			<div class="flex flex-col gap-2">
				<label for="password" class="text-sm font-semibold text-neutral-400">Secret code</label>
				<input
					id="password"
					name="password"
					type="password"
					required
					autofocus
					class="w-full rounded-xl border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-base text-neutral-100 placeholder:text-neutral-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 focus:outline-none"
				/>
			</div>
			<button
				type="submit"
				class="mt-6 w-full rounded-xl bg-amber-500 px-4 py-3 text-sm font-bold text-neutral-950 transition-colors hover:bg-amber-400"
			>
				Log in
			</button>
		</form>
	</div>
</div>

<style>
	@reference 'tailwindcss';
</style>
