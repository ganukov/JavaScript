// Write a JS program that changes a number until the average of all its digits is not higher than 5. To modify the number, your program should append a 9 to the end of the number, 
// when the average value of all its digits is higher than 5 the program should stop appending.
// The input is a single number.
// The output should consist of a single number - the final modified number which has an average value of all its digits higher than 5. The output should be printed on the console.


function numberModification(num) {
    let chars = num.toString().split('');
    let realChars = chars.map(Number);
    while (true) {
        let sum = realChars.reduce((a, b) => {
            return a + b;
        })
        if ((sum / realChars.length) < 5) {
            realChars.push(9)
        } else {
            break;
        }
    }
    console.log(realChars.join(''))
}

numberModification(101)