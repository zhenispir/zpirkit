import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.CU7mkR0M.js","_app/immutable/chunks/index.VswQhUWj.js","_app/immutable/chunks/index.C6GqHCcz.js","_app/immutable/chunks/scheduler.z6visP7U.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/LatestPosts.s3pnTCxK.js","_app/immutable/chunks/siteConfig.DwAPNBv8.js"];
export const stylesheets = [];
export const fonts = [];
