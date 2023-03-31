function solve(input) {
    let numberOfSongs = input.shift();
    let albums = {};


    for (const each of input.splice(0, numberOfSongs)) {

        let [piece, composer, key] = each.split('|');
        albums[piece] = {
            composer,
            key,
        }
    }
    for (const line of input) {
        let command = line.split('|')[0];
        if (command === 'Add') {
            let piece = line.split('|')[1];
            let composer = line.split('|')[2];
            let key = line.split('|')[3];
            if (piece in albums) {
                console.log(`${piece} is already in the collection!`)
            } else {
                albums[piece] = {
                    composer,
                    key,
                }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            }
        } else if (command === 'Remove') {
            let piece = line.split('|')[1];
            if (piece in albums) {
                delete albums[piece];
                console.log(`Successfully removed ${piece}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        } else if (command === 'ChangeKey') {
            let piece = line.split('|')[1];
            let newKey = line.split('|')[2];
            if (piece in albums) {
                albums[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`)
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        } else if (command === 'Stop') {
            for (const song in albums) {
                console.log(`${song} -> Composer: ${albums[song].composer}, Key: ${albums[song].key}`)
            }
        }
    }
}





solve([

    '3',

    'Fur Elise|Beethoven|A Minor',

    'Moonlight Sonata|Beethoven|C# Minor',

    'Clair de Lune|Debussy|C# Minor',

    'Add|Sonata No.2|Chopin|B Minor',

    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',

    'Add|Fur Elise|Beethoven|C# Minor',

    'Remove|Clair de Lune',

    'ChangeKey|Moonlight Sonata|C# Major',

    'Stop'

])