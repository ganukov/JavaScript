function solve(input) {
    let heroes = [];
    for (const each of input) {
        let [heroName,heroLevel,...heroItems] = each.split(' / ');
        heroes.push({heroName,heroLevel,heroItems})
    }
    heroes.sort((a, b) => a.heroLevel - b.heroLevel);
    for (const hero of heroes) {
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.heroLevel}`);
        console.log(`items => ${hero.heroItems.join(', ')}`);
    }
    
}

solve([

    'Isacc / 25 / Apple, GravityGun',
    
    'Derek / 12 / BarrelVest, DestructionSword',
    
    'Hes / 1 / Desolator, Sentinel, Antara'
    
    ])