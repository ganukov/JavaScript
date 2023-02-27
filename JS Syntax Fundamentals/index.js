function solve(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}

solve(1, 2);


function fstring_like(name, age) {
    let output = `My name is: ${name} and my age is ${age}`;
    console.log(output);
}

fstring_like('Georgi', 15);

//switch

let dayOfWeek = 'Monday'

switch (dayOfWeek) {
    case 'Monday':
        console.log('Go to work!');
        break;
    case 'Tuesday':
        console.log('Go to work!');
        break;
    case 'Wednesday':
        console.log('Go to work!');
        break;
    case 'Thursday':
        console.log('Go to work!');
        break;
    case 'Friday':
        console.log('Go to work!');
        break;
    case 'Saturday':
        console.log('Time off!');
        break;
    case 'Sunday':
        console.log('Time off!');
        break;
    default:
        console.log('Error!')
}


// Check the input

function test(input) {
    console.log(input)
}

//Destructuring Syntax

let numbers = [1, 2, 3];
let [first, second, third] = numbers;

let number = [1, 2, 3, ...[4, 5, 6]];
// result = [1,2,3,4,5,6]

// Mutator Methods (that changes the array)
// splice,sort
// Accessor Methods (doesnt change the array)
// slice,includes,indexOf
// Iteration Methods
// forEach,map,filter (receives a callback)