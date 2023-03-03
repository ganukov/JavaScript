// Write a function, that checks whether the result of the multiplication numOne * numTwo * numThree is positive or negative.Try to do this WITHOUT multiplying the 3 numbers.

//     Input

// The input comes as parameters named numOne, numTwo, numThree.

function signCheck(num1, num2, num3) {
    let multiply = (a, b, c) => a * b * c;
    if (multiply(num1, num2, num3) < 0){
        console.log(`Negative`);
    }
    else {
        console.log('Positive');
    }
}

signCheck(5,12,-15)