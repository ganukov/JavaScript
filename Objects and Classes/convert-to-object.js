function convertToObject(jsonString) {
    let data = JSON.parse(jsonString);
    for (const key in data) {
        console.log(`${key}: ${data[key]}`);
    }
}

convertToObject(['Chips', '5', 'CocaCola', '9', 'Bananas','14', 'Pasta', '4', 'Beer', '2']
)