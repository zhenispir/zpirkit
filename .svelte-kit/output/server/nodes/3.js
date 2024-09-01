import * as universal from '../entries/pages/_slug_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/3.CcwZOb3e.js","_app/immutable/chunks/index.Bt8yWkt_.js","_app/immutable/chunks/index.CQGSHDFc.js","_app/immutable/chunks/scheduler.z6visP7U.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/siteConfig.BqzMm2Db.js","_app/immutable/chunks/entry.B-PjUGbu.js","_app/immutable/chunks/LatestPosts.BDOCjV5A.js","_app/immutable/chunks/stores.dHE3zYlL.js"];
export const stylesheets = ["_app/immutable/assets/3.PPNWMmPZ.css"];
export const fonts = [];
