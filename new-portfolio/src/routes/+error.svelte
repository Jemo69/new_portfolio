<script lang="ts">
	import { goto } from '$app/navigation';
	// Assuming ErrorPage.svelte is in a components folder or the same directory
	import ErrorPage from '$lib/component/ErrorPage/ErrorPage.svelte';

	// Svelte 5 Mandate: Accessing component data via $props
	// The 'data' prop is automatically provided to +error.svelte by SvelteKit
	let { data } = $props();

	// Type definitions for SvelteKit error data
	type ErrorData = {
		status?: number;
		error?: {
			message: string;
			// stack: string; // The stack is usually hidden from the client
		};
	};

	const errorData = data as ErrorData;

	// The idiomatic SvelteKit way to handle client-side routing
	const handleHomeNavigation = () => {
		goto('/');
	};

	// Set default values for robust display, prioritizing real error data
	const code = errorData?.status || 500;
	let title = 'An Unexpected Error Occurred';
	let message = "We hit a snag. Click below to return to the application's homepage.";

	if (code === 404) {
		title = 'Page Not Found';
		message = "The address you requested doesn't seem to exist. Let's get you back on track.";
	} else if (errorData?.error?.message && errorData.error.message !== 'Internal Error') {
		// Show specific message if it's an expected, non-sensitive error
		message = errorData.error.message;
	}
</script>

<ErrorPage
	errorCode={code}
	errorTitle={title}
	errorMessage={message}
	onNavigateHome={handleHomeNavigation}
/>
