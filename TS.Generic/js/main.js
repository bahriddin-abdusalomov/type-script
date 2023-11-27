"use strict";
;
class Car {
    constructor(name, color, isBallon, speed, price) {
        this.name = name;
        this.color = color;
        this.isBallon = isBallon;
        this.speed = speed;
        this.price = price;
    }
    speedUp(add_speed) {
        if (typeof add_speed === 'number') {
            this.speed.max += add_speed;
        }
        return this.speed;
    }
}
const speed = { min: 100, max: 200 };
const price = { total: '23.3432', credit: '23.234', discount: 32 };
const gentra = new Car('Js', 'blue', true, speed, price);
let result_spedd = gentra.speedUp(20);
console.log(result_spedd);
