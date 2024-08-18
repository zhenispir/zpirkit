import RSS from "rss";
import { S as SITE_TITLE, a as SITE_URL } from "../../../chunks/siteConfig.js";
import { remark } from "remark";
import remarkHTML from "remark-html";
import { l as listContent } from "../../../chunks/content.js";
async function GET({ fetch }) {
  const feed = new RSS({
    title: SITE_TITLE + " RSS Feed",
    site_url: SITE_URL,
    feed_url: SITE_URL + "/api/rss.xml"
  });
  const allBlogs = await listContent(fetch);
  allBlogs.forEach((post) => {
    const htmlDescription = remark().use(remarkHTML).processSync(post.description);
    feed.item({
      title: post.title,
      url: SITE_URL + `/${post.slug}`,
      date: post.date,
      description: htmlDescription.toString()
    });
  });
  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Cache-Control": `public, max-age=${86400}`,
      // 24 hours
      "Content-Type": "application/rss+xml"
    }
  });
}
export {
  GET
};
