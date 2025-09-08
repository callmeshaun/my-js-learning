// function declaration = define a resuable block of code
//                        that performs a specific task

// function expression = a way to define function as values or variables

// const hello = function() {
//   console.log('Hello World');
// };

// hello();

// setTimeout(function(){
//   console.log('Hello World');
  
// }, 3000);


 const numbers =[1,2,3,4,5,6];
// const squares=numbers.map(function (x){
//   return x*x;
// }
// )
// console.log(squares);

//declaration
// function square(x){
//   return x*x;
// }

// const cubes=numbers.map(function (element){
//   return element*element*element;
// });

// console.log(cubes);

// const evenNums = numbers.filter(function (element){
// return element%2===0;
// })

// console.log(evenNums);

// const oddNums = numbers.filter(function (element){
// return element%2!==0;
// })

// console.log(oddNums);


const total = numbers.reduce(function(accumulator, current){
  return accumulator + current;


})
console.log(total);

