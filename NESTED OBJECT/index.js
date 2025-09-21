// nested object = objects inside of other objects
//                 Allows you to represnt more complex data structures
//                 Child onjects is enclosed by a Parent object

//                 Person{Address{} , ContactInfo{}}
//                 ShoppingCart{keyboard{}, Mouse{}, Monitor{}}


// const person = {
//     fullName: 'John Doe',
//     age: 30,
//     isStudent: false,
//     hobbies: ['music', 'sports', 'movies'],
//     address: {
//         street: '123 Main St',
//         city: 'New York',
//         country: 'USA'
//     }
//   }

//   for(const property in person.address){
//     console.log(person.address[property])
//   }

  // console.log(person.fullName)
  // console.log(person.age)
  // console.log(person.isStudent)
  // console.log(person.hobbies)
  // console.log(person.hobbies[1])
  // console.log(person.address)
  // console.log(person.address.city)

class Person{
    constructor(name , age , ...address)  {
        this.name = name
        this.age = age
        this.address = new Address(...address)
    } 
}

class Address{
    constructor(street, city, country){
        this.street = street
        this.city = city
        this.country = country
    }
}

const person1 = new Person('John Doe', 30, '123 Main St', 'New York', 'USA')
const person2 = new Person('Jane Doe', 25, '456 Main St', 'Los Angeles', 'USA')
const person3 = new Person('Jack Doe', 35, '789 Main St', 'Chicago', 'USA')

console.log(person3.address)
console.log(person3.address.city)
console.log(person3.address.country)