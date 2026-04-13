import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',


    webServer: {
        command: 'npm run dev', // La commande que vous utilisez pour lancer le jeu
        url: 'http://localhost:3630', // L'adresse que Playwright doit écouter
        reuseExistingServer: true, // Ne relance pas le serveur si vous l'avez déjà allumé vous-même
        timeout: 120000, // Laisse un peu de temps (en millisecondes) au serveur pour démarrer
    },
});