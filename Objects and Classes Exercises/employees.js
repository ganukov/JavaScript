function solve(input) {
    let employees = {};
    for (const each of input) {
        let personalNumber = each.length;
        employees[each] = personalNumber;
    }

    for (const employee in employees) {
        console.log(`Name: ${employee} -- Personal Number: ${employees[employee]}`)
    }
}

solve([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])