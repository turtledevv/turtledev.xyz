<script>
  import { onMount } from 'svelte';

  const GUESTBOOK_URL = 'https://turtledevv.atabook.org/';

  onMount(() => {
    window.location.replace(GUESTBOOK_URL);
  });
</script>

<svelte:head>
  <title>Redirecting…</title>
</svelte:head>

<p>Redirecting to the guestbook...</p>
<p>If nothing happens, <a href="https://turtledevv.atabook.org/">click here</a>.</p>
