//element selector = Methods used to target and manipulate HTMl 
//                   elements .They allow you to select one or multiple
//                   HTML elements from the DOM (Document Object Model)

//1.document.getElementById()//ELEMENT OR NULL
//2.document.getElementsClassName() //HTML COLLECTION
//3.document.getElementsByTagname() //HTML COLLECTION
//4.document.querySelector() //ELEMENT OR NULL
//5.document.querySelectorAll() //NODE LIST


// const myHeading = document.getElementById("myfood");
// myHeading.style.backgroundColor="yellow"
// myHeading.style.textAlign="center"

// console.log(myHeading)

const fruits = document.getElementsByClassName("fruits")

// fruits[2].style.backgroundColor="yellow"

// console.log(fruits)

// for (let fruit of fruits){

//   fruit.style.backgroundColor="yellow"
// }

// Array.from(fruits).forEach(fruit=>{
//   fruit.style.backgroundColor = "yellow";
// })

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

//h4Elements[0].style.color = "yellow";

// for(let h4Element of h4Elements){
//   h4Element.style.backgroundColor="yellow"
// }

// for (let liElement of liElements){
//   liElement.style.backgroundColor="green"
// }

// Array.from(h4Elements).forEach(h4=>{
//   h4.style.backgroundColor = "yellow";
// })

// Array.from(liElements).forEach(li=>{
//   li.style.backgroundColor = "green";
// })


const element = document.querySelector(".fruits");

// element.style.backgroundColor = "yellow";

const fruitss = document.querySelectorAll("li");

//fruitss[0].style.backgroundColor = "yellow";

fruitss.forEach(food => {
    food.style.backgroundColor = "yellow";
});

