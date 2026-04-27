const POSTS_API = 'https://turtleposts.vercel.app/api/posts';
const BASE_URL = 'https://www.turtledev.xyz';

function slugify(title) {
    return title
    .toLowerCase()
    .replace(/\s*[:;=8][-~]?[)(<>|@3dpo*\[\]{}\\\/]/gi, '')
    .replace(/\s*[)(<>|@3dpo*\[\]{}\\\/][-~]?[:;=8]/gi, '')
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}

const staticRoutes = [
    { path: '/',          priority: '1.0' },
{ path: '/about',     priority: '0.8' },
{ path: '/posts',     priority: '0.8' },
{ path: '/projects',  priority: '0.8' },
{ path: '/portfolio', priority: '0.8' },
{ path: '/guestbook', priority: '0.5' },
];

export async function GET() {
    let posts = [];
    try {
        const res = await fetch(`${POSTS_API}?limit=100&col=trtl`);
        posts = await res.json();
        if (!Array.isArray(posts)) posts = [];
    } catch {
        posts = [];
    }

    const staticUrls = staticRoutes.map(({ path, priority }) =>
    `<url><loc>${BASE_URL}${path}</loc><priority>${priority}</priority></url>`
    ).join('\n  ');

    const postUrls = posts.map(post =>
    `<url><loc>${BASE_URL}/posts/${post.id}/${slugify(post.title)}</loc><lastmod>${new Date(post.timestamp).toISOString().split('T')[0]}</lastmod><priority>0.6</priority></url>`
    ).join('\n  ');

    const xml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        '  ' + staticUrls,
        '  ' + postUrls,
        '</urlset>'
    ].join('\n');

    return new Response(xml, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'max-age=3600'
        }
    });
}