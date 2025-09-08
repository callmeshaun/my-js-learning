// .reduce()=reduce the element of an array to a 
//           single value

// const prices = [10, 20, 30, 40, 50];

// const total =prices.reduce(sum)

// console.log(total.toFixed(2));


// function sum(accumulator, element){
//     return accumulator + element;
// }

const grades = [10, 20, 30, 40, 50];

const maximum =grades.reduce(max)
const minimum =grades.reduce(min)

//console.log(maximum);
console.log(minimum);

function max(accumulator, element){
    return Math.max(accumulator, element);
}
function min(accumulator, element){
    return Math.min(accumulator, element);
}
