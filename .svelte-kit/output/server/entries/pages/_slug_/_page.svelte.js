import { c as create_ssr_component, b as add_attribute, d as each, e as escape, a as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import { a as SITE_URL, M as MY_TWITTER_HANDLE } from "../../../chunks/siteConfig.js";
import { L as LatestPosts } from "../../../chunks/LatestPosts.js";
import { p as page } from "../../../chunks/stores.js";
import { w as writable } from "../../../chunks/index2.js";
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
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n\\timport { MY_TWITTER_HANDLE, SITE_URL } from '$lib/siteConfig';\\n\\t// import Comments from '../../components/Comments.svelte';\\n\\n\\timport 'prism-themes/themes/prism-shades-of-purple.min.css';\\n\\timport Newsletter from '../../components/Newsletter.svelte';\\n\\timport Reactions from '../../components/Reactions.svelte';\\n\\timport LatestPosts from '../../components/LatestPosts.svelte';\\n\\timport { page } from '$app/stores';\\n\\n\\n\\t// https://svelte-put.vnphanquang.com/docs/toc\\n  import { toc, createTocStore } from '@svelte-put/toc';\\n\\timport TableOfContents from './TableOfContents.svelte';\\n\\timport utterances, {injectScript}  from './loadUtterances'\\n\\n\\t// table of contennts\\n  const tocStore = createTocStore();\\n\\n\\n\\t/** @type {import('./$types').PageData} */\\n\\texport let data;\\n\\t\\n\\t/** @type {import('$lib/types').ContentItem} */\\n\\t$: json = data.json; // warning: if you try to destructure content here, make sure to make it reactive, or your page content will not update when your user navigates\\n\\n\\texport let commentsEl;\\n\\t$: issueNumber = json?.ghMetadata?.issueUrl?.split('/')?.pop()\\n\\n\\t$: canonical =  json?.canonical ? json.canonical : SITE_URL + $page.url.pathname;\\n\\n\\t// customize this with https://tailgraph.com/\\n\\t// discuss this decision at https://github.com/sw-yx/swyxkit/pull/161\\n\\t$: image = json?.image || \`https://og.tailgraph.com/og\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t?fontFamily=Roboto\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t&title=\${encodeURIComponent(json?.title)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t&titleTailwind=font-bold%20bg-transparent%20text-7xl\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t&titleFontFamily=Poppins\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\${json?.subtitle ? '&text='+ encodeURIComponent(json?.subtitle) : ''}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t&textTailwind=text-2xl%20mt-4\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t&logoTailwind=h-8\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t&bgUrl=https%3A%2F%2Fwallpaper.dog%2Flarge%2F20455104.jpg\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t&footer=\${encodeURIComponent(SITE_URL)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t&footerTailwind=text-teal-900\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t&containerTailwind=border-2%20border-orange-200%20bg-transparent%20p-4\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\`.replace(/\\\\s/g,'') // remove whitespace\\n\\n<\/script>\\n\\n<svelte:head>\\n\\t<title>{json.title}</title>\\n\\t<!-- reference: https://gist.github.com/whitingx/3840905 -->\\n\\n\\t<link rel=\\"canonical\\" href={canonical} />\\n\\t<meta property=\\"og:url\\" content={canonical} />\\n\\t<meta property=\\"og:type\\" content=\\"article\\" />\\n\\t<meta property=\\"og:title\\" content={json.title} />\\n\\t{#if json.subtitle}\\n\\t\\t<meta property=\\"subtitle\\" content={json.subtitle} />\\n\\t{/if}\\n\\t<meta name=\\"Description\\" content={json.description || 'swyxkit blog'} />\\n\\t<meta property=\\"og:description\\" content={json.description || 'swyxkit blog'} />\\n\\t<meta name=\\"twitter:card\\" content={'summary'} />\\n\\t<!-- no more summary_large_image because elon https://twitter.com/simonw/status/1725285182159417806 -->\\n\\t<meta name=\\"twitter:creator\\" content={'@' + MY_TWITTER_HANDLE} />\\n\\t<meta name=\\"twitter:title\\" content={json.title} />\\n\\t<meta name=\\"twitter:description\\" content={json.description} />\\n\\t<meta property=\\"og:image\\" content={image} />\\n\\t<meta name=\\"twitter:image\\" content={image} />\\n</svelte:head>\\n\\n<TableOfContents {tocStore} />\\n\\n<article use:toc={{ store: tocStore, anchor: false, observe: true, selector: ':where(h1, h2, h3)' }} class=\\"items-start justify-center w-full mx-auto mt-16 mb-32 prose swyxcontent dark:prose-invert max-w-none\\">\\n\\t<h1 class=\\"md:text-center mb-8 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl \\">\\n\\t\\t{json.title}\\n\\t</h1>\\n\\t<div\\n\\t\\tclass=\\"flex justify-between w-full mt-2 bg border-red sm:items-start md:flex-row md:items-center\\"\\n\\t>\\n\\t\\t<p class=\\"flex items-center text-sm text-gray-700 dark:text-gray-300\\">swyx</p>\\n\\t\\t<p class=\\"flex items-center text-sm text-gray-600 dark:text-gray-400\\">\\n\\t\\t\\t<a href={json.ghMetadata.issueUrl} rel=\\"external noreferrer\\" class=\\"no-underline\\" target=\\"_blank\\">\\n\\t\\t\\t\\t<!-- <span class=\\"mr-4 font-mono text-xs text-gray-700 text-opacity-70 dark:text-gray-300\\"\\n\\t\\t\\t\\t\\t>{json.ghMetadata.reactions.total_count} reactions</span\\n\\t\\t\\t\\t> -->\\n\\t\\t\\t\\t{new Date(json.date).toISOString().slice(0, 10)}\\n\\t\\t\\t</a>\\n\\t\\t</p>\\n\\t</div>\\n\\t<div\\n\\t\\tclass=\\"-mx-4 my-2 flex h-1 w-[100vw] bg-gradient-to-r from-yellow-300 via-blue-900 to-teal-500 sm:mx-0 sm:w-full\\"\\n\\t/>\\n\\t{@html json.content}\\n</article>\\n\\n<div class=\\"max-w-2xl mx-auto\\">\\n\\t{#if json?.tags?.length}\\n\\t\\t<p class=\\"!text-slate-400 flex-auto mb-4 italic\\">\\n\\t\\t\\tTagged in: \\n\\t\\t\\t{#each json.tags as tag}\\n\\t\\t\\t\\t<span class=\\"px-1\\">\\n\\t\\t\\t\\t\\t<a href={\`/blog?filter=hashtag-\${tag}\`}>#{tag}</a>\\n\\t\\t\\t\\t</span>\\n\\t\\t\\t{/each}\\n\\t\\t</p>\\n\\t{/if}\\n\\t<div class=\\"max-w-full p-4 mb-12 prose border-t border-b border-blue-800 dark:prose-invert\\">\\n\\t\\t{#if json.ghMetadata.reactions.total_count > 0}\\n\\t\\t\\tReactions: <Reactions\\n\\t\\t\\t\\tissueUrl={json.ghMetadata.issueUrl}\\n\\t\\t\\t\\treactions={json.ghMetadata.reactions}\\n\\t\\t\\t/>\\n\\t\\t{:else}\\n\\t\\t\\t<a href={json.ghMetadata.issueUrl}>Leave a reaction </a>\\n\\t\\t\\tif you liked this post! 🧡\\n\\t\\t{/if}\\n\\t</div>\\n\\t<div class=\\"mb-8 text-black dark:text-white \\" bind:this={commentsEl} use:utterances={{number: issueNumber}}>\\n\\t\\tLoading comments...\\n\\t\\t<!-- svelte-ignore a11y-mouse-events-have-key-events -->\\n\\t\\t<button class=\\"my-4 bg-blue-200 hover:bg-blue-100 text-black p-2 rounded-lg\\" \\n\\t\\t\\ton:click={() => injectScript(commentsEl, issueNumber)}\\n\\t\\t\\ton:mouseover={() => injectScript(commentsEl, issueNumber)}\\n\\t\\t>Load now</button>\\n\\t\\t<!-- <Comments ghMetadata={json.ghMetadata} /> -->\\n\\t</div>\\n\\n\\t<!-- <Newsletter /> -->\\n\\t<LatestPosts items={data.list} />\\n</div>\\n\\n<style>\\n\\t/* https://ryanmulligan.dev/blog/layout-breakouts/ */\\n\\t\\t.swyxcontent {\\n\\t\\t\\t--gap: clamp(1rem, 6vw, 3rem);\\n\\t\\t\\t--full: minmax(var(--gap), 1fr);\\n\\t\\t\\t/* --content: min(65ch, 100% - var(--gap) * 2); */\\n\\t\\t\\t--content: 65ch;\\n\\t\\t\\t--popout: minmax(0, 2rem);\\n\\t\\t\\t--feature: minmax(0, 5rem);\\n\\n\\t\\t\\tdisplay: grid;\\n\\t\\t\\tgrid-template-columns: \\n\\t\\t\\t\\t[full-start] var(--full)\\n\\t\\t\\t\\t[feature-start] 0rem\\n\\t\\t\\t\\t[popout-start] 0rem\\n\\t\\t\\t\\t[content-start] var(--content) [content-end]\\n\\t\\t\\t\\t[popout-end] 0rem\\n\\t\\t\\t\\t[feature-end] 0rem\\n\\t\\t\\t\\tvar(--full) [full-end]\\n\\t\\t}\\n\\n\\t\\t@media (min-width: 768px) {\\n\\t\\t\\t.swyxcontent {\\n\\t\\t\\t\\tgrid-template-columns:\\n\\t\\t\\t\\t\\t[full-start] var(--full)\\n\\t\\t\\t\\t\\t[feature-start] var(--feature)\\n\\t\\t\\t\\t\\t[popout-start] var(--popout)\\n\\t\\t\\t\\t\\t[content-start] var(--content) [content-end]\\n\\t\\t\\t\\t\\tvar(--popout) [popout-end]\\n\\t\\t\\t\\t\\tvar(--feature) [feature-end]\\n\\t\\t\\t\\t\\tvar(--full) [full-end];\\n\\t\\t\\t}\\n\\t\\t}\\n\\n\\t:global(.swyxcontent > *) {\\n\\t\\tgrid-column: content;\\n\\t}\\n\\n\\tarticle :global(pre) {\\n\\t\\tgrid-column: feature;\\n\\t\\tmargin-left: -1rem;\\n\\t\\tmargin-right: -1rem;\\n\\t}\\n\\n\\t/* hacky thing because otherwise the summary>pre causes overflow */\\n\\tarticle :global(summary > pre) {\\n\\t\\tmax-width: 90vw;\\n\\t}\\n\\n\\tarticle :global(.popout) {\\n\\t\\tgrid-column: popout;\\n\\t}\\n\\tarticle :global(.feature) {\\n\\t\\tgrid-column: feature;\\n\\t}\\n\\tarticle :global(.full) {\\n\\t\\tgrid-column: full;\\n\\t\\twidth: 100%;\\n\\t}\\n\\n\\tarticle :global(.admonition) {\\n\\t\\t\\tborder-width: 4px;\\n\\t\\t\\t--tw-border-opacity: 1;\\n\\t\\t\\tborder-color: rgb(239 68 68 / var(--tw-border-opacity));\\n\\t\\t\\tpadding: 2rem\\n}\\n\\n\\t/* fix github codefence diff styling from our chosen prismjs theme */\\n\\tarticle :global(.token.inserted) {\\n\\t\\tbackground: #00ff0044;\\n\\t}\\n\\n\\tarticle :global(.token.deleted) {\\n\\t\\tbackground: #ff000d44;\\n\\t}</style>\\n"],"names":[],"mappings":"AAsIE,yBAAa,CACZ,KAAK,CAAE,sBAAsB,CAC7B,MAAM,CAAE,uBAAuB,CAE/B,SAAS,CAAE,IAAI,CACf,QAAQ,CAAE,eAAe,CACzB,SAAS,CAAE,eAAe,CAE1B,OAAO,CAAE,IAAI,CACb,qBAAqB,CACpB,CAAC,UAAU,CAAC,CAAC,IAAI,MAAM,CAAC;AAC5B,IAAI,CAAC,aAAa,CAAC,CAAC,IAAI;AACxB,IAAI,CAAC,YAAY,CAAC,CAAC,IAAI;AACvB,IAAI,CAAC,aAAa,CAAC,CAAC,IAAI,SAAS,CAAC,CAAC,CAAC,WAAW,CAAC;AAChD,IAAI,CAAC,UAAU,CAAC,CAAC,IAAI;AACrB,IAAI,CAAC,WAAW,CAAC,CAAC,IAAI;AACtB,IAAI,IAAI,MAAM,CAAC,CAAC,CAAC,QAAQ,CAAC;AAC1B,EAAE,CAEA,MAAO,YAAY,KAAK,CAAE,CACzB,yBAAa,CACZ,qBAAqB,CACpB,CAAC,UAAU,CAAC,CAAC,IAAI,MAAM,CAAC;AAC7B,KAAK,CAAC,aAAa,CAAC,CAAC,IAAI,SAAS,CAAC;AACnC,KAAK,CAAC,YAAY,CAAC,CAAC,IAAI,QAAQ,CAAC;AACjC,KAAK,CAAC,aAAa,CAAC,CAAC,IAAI,SAAS,CAAC,CAAC,CAAC,WAAW,CAAC;AACjD,KAAK,IAAI,QAAQ,CAAC,CAAC,CAAC,UAAU,CAAC;AAC/B,KAAK,IAAI,SAAS,CAAC,CAAC,CAAC,WAAW,CAAC;AACjC,KAAK,IAAI,MAAM,CAAC,CAAC,CAAC,QAAQ,CACvB,CACD,CAEO,gBAAkB,CACzB,WAAW,CAAE,OACd,CAEA,oBAAO,CAAS,GAAK,CACpB,WAAW,CAAE,OAAO,CACpB,WAAW,CAAE,KAAK,CAClB,YAAY,CAAE,KACf,CAGA,oBAAO,CAAS,aAAe,CAC9B,SAAS,CAAE,IACZ,CAEA,oBAAO,CAAS,OAAS,CACxB,WAAW,CAAE,MACd,CACA,oBAAO,CAAS,QAAU,CACzB,WAAW,CAAE,OACd,CACA,oBAAO,CAAS,KAAO,CACtB,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,IACR,CAEA,oBAAO,CAAS,WAAa,CAC3B,YAAY,CAAE,GAAG,CACjB,mBAAmB,CAAE,CAAC,CACtB,YAAY,CAAE,IAAI,GAAG,CAAC,EAAE,CAAC,EAAE,CAAC,CAAC,CAAC,IAAI,mBAAmB,CAAC,CAAC,CACvD,OAAO,CAAE,IAAI;AAChB,CAGC,oBAAO,CAAS,eAAiB,CAChC,UAAU,CAAE,SACb,CAEA,oBAAO,CAAS,cAAgB,CAC/B,UAAU,CAAE,SACb"}`
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
  return `${$$result.head += `<!-- HEAD_svelte-1rmf0lq_START -->${$$result.title = `<title>${escape(json.title)}</title>`, ""}<link rel="canonical"${add_attribute("href", canonical, 0)}><meta property="og:url"${add_attribute("content", canonical, 0)}><meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", json.title, 0)}>${json.subtitle ? `<meta property="subtitle"${add_attribute("content", json.subtitle, 0)}>` : ``}<meta name="Description"${add_attribute("content", json.description || "swyxkit blog", 0)}><meta property="og:description"${add_attribute("content", json.description || "swyxkit blog", 0)}><meta name="twitter:card"${add_attribute("content", "summary", 0)}><meta name="twitter:creator"${add_attribute("content", "@" + MY_TWITTER_HANDLE, 0)}><meta name="twitter:title"${add_attribute("content", json.title, 0)}><meta name="twitter:description"${add_attribute("content", json.description, 0)}><meta property="og:image"${add_attribute("content", image, 0)}><meta name="twitter:image"${add_attribute("content", image, 0)}><!-- HEAD_svelte-1rmf0lq_END -->`, ""} ${validate_component(TableOfContents, "TableOfContents").$$render($$result, { tocStore }, {}, {})} <article class="items-start justify-center w-full mx-auto mt-16 mb-32 prose swyxcontent dark:prose-invert max-w-none svelte-r6sv7"><h1 class="md:text-center mb-8 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl ">${escape(json.title)}</h1> <div class="flex justify-between w-full mt-2 bg border-red sm:items-start md:flex-row md:items-center"><p class="flex items-center text-sm text-gray-700 dark:text-gray-300" data-svelte-h="svelte-14qt8dl">swyx</p> <p class="flex items-center text-sm text-gray-600 dark:text-gray-400"><a${add_attribute("href", json.ghMetadata.issueUrl, 0)} rel="external noreferrer" class="no-underline" target="_blank"> ${escape(new Date(json.date).toISOString().slice(0, 10))}</a></p></div> <div class="-mx-4 my-2 flex h-1 w-[100vw] bg-gradient-to-r from-yellow-300 via-blue-900 to-teal-500 sm:mx-0 sm:w-full"></div> <!-- HTML_TAG_START -->${json.content}<!-- HTML_TAG_END --></article> <div class="max-w-2xl mx-auto">${json?.tags?.length ? `<p class="!text-slate-400 flex-auto mb-4 italic">Tagged in: 
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
		 <button class="my-4 bg-blue-200 hover:bg-blue-100 text-black p-2 rounded-lg" data-svelte-h="svelte-1x0ulvh">Load now</button> </div>  ${validate_component(LatestPosts, "LatestPosts").$$render($$result, { items: data.list }, {}, {})} </div>`;
});
export {
  Page as default
};
