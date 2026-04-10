const {Vec, getTimeStr } = require('./logic.js');

let failureCount = 0;

function assertEqual(actual, expected) {
    if (actual !== expected) {
        console.error(`Assertion failed: expected "${expected}", but got "${actual}"`);
        failureCount++;
    } else {
        console.log('Assertion passed');
    }
}

const v = new Vec(1, 2);
assertEqual(v.x, 1);
assertEqual(v.y, 2);

const t = getTimeStr(424242);
assertEqual(t, "7:04.24");


if (failureCount === 0) {
    console.log('All tests passed');
} else {
    console.error(`Tests failed: ${failureCount}`);
    globalThis.process.exit(1);
}