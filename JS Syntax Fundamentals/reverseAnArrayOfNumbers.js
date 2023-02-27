function reverseAnArrayOfNumbers(number, arr) {
    let result = [];
    for (let i = 0; i < number; i++) {
        result.push(arr[i]);
    }

    let output = '';
    for (let i = result.length - 1; i >= 0; i--) {
        output += result[i] + ' ';
    }
    console.log(output)


}

reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50])