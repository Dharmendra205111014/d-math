'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.multiply = exports.add = undefined;

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

var _multiply = require('./multiply');

var _multiply2 = _interopRequireDefault(_multiply);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export default {
//     add:add.add,
//     multiply:multiply.multiply
// }

var add = exports.add = _add2.default.add;
var multiply = exports.multiply = _multiply2.default.multiply;

exports.default = {
    add: _add2.default.add,
    multiply: _add2.default.multiply
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGQiLCJhZGRlciIsIm11bHRpcGx5IiwibXVsdGlwbGllciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVRLElBQU1BLG9CQUFNQyxjQUFNRCxHQUFsQjtBQUNBLElBQU1FLDhCQUFXQyxtQkFBV0QsUUFBNUI7O2tCQUVRO0FBQ1hGLFNBQUtDLGNBQU1ELEdBREE7QUFFWEUsY0FBVUQsY0FBTUM7QUFGTCxDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFkZGVyIGZyb20gJy4vYWRkJztcbmltcG9ydCBtdWx0aXBsaWVyIGZyb20gJy4vbXVsdGlwbHknO1xuXG4vLyBleHBvcnQgZGVmYXVsdCB7XG4vLyAgICAgYWRkOmFkZC5hZGQsXG4vLyAgICAgbXVsdGlwbHk6bXVsdGlwbHkubXVsdGlwbHlcbi8vIH1cblxuIGV4cG9ydCBjb25zdCBhZGQgPSBhZGRlci5hZGQ7XG4gZXhwb3J0IGNvbnN0IG11bHRpcGx5ID0gbXVsdGlwbGllci5tdWx0aXBseTtcblxuIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgYWRkOiBhZGRlci5hZGQsXG4gICAgIG11bHRpcGx5OiBhZGRlci5tdWx0aXBseVxuIH0iXX0=