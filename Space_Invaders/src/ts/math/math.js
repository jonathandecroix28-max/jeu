'use strict';
exports.__esModule = true;
exports.lerp = exports.clamp = void 0;
function clamp(min, max, v) {
  return v > max ? max : v < min ? min : v;
}
exports.clamp = clamp;
function lerp(start, end, v) {
  return start + (end - start) * v;
}
exports.lerp = lerp;
