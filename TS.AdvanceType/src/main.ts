//step-1
// let obj_one = {name: "Bahriddin", age: 20};
// let obj_two: typeof obj_one;
// obj_two = {name: 'Lazizbek', age:20};

type speedType = {
    max: number;
    min: number;
};

type priceType = {
    total: string;
    credit: string;
    discount: number;
};

interface ICar{
    name: string;
    color: string;
    isBallon: boolean;
    speed: speedType;
    price: priceType;
};

class Car implements ICar{
    name: string;
    color: string;
    isBallon: boolean;
    speed: speedType;
    price: priceType;

    constructor(name: string, color: string, 
        isBallon: boolean, speed: speedType, price:priceType){
            this.name = name;
            this.color = color;
            this.isBallon = isBallon;
            this.speed = speed;
            this.price = price;
    }

}