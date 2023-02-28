// Write a program that receives 6 parameters which are a number and a list
// of five operations. Perform the operations sequentially by
// starting with the input number and using the result of 
// every operation as a starting point for the next one. 
// Print the result of every operation in order. The operations can be one of the following:
// · chop - divide the number by two
// · dice - square root of a number
// · spice - add 1 to the number
// · bake - multiply number by 3
// · fillet - subtract 20% from the number
// The input comes as 6 string elements.
// The first element is the starting point and must be parsed to a number.
// The remaining 5 elements are the names of the operations to be performed.

// The output should be printed on the console.


function cookingByNumbers(num, oper1, oper2, oper3, oper4, oper5) {
    let myNum = parseInt(num);
    let arr = [oper1, oper2, oper3, oper4, oper5];
    for (let i = 0; i < arr.length; i++) {
        let currentNumber;
        let currentOper = arr[i];
        if (currentOper === 'chop') {
            currentNumber = myNum / 2;
            console.log(currentNumber);
            myNum = currentNumber;
        } else if (currentOper === 'dice') {
            currentNumber = Math.sqrt(myNum);
            console.log(currentNumber);
            myNum = currentNumber;
        } else if (currentOper === 'spice') {
            currentNumber = myNum + 1;
            console.log(currentNumber);
            myNum = currentNumber;
        } else if (currentOper === 'bake') {
            currentNumber = myNum * 3;
            console.log(currentNumber);
            myNum = currentNumber;
        } else if (currentOper === 'fillet') {
            currentNumber = myNum - myNum * 0.2;
            console.log(currentNumber);
            myNum = currentNumber;
        }

    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake','fillet')