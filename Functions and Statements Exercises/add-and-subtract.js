function addAndSubtract(a, b, c) {
    const sum = (a, b) => a + b;
    const subtract = (sum, c) => sum - c;
    return subtract(sum(a, b), c);
}

console.log(addAndSubtract(1, 2, 3))