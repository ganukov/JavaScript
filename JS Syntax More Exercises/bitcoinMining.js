// Write a JavaScript program that calculates the total amount of bitcoins you purchased
// with the gold you mined during your shift at the mine. Your shift consists of a certain number of days
// where you mine an amount of gold in grams. Your program will receive an array with the amount of gold you mined each day, 
// where the first day of your shift is the first index of the array. Also, someone was stealing every third day
// from the start of your shift 30% from the mined gold for this day. You need to check,
// which day you have enough money to buy your first bitcoin. For the different exchanges use these prices: 

function bitcoinMining(arr) {
    let totalMoneyEarned = 0;
    let bought = 0;
    let day = 0;
    for (let i = 0; i < arr.length; i++) {
        let goldADay = arr[i];
        if (i % 2 === 0 && i !== 0) {
            totalMoneyEarned += (goldADay - (goldADay * 0.3)) * 67.51;
        } else {
            totalMoneyEarned += goldADay * 67.51;
        }
        if (totalMoneyEarned >= 11949.16) {
            bought += Math.floor(totalMoneyEarned / 11949.16);
            totalMoneyEarned -= Math.floor(totalMoneyEarned / 11949.16) * 11949.16;
            if (day === 0) {
                day = i + 1;
            }
        }
    }
    console.log(`Bought bitcoins:  ${bought}`);
    if (day !== 0) {
        console.log(`Day of the first purchased bitcoin ${day}`);
    }
    console.log(`Left money: ${totalMoneyEarned.toFixed(2)} lv.`)
}

bitcoinMining([3124.15, 504.212, 2511.124])