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
  <meta property="og:image" content="https://www.turtledev.xyz/assets/stupidbanner.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="{title} — turtledevv's corner" />
  <meta name="twitter:description" content="A post by {author}" />
  <meta name="twitter:image" content="https://www.turtledev.xyz/assets/stupidbanner.png" />
</svelte:head>

<button on:click={() => history.back()}>←</button>

<div id="post-header">{header}</div>

<div id="post-content">
  {@html content}
</div>