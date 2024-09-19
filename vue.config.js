module.exports = {
    transpileDependencies: [],  // Hier ein leeres Array, oder füge Abhängigkeiten hinzu, die transpiliert werden sollen

    devServer: {
        port: 3000,  // Den Port festlegen
        host: '0.0.0.0',  // Stellt sicher, dass der Server auf allen Schnittstellen lauscht
        disableHostCheck: true,  // Optional, falls du externe Verbindungen zulassen willst
    },

    pluginOptions: {
        vuetify: {
            // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
        }
    }
};
