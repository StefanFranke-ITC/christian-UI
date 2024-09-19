module.exports = {
    transpileDependencies: [
        'vuetify'
    ],

    devServer: {
        port: 3000,
        host: '0.0.0.0',  // Damit der Server auf allen Schnittstellen lauscht
        allowedHosts: 'all',  // Erlaubt Verbindungen von allen Hosts
    },

    pluginOptions: {
        vuetify: {
            // Vuetify-spezifische Konfigurationen können hier hinzugefügt werden
        }
    }
};
