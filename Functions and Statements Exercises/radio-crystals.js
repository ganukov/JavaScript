// You need to write a JS program that monitors the current thickness of the crystal and recommends the next procedure that will bring it closer to the desired frequency.
// To reduce waste and the time it takes to make each crystal your program needs to complete the process with the least number of operations.Each operation takes the same amount of time, but since they are done at different parts of the factory,
// the crystals have to be transported and thoroughly washed every time an operation different from the previous must be performed, so this must also be taken into account.When determining the order, always attempt to start from the operation that removes the largest amount of material.
// The different operations you can perform are the following:
// · Cut – cuts the crystal in 4
// · Lap – removes 20 % of the crystal’s thickness
// · Grind – removes 20 microns of thickness
// · Etch – removes 2 microns of thickness
// · X - ray – increases the thickness of the crystal by 1 micron; this operation can only be done once!
// · Transporting and washing – removes any imperfections smaller than 1 micron(round down the number); do this after every batch of operations that remove material
// At the beginning of your program, you will receive a number representing the desired final thickness and a series of numbers, representing the thickness of crystal ore in microns.Process each chunk and print to the console the order of operations and the number of times they need to be repeated to bring them to the desired thickness.
// The input comes as a numeric array with a variable number of elements.The first number is the target thickness and all following numbers are the thickness of different chunks of quartz ore.
// The output is the order of operation and how many times they are repeated, every operation on a new line.See the examples for more information.

function radioCrystals(arr) {
        let targetThickness = arr[0];

        for (let i = 1; i < arr.length; i++) {
            let currentChunk = arr[i];
            let cutCounter = 0;
            let lapCounter = 0;
            let grindCounter = 0;
            let etchCounter = 0;
            let xRay = 0;
            console.log(`Processing chunk ${currentChunk} microns`)
            const cut = (number) => number / 4;
            const lap = (number) => number -= number * 0.2;
            const grind = (number) => number -= 20;
            const etch = (number) => number -= 2;
            const xray = (number) => number += 1;
            while (currentChunk !== targetThickness) {
                while (cut(currentChunk) >= targetThickness) {
                    currentChunk = cut(currentChunk);
                    cutCounter++;
                    continue;
                }
                currentChunk = Math.floor(currentChunk);
                if (cutCounter !== 0) {
                    console.log(`Cut x${cutCounter}`);
                    console.log('Transporting and washing');
                }
                while (lap(currentChunk) >= targetThickness) {
                    currentChunk = lap(currentChunk);
                    lapCounter++;
                    continue;
                }
                currentChunk = Math.floor(currentChunk);
                if (lapCounter !== 0) {
                    console.log(`Lap x${lapCounter}`);
                    console.log('Transporting and washing');
                }
                while (grind(currentChunk) >= targetThickness) {
                    currentChunk = grind(currentChunk);
                    grindCounter++;
                    continue;
                }
                currentChunk = Math.floor(currentChunk);
                if (grindCounter !== 0) {
                    console.log(`Grind x${grindCounter}`);
                    console.log('Transporting and washing');
                }
                while (etch(currentChunk) >= targetThickness - 1) {
                    currentChunk = etch(currentChunk);
                    etchCounter++;
                    continue;
                }
                currentChunk = Math.floor(currentChunk);
                if (etchCounter !== 0) {
                    console.log(`Etch x${etchCounter}`);
                    console.log('Transporting and washing');
                }
                if (xRay < 1) {
                    if (targetThickness === currentChunk + 1) {
                        currentChunk += 1;
                        xRay++;
                    }
                }
                currentChunk = Math.floor(currentChunk);
                if (xRay !== 0) {
                    console.log(`X-ray x${xRay}`);
                }
            }
            console.log(`Finished crystal ${currentChunk} microns`);
        }
    }


radioCrystals([1000, 1000, 8100])