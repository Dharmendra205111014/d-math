'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var _Multiplication = function _Multiplication() {
    for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
        a[_key] = arguments[_key];
    }

    var result = 0;
    a.forEach(function (num) {
        if (typeof num === 'number' && typeof result === 'number') {
            result *= num;
        } else if (typeof result === 'number') {
            result = "Wrong Input";
        }
    });
    return result;
};

exports.default = {
    multiply: _Multiplication
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tdWx0aXBseS5qcyJdLCJuYW1lcyI6WyJfTXVsdGlwbGljYXRpb24iLCJhIiwicmVzdWx0IiwiZm9yRWFjaCIsIm51bSIsIm11bHRpcGx5Il0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLGtCQUFrQixTQUFsQkEsZUFBa0IsR0FBVTtBQUFBLHNDQUFOQyxDQUFNO0FBQU5BLFNBQU07QUFBQTs7QUFDOUIsUUFBSUMsU0FBUyxDQUFiO0FBQ0FELE1BQUVFLE9BQUYsQ0FBVSxVQUFTQyxHQUFULEVBQWM7QUFDcEIsWUFBSSxPQUFPQSxHQUFQLEtBQWUsUUFBZixJQUEyQixPQUFPRixNQUFQLEtBQWtCLFFBQWpELEVBQTJEO0FBQ3ZEQSxzQkFBVUUsR0FBVjtBQUNILFNBRkQsTUFFTyxJQUFJLE9BQU9GLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0M7QUFDbkNBLHFCQUFTLGFBQVQ7QUFDSDtBQUNKLEtBTkQ7QUFPQSxXQUFPQSxNQUFQO0FBQ0gsQ0FWRDs7a0JBWWU7QUFDWEcsY0FBVUw7QUFEQyxDIiwiZmlsZSI6Im11bHRpcGx5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgX011bHRpcGxpY2F0aW9uID0gKC4uLmEpID0+IHtcbiAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICBhLmZvckVhY2goZnVuY3Rpb24obnVtKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbnVtID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgcmVzdWx0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmVzdWx0ICo9IG51bTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmVzdWx0ID0gXCJXcm9uZyBJbnB1dFwiXG4gICAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBtdWx0aXBseTogX011bHRpcGxpY2F0aW9uXG59XG4iXX0=