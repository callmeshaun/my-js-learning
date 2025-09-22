// sort() = method used to sort elements of an array in place
//          sort elements as strings in lexicographical (alphabetical/numeric) order


// let numbers = [1,10,2,9,3,8,4,7,5,6];

// numbers.sort((a,b)=> b-a);
// console.log(numbers); // [1,10,2,3,4,5,6,7,8,9]

const people =[{name: 'John', age: 30, gpa:3.0},
{name: 'Jane', age: 25, gpa:3.5},
{name: 'Jim', age: 27, gpa:2.8},
{name: 'Jake', age: 35, gpa:3.8},
{name: 'Jill', age: 22, gpa:3.2},
]

// people.sort((a,b)=> b.gpa - a.gpa); 
// console.log(people);

people.sort((a,b)=> a.name.localeCompare(b.name));
console.log(people);