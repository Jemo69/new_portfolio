<script lang="ts">
	/* JEMO CORE Refactor 
	  Pillars: Binary Contrast, Hard Containment, Softened Industrial
	*/
	
	let { 
		errorCode = 404, 
		errorTitle = "ACCESS DENIED", 
		errorMessage = "The requested coordinate does not exist within the current sector.", 
		onNavigateHome 
	} = $props<{
		errorCode: number;
		errorTitle: string;
		errorMessage: string;
		onNavigateHome: () => void;
	}>();

	// Protocol: No soft shadows or springs. 
	// The "Jemo Press" is a hard scale-down without blurring.
	const buttonClasses = 'active:scale-95 transition-all duration-75 ease-linear';
</script>

<div
	class="flex min-h-[80vh] items-center justify-center bg-onyx px-4 font-sans"
>
	<div
		class="flex w-full max-w-lg flex-col
           border-2 border-stark-white
           bg-true-black
           overflow-hidden shadow-[12px_12px_0px_0px_rgba(255,255,255,0.1)]"
	>
		<div class="bg-stark-white px-6 py-2 border-b-2 border-true-black">
			<span class="text-true-black font-black uppercase tracking-widest text-sm">
				Critical System Alert // {errorCode}
			</span>
		</div>

		<div class="flex flex-col items-center p-10 text-center space-y-8">
			<div class="space-y-2">
				<h1 class="text-6xl font-black text-stark-white uppercase tracking-tighter">
					{errorTitle}
				</h1>
				<div class="h-1.5 w-24 bg-stark-white mx-auto"></div>
			</div>

			<p class="text-xl text-stark-white max-w-prose leading-relaxed opacity-90">
				{errorMessage}
			</p>

			<div class="w-full pt-4">
				<button
					onclick={onNavigateHome}
					class="
						w-full py-5 px-8
						bg-true-black 
						text-stark-white 
						border-2 border-stark-white
						font-black uppercase tracking-widest text-lg
						hover:bg-stark-white hover:text-true-black
						cursor-pointer
						{buttonClasses}
					"
				>
					Return to Command Center
				</button>
			</div>
		</div>

		<div class="border-t border-stark-white/20 p-4 bg-black/50">
			<p class="text-[10px] text-stark-white/40 font-mono text-left">
				JEMO_CORE_OS // ERR_SIG_LOST // {new Date().toISOString()}
			</p>
		</div>
	</div>
</div>

