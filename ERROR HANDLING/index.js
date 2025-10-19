//Error = An Object thaat is created to represent a problem that occurs
//        often with user input establishing a connection to a server
// try {} = code to try
// catch(error) {} = code to handle the error
// finally {} = code that will run regardless of the result
// throw = create a custom error

// try{
//   console.log(x');
//   //
// }

// catch(error){
//   console.error("An error occurred");
// }

// finally{
//   console.log("This will always run");
// }

// console.log("Program continues...");

try{

  const dividend = Number(window.prompt("Enter the dividend: "));
const divisor = Number(window.prompt("Enter the divisor: "));

if(divisor == 0){
  throw new Error("You cannot divide by zero");
}

if(isNaN(dividend) || isNaN(divisor)){
  throw new Error("You must enter valid numbers");
}

const result = dividend / divisor;

console.log(result);

}

catch(error){
  console.error(error);
}

console.log("Program continues...");


