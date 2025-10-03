
<script lang="ts">
    import Button from '$lib/component/Button/Button.svelte';
</script>

<svelte:head>
    <title>About Me - Jeremy</title>
</svelte:head>

<div class="bg-[#f8f9fa] text-[#212529] p-8 font-sans">
    <!-- HERO SECTION -->
    <header class="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div class="w-32 h-32 rounded-full bg-gray-200 flex-shrink-0"></div>
        <div class="text-center md:text-left">
            <h1 class="text-4xl font-bold m-0">Hi, I'm Jeremy.</h1>
            <p class="text-xl text-gray-500 my-2 mb-6">Software Engineer focused on creating intuitive digital experiences.</p>
            <div class="flex justify-center md:justify-start gap-4">
                <Button variant="secondary">View Resume</Button>
                <Button variant="primary">Contact Me</Button>
            </div>
        </div>
    </header>

    <main class="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <!-- LEFT COLUMN -->
        <div class="flex flex-col gap-8">
            <section class="bg-white p-8 rounded-2xl shadow-md">
                <h2 class="text-2xl font-semibold mt-0 mb-6">My Story & Philosophy</h2>
                <p class="text-gray-500 leading-relaxed">A personal narrative about my journey into software engineering and my design philosophy, emphasizing my core principles and approach to creating user-centered products. I believe that great design is not just about aesthetics, but about solving real-world problems and making technology accessible and enjoyable for everyone. My approach is rooted in empathy, collaboration, and a relentless pursuit of simplicity.</p>
            </section>

            <section class="bg-white p-8 rounded-2xl shadow-md">
                <h2 class="text-2xl font-semibold mt-0 mb-6">Experience</h2>
                <div class="experience-timeline">
                    <div class="experience-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <span class="text-sm text-gray-500 mb-1 block">2023 - Present</span>
                            <h3 class="text-lg font-semibold m-0">Senior Developer, Tech Solutions Inc.</h3>
                            <p class="text-gray-500 leading-relaxed mt-2">Led the design of a new flagship product, resulting in a 25% increase in user engagement. Mentored junior designers and improved team-wide design processes.</p>
                        </div>
                    </div>
                    <div class="experience-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <span class="text-sm text-gray-500 mb-1 block">2021 - 2023</span>
                            <h3 class="text-lg font-semibold m-0">Frontend Developer, Innovate Co.</h3>
                            <p class="text-gray-500 leading-relaxed mt-2">Worked on various client projects, from mobile apps to large-scale enterprise software. Conducted user research, created wireframes and prototypes.</p>
                        </div>
                    </div>
                    <div class="experience-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <span class="text-sm text-gray-500 mb-1 block">2019 - 2021</span>
                            <h3 class="text-lg font-semibold m-0">Junior UI Designer, Creative Agency</h3>
                            <p class="text-gray-500 leading-relaxed mt-2">Focused on visual design, creating pixel-perfect mockups and design systems for web and mobile applications.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- RIGHT COLUMN -->
        <aside class="flex flex-col gap-8">
            <section class="bg-white p-8 rounded-2xl shadow-md">
                <h2 class="text-2xl font-semibold mt-0 mb-6">Tools & Software</h2>
                <div class="flex flex-wrap gap-3">
                    <span class="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">Figma</span>
                    <span class="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">Sketch</span>
                    <span class="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">Adobe XD</span>
                    <span class="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">InVision</span>
                    <span class="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">Principle</span>
                    <span class="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium">Jira</span>
                </div>
            </section>

            <section class="bg-white p-8 rounded-2xl shadow-md">
                <h2 class="text-2xl font-semibold mt-0 mb-6">Skills</h2>
                <div class="grid grid-cols-2 gap-3">
                    <div class="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-gray-100">
                        <div class="text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        </div>
                        <span>User Research</span>
                    </div>
                    <div class="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-gray-100">
                        <div class="text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"/></svg>
                        </div>
                        <span>Interaction Design</span>
                    </div>
                    <div class="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-gray-100">
                        <div class="text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/><path d="M22 12c-2.25 6-6.75 9-10 9s-7.75-3-10-9c2.25-6 6.75-9 10-9s7.75 3 10 9z"/></svg>
                        </div>
                        <span>Visual Design</span>
                    </div>
                    <div class="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-gray-100">
                        <div class="text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                        </div>
                        <span>Prototyping</span>
                    </div>
                </div>
            </section>

            <section class="bg-white p-8 rounded-2xl shadow-md">
                <h2 class="text-2xl font-semibold mt-0 mb-6">A Little More About Me</h2>
                <div class="grid grid-cols-2 gap-4 mb-4">
                    <div class="w-full aspect-square bg-gray-200 rounded-xl"></div>
                    <div class="w-full aspect-square bg-gray-200 rounded-xl"></div>
                </div>
                <p class="text-gray-500 leading-relaxed">When I'm not designing, you can find me hiking in the mountains or experimenting with new recipes in the kitchen. I believe that creativity thrives on diverse experiences.</p>
            </section>
        </aside>
    </main>

    <footer class="text-center mt-16 pt-8 border-t border-gray-200 text-gray-500">
        <span>© {new Date().getFullYear()} Jeremy. All rights reserved.</span>
        <div class="social-links">
            <!-- Add social links here -->
        </div>
    </footer>
</div>

<style>
    /* Experience Timeline - Requires pseudo-elements not available in Tailwind */
    .experience-timeline {
        position: relative;
        border-left: 2px solid #dee2e6; /* --border-color */
        padding-left: 2rem;
    }
    .experience-item {
        position: relative;
        margin-bottom: 2rem;
    }
    .experience-item:last-child {
        margin-bottom: 0;
    }
    .timeline-dot {
        position: absolute;
        left: -2.5rem;
        top: 4px;
        width: 16px;
        height: 16px;
        border-radius: 9999px;
        background-color: #0d6efd; /* --accent-color */
    }
</style>
