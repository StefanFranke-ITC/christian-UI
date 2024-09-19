const {defineConfig} = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,

    devServer: {
        port: 3000,  // Den Port festlegen
        host: '0.0.0.0',  // Stellt sicher, dass der Server auf allen Schnittstellen lauscht
        disableHostCheck: true,  // Vermeidet Host-Überprüfungen (für Entwicklungsumgebungen nützlich)
        allowedHosts: 'all',  // Erlaubt Verbindungen von beliebigen Hosts
    },

    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        }
    }
});
