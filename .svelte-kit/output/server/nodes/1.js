

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.O1MUlaZK.js","_app/immutable/chunks/scheduler.CNzAINQ-.js","_app/immutable/chunks/index.CQrDriHR.js","_app/immutable/chunks/stores.DDwViXLo.js","_app/immutable/chunks/singletons.CL4UoklD.js"];
export const stylesheets = ["_app/immutable/assets/1.DzifkvDy.css"];
export const fonts = [];
