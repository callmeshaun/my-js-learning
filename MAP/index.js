//.map() = accepts a callback function that function to each 
//          element of an array then return a new array


// const numbers = [1,2,3,4,5];
// // const squaredNumbers = numbers.map(square);
// const cubes = numbers.map(cube);

// // console.log(squaredNumbers);
// console.log(cubes);



// function square(element){
//     return Math.pow(element,2);
// }
// function cube(element){
//     return Math.pow(element,3);
// }


// const students = ["shaunak","john","sara","james"];
// const upperCaseStudents = students.map(upperCase);
// const lowerCaseStudents = students.map(lowerCase);

// //console.log(upperCaseStudents);
// console.log(lowerCaseStudents);

// function upperCase(element){
//     return element.toUpperCase();
// }

// function lowerCase(element){
//     return element.toLowerCase();
// }


const dates=["2023-05-01","2023-06-15","2023-07-20"];
const formattedDates = dates.map(formatDate);
console.log(formattedDates);


function formatDate(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;

}

