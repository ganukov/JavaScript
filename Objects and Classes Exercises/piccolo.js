function solve(input) {
    let cars = {};
    for (const each of input) {
        let [command, reg] = each.split(', ');
        if (command === 'IN') {
            cars[reg] = 1;
        } else if (command === 'OUT') {
            delete cars[reg]
        }
    }
    let sortedByAscending = Object.entries(cars);
    sortedByAscending.sort((a, b) => a[0].localeCompare(b[0]));
    let newSorted = Object.fromEntries(sortedByAscending)
    if (Object.keys(cars).length > 0) {
        for (const regisration in newSorted) {
            console.log(`${regisration}`)
        }
    }else{
        console.log('Parking Lot is Empty')
    }
}

solve(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'])