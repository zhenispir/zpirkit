import { c as create_ssr_component, d as each, b as add_attribute, e as escape } from "./ssr.js";
const LatestPosts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { items } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0) $$bindings.items(items);
  return `<section class="mb-8 w-full"><h3 id="latest" class="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl" data-svelte-h="svelte-72zffu">Latest Posts</h3> <ul class="space-y-2 text-white">${each(items, (item) => {
    return `<li><a class="font-bold" data-sveltekit-preload-data${add_attribute("href", item.slug, 0)}>${escape(item.title)}</a> <span class="hidden text-xs text-black dark:text-gray-400 sm:inline">${escape(new Date(item.date).toISOString().slice(0, 10))}</span> </li>`;
  })}</ul> <a class="mt-2 flex h-6 rounded-lg leading-7 text-gray-600 transition-all dark:text-gray-400 dark:hover:text-gray-200" href="/blog" data-svelte-h="svelte-1udj08a">Search and see all posts<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="ml-1 h-6 w-6"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"></path></svg></a></section>`;
});
export {
  LatestPosts as L
};
