import * as universal from '../entries/pages/blog/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/+page.js";
export const imports = ["_app/immutable/nodes/5.C_9Mey44.js","_app/immutable/chunks/index.AZhz8ofI.js","_app/immutable/chunks/index.CQrDriHR.js","_app/immutable/chunks/scheduler.CNzAINQ-.js","_app/immutable/chunks/control.C7uy2HLq.js","_app/immutable/chunks/preload-helper.D6kgxu3v.js","_app/immutable/chunks/singletons.CL4UoklD.js","_app/immutable/chunks/stores.DDwViXLo.js","_app/immutable/chunks/siteConfig.B41vAn06.js"];
export const stylesheets = [];
export const fonts = [];
