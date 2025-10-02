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
        content: 'This is the content of my first blog post. Welcome!'
    },
    {
        id: 2,
        title: 'SvelteKit is Awesome',
        slug: 'sveltekit-is-awesome',
        content: 'I am really enjoying building this blog with SvelteKit.'
    }
];
