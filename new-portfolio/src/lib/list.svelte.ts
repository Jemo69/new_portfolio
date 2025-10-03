	export let projects = $state([ {
			id: 1,
			name: 'Project Alarm',
			stack: 'Python',
            link : 'https://github.com/Jemo69/alarmclock.git',
			description:
				'A smart alarm clock application built to integrate with home automation systems.'
		},
		{
			id: 2,
			name: 'Portfolio Website',
			stack: 'SvelteKit, TailwindCSS',
			description: 'The very website you are looking at, designed to be clean and responsive.'
		},

		{
			id: 3,
			name:'Edutron Your AI companion',
			stack:'Nextjs , Convex',
            link:'https://umbc-hackathon-git-feature-redesign-login-page-jemo69s-projects.vercel.app',
			description:'this was a project i built during my hackathon at umbc '
		},
	]);

	export let skills = $state([
		'python',
		'typescript',
        "convex",
		'javascript',
		'html/css',
		'react',
		'svelte',
		'sveltekit',
		'django',
		'fastapi'
	]);
