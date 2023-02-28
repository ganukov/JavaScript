// You will receive a single string.

// This string is written in PascalCase format. Your task here is to split this string by every word in it.

// Print them joined by comma and space.

function pascalCaseSpliter(text) {
    let words = text.replace(/([A-Z])/g, ' $1').trim().split(' ');
    console.log(words.join(', '));
}

pascalCaseSpliter('SplitMeIfYouCanHaHaYouCantOrYouCan')