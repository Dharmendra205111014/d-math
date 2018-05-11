const _addition = (...a) => {
    var result = 0;
    a.forEach(function(num) {
        if (typeof num === 'number' && typeof result === 'number') {
            result += num;
        } else if (typeof result === 'number') {
            result = "Wrong Input"
        }
    })
    return result;
}

export default {
    add: _addition
}
