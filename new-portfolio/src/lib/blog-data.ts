export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    content: string;
}

export const posts: BlogPost[] = [
    {
        id: 1,
        title: 'My First Blog Post',
        slug: 'my-first-post',
        content: '# Welcome to my blog\n\nThis is the **content** of my first blog post. \n\n## Features\n- Markdown support\n- Fast rendering\n- Clean design\n\n```javascript\nconsole.log("Hello, world!");\n```'
    },
    {
        id: 2,
        title: 'SvelteKit is Awesome',
        slug: 'sveltekit-is-awesome',
        content: 'I am really enjoying building this blog with **SvelteKit**. It makes development so much fun!\n\n> "The best way to predict the future is to invent it." - Alan Kay'
    }
];
