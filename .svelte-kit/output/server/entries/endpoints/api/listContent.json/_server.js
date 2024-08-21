import { l as listContent } from "../../../../chunks/content.js";
async function GET({ fetch, setHeaders }) {
  let list = await listContent(fetch);
  list = list.map((item) => {
    item.description = item.description.replace(/[[\]]/gm, " ");
    return item;
  });
  setHeaders({
    "Cache-Control": `public, max-age=3600`
    // 1 hour
  });
  return new Response(JSON.stringify(list), {
    headers: {
      "content-type": "application/json; charset=utf-8"
    }
  });
}
export {
  GET
};
