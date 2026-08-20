<script lang="ts">
	let { form } = $props<{ form?: { error?: string } }>();
</script>

<div class="flex min-h-[80vh] flex-col items-center justify-center">
	<div class="w-full max-w-sm">
		<div class="mb-8 flex items-center gap-3 border-2 border-stark-white bg-true-black px-4 py-3">
			<span class="h-2 w-2 bg-stark-white"></span>
			<span class="text-xs font-black tracking-[0.24em] uppercase">Secure access</span>
		</div>
		<h1 class="mb-2 text-3xl font-black tracking-[0.06em] uppercase">Admin login</h1>
		<p class="mb-8 text-sm text-stark-white/60">
			Enter the secret code to access the admin panel.
		</p>

		<form method="POST" action="/admin/login">
			{#if form?.error}
				<p
					class="mb-4 border-2 border-stark-white bg-true-black px-4 py-3 text-sm font-bold text-stark-white uppercase"
				>
					{form.error}
				</p>
			{/if}
			<div class="flex flex-col gap-2">
				<label
					for="password"
					class="text-xs font-bold tracking-[0.16em] text-stark-white/75 uppercase"
				>
					Secret code
				</label>
				<input
					id="password"
					name="password"
					type="password"
					required
					autofocus
					class="w-full rounded-[10px] border-2 border-stark-white/40 bg-true-black px-4 py-3 text-base text-stark-white placeholder:text-gray-500 transition-colors duration-150 focus:border-stark-white focus:outline-none"
				/>
			</div>
			<button
				type="submit"
				class="mt-6 w-full cursor-pointer border-2 border-stark-white bg-stark-white px-4 py-3 text-sm font-bold tracking-[0.16em] text-true-black uppercase transition-colors duration-150 hover:bg-true-black hover:text-stark-white"
			>
				Log in
			</button>
		</form>
	</div>
</div>

<style>
	@reference 'tailwindcss';
</style>