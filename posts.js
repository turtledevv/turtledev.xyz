async function loadPosts(search = "") {
    const res = await fetch(`https://turtleposts.vercel.app/api/posts?limit=30&col=trtl&search=${encodeURIComponent(search)}`);
    const posts = await res.json();

    const postContainer = document.getElementById('postContainer');
    postContainer.innerHTML = ""; // clear previous results

    if (!posts || posts.length === 0) {
        const noPosts = document.createElement('div');
        noPosts.classList.add('no-posts');
        noPosts.textContent = "No posts found!";
        postContainer.appendChild(noPosts);
        return;
    }

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post', 'dynamic');
        postElement.id = `post-${post.id}`;
        postElement.onclick = () => {
            window.location.href = `/viewPost.html?id=${post.id}`;
        }

        const timestamp = new Date(post.timestamp).toLocaleString();
        let thumbnail = post.thumbnail;
        if (!post.thumbnail.startsWith('http')) {
            thumbnail = `https://turtleposts.vercel.app${post.thumbnail}`;
        }

        postElement.innerHTML = `
            <div class="post-text">
                <h2>${post.title}</h2>
                <p>${post.description}</p>
                <small>By ${post.author} | ${timestamp}</small>
            </div>
            <img src="${thumbnail}" alt="${post.thumbnail}" class="post-thumbnail">
        `;
        postContainer.appendChild(postElement);
    });
}

// initial load
loadPosts();

// search handling
document.getElementById('searchBtn').onclick = () => {
    const query = document.getElementById('postSearch').value;
    loadPosts(query);
};

document.getElementById('postSearch').addEventListener('keypress', e => {
    if (e.key === 'Enter') {
        const query = e.target.value;
        loadPosts(query);
    }
});