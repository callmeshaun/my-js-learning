//.filter() = crerates a new array by filtering out elements that do not meet a certain condition

// const numbers = [1,2,3,4,5,6,7,8,9,10];
// let evenNumbers = numbers.filter(isEven);
// let oddNumbers = numbers.filter(isOdd);
// // console.log(evenNumbers);
// console.log(oddNumbers);


// function isEven(element){
//   return element % 2 === 0;
// }
// function isOdd(element){
//   return element % 2 !== 0;
// }

// const ages =[32,15,19,12,16,21,29];
// const adults = ages.filter(isAdult);
// const children = ages.filter(isChild);
// console.log(children);


// function isAdult(element){
//   return element >= 18;
// }
// function isChild(element){
//   return element < 18;
// }

const words = ['dog','wolf','by','family','eaten','camping','pomogranate'];
const shortWords = words.filter(getShort);
const longWords = words.filter(getLong);
console.log(longWords);


function getShort(element){
  return element.length <= 6;
}
function getLong(element){
  return element.length > 6;
}
