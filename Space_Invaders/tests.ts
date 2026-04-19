// On importe les fonctions mathématiques pures
import { clamp, lerp } from './src/ts/math/math';

// On importe les calculs de vecteurs
import { add, subtract, dot, normalize } from './src/ts/math/vector';

import { distance, toVector } from './src/ts/math/polar-vector';

let failureCount = 0;

// FONCTION DE TEST ADAPTÉE POUR TYPESCRIPT ET LES OBJETS
function assertEqual(actual: any, expected: any, testName: string) {
    // On transforme les objets en chaînes de caractères pour les comparer facilement
    const actualStr = typeof actual === 'object' ? JSON.stringify(actual) : String(actual);
    const expectedStr = typeof expected === 'object' ? JSON.stringify(expected) : String(expected);

    if (actualStr !== expectedStr) {

        console.error(`::error file=tests.ts::[${testName}] Assertion failed: expected "${expectedStr}", but got "${actualStr}"`);
        failureCount++;
    } else {
        console.log(`✅ [${testName}] Assertion passed`);
    }
}

console.log("▶️ Lancement des tests unitaires Space Invaders");


// TESTS IMPOSÉS PAR L'ANNEXE


assertEqual(clamp(1, 10, 2), 2, "clamp_1");
assertEqual(clamp(1, 10, -12), 1, "clamp_2");

assertEqual(lerp(1, 10, 2), 19, "lerp_1");
assertEqual(lerp(1, 10, -12), -107, "lerp_2");

assertEqual(distance({ angle: 5, radius: 50 }, { angle: 10, radius: 100 }), 98.30248290540649, "distance_1");
assertEqual(distance({ angle: 5, radius: 50 }, { angle: -10, radius: 100 }), 141.76346189546945, "distance_2");

assertEqual(toVector({ angle: 5, radius: 50 }), { x: 14.183109273161312, y: -47.946213733156924 }, "toVector");

assertEqual(normalize({ x: 5, y: 50 }), { x: 0.09950371902099892, y: 0.9950371902099892 }, "normalize");

assertEqual(dot({ x: 5, y: 50 }, { x: 10, y: 100 }), 5050, "dot");

assertEqual(add({ x: 5, y: 50 }, { x: 10, y: 100 }), { x: 15, y: 150 }, "add");

assertEqual(subtract({ x: 5, y: 50 }, { x: 10, y: 100 }), { x: -5, y: -50 }, "subtract");


// test personnalisé


assertEqual(clamp(0, 100, 150), 100, "clamp_above_max");

assertEqual(distance({ angle: 0, radius: 1 }, { angle: Math.PI, radius: 1 }), 2, "distance_opposite_points");

assertEqual(add({ x: 1, y: 2 }, { x: 3, y: 4 }), { x: 4, y: 6 }, "add_simple");

assertEqual(subtract({ x: 5, y: 7 }, { x: 2, y: 3 }), { x: 3, y: 4 }, "subtract_simple");

assertEqual(dot({ x: 1, y: 0 }, { x: 0, y: 1 }), 0, "dot_perpendicular");



// RÉSULTAT FINAL


if (failureCount === 0) {
    console.log('::notice::Tous les tests unitaires ont réussi');
    console.log('Tous les tests unitaires ont réussi !');
} else {
    console.error(`::error file=tests.ts::Échec global: ${failureCount} test(s) n'ont pas passé.`);
    console.error(`❌ Échec : ${failureCount} test(s) n'ont pas passé.`);
    globalThis.process.exit(1);
}