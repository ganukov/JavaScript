function storeMovies(input) {
    const movies = [];
    for (let i = 0; i < input.length; i++) {
      let command = input[i].split(" ");
      if (command[0] === "addMovie") {
        movies.push({ name: command.slice(1).join(" "), director: "", date: "" });
      } else {
        let movie = movies.find((m) => m.name === command[0]);
        if (movie) {
          if (command[1] === "directedBy") {
            movie.director = command.slice(2).join(" ");
          } else if (command[1] === "onDate") {
            movie.date = command.slice(2).join(" ");
          }
        }
      }
    }
    let validMovies = movies.filter(
      (m) => m.name && m.director && m.date
    );
    console.log(JSON.stringify(validMovies));
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