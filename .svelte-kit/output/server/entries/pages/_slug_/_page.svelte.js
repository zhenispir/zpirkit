import { c as create_ssr_component, a as subscribe, b as add_attribute, d as each, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import { a as SITE_URL, M as MY_TWITTER_HANDLE } from "../../../chunks/siteConfig.js";
import { w as writable } from "../../../chunks/index2.js";
import { L as LatestPosts } from "../../../chunks/LatestPosts.js";
import { p as page } from "../../../chunks/stores.js";
const defaultValue = true;
const Newsletter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_isNewsletterOpen;
  const initialValue = defaultValue;
  const isNewsletterOpen = writable(!!initialValue);
  $$unsubscribe_isNewsletterOpen = subscribe(isNewsletterOpen, (value) => value);
  isNewsletterOpen.subscribe((value) => {
  });
  $$unsubscribe_isNewsletterOpen();
  return `<section class="mb-16 w-full" id="newsletter"><div class="my-4 w-full border-y border-blue-200 bg-blue-50 p-6 dark:border-gray-600 dark:bg-gray-800 sm:rounded sm:border-x"><div class="flex items-center justify-between space-x-4 text-gray-900 dark:text-gray-100"><p class="text-lg font-bold md:text-xl" data-svelte-h="svelte-1nmoovj">Subscribe to the newsletter</p> <button aria-label="Toggle Newsletter CTA" class="flex h-9 w-9 items-center justify-center rounded-lg ring-gray-300 transition-all hover:ring-2">${isNewsletterOpen ? `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>` : `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>`}</button></div> ${isNewsletterOpen ? `<p class="my-1 text-gray-800 dark:text-gray-200" data-svelte-h="svelte-1nnlrqm">Get emails from me about <span class="font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, ducimus.</span>.</p> <form class="relative my-4" action="https://buttondown.email/api/emails/embed-subscribe/swyx" method="post" target="popupwindow" data-svelte-h="svelte-1rx9bpd"><input type="email" id="bd-email" name="email" aria-label="Email for newsletter" placeholder="tim@apple.com" autocomplete="email" ${"required"} class="mt-1 block w-full rounded-md border-gray-300 bg-white px-4 py-2 pr-32 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100"><button class="absolute right-1 top-1 flex h-8 w-28 items-center justify-center rounded bg-gray-100 px-4 pt-1 font-medium text-gray-900 dark:bg-gray-700 dark:text-gray-100" type="submit">Subscribe</button></form> <p class="text-sm text-gray-800 dark:text-gray-200" data-svelte-h="svelte-1qcvl32">5,432 subscribers including my Mom – <a href="/#newsletter">123 issues</a></p>` : ``}</div></section>`;
});
const Reactions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { reactions } = $$props;
  let { issueUrl } = $$props;
  let emojiMap = {
    "+1": "👍",
    "-1": "👎",
    laugh: "😆",
    hooray: "🎉",
    confused: "😕",
    heart: "❤️",
    rocket: "🚀",
    eyes: "👀"
  };
  if ($$props.reactions === void 0 && $$bindings.reactions && reactions !== void 0) $$bindings.reactions(reactions);
  if ($$props.issueUrl === void 0 && $$bindings.issueUrl && issueUrl !== void 0) $$bindings.issueUrl(issueUrl);
  return `<a${add_attribute("href", `${issueUrl}#issuecomment-new`, 0)} class="no-underline">${each(Object.keys(reactions), (reaction) => {
    return `${Object.keys(emojiMap).includes(reaction) && reactions[reaction] > 0 ? `<span class="reaction-button"><span class="space-x-1 rounded border-blue-800 p-2"><span class="reaction-button-emoji">${escape(emojiMap[reaction])}</span> <span class="reaction-button-count">${escape(reactions[reaction])}</span></span> </span>` : ``}`;
  })}</a>`;
});
function createTocStore() {
  let id = void 0;
  const { subscribe: subscribe2, set, update } = writable({
    id,
    items: {},
    activeItem: void 0
  });
  subscribe2((state) => id = state.id);
  return {
    subscribe: subscribe2,
    set,
    update,
    id: () => id
  };
}
const TableOfContents = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tocStore, $$unsubscribe_tocStore;
  let { tocStore } = $$props;
  $$unsubscribe_tocStore = subscribe(tocStore, (value) => $tocStore = value);
  if ($$props.tocStore === void 0 && $$bindings.tocStore && tocStore !== void 0) $$bindings.tocStore(tocStore);
  $$unsubscribe_tocStore();
  return ` ${Object.values($tocStore.items).length && Object.values($tocStore.items).length > 1 ? `<section class="fixed right-4 bottom-1 max-w-[12em] rounded-xl bg-white/25 hover:bg-white/30 p-2 backdrop-blur">${`<button class="flex justify-center items-center z-50" data-svelte-h="svelte-1irvzdz"><h2 class="text-orange-700 dark:text-orange-400">Table of <br> Contents</h2></button>`} ${``}</section>` : ``}`;
});
const css = {
  code: ".swyxcontent.svelte-r6sv7{--gap:clamp(1rem, 6vw, 3rem);--full:minmax(var(--gap), 1fr);--content:65ch;--popout:minmax(0, 2rem);--feature:minmax(0, 5rem);display:grid;grid-template-columns:[full-start] var(--full)\n				[feature-start] 0rem\n				[popout-start] 0rem\n				[content-start] var(--content) [content-end]\n				[popout-end] 0rem\n				[feature-end] 0rem\n				var(--full) [full-end]\n		}@media(min-width: 768px){.swyxcontent.svelte-r6sv7{grid-template-columns:[full-start] var(--full)\n					[feature-start] var(--feature)\n					[popout-start] var(--popout)\n					[content-start] var(--content) [content-end]\n					var(--popout) [popout-end]\n					var(--feature) [feature-end]\n					var(--full) [full-end]}}.swyxcontent > *{grid-column:content}article.svelte-r6sv7 pre{grid-column:feature;margin-left:-1rem;margin-right:-1rem}article.svelte-r6sv7 summary > pre{max-width:90vw}article.svelte-r6sv7 .popout{grid-column:popout}article.svelte-r6sv7 .feature{grid-column:feature}article.svelte-r6sv7 .full{grid-column:full;width:100%}article.svelte-r6sv7 .admonition{border-width:4px;--tw-border-opacity:1;border-color:rgb(239 68 68 / var(--tw-border-opacity));padding:2rem\n}article.svelte-r6sv7 .token.inserted{background:#00ff0044}article.svelte-r6sv7 .token.deleted{background:#ff000d44}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let json;
  let canonical;
  let image;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const tocStore = createTocStore();
  let { data } = $$props;
  let { commentsEl } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.commentsEl === void 0 && $$bindings.commentsEl && commentsEl !== void 0) $$bindings.commentsEl(commentsEl);
  $$result.css.add(css);
  json = data.json;
  json?.ghMetadata?.issueUrl?.split("/")?.pop();
  canonical = json?.canonical ? json.canonical : SITE_URL + $page.url.pathname;
  image = json?.image || `https://og.tailgraph.com/og
															?fontFamily=Roboto
															&title=${encodeURIComponent(json?.title)}
															&titleTailwind=font-bold%20bg-transparent%20text-7xl
															&titleFontFamily=Poppins
															${json?.subtitle ? "&text=" + encodeURIComponent(json?.subtitle) : ""}
															&textTailwind=text-2xl%20mt-4
															&logoTailwind=h-8
															&bgUrl=https%3A%2F%2Fwallpaper.dog%2Flarge%2F20455104.jpg
															&footer=${encodeURIComponent(SITE_URL)}
															&footerTailwind=text-teal-900
															&containerTailwind=border-2%20border-orange-200%20bg-transparent%20p-4
															`.replace(/\s/g, "");
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1rmf0lq_START -->${$$result.title = `<title>${escape(json.title)}</title>`, ""}<link rel="canonical"${add_attribute("href", canonical, 0)}><meta property="og:url"${add_attribute("content", canonical, 0)}><meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", json.title, 0)}>${json.subtitle ? `<meta property="subtitle"${add_attribute("content", json.subtitle, 0)}>` : ``}<meta name="Description"${add_attribute("content", json.description || "swyxkit blog", 0)}><meta property="og:description"${add_attribute("content", json.description || "swyxkit blog", 0)}><meta name="twitter:card"${add_attribute("content", "summary", 0)}><meta name="twitter:creator"${add_attribute("content", "@" + MY_TWITTER_HANDLE, 0)}><meta name="twitter:title"${add_attribute("content", json.title, 0)}><meta name="twitter:description"${add_attribute("content", json.description, 0)}><meta property="og:image"${add_attribute("content", image, 0)}><meta name="twitter:image"${add_attribute("content", image, 0)}><!-- HEAD_svelte-1rmf0lq_END -->`, ""} ${validate_component(TableOfContents, "TableOfContents").$$render($$result, { tocStore }, {}, {})} <article class="items-start justify-center w-full mx-auto mt-16 mb-32 prose swyxcontent dark:prose-invert max-w-none svelte-r6sv7"><h1 class="md:text-center mb-8 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl ">${escape(json.title)}</h1> <div class="flex justify-between w-full mt-2 bg border-red sm:items-start md:flex-row md:items-center"><p class="flex items-center text-sm text-gray-700 dark:text-gray-300" data-svelte-h="svelte-14qt8dl">swyx</p> <p class="flex items-center text-sm text-gray-600 dark:text-gray-400"><a${add_attribute("href", json.ghMetadata.issueUrl, 0)} rel="external noreferrer" class="no-underline" target="_blank"> ${escape(new Date(json.date).toISOString().slice(0, 10))}</a></p></div> <div class="-mx-4 my-2 flex h-1 w-[100vw] bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 sm:mx-0 sm:w-full"></div> <!-- HTML_TAG_START -->${json.content}<!-- HTML_TAG_END --></article> <div class="max-w-2xl mx-auto">${json?.tags?.length ? `<p class="!text-slate-400 flex-auto mb-4 italic">Tagged in: 
			${each(json.tags, (tag) => {
    return `<span class="px-1"><a${add_attribute("href", `/blog?filter=hashtag-${tag}`, 0)}>#${escape(tag)}</a> </span>`;
  })}</p>` : ``} <div class="max-w-full p-4 mb-12 prose border-t border-b border-blue-800 dark:prose-invert">${json.ghMetadata.reactions.total_count > 0 ? `Reactions: ${validate_component(Reactions, "Reactions").$$render(
    $$result,
    {
      issueUrl: json.ghMetadata.issueUrl,
      reactions: json.ghMetadata.reactions
    },
    {},
    {}
  )}` : `<a${add_attribute("href", json.ghMetadata.issueUrl, 0)}>Leave a reaction</a>
			if you liked this post! 🧡`}</div> <div class="mb-8 text-black dark:text-white "${add_attribute("this", commentsEl, 0)}>Loading comments...
		 <button class="my-4 bg-blue-200 hover:bg-blue-100 text-black p-2 rounded-lg" data-svelte-h="svelte-1x0ulvh">Load now</button> </div> ${validate_component(Newsletter, "Newsletter").$$render($$result, {}, {}, {})} ${validate_component(LatestPosts, "LatestPosts").$$render($$result, { items: data.list }, {}, {})} </div>`;
});
export {
  Page as default
};
