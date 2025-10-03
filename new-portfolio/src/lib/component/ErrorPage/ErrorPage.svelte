<script lang="ts">
	// Svelte 5 Mandate: Use $props for explicit prop declaration
	let { errorCode, errorTitle, errorMessage, onNavigateHome } = $props<{
		errorCode: number;
		errorTitle: string;
		errorMessage: string;
		// Event handling must use function-as-prop pattern
		onNavigateHome: () => void;
	}>();

	// Color System Mandate: Static Semantic Color for Error Status
	const errorColor = 'text-red-500 dark:text-red-400';

	// Protocol 2: Spring Dynamics Simulation for Button Press (Styling)
	// This class simulates the responsive, tactile spring-back effect.
	const buttonClasses = 'active:scale-[0.98] transition-transform duration-150 ease-out';
</script>

<div
	class="flex min-h-screen items-center justify-center bg-neutral-50 px-4 sm:px-8 dark:bg-gray-900"
>
	<div
		class="flex w-full max-w-md flex-col items-center
           space-y-6 rounded-3xl bg-white
           p-8 text-center shadow-lg sm:p-10 dark:bg-gray-800"
	>
		<p class={`text-8xl font-bold ${errorColor} font-sans`}>
			{errorCode}
		</p>

		<h1 class="font-sans text-3xl font-semibold text-gray-900 dark:text-white">
			{errorTitle}
		</h1>

		<p class="font-sans text-lg text-gray-600 dark:text-gray-300">
			{errorMessage}
		</p>

		<div class="pt-4">
			<button
				onclick={onNavigateHome}
				class={`
          rounded-full bg-indigo-600 px-6 py-3 text-lg 
          font-medium text-white hover:bg-indigo-700 
          focus:ring-4 focus:ring-indigo-500/50 focus:outline-none 
          ${buttonClasses}
        `}
			>
				Go Home
			</button>
		</div>
	</div>
</div>
