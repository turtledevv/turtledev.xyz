<script>
  import { seo } from '$lib/seo.js';

  export let data;
  const { id, content, title, author, timestamp } = data;
  const ts = new Date(timestamp).toLocaleString();
  const header = `POST ${id} | ${title} | ${author} | ${ts}`;

  seo.set({
    title: `${title} — turtledevv's corner`,
    description: `A post by ${author}`,
    image: 'https://www.turtledev.xyz/assets/stupidbanner.png',
    type: 'article',
  });
</script>

<button on:click={() => history.back()}>←</button>
<div id="post-header">{header}</div>
<div id="post-content">
  {@html content}
</div>