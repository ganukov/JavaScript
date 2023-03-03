// Write a function that calculates the total price of an order and prints it on the console. The function should receive one of the following products: coffee, coke, water, snacks; and a quantity of the product. The prices for a single piece of each product are:

// · coffee - 1.50

// · water - 1.00

// · coke - 1.40

// · snacks - 2.00

// Print the result formatted to the second decimal place.

function orders(product, quantity) {
    let result = 0;
    switch (product) {
        case 'coffee':
            return (quantity * 1.50).toFixed(2);
        case 'water':
            return (quantity * 1.00).toFixed(2);
        case 'coke':
            return (quantity * 1.40).toFixed(2);
        case 'snacks':
            return (quantity * 2.00).toFixed(2)
    }
} 

console.log(orders('coffee',10))