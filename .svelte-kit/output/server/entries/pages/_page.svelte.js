import { c as create_ssr_component, b as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { L as LatestPosts } from "../../chunks/LatestPosts.js";
import { a as SITE_URL, S as SITE_TITLE, e as SITE_DESCRIPTION, D as DEFAULT_OG_IMAGE, M as MY_TWITTER_HANDLE } from "../../chunks/siteConfig.js";
const FeatureCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "Untitled post" } = $$props;
  let { href = "#" } = $$props;
  let { stringData } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.stringData === void 0 && $$bindings.stringData && stringData !== void 0) $$bindings.stringData(stringData);
  return `<a class="w-full transform rounded-xl bg-gradient-to-r from-yellow-300 via-blue-900 to-teal-500 p-1 transition-all hover:scale-[1.1] md:w-1/3"${add_attribute("href", href, 0)}><div class="flex h-full flex-col justify-between rounded-lg bg-white p-4 dark:bg-gray-900"><div class="flex flex-col justify-between md:flex-row"><h4 class="mb-6 w-full text-lg font-medium tracking-tight text-gray-900 dark:text-gray-100 sm:mb-10 md:text-lg">${escape(title)}</h4></div> <div class="capsize flex items-center text-gray-800 dark:text-gray-200">${escape(stringData)}</div></div></a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  items = data.items;
  return `${$$result.head += `<!-- HEAD_svelte-1voan3v_START -->${$$result.title = `<title>${escape(SITE_TITLE)}</title>`, ""}<link rel="canonical"${add_attribute("href", SITE_URL, 0)}><link rel="alternate" type="application/rss+xml"${add_attribute("href", SITE_URL + "/rss.xml", 0)}><meta property="og:url"${add_attribute("content", SITE_URL, 0)}><meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", SITE_TITLE, 0)}><meta name="Description"${add_attribute("content", SITE_DESCRIPTION, 0)}><meta property="og:description"${add_attribute("content", SITE_DESCRIPTION, 0)}><meta property="og:image"${add_attribute("content", DEFAULT_OG_IMAGE, 0)}><meta name="twitter:card" content="summary"><meta name="twitter:creator"${add_attribute("content", "@" + MY_TWITTER_HANDLE, 0)}><meta name="twitter:title"${add_attribute("content", SITE_TITLE, 0)}><meta name="twitter:description"${add_attribute("content", SITE_DESCRIPTION, 0)}><meta name="twitter:image"${add_attribute("content", DEFAULT_OG_IMAGE, 0)}><!-- HEAD_svelte-1voan3v_END -->`, ""} <div class="flex flex-col items-start justify-center max-w-2xl px-4 pb-16 mx-auto border-gray-200 dark:border-gray-700 sm:px-8"><div class="flex flex-col-reverse items-start sm:flex-row"><div class="flex flex-col pr-8"><h1 class="mb-3 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl">Hello, it&#39;s me -

				<span class="relative inline-block ml-2 before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-blue-900"><span class="relative text-yellow-300 skew-y-2">${escape(SITE_TITLE)}</span></span>
				!</h1> <h2 class="mb-4 text-gray-700 dark:text-gray-200" data-svelte-h="svelte-3ng4ff">A blog-portfolio about <span class="font-semibold">Education, Programming</span>, and well about
				<span class="font-semibold">everything else</span> in my life.
				</h2> </div> </div> <section class="w-full mb-16"><h3 class="mb-6 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl" data-svelte-h="svelte-hqbh27">Featured Posts</h3> <div class="flex flex-col gap-6 md:flex-row">${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Welcome to swyxkit 2022!",
      href: "/welcome",
      stringData: "Jan 2022"
    },
    {},
    {}
  )} ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Welcome to swyxkit 2022!",
      href: "/welcome",
      stringData: "Jan 2022"
    },
    {},
    {}
  )} ${validate_component(FeatureCard, "FeatureCard").$$render(
    $$result,
    {
      title: "Welcome to swyxkit 2022!",
      href: "/welcome",
      stringData: "Jan 2022"
    },
    {},
    {}
  )}</div></section> ${validate_component(LatestPosts, "LatestPosts").$$render($$result, { items }, {}, {})} </div>`;
});
export {
  Page as default
};
