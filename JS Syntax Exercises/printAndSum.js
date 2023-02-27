function printAndSum(startIndex, endIndex) {
    let total = '';
    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        total += i + ' ';
        sum += Number(i);
    }
    console.log(total)
    console.log(`Sum: ${sum}`)
}

printAndSum(0,26)