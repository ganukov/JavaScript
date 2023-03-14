function adressBookParser(input) {
    let adressBook = {};
    for (const line of input) {
        let [name, address] = line.split(':');
        adressBook[name] = address;
    }
    // Convert object to array of key-value pairs, sort by key, and create new object
    const sortedAddressBook = Object.fromEntries(
        Object.entries(adressBook).sort((a, b) => a[0].localeCompare(b[0]))
    );

    for (const key in sortedAddressBook) {
        console.log(`${key} -> ${sortedAddressBook[key]}`);
    }
}

adressBookParser(['Bob:Huxley Rd',

    'John:Milwaukee Crossing',

    'Peter:Fordem Ave',

    'Bob:Redwing Ave',

    'George:Mesta Crossing',

    'Ted:Gateway Way',

    'Bill:Gateway Way',

    'John:Grover Rd',

    'Peter:Huxley Rd',

    'Jeff:Gateway Way',

    'Jeff:Huxley Rd'])