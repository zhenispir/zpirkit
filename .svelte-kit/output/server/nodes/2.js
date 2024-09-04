import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.DlYxsU_U.js","_app/immutable/chunks/index.DoOca4kJ.js","_app/immutable/chunks/index.DMh6hgS6.js","_app/immutable/chunks/scheduler.z6visP7U.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/LatestPosts.l3IFhzlx.js","_app/immutable/chunks/siteConfig.BmQRgNuz.js"];
export const stylesheets = [];
export const fonts = [];
