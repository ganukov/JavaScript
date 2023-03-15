function storeMovies(input) {
    let movies = [];

    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(' ');
        let movie = {};
        if (line[0] === 'addMovie') {
            line.shift()
            let movie = { name: line.join(' ') };
            movies.push(movie);
        } else if (line.indexOf('directedBy') > -1) {
            let movieName = line.slice(0, line.indexOf('directedBy')).join(' ');
            let movie = movies.find(m => m.name === movieName); // search for movie with matching name
            if (movie) {
                movie['director'] = line.slice(line.indexOf('directedBy') + 1).join(' '); // add director information to movie
            }
        } else if (line.indexOf('onDate') > -1) {
            let movieName = line.slice(0, line.indexOf('onDate')).join(' ');
            let movie = movies.find(m => m.name === movieName);
            if (movie) {
                movie['date'] = line.slice(line.indexOf('onDate') + 1).join(' '); // add director information to movie
            }
        }
    }
    let validMovies = movies.filter(
        (m) => m.name && m.director && m.date
    )
    for (const each of validMovies) {
        console.log(JSON.stringify(each))
    }
}

storeMovies([

    'addMovie Fast and Furious',

    'addMovie Godfather',

    'Inception directedBy Christopher Nolan',

    'Godfather directedBy Francis Ford Coppola',

    'Godfather onDate 29.07.2018',

    'Fast and Furious onDate 30.07.2018',

    'Batman onDate 01.08.2018',

    'Fast and Furious directedBy Rob Cohen'

])