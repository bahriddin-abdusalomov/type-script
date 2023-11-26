interface BaseCar{
    brand: string;
    model: string;
    
    drive(): void;
}

class Car implements BaseCar{
    brand: string;
    model: string;

    constructor(brand: string, model: string){
        this.brand = brand;
        this.model = model;
    } 

    drive(): void {
        console.log("Let's goo baby:) !!!");
    }

}


class BMW extends Car{
    constructor(brand: string, model: string){
        super(brand, model);
    }

    BMW_drive(){
        this.drive();
    }
}

const Gentra = new Car("Chevrolet", "Gentra");
const bmw = new BMW("BMW", "jt5");

bmw.brand = "brand bmw";
console.log(bmw.brand);
bmw.BMW_drive();