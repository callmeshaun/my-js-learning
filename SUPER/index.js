// SUPER = keyword is used in classes to call
//         the constructor or access the properties and methods
//         of a parent (superclass).

//this = this object
//super = this parent

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  move(){
    console.log(`${this.name} is moving a speed of ${this.speed}`);
  }
}

class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);

    this.runSpeed = runSpeed;
  }

  run(){
    console.log(`${this.name} is running a speed of ${this.runSpeed}`);
  }
}

class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);

    this.swimSpeed = swimSpeed;
  }

  swim(){
    console.log(`${this.name} is swimming a speed of ${this.swimSpeed}`);
  }
}

class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);

    this.flySpeed = flySpeed;
  }

  fly(){
    console.log(`${this.name} is flying a speed of ${this.flySpeed}`);
  }
}

const rabbit = new Rabbit("Bunny", 2, 30);
const fish = new Fish("Nemo", 1, 10);
const hawk = new Hawk("Eagle", 4, 50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run();

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
fish.swim();

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
hawk.fly();
