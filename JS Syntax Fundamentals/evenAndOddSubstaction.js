function evenAndOddSubstaction(arr) {
    let evens = [];
    let odds = [];
    let evensResult = 0;
    let oddsResult = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
        if (arr[i] % 2 === 0) {
            evensResult += arr[i];
        } else {
            oddsResult += arr[i];
        }
    }
    console.log(evensResult - oddsResult)
}

evenAndOddSubstaction([1, 2, 3, 4, 5, 6])
evenAndOddSubstaction([2, 4, 6, 8, 10])