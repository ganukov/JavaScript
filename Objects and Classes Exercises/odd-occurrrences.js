function solve(text) {
    let words = {};
    let oddWords = [];
    for (const each of text.toLowerCase().split(' ')) {
        if (!(each in words)) {
            words[each] = 1;
        } else {
            words[each] += 1;
        }
    }
    for (const word in words) {
        if (words[word] % 2 !== 0){
            oddWords.push(word);
        }
    }
    console.log(oddWords.join(' '))
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')