function charactersInRange(firstChar, secondChar) {
    const getFirstCharAsciiCode = (char) => char.charCodeAt(0);
    let firstCharAscii = getFirstCharAsciiCode(firstChar);
    let secondCharAscii = getFirstCharAsciiCode(secondChar);

    let minValue = Math.min(firstCharAscii, secondCharAscii);
    let maxValue = Math.max(firstCharAscii, secondCharAscii);
    let chars = [];

    for (let index = minValue + 1; index < maxValue; index++) {
        chars.push(String.fromCharCode(index));
    }

    return chars.join(' ')
}

console.log(charactersInRange('a', 'd'))