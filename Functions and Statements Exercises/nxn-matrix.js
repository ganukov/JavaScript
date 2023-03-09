function nXNMatrix(number) {
    let matrix = new Array(number).fill(new Array(number).fill(number))
    .forEach(row => console.log(row.join(' ')));
}


nXNMatrix(3);