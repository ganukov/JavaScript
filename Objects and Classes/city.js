function findCity(city) {
    const infos = Object.entries(city);
    for (const [key, value] of infos) {
        console.log(`${key} -> ${value}`);

    }
}

findCity({

    name: "Plovdiv",

    area: 389,

    population: 1162358,

    country: "Bulgaria",

    postCode: "4000"

})