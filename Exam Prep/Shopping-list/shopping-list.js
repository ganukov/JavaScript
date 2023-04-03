function solve(input) {
    let products = input.shift().split('!');

    for (const line of input) {
        let [command, product, _newItem] = line.split(' ');
        if (command === 'Urgent') {
            if (!products.includes(product)) {
                products.unshift(product)
            }
        } else if (command === 'Unnecessary') {
            if (products.includes(product)) {
                // 2nd parameter means remove one item only
                products.splice(products.indexOf(product), 1);
            }
        } else if (command === 'Correct') {
            if (products.includes(product)) {
                products.splice(products.indexOf(product), 1, _newItem)
            }
        } else if (command === 'Rearrange') {
            if (products.includes(product)) {
                // 2nd parameter means remove one item only
                products.splice(products.indexOf(product), 1);
                products.push(product);
            }
        } else if (line === 'Go Shopping!') {
            console.log(products.join(', '))
        }
    }
}

solve((["Milk!Pepper!Salt!Water!Banana",

    "Urgent Salt",

    "Unnecessary Grapes",

    "Correct Pepper Onion",

    "Rearrange Grapes",

    "Correct Tomatoes Potatoes",

    "Go Shopping!"]))