module.exports = {
    transpileDependencies: true,

    devServer: {
        port: 3000,  // Hier den Port festlegen
        host: '0.0.0.0',  // Um den Server auf allen Netzwerkschnittstellen verfügbar zu machen
        disableHostCheck: true,  // Optional, je nach Anforderungen
    },

    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        }
    }
};
