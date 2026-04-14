"use strict";
exports.__esModule = true;
// On importe les fonctions mathématiques pures
var math_1 = require("./src/ts/math/math");
// On importe les calculs de vecteurs
var vector_1 = require("./src/ts/math/vector");
var polar_vector_1 = require("./src/ts/math/polar-vector");
var failureCount = 0;
// FONCTION DE TEST ADAPTÉE POUR TYPESCRIPT ET LES OBJETS
function assertEqual(actual, expected, testName) {
    // On transforme les objets en chaînes de caractères pour les comparer facilement
    var actualStr = typeof actual === 'object' ? JSON.stringify(actual) : String(actual);
    var expectedStr = typeof expected === 'object' ? JSON.stringify(expected) : String(expected);
    if (actualStr !== expectedStr) {
        console.error("::error file=tests.ts::[" + testName + "] Assertion failed: expected \"" + expectedStr + "\", but got \"" + actualStr + "\"");
        failureCount++;
    }
    else {
        console.log("\u2705 [" + testName + "] Assertion passed");
    }
}
console.log("▶️ Lancement des tests unitaires Space Invaders");
// TESTS IMPOSÉS PAR L'ANNEXE
assertEqual((0, math_1.clamp)(1, 10, 2), 2, "clamp_1");
assertEqual((0, math_1.clamp)(1, 10, -12), 1, "clamp_2");
assertEqual((0, math_1.lerp)(1, 10, 2), 19, "lerp_1");
assertEqual((0, math_1.lerp)(1, 10, -12), -107, "lerp_2");
assertEqual((0, polar_vector_1.distance)({ angle: 5, radius: 50 }, { angle: 10, radius: 100 }), 98.30248290540649, "distance_1");
assertEqual((0, polar_vector_1.distance)({ angle: 5, radius: 50 }, { angle: -10, radius: 100 }), 141.76346189546945, "distance_2");
assertEqual((0, polar_vector_1.toVector)({ angle: 5, radius: 50 }), { x: 14.183109273161312, y: -47.946213733156924 }, "toVector");
assertEqual((0, vector_1.normalize)({ x: 5, y: 50 }), { x: 0.09950371902099892, y: 0.9950371902099892 }, "normalize");
assertEqual((0, vector_1.dot)({ x: 5, y: 50 }, { x: 10, y: 100 }), 5050, "dot");
assertEqual((0, vector_1.add)({ x: 5, y: 50 }, { x: 10, y: 100 }), { x: 15, y: 150 }, "add");
assertEqual((0, vector_1.subtract)({ x: 5, y: 50 }, { x: 10, y: 100 }), { x: -5, y: -50 }, "subtract");
// test personnalisé
assertEqual((0, math_1.clamp)(0, 100, 150), 100, "clamp_above_max");
assertEqual((0, polar_vector_1.distance)({ angle: 0, radius: 1 }, { angle: Math.PI, radius: 1 }), 2, "distance_opposite_points");
assertEqual((0, vector_1.add)({ x: 1, y: 2 }, { x: 3, y: 4 }), { x: 4, y: 6 }, "add_simple");
assertEqual((0, vector_1.subtract)({ x: 5, y: 7 }, { x: 2, y: 3 }), { x: 3, y: 4 }, "subtract_simple");
assertEqual((0, vector_1.dot)({ x: 1, y: 0 }, { x: 0, y: 1 }), 0, "dot_perpendicular");
// RÉSULTAT FINAL
if (failureCount === 0) {
    console.log('Tous les tests unitaires ont réussi !');
}
else {
    console.error("\u274C \u00C9chec : " + failureCount + " test(s) n'ont pas pass\u00E9.");
    globalThis.process.exit(1);
}
