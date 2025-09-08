//rest =(...rest) allow a function work with a variable number 
//of argument by bundling them into an array

//opposite of spread operators

// function open(...foods){
// console.log(...foods);

// }
// function get(...foods){
//   return foods
// }
// const food1 ="pizza"
// const food2 ="burger"
// const food3 ="hotdog"
// const food4 ="pasta"

// // open(food1,food2,food3,food4)

// const foods = get(food1,food2,food3,food4)
// console.log(foods);


// function sum(...numbers){

//   let res=0
//   for (let number of numbers){
//     res+=number

//   }
//   return res
// }

// const total = sum(1,2,3,4)
// console.log(total);

// function getAverage(...numbers){

//   let res=0
//   for (let number of numbers){
//     res+=number

//   }
//   return res/numbers.length
// }

// const total = getAverage(1,2,3,4)
// console.log(total);

function combine(...strings){
  return strings.join(" ")
}
const name =combine("mr" , "shaunak" ,"sur")
console.log(name);



