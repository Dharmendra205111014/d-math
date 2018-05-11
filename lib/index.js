'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.divide = exports.multiply = exports.add = undefined;

var _add = require('./add');

var _add2 = _interopRequireDefault(_add);

var _multiply = require('./multiply');

var _multiply2 = _interopRequireDefault(_multiply);

var _divide = require('./divide');

var _divide2 = _interopRequireDefault(_divide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export default {
//     add:add.add,
//     multiply:multiply.multiply
// }

var add = exports.add = _add2.default.add;
var multiply = exports.multiply = _multiply2.default.multiply;
var divide = exports.divide = _divide2.default.divide;

exports.default = {
    add: _add2.default.add,
    multiply: _multiply2.default.multiply,
    divide: _divide2.default.divide
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJhZGQiLCJhZGRlciIsIm11bHRpcGx5IiwibXVsdGlwbGllciIsImRpdmlkZSIsImRpdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVRLElBQU1BLG9CQUFNQyxjQUFNRCxHQUFsQjtBQUNBLElBQU1FLDhCQUFXQyxtQkFBV0QsUUFBNUI7QUFDQSxJQUFNRSwwQkFBU0MsaUJBQVFELE1BQXZCOztrQkFFUTtBQUNYSixTQUFLQyxjQUFNRCxHQURBO0FBRVhFLGNBQVVDLG1CQUFXRCxRQUZWO0FBR1hFLFlBQVFDLGlCQUFRRDtBQUhMLEMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYWRkZXIgZnJvbSAnLi9hZGQnO1xuaW1wb3J0IG11bHRpcGxpZXIgZnJvbSAnLi9tdWx0aXBseSc7XG5pbXBvcnQgZGl2aWRlciBmcm9tICcuL2RpdmlkZSdcblxuLy8gZXhwb3J0IGRlZmF1bHQge1xuLy8gICAgIGFkZDphZGQuYWRkLFxuLy8gICAgIG11bHRpcGx5Om11bHRpcGx5Lm11bHRpcGx5XG4vLyB9XG5cbiBleHBvcnQgY29uc3QgYWRkID0gYWRkZXIuYWRkO1xuIGV4cG9ydCBjb25zdCBtdWx0aXBseSA9IG11bHRpcGxpZXIubXVsdGlwbHk7XG4gZXhwb3J0IGNvbnN0IGRpdmlkZSA9IGRpdmlkZXIuZGl2aWRlO1xuXG4gZXhwb3J0IGRlZmF1bHQge1xuICAgICBhZGQ6IGFkZGVyLmFkZCxcbiAgICAgbXVsdGlwbHk6IG11bHRpcGxpZXIubXVsdGlwbHksXG4gICAgIGRpdmlkZTogZGl2aWRlci5kaXZpZGVcbiB9Il19