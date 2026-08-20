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

<div class="flex items-center justify-between border-2 border-stark-white bg-true-black px-5 py-3">
	<h1 class="text-sm font-black tracking-[0.24em] uppercase">Contact submissions</h1>
	<p class="hidden text-xs font-bold tracking-[0.18em] text-stark-white/50 uppercase sm:block">
		Inbox
	</p>
</div>

{#if loaded}
	{#if contacts.length > 0}
		<div class="mt-10 overflow-x-auto border-2 border-stark-white">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b-2 border-stark-white bg-true-black text-left text-xs font-bold tracking-[0.16em] text-stark-white uppercase">
						<th class="px-5 py-4">Name</th>
						<th class="px-5 py-4">Email</th>
						<th class="hidden px-5 py-4 md:table-cell">Message</th>
						<th class="px-5 py-4 text-right">Action</th>
					</tr>
				</thead>
				<tbody>
					{#each contacts as contact}
						<tr class="border-b border-stark-white/15 last:border-b-0 hover:bg-true-black">
							<td class="px-5 py-4 font-bold text-stark-white">{contact.name}</td>
							<td class="px-5 py-4 text-stark-white/60">{contact.email}</td>
							<td class="hidden max-w-xs truncate px-5 py-4 text-stark-white/50 md:table-cell">
								{contact.message}
							</td>
							<td class="px-5 py-4 text-right">
								<button
									onclick={() => (selectedContact = contact)}
									class="cursor-pointer border-2 border-stark-white bg-onyx px-3 py-1.5 text-xs font-bold tracking-[0.14em] text-stark-white uppercase transition-colors duration-150 hover:bg-stark-white hover:text-true-black"
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
		<div class="mt-10 border-2 border-dashed border-stark-white/40 p-16 text-center">
			<p class="text-sm font-bold tracking-[0.24em] text-stark-white uppercase">
				No submissions yet
			</p>
		</div>
	{/if}
{/if}

{#if selectedContact}
	<!-- svelte-ignore a11y_click_events_have_key_events a11y_no_static_element_interactions -->
	<div
		class="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4"
		onclick={() => (selectedContact = null)}
	>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<div
			class="max-w-lg w-full overflow-hidden rounded-[12px] border-2 border-stark-white bg-onyx"
			onclick={(e) => e.stopPropagation()}
		>
			<div class="flex items-start justify-between gap-4 border-b-2 border-stark-white bg-true-black p-6">
				<div>
					<h2 class="text-lg font-black uppercase tracking-[0.08em]">{selectedContact.name}</h2>
					<p class="mt-1 text-sm text-stark-white/60">{selectedContact.email}</p>
				</div>
				<button
					onclick={() => (selectedContact = null)}
					class="cursor-pointer border-2 border-stark-white bg-onyx px-3 py-1 text-xs font-bold tracking-[0.14em] uppercase transition-colors duration-150 hover:bg-stark-white hover:text-true-black"
				>
					Close
				</button>
			</div>
			<div class="p-6">
				<p class="text-sm leading-relaxed whitespace-pre-wrap text-stark-white/85">
					{selectedContact.message}
				</p>
			</div>
		</div>
	</div>
{/if}

<style>
	@reference 'tailwindcss';
</style>