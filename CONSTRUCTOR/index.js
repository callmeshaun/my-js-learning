//constructor = special method for defining the 
//              properties and methods of an object

function Car(brand, model, year,color){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){
        console.log("You drive the car "+this.model);
    }
}

const car1 = new Car("Toyota", "Corolla", 2020, "White");
const car2 = new Car("Honda", "Civic", 2021, "Black");
const car3 = new Car("Ford", "Mustang", 2022, "Red");

// console.log(car1.brand);
// console.log(car1.model);
// console.log(car1.year);
// console.log(car1.color);

// console.log(car2.brand);
// console.log(car2.model);
// console.log(car2.year);
// console.log(car2.color);

// console.log(car3.brand);
// console.log(car3.model);
// console.log(car3.year);
// console.log(car3.color);  

car1.drive();
car2.drive();
car3.drive();

