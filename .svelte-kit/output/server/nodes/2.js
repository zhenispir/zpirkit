import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.-lYpi_I_.js","_app/immutable/chunks/index.Bt8yWkt_.js","_app/immutable/chunks/index.CQGSHDFc.js","_app/immutable/chunks/scheduler.z6visP7U.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/LatestPosts.BDOCjV5A.js","_app/immutable/chunks/siteConfig.BqzMm2Db.js"];
export const stylesheets = [];
export const fonts = [];
