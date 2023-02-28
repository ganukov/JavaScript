// Write a function that receives an array and the number of rotations you have to perform.

// Note: Depending on the number of rotations, the first element goes to the end.

function arrayRotation(arr, number) {
    for (let i = 0; i < number; i++) {
        arr.push(arr[i]);
    }
    for (let i = 0; i < number; i++) {
        arr.shift(arr[i])
    }
    console.log(arr.join(' '))

}

arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)