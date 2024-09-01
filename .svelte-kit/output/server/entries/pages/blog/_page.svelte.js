import { g as get_store_value, c as create_ssr_component, b as add_attribute, e as escape, d as each, a as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { d as derived } from "../../../chunks/index2.js";
import { P as POST_CATEGORIES, S as SITE_TITLE } from "../../../chunks/siteConfig.js";
let f = String.fromCharCode, keyStrUriSafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", baseReverseDic = {};
function getBaseValue(o, e) {
  if (!baseReverseDic[o]) {
    baseReverseDic[o] = {};
    for (let r = 0; r < o.length; r++) baseReverseDic[o][o.charAt(r)] = r;
  }
  return baseReverseDic[o][e];
}
function compressToEncodedURIComponent(o) {
  return null == o ? "" : _compress(o, 6, function(o2) {
    return keyStrUriSafe.charAt(o2);
  });
}
function decompressFromEncodedURIComponent(o) {
  return null == o ? "" : "" == o ? null : _decompress((o = o.replace(/ /g, "+")).length, 32, function(e) {
    return getBaseValue(keyStrUriSafe, o.charAt(e));
  });
}
function _compress(o, e, r) {
  if (null == o) return "";
  let i, t, s = {}, n = {}, $ = "", _ = "", p = "", a = 2, l = 3, c = 2, u = [], h = 0, d = 0, v;
  for (v = 0; v < o.length; v += 1)
    if ($ = o.charAt(v), Object.prototype.hasOwnProperty.call(s, $) || (s[$] = l++, n[$] = true), _ = p + $, Object.prototype.hasOwnProperty.call(s, _))
      p = _;
    else {
      if (Object.prototype.hasOwnProperty.call(n, p)) {
        if (256 > p.charCodeAt(0)) {
          for (i = 0; i < c; i++)
            h <<= 1, d == e - 1 ? (d = 0, u.push(r(h)), h = 0) : d++;
          for (i = 0, t = p.charCodeAt(0); i < 8; i++)
            h = h << 1 | 1 & t, d == e - 1 ? (d = 0, u.push(r(h)), h = 0) : d++, t >>= 1;
        } else {
          for (i = 0, t = 1; i < c; i++)
            h = h << 1 | t, d == e - 1 ? (d = 0, u.push(r(h)), h = 0) : d++, t = 0;
          for (i = 0, t = p.charCodeAt(0); i < 16; i++)
            h = h << 1 | 1 & t, d == e - 1 ? (d = 0, u.push(r(h)), h = 0) : d++, t >>= 1;
        }
        0 == --a && (a = Math.pow(2, c), c++), delete n[p];
      } else
        for (i = 0, t = s[p]; i < c; i++)
          h = h << 1 | 1 & t, d == e - 1 ? (d = 0, u.push(r(h)), h = 0) : d++, t >>= 1;
      0 == --a && (a = Math.pow(2, c), c++), s[_] = l++, p = String($);
    }
  if ("" !== p) {
    if (Object.prototype.hasOwnProperty.call(n, p)) {
      if (256 > p.charCodeAt(0)) {
        for (i = 0; i < c; i++)
          h <<= 1, d == e - 1 ? (d = 0, u.push(r(h)), h = 0) : d++;
        for (i = 0, t = p.charCodeAt(0); i < 8; i++)
          h = h << 1 | 1 & t, d == e - 1 ? (d = 0, u.push(r(h)), h = 0) : d++, t >>= 1;
      } else {
        for (i = 0, t = 1; i < c; i++)
          h = h << 1 | t, d == e - 1 ? (d = 0, u.push(r(h)), h = 0) : d++, t = 0;
        for (i = 0, t = p.charCodeAt(0); i < 16; i++)
          h = h << 1 | 1 & t, d == e - 1 ? (d = 0, u.push(r(h)), h = 0) : d++, t >>= 1;
      }
      0 == --a && (a = Math.pow(2, c), c++), delete n[p];
    } else
      for (i = 0, t = s[p]; i < c; i++)
        h = h << 1 | 1 & t, d == e - 1 ? (d = 0, u.push(r(h)), h = 0) : d++, t >>= 1;
    0 == --a && (a = Math.pow(2, c), c++);
  }
  for (i = 0, t = 2; i < c; i++)
    h = h << 1 | 1 & t, d == e - 1 ? (d = 0, u.push(r(h)), h = 0) : d++, t >>= 1;
  for (; ; ) {
    if (h <<= 1, d == e - 1) {
      u.push(r(h));
      break;
    }
    d++;
  }
  return u.join("");
}
function _decompress(o, e, r) {
  let i = [], s = 4, n = 4, $ = 3, _ = "", p = [], a, l, c, u, h, d, v, m = { val: r(0), position: e, index: 1 };
  for (a = 0; a < 3; a += 1) i[a] = a;
  for (c = 0, h = 4, d = 1; d != h; )
    u = m.val & m.position, m.position >>= 1, 0 == m.position && (m.position = e, m.val = r(m.index++)), c |= (u > 0 ? 1 : 0) * d, d <<= 1;
  switch (c) {
    case 0:
      for (c = 0, h = 256, d = 1; d != h; )
        u = m.val & m.position, m.position >>= 1, 0 == m.position && (m.position = e, m.val = r(m.index++)), c |= (u > 0 ? 1 : 0) * d, d <<= 1;
      v = f(c);
      break;
    case 1:
      for (c = 0, h = 65536, d = 1; d != h; )
        u = m.val & m.position, m.position >>= 1, 0 == m.position && (m.position = e, m.val = r(m.index++)), c |= (u > 0 ? 1 : 0) * d, d <<= 1;
      v = f(c);
      break;
    case 2:
      return "";
  }
  for (i[3] = v, l = v, p.push(v); ; ) {
    if (m.index > o) return "";
    for (c = 0, h = Math.pow(2, $), d = 1; d != h; )
      u = m.val & m.position, m.position >>= 1, 0 == m.position && (m.position = e, m.val = r(m.index++)), c |= (u > 0 ? 1 : 0) * d, d <<= 1;
    switch (v = c) {
      case 0:
        for (c = 0, h = 256, d = 1; d != h; )
          u = m.val & m.position, m.position >>= 1, 0 == m.position && (m.position = e, m.val = r(m.index++)), c |= (u > 0 ? 1 : 0) * d, d <<= 1;
        i[n++] = f(c), v = n - 1, s--;
        break;
      case 1:
        for (c = 0, h = 65536, d = 1; d != h; )
          u = m.val & m.position, m.position >>= 1, 0 == m.position && (m.position = e, m.val = r(m.index++)), c |= (u > 0 ? 1 : 0) * d, d <<= 1;
        i[n++] = f(c), v = n - 1, s--;
        break;
      case 2:
        return p.join("");
    }
    if (0 == s && (s = Math.pow(2, $), $++), i[v]) _ = i[v];
    else {
      if (v !== n) return null;
      _ = l + l.charAt(0);
    }
    p.push(_), i[n++] = l + _.charAt(0), s--, l = _, 0 == s && (s = Math.pow(2, $), $++);
  }
}
const ssp = {
  object: (defaultValue) => ({
    encode: (value) => JSON.stringify(value),
    decode: (value) => {
      if (value === null)
        return null;
      try {
        return JSON.parse(value);
      } catch (e) {
        return null;
      }
    },
    defaultValue
  }),
  array: (defaultValue) => ({
    encode: (value) => JSON.stringify(value),
    decode: (value) => {
      if (value === null)
        return null;
      try {
        return JSON.parse(value);
      } catch (e) {
        return null;
      }
    },
    defaultValue
  }),
  number: (defaultValue) => ({
    encode: (value) => value.toString(),
    decode: (value) => value ? parseFloat(value) : null,
    defaultValue
  }),
  boolean: (defaultValue) => ({
    encode: (value) => value + "",
    decode: (value) => value !== null && value !== "false",
    defaultValue
  }),
  string: (defaultValue) => ({
    encode: (value) => value ?? "",
    decode: (value) => value,
    defaultValue
  }),
  lz: (defaultValue) => ({
    encode: (value) => compressToEncodedURIComponent(JSON.stringify(value)),
    decode: (value) => {
      if (!value)
        return null;
      try {
        return JSON.parse(decompressFromEncodedURIComponent(value) ?? "");
      } catch (e) {
        return null;
      }
    },
    defaultValue
  })
};
const DEFAULT_ENCODER_DECODER = {
  encode: (value) => value.toString(),
  decode: (value) => value ? value.toString() : null
};
function queryParam(name, { encode = DEFAULT_ENCODER_DECODER.encode, decode = DEFAULT_ENCODER_DECODER.decode, defaultValue } = DEFAULT_ENCODER_DECODER, { debounceHistory = 0, pushHistory = true, sort = true } = {}) {
  function set(value) {
    return;
  }
  const { subscribe: subscribe2 } = derived(page, ($page) => {
    const actualParam = $page?.url?.searchParams?.get?.(name);
    if (actualParam == void 0 && defaultValue != void 0) {
      return defaultValue;
    }
    return decode(actualParam);
  });
  return {
    set,
    subscribe: subscribe2,
    update: (updater) => {
      const currentValue = get_store_value({ subscribe: subscribe2 });
      updater(currentValue);
    }
  };
}
const IndexCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { href = "#" } = $$props;
  let { item = void 0 } = $$props;
  let { ghMetadata = null } = $$props;
  let { title = "Untitled post" } = $$props;
  let { stringData = "no date" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  if ($$props.item === void 0 && $$bindings.item && item !== void 0) $$bindings.item(item);
  if ($$props.ghMetadata === void 0 && $$bindings.ghMetadata && ghMetadata !== void 0) $$bindings.ghMetadata(ghMetadata);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.stringData === void 0 && $$bindings.stringData && stringData !== void 0) $$bindings.stringData(stringData);
  return `<a class="w-full text-gray-900 hover:text-yellow-600 dark:text-gray-100 dark:hover:text-yellow-100 hover:no-underline"${add_attribute("href", href, 0)}><div class="w-full"><div class="flex flex-col justify-between md:flex-row"><h4 class="flex-auto w-full mb-2 text-lg font-bold md:text-xl">${escape(title)}</h4></div> <p class="text-gray-600 mb-2 break-all sm:break-words dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-100">${slots.default ? slots.default({}) : ``}</p> <div class="flex justify-between items-center gap-1 text-left text-gray-500 sm:justify-start sm:flex-row sm:gap-4 md:mb-0 md:text-sm"> <p>${escape(stringData)}</p> ${item?.readingTime ? `<p class="hidden sm:inline-block">${escape(item?.readingTime)}</p>` : ``}  <span class="px-4 max-h-6 flex items-center capitalize bg-gray-200 rounded-md dark:bg-gray-700 dark:text-gray-400">${escape(item?.category || "note")}</span> ${item?.tags?.length ? `<div class="hidden md:block flex-1">${each(item.tags, (tag) => {
    return `<span class="px-1">#${escape(tag)} </span>`;
  })}</div>` : ``} ${ghMetadata && ghMetadata.reactions.total_count ? `<p class="">${escape(ghMetadata.reactions.total_count)} ♥</p>` : ``}</div></div></a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items;
  let searchFn;
  let $search, $$unsubscribe_search;
  let $selectedCategories, $$unsubscribe_selectedCategories;
  let { data } = $$props;
  let selectedCategories = queryParam(
    "show",
    {
      encode: (arr) => arr?.toString(),
      decode: (str) => str?.split(",")?.filter((e) => e) ?? []
    },
    { debounceHistory: 500 }
  );
  $$unsubscribe_selectedCategories = subscribe(selectedCategories, (value) => $selectedCategories = value);
  let search = queryParam("filter", ssp.string(), { debounceHistory: 500 });
  $$unsubscribe_search = subscribe(search, (value) => $search = value);
  let inputEl;
  let isTruncated = items?.length > 20;
  let loaded = false;
  const filterCategories = async (_items, _, s) => {
    if (!$selectedCategories?.length) return _items;
    return _items.filter((item) => {
      return $selectedCategories.map((element) => {
        return element.toLowerCase();
      }).includes(item.category.toLowerCase());
    }).filter((item) => item.toString().toLowerCase().includes(s));
  };
  function loadsearchFn() {
    if (loaded) return;
    import("../../../chunks/fuzzySearch.js").then((fuzzy) => {
      searchFn = fuzzy.fuzzySearch;
      loaded = true;
    });
  }
  if ($search) loadsearchFn();
  let list;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  items = data.items;
  searchFn = filterCategories;
  {
    searchFn(items, $selectedCategories, $search).then((_items) => list = _items);
  }
  $$unsubscribe_search();
  $$unsubscribe_selectedCategories();
  return `${$$result.head += `<!-- HEAD_svelte-pgcn0t_START -->${$$result.title = `<title>${escape(SITE_TITLE)} Blog Index</title>`, ""}<meta name="description"${add_attribute("content", `Latest ${SITE_TITLE} posts`, 0)}><!-- HEAD_svelte-pgcn0t_END -->`, ""}  <section class="mx-auto mb-16 flex max-w-2xl flex-col items-start justify-center px-4 sm:px-8"><h1 class="mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl" data-svelte-h="svelte-1k47svg">Blog</h1> <p class="mb-4 text-gray-600 dark:text-gray-400" data-svelte-h="svelte-mv056p">I am working on a blogging. I still am very amateur.</p> <div class="relative mb-4 w-full"><input aria-label="Search articles" type="text" placeholder="Hit / to search" class="block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100"${add_attribute("value", $search, 0)}${add_attribute("this", inputEl, 0)}><svg class="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div>  ${POST_CATEGORIES.length > 1 ? `<div class="mt-2 mb-8 flex items-center"><div class="mr-2 text-gray-900 dark:text-gray-400" data-svelte-h="svelte-rtkiq">Filter:</div> <div class="grid grid-cols-2 rounded-md shadow-sm sm:grid-cols-2">${each(POST_CATEGORIES, (availableCategory) => {
    return `<div><input id="${"category-" + escape(availableCategory, true)}" class="peer sr-only" type="checkbox"${add_attribute("value", availableCategory, 0)}${~$selectedCategories.indexOf(availableCategory) ? add_attribute("checked", true, 1) : ""}> <label for="${"category-" + escape(availableCategory, true)}" class="inline-flex w-full cursor-pointer items-center justify-between border border-gray-200 bg-white px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 peer-checked:border-purple-600 peer-checked:text-purple-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:peer-checked:text-purple-500">${escape(availableCategory)}</label> </div>`;
  })}</div></div>` : ``}   ${list?.length ? `<ul class="">${each(list, (item) => {
    return `<li class="mb-8 text-lg"> ${validate_component(IndexCard, "IndexCard").$$render(
      $$result,
      {
        href: item.slug,
        title: item.title,
        stringData: new Date(item.date).toISOString().slice(0, 10),
        ghMetadata: item.ghMetadata,
        item
      },
      {},
      {
        default: () => {
          return `${item.highlightedResults ? `<span class="italic"><!-- HTML_TAG_START -->${item.highlightedResults}<!-- HTML_TAG_END --> </span>` : `${escape(item.description)}`} `;
        }
      }
    )} </li>`;
  })}</ul> ${isTruncated ? `<div class="flex justify-center"><button class="inline-block rounded bg-blue-100 p-4 text-lg font-bold tracking-tight text-black hover:text-yellow-900 dark:bg-blue-900 dark:text-white hover:dark:text-yellow-200 md:text-2xl" data-svelte-h="svelte-1pzivwo">Load More Posts...</button></div>` : ``}` : `${$search ? `<div class="prose dark:prose-invert">No posts found for
			<code>${escape($search)}</code>.</div> <button class="bg-slate-500 p-2" data-svelte-h="svelte-1o8xild">Clear your search</button>` : `<div class="prose dark:prose-invert" data-svelte-h="svelte-sgk0pt">No blogposts found!</div>`}`}</section>`;
});
export {
  Page as default
};
