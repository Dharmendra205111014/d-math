'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _addition = function _addition() {
    for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
        a[_key] = arguments[_key];
    }

    var result = 0;
    a.forEach(function (num) {
        if (typeof num === 'number' && typeof result === 'number') {
            result += num;
        } else if (typeof result === 'number') {
            result = "Wrong Input";
        }
    });
    return result;
};

exports.default = {
    add: _addition
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hZGQuanMiXSwibmFtZXMiOlsiX2FkZGl0aW9uIiwiYSIsInJlc3VsdCIsImZvckVhY2giLCJudW0iLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsWUFBWSxTQUFaQSxTQUFZLEdBQVU7QUFBQSxzQ0FBTkMsQ0FBTTtBQUFOQSxTQUFNO0FBQUE7O0FBQ3hCLFFBQUlDLFNBQVMsQ0FBYjtBQUNBRCxNQUFFRSxPQUFGLENBQVUsVUFBU0MsR0FBVCxFQUFjO0FBQ3BCLFlBQUksT0FBT0EsR0FBUCxLQUFlLFFBQWYsSUFBMkIsT0FBT0YsTUFBUCxLQUFrQixRQUFqRCxFQUEyRDtBQUN2REEsc0JBQVVFLEdBQVY7QUFDSCxTQUZELE1BRU8sSUFBSSxPQUFPRixNQUFQLEtBQWtCLFFBQXRCLEVBQWdDO0FBQ25DQSxxQkFBUyxhQUFUO0FBQ0g7QUFDSixLQU5EO0FBT0EsV0FBT0EsTUFBUDtBQUNILENBVkQ7O2tCQVllO0FBQ1hHLFNBQUtMO0FBRE0sQyIsImZpbGUiOiJhZGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBfYWRkaXRpb24gPSAoLi4uYSkgPT4ge1xuICAgIHZhciByZXN1bHQgPSAwO1xuICAgIGEuZm9yRWFjaChmdW5jdGlvbihudW0pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBudW0gPT09ICdudW1iZXInICYmIHR5cGVvZiByZXN1bHQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gbnVtO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBcIldyb25nIElucHV0XCJcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGFkZDogX2FkZGl0aW9uXG59XG4iXX0=