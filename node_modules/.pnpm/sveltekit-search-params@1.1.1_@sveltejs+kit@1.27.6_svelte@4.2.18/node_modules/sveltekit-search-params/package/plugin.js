export function ssp() {
    return {
        name: 'vite-plugin-sveltekit-search-params',
        config: () => ({
            optimizeDeps: {
                exclude: ['sveltekit-search-params'],
            },
            ssr: {
                noExternal: ['sveltekit-search-params'],
            },
        }),
    };
}
