<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  const POSTS_API = 'https://turtleposts.vercel.app/api/posts';

  let posts = [];
  let loading = true;
  let error = false;

  onMount(async () => {
    await loadPosts();
  });

  async function loadPosts(search = '') {
    loading = true;
    error = false;
    try {
      const res = await fetch(`${POSTS_API}?limit=30&col=trtl&search=${encodeURIComponent(search)}`);
      posts = await res.json();
      if (!Array.isArray(posts)) posts = [];
    } catch {
      error = true;
      posts = [];
    } finally {
      loading = false;
    }
  }

  function resolveThumbnail(thumb) {
    if (!thumb) return '';
    return thumb.startsWith('http') ? thumb : `https://turtleposts.vercel.app${thumb}`;
  }
</script>

<svelte:head>
  <title>posts — turtledevv's corner</title>
</svelte:head>

<div id="postContainer">
  {#if loading}
    <p>loading posts...</p>
  {:else if error}
    <p>Failed to load posts. Check your connection.</p>
  {:else if posts.length === 0}
    <div class="no-posts">No posts found!</div>
  {:else}
    {#each posts as post (post.id)}
      <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
      <div
        class="post dynamic"
        id="post-{post.id}"
        on:click={() => goto(`/view-post?id=${post.id}`)}
      >
        <div class="post-text">
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <small>By {post.author} | {new Date(post.timestamp).toLocaleString()}</small>
        </div>
        <img
          src={resolveThumbnail(post.thumbnail)}
          alt={post.title}
          class="post-thumbnail"
        >
      </div>
    {/each}
  {/if}
</div>
