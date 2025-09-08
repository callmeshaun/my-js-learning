// this = reference to the current object
//        person.name = this.name

const person = {
    name: 'John',
    lastname: 'Doe',
    age: 30,
    sayHello: function() {
        console.log(`Hello, my name is  ${this.name}`);
        console.log(`Hello, my age is  ${this.age}`);
    },
    eat:function(){
        console.log(`${person.lastname}`);
    }

};
person.sayHello(); // Output: Hello, my name is John
person.eat(); // Output: Hello, my name is John

