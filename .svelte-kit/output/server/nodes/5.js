import * as universal from '../entries/pages/blog/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/5.D6smgR8M.js","_app/immutable/chunks/index.DoOca4kJ.js","_app/immutable/chunks/index.DMh6hgS6.js","_app/immutable/chunks/scheduler.z6visP7U.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/entry.DuGNwFXA.js","_app/immutable/chunks/stores.DdADldqm.js","_app/immutable/chunks/siteConfig.BmQRgNuz.js"];
export const stylesheets = [];
export const fonts = [];
