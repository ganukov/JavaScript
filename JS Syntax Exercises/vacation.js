function vacation(countPeople, typeGroup, dayOfWeek) {
    let total;
    switch (typeGroup) {
        case 'Students':
            if (dayOfWeek === 'Friday') {
                total = countPeople * 8.45;
            }
            else if (dayOfWeek === 'Saturday') {
                total = countPeople * 9.80;
            }
            else if (dayOfWeek === 'Sunday') {
                total = countPeople * 10.46;
            }
            if (countPeople >= 30) {
                total -= total * 0.15
            }
            break;
        case 'Business':
            if (dayOfWeek === 'Friday') {
                total = countPeople * 10.90;
            }
            else if (dayOfWeek === 'Saturday') {
                total = countPeople * 15.60;
            }
            else if (dayOfWeek === 'Sunday') {
                total = countPeople * 16;
            }
            if (countPeople >= 100) {
                let onePerson;
                onePerson = total / countPeople;
                total -= 10 * onePerson;
            }
            break;
        case 'Regular':
            if (dayOfWeek === 'Friday') {
                total = countPeople * 15;
            }
            else if (dayOfWeek === 'Saturday') {
                total = countPeople * 20;
            }
            else if (dayOfWeek === 'Sunday') {
                total = countPeople * 22.50;
            }
            if (countPeople >= 10 && countPeople <= 20) {
                total -= total * 0.05;
            }
            break;
    }
    console.log(`Total price: ${total.toFixed(2)}`)
}

vacation(30,"Students","Sunday")
vacation(40,"Regular","Saturday")