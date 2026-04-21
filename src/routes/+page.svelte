<script>
  import { onMount } from 'svelte';

  const POSTS_API = 'https://turtleposts.vercel.app/api/posts';

  let latestPost = null;
  let loading = true;

  onMount(async () => {
    try {
      const res = await fetch(`${POSTS_API}?limit=1&col=trtl`);
      const posts = await res.json();
      latestPost = posts?.[0] ?? null;
    } catch {
      latestPost = null;
    } finally {
      loading = false;
    }
  });

  function resolveThumbnail(thumb) {
    if (!thumb) return '';
    return thumb.startsWith('http') ? thumb : `https://turtleposts.vercel.app${thumb}`;
  }
</script>

<svelte:head>
  <title>turtledevv's corner</title>
</svelte:head>

<section>
  <p>i'm <span style="font-family: 'Comic Sans MS', 'Comic Sans', cursive;">turtledevv</span>. welcome to my awesome website <emoji id="classic smile"></emoji></p>
  <p>i'll be updating this website often. this is my new personal website! yay.</p>
  <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
  <img
    src="/assets/cat.gif"
    alt="🐈‍⬛"
    style="cursor: grab;"
    id="cat"
    on:click={() => alert('thank you for petting cat')}
  >
  nothing much is here. apart from this cat. pet the cat.
</section>

<br><br>&nbsp;

<section>
  <b>latest post:</b>
  <div id="latest-post" class="dynamic">
    {#if loading}
      loading...
    {:else if latestPost}
      <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
      <div
        class="post dynamic"
        style="cursor: pointer; width: 100%; height: 100%; border: none;"
        on:click={() => window.location.href = `/view-post?id=${latestPost.id}`}
      >
        <div class="post-text">
          <h2>{latestPost.title}</h2>
          <small>By {latestPost.author} | {new Date(latestPost.timestamp).toLocaleString()}</small>
        </div>
        <img
          src={resolveThumbnail(latestPost.thumbnail)}
          alt={latestPost.title}
          class="post-thumbnail"
        >
      </div>
    {:else}
      No news today!!
    {/if}
  </div>
</section>
