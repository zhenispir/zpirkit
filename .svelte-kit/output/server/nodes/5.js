import * as universal from '../entries/pages/blog/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/5.BsopmAEC.js","_app/immutable/chunks/index.Bt8yWkt_.js","_app/immutable/chunks/index.CQGSHDFc.js","_app/immutable/chunks/scheduler.z6visP7U.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/entry.B-PjUGbu.js","_app/immutable/chunks/stores.dHE3zYlL.js","_app/immutable/chunks/siteConfig.BqzMm2Db.js"];
export const stylesheets = [];
export const fonts = [];
