const _divide = (dividend, divisor) => {
    let result = 0;
        if (typeof dividend === 'number' && typeof divisor === 'number') {
            result = dividend/divisor;
        } else if (typeof result === 'number') {
            result = "Wrong Input"
        }
    return result;
}

export default {
    divide: _divide
}
