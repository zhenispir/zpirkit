import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.fWwTaxzA.js","_app/immutable/chunks/index.AZhz8ofI.js","_app/immutable/chunks/index.CQrDriHR.js","_app/immutable/chunks/scheduler.CNzAINQ-.js","_app/immutable/chunks/control.C7uy2HLq.js","_app/immutable/chunks/LatestPosts.y3quUP3V.js","_app/immutable/chunks/siteConfig.B41vAn06.js"];
export const stylesheets = [];
export const fonts = [];
