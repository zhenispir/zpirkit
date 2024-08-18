import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const css = {
  code: "h1.svelte-1rahwcp,p.svelte-1rahwcp{margin:0 auto}h1.svelte-1rahwcp{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-1rahwcp{margin:1em auto}@media(min-width: 480px){h1.svelte-1rahwcp{font-size:4em}}",
  map: null
};
function displayPathname(str) {
  return decodeURIComponent(str).replaceAll("-", " ");
}
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const offline = typeof navigator !== "undefined" && navigator.onLine === false;
  let message = offline ? "Find the internet and try again" : $page.error?.message;
  let title = offline ? "Offline" : $page.status;
  if ($page.status === 404) {
    title = "Page not found :(";
    message = "Sorry! If you think this URL is broken, please let me know!";
  }
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1az6e94_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-1az6e94_END -->`, ""} <section class="container prose mx-auto py-12 dark:prose-invert"><h1 class="svelte-1rahwcp">${escape($page.status)}: ${escape(title)}</h1> ${$page.status === 404 ? `<p class=" svelte-1rahwcp">There is no post at the slug <code>${escape($page.url.pathname)}</code>.</p> <p class="svelte-1rahwcp"><a${add_attribute("href", "/blog?filter=" + $page.url.pathname.slice(1), 0)}>Try searching for &quot;${escape(displayPathname($page.url.pathname.slice(1)))}&quot; here!</a></p> <p class=" svelte-1rahwcp" data-svelte-h="svelte-gu5qh8">If you believe this was a bug, please let me know!</p>` : `<p class="font-mono svelte-1rahwcp">${escape(message)}</p>`} ${``} </section>`;
});
export {
  Error as default
};
