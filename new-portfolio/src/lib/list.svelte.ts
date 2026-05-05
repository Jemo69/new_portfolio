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
        {
            id: 4,
            name:'Echo-mesh',
            stack : 'sveltekit tailwindcss postgresql',
            link: "https://github.com/Jemo69/Echo-Mesh",
            description:'it an app i built for my church to collect survey data for event'
            
        },
        {
            id: 5,
            name:'Appflowy MCP',
            stack : 'Python FastMCP',
            link: "https://github.com/Jemo69/Appflowy-MCP",
            description:'This is a project that I built to give my ai agent access to my appflowy '
        }
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
		'fastapi',
        'nextjs',
        'tailwindcss',
        'sql',
	]);

	export const experiences = [
		{
			title: 'HackUMBC parpicant',
			timeline:'2025',
			description: ' HackUMBC is an annual 24-hour hackathon hosted at the University of Maryland, Baltimore County (UMBC). 💻 It welcomes high school and university students of all skill levels and majors. Participants work in teams (up to 4) to build software or hardware projects from scratch. 💡 It features workshops, prizes, free food, and a fun environment to learn and network. 🤝'
		}
	];

	export const tools = ['figma', 'neovim', 'git' , 'github' , 'docker' , 'autohotkey'];

	export const designSkills = [
		{
			name: 'User Research',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>`
		},
		{
			name: 'Interaction Design',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" /></svg>`
		},
		{
			name: 'Visual Design',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /><path d="M22 12c-2.25 6-6.75 9-10 9s-7.75-3-10-9c2.25-6 6.75-9 10-9s7.75 3 10 9z" /></svg>`
		},
		{
			name: 'Prototyping',
			icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>`
		}
	];
