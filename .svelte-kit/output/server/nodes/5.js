import * as universal from '../entries/pages/blog/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/5.DGCHoPpV.js","_app/immutable/chunks/index.VswQhUWj.js","_app/immutable/chunks/index.C6GqHCcz.js","_app/immutable/chunks/scheduler.z6visP7U.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/entry.9q6bm_pC.js","_app/immutable/chunks/stores.DguXIHmC.js","_app/immutable/chunks/siteConfig.DwAPNBv8.js"];
export const stylesheets = [];
export const fonts = [];
