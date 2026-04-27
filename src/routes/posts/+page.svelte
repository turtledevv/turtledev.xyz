<script>
  import { goto } from '$app/navigation';

  export let data;

  let search = '';

  $: posts = data.posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.description.toLowerCase().includes(search.toLowerCase()) ||
    post.author.toLowerCase().includes(search.toLowerCase())
  );

  function resolveThumbnail(thumb) {
    if (!thumb) return '';
    return thumb.startsWith('http') ? thumb : `https://turtleposts.vercel.app${thumb}`;
  }
</script>

<svelte:head>
  <title>posts — turtledevv's corner</title>
</svelte:head>

<input
  type="text"
  placeholder="search posts..."
  bind:value={search}
/>

<div id="postContainer">
  {#if posts.length === 0}
    <div class="no-posts">no posts found.. :(</div>
  {:else}
    {#each posts as post (post.id)}
      <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
      <div
        class="post dynamic"
        id="post-{post.id}"
        on:click={() => goto(`/posts/${post.id}`)}
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