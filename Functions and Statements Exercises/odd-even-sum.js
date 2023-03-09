function passwordValidator(password) {
    let noSymbols = true;
    let numCount = 0;
    let chars = password.toString().split('');
    let realChars = chars.map(String);
    for (let char = 0; char < realChars.length; char++) {
        const element = realChars[char];
        console.log(Number.isInteger(element))
    }
}

passwordValidator('asdasd123')