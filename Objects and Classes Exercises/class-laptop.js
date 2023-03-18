class Laptop {
    constructor(info, quality) {
        this.info = info;
        this.quality = quality;
        this.isOn = false;
    }

    get info() {
        return this._info;
    }

    set info(value) {
        this._info = {
            producer: value.producer,
            age: value.age,
            brand: value.brand,
        }
    }
    turnOn() {
        this.isOn = true;
        this.quality -= 1;
    }
    turnOff() {
        this.isOn = false;
        this.quality -= 1;
    }
    showInfo() {
        return JSON.stringify(this.info)
    }

    get price() {
        return Number(800 - (this._info.age * 2) + (this.quality * 0.5));
    }
}

let info = {producer: "Lenovo", age: 1,

brand: "Legion"}

let laptop = new Laptop(info, 10)

laptop.turnOn()

console.log(laptop.showInfo())

laptop.turnOff()

laptop.turnOn()

laptop.turnOff()

console.log(laptop.isOn)