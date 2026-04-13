import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3630');
    await page.keyboard.press('Space');
    await page.waitForTimeout(500);
});

test('Verifie le titre de la page', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Keep white space');
    const nombreDeCanvas = await page.locator('canvas').count();
    expect(nombreDeCanvas).toBe(5);
});

test('Verifie Mort Player', async ({ page }) => {



    const maxTries = 15; // sécurité pour ne pas boucler infiniment
    let died = false;

    for (let i = 0; i < maxTries; i++) {
        // petite pause pour laisser le temps au jeu d'évoluer
        await page.waitForTimeout(2000);

        // on tente SPACE et on voit si ça déclenche une navigation
        const [maybeNav] = await Promise.race([
            Promise.all([
                page.waitForNavigation({ timeout: 3000 }).then(n => n).catch(() => null),
                page.keyboard.press('Space'),
            ]),
        ]);

        if (maybeNav) {
            // on a eu un reload -> SPACE a été interprété comme "restart après game over"
            died = true;
            break;
        }
    }

    expect(died).toBe(true);
});



test('Vérifie le déplacement du personnage sur le Canvas 3', async ({ page }) => {

    // Le beforeEach a déjà lancé le jeu et appuyé sur Espace.

    // On cible le 3ème canvas (index 2 car on compte à partir de 0)
    const canvasPersonnage = page.locator('canvas').nth(2);

    // On laisse une fraction de seconde pour que le personnage soit dessiné initialement
    await page.waitForTimeout(100);


    // On prend la photo de référence et on l'enregistre
    const bufferInitial = await canvasPersonnage.screenshot();


    // On simule l'appui sur une touche de déplacement (ex: Flèche Droite)
    await page.keyboard.down('ArrowUp');

    // On maintient la touche enfoncée un court instant pour s'assurer du mouvement
    await page.waitForTimeout(300);

    await page.keyboard.up('ArrowUp');


    // On prend la deuxième photo après le mouvement
    const bufferFinal = await canvasPersonnage.screenshot();


    // On s'attend à ce que le buffer (l'image) final ne soit PAS égal au buffer initial.
    expect(bufferFinal).not.toEqual(bufferInitial);
});