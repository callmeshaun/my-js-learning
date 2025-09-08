// allows an iterable such as an array or string 
// to be expanded into seprate elements

// let numbers =[1,2,3,4]
// let max = Math.max(...numbers)
// let min = Math.min(...numbers)

// console.log(min);

// let username ="shaunak sur"
// let letters =[...username].join("-")

// console.log(letters);

let fruits=["apple","orange" ,"banana"]
let veg =["carrot","tomato"]
let foods=[...fruits,...veg,"eggs","milk"]
console.log(foods);


