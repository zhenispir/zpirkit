import { ID_SEPARATOR } from './util.js';
export function resolvedGeneratedSetupCode(ctx, id) {
    const [, index] = id.split(ID_SEPARATOR);
    return ctx.config.setupCode?.[index] ?? '';
}
