<script>
  export let data;

  const { id, content, title, author, timestamp } = data;
  const ts = new Date(timestamp).toLocaleString();
  const header = `POST ${id} | ${title} | ${author} | ${ts}`;
</script>

<svelte:head>
  <title>{title} — turtledevv's corner</title>
  <meta property="og:title" content="{title} — turtledevv's corner" />
  <meta property="og:description" content="A post by {author}" />
  <meta property="og:type" content="article" />
</svelte:head>

<button on:click={() => history.back()}>←</button>

<div id="post-header">{header}</div>

<div id="post-content">
  {@html content}
</div>