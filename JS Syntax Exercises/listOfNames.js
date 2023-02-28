// You will receive an array of names. Sort them alphabetically in ascending order 
// and print a numbered list of all the names, each on a new line.

function listOfNames(names) {
    names.sort();
    for (let i = 0; i < names.length; i++) {
        console.log(`${i + 1}.${names[i]}`);
    }
}

listOfNames(["John",

"Bob",

"Christina",

"Ema"])