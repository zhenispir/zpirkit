import { e as error } from "../../chunks/index.js";
async function load({ setHeaders, fetch }) {
  const res = await fetch(`/api/listContent.json`);
  if (res.status > 400) {
    error(res.status, await res.text());
  }
  const items = await res.json();
  setHeaders({
    "cache-control": `public, max-age=3600`
    // 1 hour
  });
  return { items: items.slice(0, 10) };
}
export {
  load
};
