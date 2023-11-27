
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
    speedUp<T>(add_speed: T):T;
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
    
    speedUp<T>(add_speed: T): T {

        if (typeof add_speed === 'number') {
            this.speed.max += add_speed as number;
        }

        return this.speed as T;
    }
}

const speed: speedType  = {min:100, max:200} ;
const price: priceType = {total:'23.3432', credit:'23.234', discount: 32};

const gentra = new Car('Js', 'blue', true, speed , price);

let result_spedd = gentra.speedUp<number>(20);
console.log(result_spedd);
