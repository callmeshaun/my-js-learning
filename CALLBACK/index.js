//callback = a function passed as an argument to
//             another function

// used to handle async operations:
// read files
//interact with a database
// when done call the next function


// hello(wait)

// function hello(callback){
  
//   console.log("Hello World");
//   callback()
  
// }

// function wait(){
//   console.log("Waiting ...");
  
// }


// function leave(){
//   console.log("Leaving ...")
// }

// function goodbye(){
//   console.log("Goodbye World");
// }

sum(displayPage,6,10)

function sum(callback,x,y){
  let result = x + y;
  callback(result)
}

function display(result){
  console.log(result)
}

function displayPage(result){
  document.getElementById("myh1").textContent=result;

  
}