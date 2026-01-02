//DOM Navigation = The process of navigating through the
//                   structure of an HTML document using JavaScript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children


// firstElementChild

// const element = document.getElementById("desserts");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";
// console.log(firstChild);

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement=>{
//   const firstChild = ulElement.firstElementChild;
//   firstChild.style.backgroundColor = "yellow";
// })


// lastElementChild

// const element = document.getElementById("vegetables");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement=>{
//   const lastChild = ulElement.lastElementChild;
//   lastChild.style.backgroundColor = "yellow";
// })


// nextElementSibling

// const element = document.getElementById("vegetables");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";


// previousElementSibling

// const element = document.getElementById("pie");
// const previousSibling = element.previousElementSibling;
// previousSibling.style.backgroundColor = "yellow";


// parentElement

// const element = document.getElementById("orange");
// const parentElement = element.parentElement;
// parentElement.style.backgroundColor = "yellow";


// children

const element = document.getElementById("vegetables");
const children = element.children;

// Array.from(children).forEach(child=>{
//   child.style.backgroundColor = "yellow";
// })

children[1].style.backgroundColor = "yellow";