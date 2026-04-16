import type { PhysicsData } from './src/ts/physics';
import type { Input } from './src/ts/input';
import { init as initPhysics } from './src/ts/physics';
import * as assert from 'assert';
import { WORLD_SIZE } from './src/ts/config';


function makeFakeInput(overrides: Partial<Input> = {}): Input {
    return {
        axes: {
            x: overrides.axes?.x ?? 0,
            y: overrides.axes?.y ?? 0,
        },
        fire: overrides.fire ?? false,
    };
}

// Le calcul physique demande aussi deltaTime et addPoints.
function makeFakePhysicsData(overrides: Partial<PhysicsData> = {}): PhysicsData {
    return {
        input: makeFakeInput(overrides.input),
        deltaTime: overrides.deltaTime ?? 1 / 60,
        addPoints: overrides.addPoints ?? (() => { }),
    };
}



// TEST FONCTIONNEL 1 : VÉRIFIER LA POSITION DE DÉPART
try {
    const { calculate } = initPhysics();
    const result = calculate(makeFakePhysicsData({ deltaTime: 0 }));

    const premierEnnemi = result.enemies[0];

    // On vérifie que l'ennemi existe
    assert.ok(premierEnnemi, "Un ennemi devrait être présent dès le début.");

    // L'ennemi initial est créé avec radius = WORLD_SIZE dans physics.ts
    assert.strictEqual(premierEnnemi.position.radius, WORLD_SIZE, "L'ennemi initial devrait commencer à la distance WORLD_SIZE.");

    console.log("::notice:: Test de position initiale réussi !");
} catch (error) {
    console.error("::error:: ERREUR TEST POSITION :", (error as Error).message);
    console.error("❌ ERREUR TEST POSITION :", (error as Error).message);
    process.exit(1);
}


// TEST FONCTIONNEL 2 : VÉRIFIER QUE LE VAISSAU SE DÉPLACE CORRECTEMENT

try {
    const { calculate } = initPhysics();
    calculate(makeFakePhysicsData());
    const result = calculate(makeFakePhysicsData({
        input: makeFakeInput({
            axes: { x: 1, y: 0 },
            fire: true,
        }),
        deltaTime: 0.2,
    }));
    assert.ok(result.projectiles.length > 0, "Un projectile aurait dû être généré par le tir.");
    assert.ok(result.playerPosition.x !== 0 || result.playerPosition.y !== 0, "Le joueur aurait dû se déplacer.");
    console.log("::notice:: Test de déplacement et tir réussi !");
} catch (error) {
    console.error("::error:: ERREUR TEST DÉPLACEMENT/TIR :", (error as Error).message);
    console.error("❌ ERREUR FONCTIONNELLE :", (error as Error).message);
    process.exit(1);
}


// TEST FONCTIONNEL 3 : VÉRIFIER LE GAME OVER
try {
    const { calculate } = initPhysics();

    const result = calculate(makeFakePhysicsData({
        deltaTime: 100
    }));

    assert.strictEqual(result.gameOver, true, "Le jeu devrait être terminé car l'ennemi a atteint le centre.");
    console.log("::notice:: Test de Game Over réussi !");
} catch (error) {
    console.error("::error:: ERREUR TEST GAME OVER :", (error as Error).message);
    console.error("❌ ERREUR TEST GAME OVER :", (error as Error).message);
    process.exit(1);
}


