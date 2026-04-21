<script>
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import '../app.css';

  import { inject } from '@vercel/analytics';

  let dark = false;
  let blackBoxVisible = true;

  function getCookie(name) {
    if (typeof document === 'undefined') return null;
    const nameEQ = name + '=';
    for (let c of document.cookie.split(';')) {
      c = c.trimStart();
      if (c.startsWith(nameEQ)) return c.slice(nameEQ.length);
    }
    return null;
  }

  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  }

  function toggleMode() {
    dark = !dark;
    setCookie('theme', dark ? 'dark' : 'light', 365);
  }

  onMount(() => {
    dark = getCookie('theme') === 'dark';

    inject();

    // Fade out the blackBox
    setTimeout(() => {
      blackBoxVisible = false;
    }, 50);
  });

  // highlight current nav item
  $: currentPage = $page.url.pathname;
</script>

{#if blackBoxVisible}
  <div id="blackBox" class="black-box"></div>
{/if}

<div id="app" class:dark>
  {#if $page.status !== 404}
    <header>
      <div id="head1">
        <img src="/assets/hammy.gif" alt="Hampster dancing">
      </div>
      &nbsp;&nbsp;&nbsp;
      <div id="head2">
        <h1>turtledevv's corner</h1>
      </div>
    </header>

    <nav>
      <a href="/"><button class:active={currentPage === '/'}>home</button></a>
      <a href="/about"><button class:active={currentPage.startsWith('/about')}>about</button></a>
      <a href="/posts"><button class:active={currentPage.startsWith('/posts')}>posts</button></a>
      <a href="/projects"><button class:active={currentPage.startsWith('/projects')}>my stuff</button></a>
      <a href="/guestbook"><button class:active={currentPage.startsWith('/guestbook')}>guestbook</button></a>
      <a href="/portfolio"><button class:active={currentPage.startsWith('/portfolio')}>portfolio</button></a>
    </nav>
  {/if}

  <main>
    <slot />
  </main>

  {#if $page.status !== 404}
    <footer>

      <img src="/assets/banners/graphicdesign.avif" alt="Graphic design is my passion">
      <img src="/assets/banners/phonechump.gif" alt="Don't Be A Phone Chump, Get A Computer!">
      <br>
      <p>&copy; 2026 turtledevv. All rights reserved.</p>
      &nbsp;
      <br>
      <button on:click={toggleMode}>☀️/🌙</button>
    </footer>
  {/if}
</div>



<style>
  .black-box {
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: black;
    z-index: 999999999;
    pointer-events: all;
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
  }

  nav a {
    text-decoration: none;
  }
</style>
