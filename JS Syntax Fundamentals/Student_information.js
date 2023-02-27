function studentInformation(name,age,grade) {
    let output = `Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`;
    console.log(output);
}

studentInformation('John', 15, 5.54678)