import { g as getContent } from "../../../../../chunks/content.js";
import { e as error } from "../../../../../chunks/index.js";
async function GET({ fetch, params }) {
  const { slug } = params;
  let data;
  try {
    data = await getContent(fetch, slug);
    return new Response(JSON.stringify(data), {
      headers: {
        "Cache-Control": `public, max-age=3600`
        // 1 hour
      }
    });
  } catch (err) {
    console.log("didn't find ", slug);
    console.error(err);
    error(404, err.message);
  }
}
export {
  GET
};
