// Write a function that takes an integer number as an input
// and check if all the digits in a given number are the same or not.
// Print on the console true if all numbers are the same and false if not.
// On the next line print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.

function sameNumbers(num) {
    let numString = num.toString();
    let sum = 0;
    let sameDigits = true;
    for (let i = 0; i < numString.length; i++) {
        sum += parseInt(numString[i]);
        if (numString[i] !== numString[0]) {
            sameDigits = false;
        }
    }
    console.log(sameDigits);
    console.log(sum);
}



sameNumbers(1234)
sameNumbers(22222)