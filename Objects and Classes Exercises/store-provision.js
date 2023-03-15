function solve(inputOne, inputTwo) {
    let currentProducts = {};
    let delivery = {};
    for (let i = 0; i < inputOne.length; i++) {
        if (i % 2 === 0) {
            currentProducts[inputOne[i]] = Number(inputOne[i + 1]);
        }
    }
    for (let i = 0; i < inputTwo.length; i++) {
        if (i % 2 === 0) {
            delivery[inputTwo[i]] = Number(inputTwo[i + 1]);
        }
    }
    for (const each in delivery) {
        if (currentProducts.hasOwnProperty(each)) {
            currentProducts[each] += delivery[each];
        } else {
            currentProducts[each] = delivery[each];
        }
    }
    for (const product in currentProducts ) {
        console.log(`${product} -> ${currentProducts[product]}`)
    }
}

solve([

    'Chips', '5', 'CocaCola', '9', 'Bananas',

    '14', 'Pasta', '4', 'Beer', '2'

],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',

        'Tomatoes', '70', 'Bananas', '30'

    ])