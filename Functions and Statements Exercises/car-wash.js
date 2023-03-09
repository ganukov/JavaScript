// Write a JS function that receives some commands. Depending on the command, add or subtract a percentage of how much the car is cleaned or dirty. Start from 0. The first command will always be 'soap':
// · soap – add 10 to the value
// · water – increase the value by 20%
// · vacuum cleaner – increase the value by 25%
// · mud – decrease the value by 10%
// The input comes as an array of strings. When finished cleaning the car, print the resulting value in the correct FormData.
// Note: The value should be rounded to the second decimal point.

function carWash(arr) {
    let carDirty = 0;
    for (let i = 0; i < arr.length; i++) {
        const state = arr[i];
        if (state === 'soap') {
            carDirty += 10;
        }
        else if (state === 'water') {
            carDirty += carDirty * 0.2;
        }
        else if (state === 'vacuum cleaner') {
            carDirty += carDirty * 0.25;
        }
        else if (state === 'mud') {
            carDirty -= carDirty * 0.1;
        }
    }
    console.log(`The car is ${carDirty.toFixed(2)}% clean.`)
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap',

    'water'])