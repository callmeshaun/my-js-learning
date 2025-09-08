// arrow function = a conccise way to write a function expression
//                  good for simple functions that you use only
//                  once(parameters)=>some code


// const hello =(name,age)=>{console.log(`Hello ${name}`)
//                       console.log('you are '+age+' years old')}
// hello('Bro',21)

// setTimeout(function(){
//     console.log('Hello')
// },3000)

// setTimeout(()=>console.log('Hello'),3000)

const numbers =[1,2,3,4,5,6,7,8,9,10]

//const squares = numbers.map((element)=>Math.pow(element,2))
const cubes = numbers.map((element)=>Math.pow(element,3))
const evens = numbers.filter((element)=>element%2===0)
const odds = numbers.filter((element)=>element%2!==0)
const total = numbers.reduce((accumulator,element)=>
  accumulator+element)

//console.log(cubes);
//console.log(evens);
//console.log(odds);
console.log(total);

