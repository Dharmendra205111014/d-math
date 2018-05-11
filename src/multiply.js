const _Multiplication = (...a) => {
    var result = 1;
    a.forEach(function(num) {
        if (typeof num === 'number' && typeof result === 'number') {
            result *= num;
        } else if (typeof result === 'number') {
            result = "Wrong Input"
        }
    })
    return result;
}

export default {
    multiply: _Multiplication
}
