import * as universal from '../entries/pages/_slug_/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/3.szsTG6X0.js","_app/immutable/chunks/index.AZhz8ofI.js","_app/immutable/chunks/index.CQrDriHR.js","_app/immutable/chunks/scheduler.CNzAINQ-.js","_app/immutable/chunks/control.C7uy2HLq.js","_app/immutable/chunks/siteConfig.B41vAn06.js","_app/immutable/chunks/singletons.CL4UoklD.js","_app/immutable/chunks/LatestPosts.y3quUP3V.js","_app/immutable/chunks/stores.DDwViXLo.js"];
export const stylesheets = ["_app/immutable/assets/3.PPNWMmPZ.css"];
export const fonts = [];
