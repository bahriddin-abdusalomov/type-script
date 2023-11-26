"use strict";
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    drive() {
        console.log("Let's goo baby:) !!!");
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
