module.exports = {
    transpileDependencies: [
        // Hier kannst du Abhängigkeiten angeben, die transpiliert werden sollen, z.B. 'vuetify'.
        // Wenn keine nötig sind, kann es leer bleiben.
        'vuetify'
    ],

    devServer: {
        port: 3000,  // Port auf 3000 setzen
        host: '0.0.0.0',  // Server lauscht auf allen Netzwerkschnittstellen, um auch von außen erreichbar zu sein
        disableHostCheck: true,  // Optional: Host-Überprüfung deaktivieren, um externe Verbindungen zuzulassen
    },

    pluginOptions: {
        vuetify: {
            // Hier kannst du zusätzliche Vuetify-spezifische Optionen hinzufügen
            // Das bleibt leer, wenn du keine speziellen Anpassungen vornehmen möchtest
        }
    }
};
