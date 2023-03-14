function meetings(input) {
    let schedule = {};
    for (const line of input) {
        let [day, name] = line.split(' ');
        if (!(day in schedule)) {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`);
        }
        else {
            console.log(`Conflict on ${day}!`);
        }
    }
    for (const key in schedule) {
        console.log(`${key} -> ${schedule[key]}`);
    }
}

meetings(['Friday Bob',

    'Saturday Ted',

    'Monday Bill',

    'Monday John',

    'Wednesday George'])