import { e as error } from "../../../chunks/index.js";
import { c as REPO_URL } from "../../../chunks/siteConfig.js";
async function load({ params, fetch, setHeaders }) {
  const slug = params.slug;
  let [pageData, listData] = await Promise.all([
    fetch(`/api/blog/${slug}.json`),
    fetch(`/api/listContent.json`)
  ]);
  if (pageData.status > 400) {
    error(pageData.status, await pageData.text());
  }
  if (listData.status > 400) {
    error(listData.status, await listData.text());
  }
  setHeaders({
    "cache-control": "public, max-age=3600"
    // 1 hour - increase the max age as you get more confident in your caching
  });
  return {
    json: await pageData.json(),
    list: (await listData.json()).slice(0, 10),
    slug,
    REPO_URL
  };
}
export {
  load
};
