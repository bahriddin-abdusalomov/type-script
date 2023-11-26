"use strict";
class Car {
    get brand() {
        return this._brand;
    }
    set brand(val) {
        this._brand = val;
    }
    constructor(brand, model) {
        this._brand = brand;
        this.model = model;
    }
    drive() {
        console.log(`${this._brand} ${this.model} Let's goo... `);
    }
}
class BMW extends Car {
    constructor(brand, model) {
        super(brand, model);
    }
    BMW_drive() {
        this.drive();
    }
}
const Gentra = new Car("Chevrolet", "Gentra");
const bmw = new BMW("BMW", "jt5");
bmw.brand = "brand bmw";
console.log(bmw.brand);
bmw.BMW_drive();
