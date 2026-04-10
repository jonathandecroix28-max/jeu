// ========= IMPORTE Vec et GetTimeStr DEPUIS LOGIC.JS ===========
const {Vec, getTimeStr } = require('./logic.js');

let failureCount = 0;

// ========== VERIFIE SI RESULTAT = VALEUR ATTENDUE ===========
function assertEqual(actual, expected) {
// Cas spécial NaN : si les deux sont NaN, le test passe
    if (Number.isNaN(expected) && Number.isNaN(actual)) {
        console.log("Assertion passed");
        return;
    }

// Cas normal : comparaison stricte
    if (actual !== expected) {
        console.error(`Assertion failed: expected "${expected}", but got "${actual}"`);
        failureCount++;
    } else {
        console.log("Assertion passed");
    }
}

// ========== TESTS ===========

const v1 = new Vec(1, 2);
assertEqual(v1.x, 1);
assertEqual(v1.y, 2);

const v2 = new Vec(1, 2).add(new Vec(3, 4));
assertEqual(v2.x, 4);
assertEqual(v2.y, 6);

const v3 = new Vec(1, 2).mul(-2, 3);
assertEqual(v3.x, -2);
assertEqual(v3.y, 6);

const v4 = new Vec(1, 2).dot(new Vec(2, 1));
assertEqual(v4, 4);

const v5 = new Vec(1, 2).cross(new Vec(3, 4).mul(-2,3));
assertEqual(v5, 24);

const v6 = new Vec(1, 2).dot(new Vec(1, 2).add(new Vec(new Vec(1, 2).dot(new Vec(2, 1)), new Vec(1, 2).cross(new Vec(3, 4).mul(-2,3)))));
assertEqual(v6, 57);

const v7 = new Vec(1, 2).add(3);
assertEqual(v7.x, NaN);
assertEqual(v7.y, NaN);

const v8 = new Vec(1, 1).cross(new Vec(-42, -42));
assertEqual(v8, 0);

const t1 = getTimeStr(424242);
assertEqual(t1, "7:04.24");

const t2 = getTimeStr(-123456);
assertEqual(t2, "-3:-4.-4");

// ========== CALCUL LE NOMBRE D'ERREURS ===========
if (failureCount === 0) {
    console.log('All tests passed');
} else {
    console.error(`Tests failed: ${failureCount}`);
    globalThis.process.exit(1);
}