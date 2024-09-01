import { c as create_ssr_component, a as subscribe, e as escape, b as add_attribute } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const css = {
  code: "h1.svelte-1rahwcp,p.svelte-1rahwcp{margin:0 auto}h1.svelte-1rahwcp{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-1rahwcp{margin:1em auto}@media(min-width: 480px){h1.svelte-1rahwcp{font-size:4em}}",
  map: `{"version":3,"file":"+error.svelte","sources":["+error.svelte"],"sourcesContent":["<script>\\n\\t// import Nav from '../components/Nav.svelte';\\n\\timport { dev } from '$app/environment';\\n\\timport { page } from '$app/stores';\\n\\n\\tconst offline = typeof navigator !== 'undefined' && navigator.onLine === false;\\n\\n\\tlet message = offline ? 'Find the internet and try again' : $page.error?.message;\\n\\n\\tlet title = offline ? 'Offline' : $page.status;\\n\\tif ($page.status === 404) {\\n\\t\\ttitle = 'Page not found :(';\\n\\t\\tmessage = 'Sorry! If you think this URL is broken, please let me know!';\\n\\t}\\n\\n\\tfunction displayPathname(str) {\\n\\t\\treturn decodeURIComponent(str).replaceAll('-', ' ');\\n\\t}\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>{title}</title>\\n</svelte:head>\\n\\n<section class=\\"container prose mx-auto py-12 dark:prose-invert\\">\\n\\t<h1>{$page.status}: {title}</h1>\\n\\n\\t{#if $page.status === 404}\\n\\t\\t<p class=\\"\\">There is no post at the slug <code>{$page.url.pathname}</code>.</p>\\n\\t\\t<p>\\n\\t\\t\\t<a href={'/blog?filter=' + $page.url.pathname.slice(1)}\\n\\t\\t\\t\\t>Try searching for \\"{displayPathname($page.url.pathname.slice(1))}\\" here!</a\\n\\t\\t\\t>\\n\\t\\t</p>\\n\\t\\t<p class=\\"\\">If you believe this was a bug, please let me know!</p>\\n\\t{:else}\\n\\t\\t<p class=\\"font-mono\\">{message}</p>\\n\\t{/if}\\n\\t{#if dev && $page.error.stack}\\n\\t\\t<pre class=\\"mono overflow-scroll bg-gray-800 p-8\\">{$page.error.stack}</pre>\\n\\t{/if}\\n</section>\\n\\n<style>\\n\\th1,\\n\\tp {\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 2.8em;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n\\n\\tp {\\n\\t\\tmargin: 1em auto;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\th1 {\\n\\t\\t\\tfont-size: 4em;\\n\\t\\t}\\n\\t}</style>\\n"],"names":[],"mappings":"AA4CC,iBAAE,CACF,gBAAE,CACD,MAAM,CAAE,CAAC,CAAC,IACX,CAEA,iBAAG,CACF,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CACnB,CAEA,gBAAE,CACD,MAAM,CAAE,GAAG,CAAC,IACb,CAEA,MAAO,YAAY,KAAK,CAAE,CACzB,iBAAG,CACF,SAAS,CAAE,GACZ,CACD"}`
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
