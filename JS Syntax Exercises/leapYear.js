function leapYear(number) {
    if (number % 4 === 0 && number % 100 !== 0) {
        console.log('yes')
    }
    else if (number % 400 === 0) {
        console.log('yes')
    }
    else {
        console.log('no')
    }
}

leapYear(4)