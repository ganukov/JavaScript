// The input will be a single string.

// Find all special words starting with #. If the found special word does not consist only of letters,
// then it is invalid and should not be printed.

// Finally, print out all the special words you found without the label (#) on a new line.

function modernTimes(text) {
    let words = text.split(' ');
    let newWords = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith('#')) {
            specialWord = words[i].slice(1);
            if (/^[a-zA-Z]+$/.test(specialWord)) {
                newWords.push(specialWord);
            }
        }

    }
    for (let i = 0; i < newWords.length; i++){
        console.log(newWords[i])
    }
}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')