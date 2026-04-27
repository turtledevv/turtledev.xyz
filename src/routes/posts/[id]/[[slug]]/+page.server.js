import { error } from '@sveltejs/kit';

const API_BASE = 'https://turtleposts.vercel.app/api';

export async function load({ params }) {
    const { id } = params;

    const [contentRes, infoRes] = await Promise.all([
        fetch(`${API_BASE}/post-content?id=${encodeURIComponent(id)}&col=trtl`),
                                                    fetch(`${API_BASE}/post-info?id=${encodeURIComponent(id)}&col=trtl`)
    ]);

    if (contentRes.status === 404 || infoRes.status === 404) throw error(404, 'Post not found');
    if (!contentRes.ok) throw error(500, 'Failed to load post content');
    if (!infoRes.ok) throw error(500, 'Failed to load post info');

    const [contentData, infoData] = await Promise.all([
        contentRes.json(),
                                                      infoRes.json()
    ]);

    return {
        id,
        content: contentData.content,
        title: infoData.title,
        author: infoData.author,
        timestamp: infoData.timestamp
    };
}