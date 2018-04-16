const separate = process.env.NODE_ENV === 'separate';
let middlewares = [];

if (separate) {
    const proxy = require('http-proxy-middleware');
    const port = process.env.PORT || 8008;
    middlewares = [proxy('/api', {target: `http://localhost:${port}`})];
}

module.exports = {
    head: {
        title: 'starter',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    css: ['~/assets/css/main.scss'],
    build: {
        vendor: ['axios'],
        /*
        ** Run ESLINT on save
        */
        extend (config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
        }
    },
    router: {
        middleware: ['ssr-cookies']
    },
    serverMiddleware: middlewares
};
