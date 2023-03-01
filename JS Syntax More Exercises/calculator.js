// Write a function that receives 3 parameters: a number, an operator(string), and another number. 

// The operator can be: '+', '-', '/', '*'.
//  Print the result of the calculation on the console formatted to the second decimal point. 

function calculator(num1, oper, num2) {
    switch (oper) {
        case '+':
            console.log((num1 + num2).toFixed(2));
            break;
        case '-':
            console.log((num1 - num2).toFixed(2));
            break;
        case '/':
            console.log((num1 / num2).toFixed(2));
            break;

        case '*':
            console.log((num1 * num2).toFixed(2));
            break;

    }
}

calculator(5,'+',10)