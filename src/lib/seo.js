import { writable } from 'svelte/store';

export const seo = writable({
    title: "turtledevv's corner",
    description: "Turtledevv's personal website, home to my weirdest and latest creations.",
    image: 'https://www.turtledev.xyz/assets/stupidbanner.png',
    type: 'website',
});