import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
const Mdsvexlayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <article class="container prose mx-auto mb-12 hover:prose-a:text-blue-300 prose-ul:list-disc dark:prose-invert ">${slots.default ? slots.default({}) : ``}</article>`;
});
const README = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvexlayout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1fstiw1">This is a webpage created by using SWYXkit lightly opinionated starter for <a href="https://kit.svelte.dev/" rel="nofollow">SvelteKit</a> blog.</p> <p data-svelte-h="svelte-1lbgq66">I am still working on how to use it effectively, any recommendation or help will be welcomed.</p>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Mdsvexlayout, "Layout_MDSVEX_DEFAULT").$$render($$result, Object.assign({}, $$props), {}, {
    default: () => {
      return `<p data-svelte-h="svelte-qufpz1">SwyxKit is a blog template meant for frontend developers who want to get a performant, fully featured content site up and running with SvelteKit, Tailwind CSS, and other blog features (listed below).</p> <p data-svelte-h="svelte-17tdgc4">Below is the full README.md you get from the github repo: <a href="https://github.com/sw-yx/swyxkit" rel="nofollow">https://github.com/sw-yx/swyxkit</a></p> <hr> ${validate_component(README, "Readme").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
export {
  Page as default
};
