// Write a function, which receives two parameters.

// The first parameter will be a string with some words separated by ', '.

// The second parameter will be a string that contains templates containing '*'.

// Find the word with the same length as the template and replace it.


function revealWords(words, text) {
    let currentWords = words.split(', ');
    let textWords = text.split(' ');
    for (i = 0; i < textWords.length; i++) {
        if (textWords[i].startsWith('*')) {
            for (y = 0; y < currentWords.length; y++){
                if (textWords[i].length === currentWords[y].length){
                    textWords[i] = currentWords[y];
                    break;
                }
            }
        }
    }
    console.log(textWords.join(' '))
}

revealWords('great',
'softuni is ***** place for learning new programming languages')