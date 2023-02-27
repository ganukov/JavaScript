function circleArea(number) {
    let result;
    if (typeof(number) === 'number') {
        result = Math.pow(number,2)*Math.PI;
        console.log(result.toFixed(2))

    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof(number)}.`)
    }
}

circleArea(5)
circleArea('name')