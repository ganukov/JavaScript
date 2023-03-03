// Write a function that receives three parameters – two numbers and an operator (string) – and calculates the result depending on the operator.
// Operator can be 'multiply', 'divide', 'add' or 'subtract'. Try to solve this task using arrow functions.

// Bonus

// Solve this task without using any conditional statements (no if or switch statements or ternary operators).

function simpleCalculator(num1, num2, oper) {
    let increment = (a, b) => a + b;
    let subtract = (a, b) => a - b;
    let divide = (a, b) => a / b;
    let multiply = (a, b) => a * b;

    switch (oper) {
        case 'add':
            return increment(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
        default:
            console.log('Invalid Operation!');
            break;
    }
}

console.log(simpleCalculator(40,8,'divide'))


