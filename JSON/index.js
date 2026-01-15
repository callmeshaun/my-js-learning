// //JSON - JavaScript Object Notation data interchange format
// //        used for data exchange between a server and a web application
// //        Json files {key:value} OR [value1 , value2 , value3]

// //        JSON.stringify() - converts a JavaScript object into a JSON string
// //        JSON.parse() - converts a JSON string into a JavaScript object

// const jsonNames = `["John", "Jane", "Jack", "Jill"]`
// const jsonPerson = `{
//   "name": "John",
//   "age": 30,
//   "isEmployed": true,
//   "hobbies": ["reading", "traveling", "sports"]
// }`;

// const jsonPeople = `[{"name": "John",
//   "age": 30,
//   "isEmployed": true
  
// },

// {
//   "name": "Jane",
//   "age": 25,
//   "isEmployed": false
// },

// {
//   "name": "Jack",
//   "age": 35,
//   "isEmployed": true

// },

// {
//   "name": "Jill",
//   "age": 28,
//   "isEmployed": false

// }]`

// // const jsonString = JSON.stringify(names)
// // console.log(jsonString)

// // const jsonPerson = JSON.stringify(person)
// // console.log(jsonPerson)

// // const jsonPeople = JSON.stringify(people)
// // console.log(jsonPeople)

// // const parseData = JSON.parse(jsonNames)
// // console.log(parseData)

// // const parseData = JSON.parse(jsonPerson)
// // console.log(parseData);

// const parseData = JSON.parse(jsonPeople)
// console.log(parseData)


//promise
fetch("people.json")
.then(response => response.json())
.then(values => values.forEach(value => console.log(value)))
.catch(error => console.log(error))