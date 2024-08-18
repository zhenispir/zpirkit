import { c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { c as REPO_URL, S as SITE_TITLE, M as MY_TWITTER_HANDLE, d as MY_YOUTUBE } from "../../chunks/siteConfig.js";
import { p as page } from "../../chunks/stores.js";
const css$1 = {
  code: ".burger.svelte-qw0l73.svelte-qw0l73.svelte-qw0l73{transition:opacity 300ms ease;border:0;background:transparent;width:40px;height:40px;position:relative}.burger.svelte-qw0l73 svg.svelte-qw0l73.svelte-qw0l73{transform:translate(-50%, -50%) scale(1);top:50%;left:50%;opacity:1;transition:opacity 300ms ease, transform 300ms ease}.menu.svelte-qw0l73.svelte-qw0l73.svelte-qw0l73{padding:0 28px 0 4px;margin:0;padding-top:24px;width:100%;height:100vh;z-index:1000;opacity:0;left:0;transition:opacity 300ms ease, transform 300ms ease}.menu.svelte-qw0l73 li.svelte-qw0l73.svelte-qw0l73{transform:translateX(-16px);opacity:0;transition:opacity 300ms ease, transform 300ms ease, width 300ms ease, border-color 300ms ease;width:0px;white-space:nowrap}.menuRendered.svelte-qw0l73.svelte-qw0l73.svelte-qw0l73{opacity:1}.menuRendered.svelte-qw0l73 li.svelte-qw0l73.svelte-qw0l73{width:100%;--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.menuRendered.svelte-qw0l73 li.svelte-qw0l73.svelte-qw0l73:is(.dark *){--tw-border-opacity:1;border-color:rgb(75 85 99 / var(--tw-border-opacity))}.menuRendered.svelte-qw0l73 li.svelte-qw0l73.svelte-qw0l73{transform:translateX(0);opacity:1}.menu.svelte-qw0l73>.svelte-qw0l73+.svelte-qw0l73{margin-top:24px}@keyframes svelte-qw0l73-grow{0%{height:0px}100%{height:24px}}",
  map: null
};
const MobileMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  {
    {
      {
        setTimeout(
          () => {
          },
          300
        );
      }
    }
  }
  return `<div class="ml-[-0.60rem] md:hidden"><button class="burger visible svelte-qw0l73" aria-label="Toggle menu" type="button">${`<svg class="absolute h-5 w-5 text-gray-900 dark:text-gray-100 svelte-qw0l73" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2.5 7.5H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.5 12.5H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>`}</button> ${``} </div>`;
});
const NavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { href } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  isActive = $page.url.pathname === $$props.href;
  $$unsubscribe_page();
  return `<a class="${[
    "hidden rounded-lg p-1 text-gray-800 transition-all hover:bg-yellow-200 dark:text-gray-200 dark:hover:bg-yellow-800 sm:px-3 sm:py-2 md:inline-block",
    isActive ? "font-semibold" : ""
  ].join(" ").trim()}"${add_attribute("href", href, 0)}><span class="capsize">${slots.default ? slots.default({}) : ``}</span></a>`;
});
const css = {
  code: ".skip-nav.svelte-15u0p09{position:absolute;left:-25%;top:-2rem;--tw-translate-y:-3rem;padding:0.75rem 1rem;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:0.2s}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isDark = false;
  if (typeof localStorage !== "undefined") {
    if (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      isDark = true;
    }
  }
  $$result.css.add(css);
  return `<nav class="relative mx-auto flex w-full max-w-2xl items-center justify-between border-gray-200 bg-gray-50 bg-opacity-60 py-8 text-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 sm:pb-16"><a href="#skip" class="skip-nav svelte-15u0p09" data-svelte-h="svelte-g0qoez">Skip to content</a> ${validate_component(MobileMenu, "MobileMenu").$$render($$result, {}, {}, {})} <ul class="ml-[-0.60rem] flex"><li>${validate_component(NavLink, "NavLink").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `Home`;
    }
  })}</li> <li>${validate_component(NavLink, "NavLink").$$render($$result, { href: "/blog" }, {}, {
    default: () => {
      return `Blog`;
    }
  })}</li> <li>${validate_component(NavLink, "NavLink").$$render($$result, { href: "/about" }, {}, {
    default: () => {
      return `About`;
    }
  })}</li> <li data-svelte-h="svelte-1wti54k"><a class="hidden rounded-lg p-1 text-gray-800 transition-all hover:bg-yellow-200 dark:text-gray-200 dark:hover:bg-yellow-800 sm:px-3 sm:py-2 md:inline-block" rel="external"${add_attribute("href", "/rss.xml", 0)}><span class="capsize">RSS</span></a></li></ul> <div class="flex items-center space-x-4">   <a class="rounded-lg text-gray-700 hover:bg-yellow-200 dark:text-gray-200 dark:hover:bg-yellow-800"${add_attribute("href", REPO_URL, 0)} aria-label="GitHub source" data-svelte-h="svelte-1yubph3"><svg aria-hidden="true" class="h-9 w-9 p-1" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
					0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608
					1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088
					2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988
					1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112
					6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202
					2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566
					4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019
					10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg></a> <button aria-label="Toggle Dark Mode" class="ml-1 flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-400 ring-yellow-400 transition-all hover:ring-2 dark:bg-yellow-800">${isDark ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5 text-gray-800 dark:text-yellow-100"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728
						0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>` : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5 text-gray-800 dark:text-gray-200"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`}</button></div> </nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1pgte2o_START --><link rel="alternate" type="application/rss+xml"${add_attribute("title", "RSS Feed for " + SITE_TITLE, 0)} href="/rss.xml"><!-- HEAD_svelte-1pgte2o_END -->`, ""} <div class="flex flex-col justify-center bg-gray-50 px-4 dark:bg-gray-900 sm:px-8">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</div> <main class="flex flex-col justify-center bg-gray-50 px-4 dark:bg-gray-900 sm:px-8">${slots.default ? slots.default({}) : ``}</main> <footer class="mx-auto mb-8 flex w-full max-w-2xl flex-col items-start justify-center" data-svelte-h="svelte-1y4a2cs"><hr class="border-1 mb-8 w-full border-gray-200 dark:border-gray-800"> <div class="grid w-full max-w-2xl grid-cols-1 gap-4 px-4 pb-16 sm:grid-cols-2 sm:px-8"><div class="flex flex-col space-y-4"><a class="text-gray-500 transition hover:text-gray-300" href="/">Home</a> <a class="text-gray-500 transition hover:text-gray-300" href="/about">About</a> <a class="text-gray-500 transition hover:text-gray-300" href="/#newsletter">Newsletter</a> <a class="text-gray-500 transition hover:text-gray-300" href="/rss.xml" rel="external">RSS</a></div> <div class="flex flex-col space-y-4"><a class="text-gray-500 transition hover:text-gray-300" target="_blank" rel="noopener noreferrer"${add_attribute("href", "https://twitter.com/intent/follow?screen_name=" + MY_TWITTER_HANDLE, 0)}>Twitter</a> <a class="text-gray-500 transition hover:text-gray-300" target="_blank" rel="noopener noreferrer"${add_attribute("href", REPO_URL, 0)}>GitHub</a> <a class="text-gray-500 transition hover:text-gray-300" target="_blank" rel="noopener noreferrer"${add_attribute("href", MY_YOUTUBE, 0)}>YouTube</a></div></div> <p class="prose px-4 dark:prose-invert sm:px-8">This blog is based on the
		<a href="https://swyxkit.netlify.app/">swyxkit</a>
		template.</p></footer>`;
});
export {
  Layout as default
};
