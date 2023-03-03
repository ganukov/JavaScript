function printCertificate(grade, [firstName, lastName]) {
    printCertificateBody();
    printNames();
    getGrade();
    function printCertificateBody() {
        console.log(`----{@}----`);
        console.log(`--Certificate--`);
        console.log(`--- ---- ---`);
    }

    function printNames() {
        console.log(`${firstName} ${lastName}`);
    }

    function getGrade() {
        if (grade > 5.00) {
            console.log(`Very Good ${grade}`)
        }
        else {
            console.log(`Student does not qualify.`)
        }
    }
}

printCertificate(
    4.25,
    ['Georgi', 'Ganukov']
);