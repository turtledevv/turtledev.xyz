<svelte:head>
  <title>oops, 404 :(</title>
</svelte:head>

<div id="main">
  oops, we couldn't find that page.<br>
  for your troubles, here's a doodle.<br>
  <img src="/assets/what.png" alt="a doodle">
  <br><br>
  <button on:click={() => window.location.href = '/'}>go back</button>
</div>

<style>
  button {
    margin-top: 10px;
  }

  div#main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 100dvh;
    width: 100vw;
  }
</style>
