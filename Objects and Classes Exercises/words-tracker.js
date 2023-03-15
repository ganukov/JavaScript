function solve(input) {
    let targetWords = input.shift().split(' ');
    let words = {};

    for (const each of targetWords) {
        words[each] = 0
    }

    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        for (const word in words) {
            if (word === element) {
                words[word] += 1;
            }
        }
    }
    
    let sortedWord = Object.entries(words);

    sortedWord.sort((a, b) => b[1] - a[1]);
    let newSortedWords = Object.fromEntries(sortedWord);
    for (const key in newSortedWords) {
        console.log(`${key} - ${newSortedWords[key]}`)
    }

}

solve([

    'this sentence',

    'In', 'this', 'sentence', 'you', 'have',

    'to', 'count', 'the', 'occurrences', 'of',

    'the', 'words', 'this', 'and', 'sentence',

    'because', 'this', 'is', 'your', 'task'

])