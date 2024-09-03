import * as universal from '../entries/pages/_slug_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/3.DzUsG8eO.js","_app/immutable/chunks/index.VswQhUWj.js","_app/immutable/chunks/index.C6GqHCcz.js","_app/immutable/chunks/scheduler.z6visP7U.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/siteConfig.DwAPNBv8.js","_app/immutable/chunks/LatestPosts.s3pnTCxK.js","_app/immutable/chunks/stores.DguXIHmC.js","_app/immutable/chunks/entry.9q6bm_pC.js"];
export const stylesheets = ["_app/immutable/assets/3.PPNWMmPZ.css"];
export const fonts = [];
