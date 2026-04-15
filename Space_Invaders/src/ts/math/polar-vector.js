'use strict';
exports.__esModule = true;
exports.distance = exports.toPolarVector = exports.toVector = void 0;
const vector_1 = require('./vector');
function toVector(polarVector) {
  return {
    x: polarVector.radius * Math.cos(polarVector.angle),
    y: polarVector.radius * Math.sin(polarVector.angle),
  };
}
exports.toVector = toVector;
function toPolarVector(vector) {
  return {
    radius: (0, vector_1.magnitude)(vector),
    angle: Math.atan2(vector.y, vector.x),
  };
}
exports.toPolarVector = toPolarVector;
function distance(a, b) {
  return Math.sqrt(Math.pow(a.radius, 2) + Math.pow(b.radius, 2) - 2 * a.radius * b.radius * Math.cos(a.angle - b.angle));
}
exports.distance = distance;
