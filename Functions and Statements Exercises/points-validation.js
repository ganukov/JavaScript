// Write a JS program that receives two points in the format [x1, y1, x2, y2] and checks if the distances between each point (x, y) and the start of the Cartesian coordinate system (0, 0) and between the points themselves is valid. 
// A distance between two points is considered valid if it is an integer value.
// · In case a distance is valid print: `{x1, y1} to {x2, y2} is valid`
// · In case the distance is invalid print: `{x1, y1} to {x2, y2} is invalid`
// The order of comparisons should always be first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}.

function pointsValidation(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
    let distance1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let distance2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
    let distance3 = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    if (Number.isInteger(distance1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

pointsValidation([3, 0, 0, 4])