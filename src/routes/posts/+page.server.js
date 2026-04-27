const POSTS_API = 'https://turtleposts.vercel.app/api/posts';

export async function load() {
    try {
        const res = await fetch(`${POSTS_API}?limit=30&col=trtl`);
        const posts = await res.json();
        return { posts: Array.isArray(posts) ? posts : [] };
    } catch {
        return { posts: [] };
    }
}