
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/about" | "/carbattery" | "/guestbook" | "/portfolio" | "/posts" | "/projects" | "/view-post";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/carbattery": Record<string, never>;
			"/guestbook": Record<string, never>;
			"/portfolio": Record<string, never>;
			"/posts": Record<string, never>;
			"/projects": Record<string, never>;
			"/view-post": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/carbattery" | "/guestbook" | "/portfolio" | "/posts" | "/projects" | "/view-post";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.well-known/discord" | "/assets/banners/WEBP.gif" | "/assets/banners/bingus.gif" | "/assets/banners/bob.gif" | "/assets/banners/download.png" | "/assets/banners/graphicdesign.avif" | "/assets/banners/graphicdesign.png" | "/assets/banners/phonechump.gif" | "/assets/banners/www.gif" | "/assets/button.gif" | "/assets/car-battery.gif" | "/assets/car-battery.mp3" | "/assets/cat.gif" | "/assets/div-old.png" | "/assets/div.png" | "/assets/emojis/classic/biggrin.gif" | "/assets/emojis/classic/blush.gif" | "/assets/emojis/classic/bouncey.gif" | "/assets/emojis/classic/brushteeth.gif" | "/assets/emojis/classic/cheers.gif" | "/assets/emojis/classic/clown.gif" | "/assets/emojis/classic/confused.gif" | "/assets/emojis/classic/cool.gif" | "/assets/emojis/classic/cry.gif" | "/assets/emojis/classic/dead.gif" | "/assets/emojis/classic/eek.gif" | "/assets/emojis/classic/frown.gif" | "/assets/emojis/classic/hail.gif" | "/assets/emojis/classic/idea.gif" | "/assets/emojis/classic/kiss.gif" | "/assets/emojis/classic/laugh.gif" | "/assets/emojis/classic/look.gif" | "/assets/emojis/classic/mad.gif" | "/assets/emojis/classic/nerd.gif" | "/assets/emojis/classic/nono.gif" | "/assets/emojis/classic/notgood.gif" | "/assets/emojis/classic/perfect.gif" | "/assets/emojis/classic/quiet.gif" | "/assets/emojis/classic/rose.gif" | "/assets/emojis/classic/sleep.gif" | "/assets/emojis/classic/smile.gif" | "/assets/emojis/classic/tongue.gif" | "/assets/emojis/classic/turtle-icon.gif" | "/assets/emojis/classic/wave.gif" | "/assets/emojis/classic/whissle.gif" | "/assets/emojis/classic/wink.gif" | "/assets/emojis/emoji.css" | "/assets/emojis/new/biggrin.png" | "/assets/emojis/new/confused.png" | "/assets/emojis/new/cool.png" | "/assets/emojis/new/eek.png" | "/assets/emojis/new/frown.png" | "/assets/emojis/new/mad.png" | "/assets/emojis/new/redface.png" | "/assets/emojis/new/rolleyes.png" | "/assets/emojis/new/shrug.webp" | "/assets/emojis/new/smile.png" | "/assets/emojis/new/thumbup.png" | "/assets/emojis/new/tounge.png" | "/assets/emojis/new/wink.png" | "/assets/emojis/turtle/careless.png" | "/assets/emojis/turtle/cuss.png" | "/assets/emojis/turtle/eye.png" | "/assets/emojis/turtle/idea.png" | "/assets/emojis/turtle/joy.png" | "/assets/emojis/turtle/king.png" | "/assets/emojis/turtle/mad.png" | "/assets/emojis/turtle/melt.png" | "/assets/emojis/turtle/party.png" | "/assets/emojis/turtle/pixel.png" | "/assets/emojis/turtle/program.png" | "/assets/emojis/turtle/question.png" | "/assets/emojis/turtle/raged.png" | "/assets/emojis/turtle/robot.png" | "/assets/emojis/turtle/shock.png" | "/assets/emojis/turtle/skull.png" | "/assets/emojis/turtle/smile.png" | "/assets/emojis/turtle/sob.png" | "/assets/emojis/turtle/sunglasses.png" | "/assets/emojis/turtle/sweat.png" | "/assets/emojis/turtle/thumbup.png" | "/assets/emojis/turtle/warn.png" | "/assets/footer.html" | "/assets/guestbook_bg.png" | "/assets/hammy.gif" | "/assets/header.html" | "/assets/lines.gif" | "/assets/snowstorm.js" | "/assets/stupidbanner.png" | "/assets/turtle-icon.gif" | "/assets/what.png" | "/robots.txt" | "/sitemap.xml" | "/stuff/campsite/fire.png" | "/stuff/campsite/ground.png" | "/stuff/campsite/guy-og.png" | "/stuff/campsite/guy.png" | "/stuff/campsite/image.png" | "/stuff/campsite/index.html" | "/stuff/campsite/logs.png" | "/stuff/campsite/moon.png" | "/stuff/campsite/stars.png" | "/stuff/campsite/tent.png" | "/stuff/campsite/trees.png" | "/stuff/glass.html" | "/stuff/hehehaha.html" | "/stuff/mii/Boo_render_headshot_2025-10-08T19_58_45.643Z.png" | "/stuff/mii/Booey_render_headshot_2025-10-08T19_59_09.197Z.png" | "/stuff/mii/King Boo_render_headshot_2025-10-08T19_58_38.248Z.png" | "/stuff/mii/index.html" | "/stuff/notagame.html" | "/stuff/pickles.html" | "/stuff/secret.html" | "/stuff/thesecret.txt" | "/stuff/ua-test.html" | "/stuff/win7-1.jpg" | string & {};
	}
}