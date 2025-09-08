// foreach() = method to iterate over an array and 
//             apply a specified functon (callback) to each element

//             array.forEach(callback)
//             element, index, array are provided


// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(cube);
// numbers.forEach(square);
// numbers.forEach(triple);
// numbers.forEach(double);
//  numbers.forEach(display);

// function double(element , index, array){

//   array[index] = element * 2;

// }

// function triple(element, index, array){

//   array[index] = element * 3;
// }

// function square(element, index, array){

//   array[index] = element * element;
// }

// function cube(element, index, array){

//   array[index] = element * element * element;
// }

// function display(element){
//     console.log(element);
// }

let fruits = ['apple', 'banana', 'mango', 'grape', 'orange'];
// fruits.forEach(upperCase);
// fruits.forEach(lowerCase);
fruits.forEach(capitalize);
fruits.forEach(display);

function upperCase(element, index, array){
  array[index] = element.toUpperCase();
}

function lowerCase(element, index, array){
  array[index]=element.toLowerCase();
}

function capitalize(element, index, array){
  array[index]=element.charAt(0).toUpperCase()+element.slice(1);
}

function display(element, index, array){
console.log(element)
}
