function personInfo(firstName, lastName, age) {
    age = Number(age)
    let person = { firstName, lastName, age, sayHello: function () {
        return `${this.firstName} ${this.lastName}`
    } }

    return person;
}

