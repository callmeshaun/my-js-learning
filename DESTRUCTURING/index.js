//destructuring = extract values from arrays and objects ,
//                and assign them to variables in a convenient way.
//                []=to perform array destructuring
//                {}=to perform object destructuring

//swap variables
// let a=1;
// let b=2;

// [a,b] = [b,a]  
// console.log(a)
// console.log(b)

// const colors = ['red','green','blue','black','white'];

// [colors[0],colors[4]] = [colors[4],colors[0]]  //swapping colors
// console.log(colors)

// const colors = ['red','green','blue','black','white'];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;  //rest pattern
// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);  //extra colors in an array


// const person1 = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 30,
//   job: 'Developer',
  
// }

// const person2 = {
//   firstName: 'Jane',
//   lastName: 'smith',
//   age: 26,
  
// }

// const {firstName, lastName, age, job} = person1;  //default value for job
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// const {firstName, lastName, age, job='unemployed'} = person2;  //default value for job
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

//DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job='unemployed'}){  //default value for job{
  console.log(firstName);
  console.log(lastName);
  console.log(age);
  console.log(job);
  console.log('-------------------');
}


const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  job: 'Developer',
  
}

const person2 = {
  firstName: 'Jane',
  lastName: 'smith',
  age: 26,
  
}

//displayPerson(person1);
displayPerson(person2);











