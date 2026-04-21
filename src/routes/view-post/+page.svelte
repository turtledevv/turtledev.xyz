<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  const API_BASE = 'https://turtleposts.vercel.app/api';

  let id = null;
  let header = '';
  let content = '';
  let loadingHeader = true;
  let loadingContent = true;
  let headerError = '';
  let contentError = '';

  onMount(async () => {
    id = $page.url.searchParams.get('id');

    if (!id) {
      contentError = 'Post ID not set!';
      loadingContent = false;
      loadingHeader = false;
      return;
    }

    // Fetch content and header in parallel
    await Promise.all([fetchContent(), fetchHeader()]);
  });

  async function fetchContent() {
    try {
      const res = await fetch(`${API_BASE}/post-content?id=${encodeURIComponent(id)}&col=trtl`);
      if (!res.ok) {
        const messages = { 404: 'Post not found!', 400: 'Bad request.', 500: 'Server error.' };
        contentError = messages[res.status] ?? `Unexpected error (${res.status}).`;
        return;
      }
      const data = await res.json();
      if (!data?.content) {
        contentError = 'Invalid API response.';
        return;
      }
      content = data.content;
    } catch {
      contentError = 'Network error. Failed to reach the API.';
    } finally {
      loadingContent = false;
    }
  }

  async function fetchHeader() {
    try {
      const res = await fetch(`${API_BASE}/post-info?id=${encodeURIComponent(id)}&col=trtl`);
      if (!res.ok) {
        const messages = {
          404: `POST ${id} | Post not found`,
          400: 'Header error: Bad request.',
          500: 'Header error: Server error.'
        };
        headerError = messages[res.status] ?? `Header error (${res.status}).`;
        return;
      }
      const data = await res.json();
      if (!data) return;
      const ts = new Date(data.timestamp).toLocaleString();
      header = `POST ${id} | ${data.title} | ${data.author} | ${ts}`;
    } catch {
      headerError = 'Header error: Network failure.';
    } finally {
      loadingHeader = false;
    }
  }
</script>

<svelte:head>
  <title>{header || 'post'} — turtledevv's corner</title>
</svelte:head>

<button on:click={() => history.back()}>←</button>

<div id="post-header">
  {#if loadingHeader}
    loading...
  {:else if headerError}
    {headerError}
  {:else}
    {header}
  {/if}
</div>

<div id="post-content">
  {#if loadingContent}
    <p>loading post...</p>
  {:else if contentError}
    <p>{contentError}</p>
  {:else}
    <!-- Post content is HTML from the API, same as original -->
    {@html content}
  {/if}
</div>
