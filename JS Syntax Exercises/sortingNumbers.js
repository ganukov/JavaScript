// Write a function that sorts an array of numbers so that the first element is the smallest one,
//  the second is the biggest one, the third is the second smallest one, the fourth is the second biggest one,
//   and so on.

// Return the resulting array.

function sortingNumbers(array) {
    let newArray = [];
    while (array.length) {
        let smallest = Math.min(...array);
        let biggest = Math.max(...array);
        newArray.push(smallest);
        newArray.push(biggest);
        array.splice(array.indexOf(smallest), 1);
        array.splice(array.indexOf(biggest), 1);
    }
    console.log(newArray);
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])