function perfectNumber(number) {
    let devs = [];
    for (let divider = 1; divider <= number; divider++) {
        if (number % divider === 0) {
            devs.push(divider);
        }
    }
    let sum = devs.reduce((a, b) => {
        return a + b;
    });
    if (sum / 2 === number){
        console.log("We have a perfect number!")
    }
    else {
        console.log("It's not so perfect.")
    }
}

perfectNumber(28);