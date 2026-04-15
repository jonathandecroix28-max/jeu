'use strict';
exports.__esModule = true;
exports.distance = exports.mulFactor = exports.subtract = exports.add = exports.dot = exports.lerp = exports.slerp = exports.magnitude = exports.normalize = void 0;
const math_1 = require('./math');
function normalize(vector) {
  const mag = magnitude(vector);
  return {
    x: mag ? vector.x / mag : 0,
    y: mag ? vector.y / mag : 0,
  };
}
exports.normalize = normalize;
function magnitude(vector) {
  return Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2));
}
exports.magnitude = magnitude;
function slerp(start, end, percent) {
  percent = (0, math_1.clamp)(0, 1, percent);
  const dt = dot(start, end);
  const theta = Math.acos(dt) * percent;
  const relative = normalize(subtract(end, mulFactor(start, dt)));
  return normalize(add(mulFactor(start, Math.cos(theta)), mulFactor(relative, Math.sin(theta))));
}
exports.slerp = slerp;
function lerp(start, end, percent) {
  return {
    x: (0, math_1.lerp)(start.x, end.x, percent),
    y: (0, math_1.lerp)(start.y, end.y, percent),
  };
}
exports.lerp = lerp;
function dot(a, b) {
  return a.x * b.x + a.y * b.y;
}
exports.dot = dot;
function add(a, b) {
  return {
    x: a.x + b.x,
    y: a.y + b.y,
  };
}
exports.add = add;
function subtract(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y,
  };
}
exports.subtract = subtract;
function mulFactor(vector, factor) {
  return {
    x: vector.x * factor,
    y: vector.y * factor,
  };
}
exports.mulFactor = mulFactor;
function distance(a, b) {
  return magnitude({
    x: a.x - b.x,
    y: a.y - b.y,
  });
}
exports.distance = distance;
