// Write a function that determines whether a driver is within the speed limit.
// You will receive the speed and the area. Each area has a different limit:
// · On the motorway, the limit is 130 km/h
// · On the interstate, the limit is 90 km/h
// · In the city, the limit is 50 km/h
// · Within a residential area, the limit is 20 km/h
// If the driver is within the limits,
// there should be a printed speed and the speed limit.
// `Driving {speed} km/h in a {speed limit} zone`
// If the driver is over the limit, however,
//  your function should print the severity of the infraction and the difference in speeds.
// `The speed is {difference} km/h faster than the allowed speed
//  of {speed limit} - {status}`
// For speeding up to 20 km/h over the limit, the status should be speeding.
// For speeding up to 40 km/h over the limit, the status should be excessive speeding.
// For anything else, status should be reckless driving.
// The input comes as 2 string parameters. 
// The first element is the current speed (number), the second element is the area.
// The output should be printed on the console.

function speedRadar(speed, place) {
    let mySpeed;
    switch (place) {
        case 'motorway':
            if (speed <= 130) {
                console.log(`Driving ${speed} km/h in a 130 zone`)
            } else {
                mySpeed = speed - 130;
                if (mySpeed <= 20) {
                    console.log(`The speed is ${mySpeed} km/h faster than the allowed speed of 130 - speeding`)
                } else if (mySpeed > 20 && mySpeed <= 40) {
                    console.log(`The speed is ${mySpeed} km/h faster than the allowed speed of 130 - excessive speeding`)
                } else {
                    console.log(`The speed is ${mySpeed} km/h faster than the allowed speed of 130 - reckless driving`)
                }
            }
            break;
        case 'interstate':

            if (speed <= 90) {
                console.log(`Driving ${speed} km/h in a 90 zone`)
            } else {
                mySpeed = speed - 90
                if (mySpeed <= 20) {
                    console.log(`The speed is ${mySpeed} km/h faster than the allowed speed of 90 - speeding`)
                } else if (mySpeed > 20 && mySpeed <= 40) {
                    console.log(`The speed is ${mySpeed} km/h faster than the allowed speed of 90 - excessive speeding`)
                } else {
                    console.log(`The speed is ${mySpeed} km/h faster than the allowed speed of 90 - reckless driving`)
                }
            }
            break;
        case 'city':

            if (speed <= 50) {
                console.log(`Driving ${speed} km/h in a 50 zone`)
            } else {
                mySpeed = speed - 50
                if (mySpeed <= 20) {
                    console.log(`The speed is ${mySpeed} km/h faster than the allowed speed of 50 - speeding`)
                } else if (mySpeed > 20 && mySpeed <= 40) {
                    console.log(`The speed is ${mySpeed} km/h faster than the allowed speed of 50 - excessive speeding`)
                } else {
                    console.log(`The speed is ${mySpeed} km/h faster than the allowed speed of 50 - reckless driving`)
                }
            }
            break;
            case 'residential':

            if (speed <= 20) {
                console.log(`Driving ${speed} km/h in a 20 zone`)
            } else {
                mySpeed = speed - 20
                if (mySpeed <= 20) {
                    console.log(`The speed is ${mySpeed} km/h faster than the allowed speed of 20 - speeding`)
                } else if (mySpeed > 20 && mySpeed <= 40) {
                    console.log(`The speed is ${mySpeed} km/h faster than the allowed speed of 20 - excessive speeding`)
                } else {
                    console.log(`The speed is ${mySpeed} km/h faster than the allowed speed of 20 - reckless driving`)
                }
            }
            break;
    }
}

speedRadar(120,'interstate')