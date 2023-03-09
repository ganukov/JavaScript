function passwordValidator(password) {
    const isValidLength = (pass) => pass.length >= 6 && pass.length <= 10;
    const hasOnlyLettersAndDigits = (pass) => /^[A-Za-z0-9]+$/g.test(pass);
    const hasAtleastTwoDigits = (pass) => [...pass.matchAll(/\d/g)].length >= 2;
    let passwordValid = true;

    if (!isValidLength(password)) {
        console.log('Password must be between 6 and 10 characters');
        passwordValid = false;
    }
    if (!hasOnlyLettersAndDigits(password)) {
        console.log('Password must consist only of letters and digits');
        passwordValid = false;
    }
    if (!hasAtleastTwoDigits(password)) {
        console.log('Password must have at least 2 digits');
        passwordValid = false;
    }
    if (passwordValid) {
        console.log('Password is valid')
    }

}


passwordValidator('logIn')