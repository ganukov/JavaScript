function solve(input) {
    let airport = {};
    let [allFlights, newlyChecked, flightStatus] = input;

    for (let i = 0; i < allFlights.length; i++) {
        let flight = allFlights[i].split(' ').shift();
        let destination = allFlights[i].split(' ').slice(1).join(' ');
        airport[destination] = flight;
    }

    for (const newFlight of newlyChecked) {
        let [flight, newInfo] = newFlight.split(' ');
        for (const each in airport) {
            if (airport[each] === flight) {
                airport[each] = newInfo;
            }
        }
    }

    for (const a in airport) {
        if (String(flightStatus) === 'Ready to fly') {
            if (airport[a] !== 'Cancelled') {
                airport[a] = 'Ready to fly';
            } else {
                delete airport[a];
            }

        }
    }

    for (const a in airport) {
        if (airport[a] === flightStatus[0] && flightStatus[0] === 'Cancelled') {
            console.log(`{ Destination: '${a}', Status: '${airport[a]}' }`);
        } else if (String(flightStatus) === 'Ready to fly') {
            console.log(`{ Destination: '${a}', Status: '${airport[a]}' }`);
        }
    }
}

solve([['WN269 Delaware',

    'FL2269 Oregon',

    'WN498 Las Vegas',

    'WN3145 Ohio',

    'WN612 Alabama',

    'WN4010 New York',

    'WN1173 California',

    'DL2120 Texas',

    'KL5744 Illinois',

    'WN678 Pennsylvania'],

['DL2120 Cancelled',

    'WN612 Cancelled',

    'WN1173 Cancelled',

    'SK430 Cancelled'],

['Ready to fly']

])