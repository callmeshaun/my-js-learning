//setTimeout() = function in js that allows you schedule
//                the execution of a function after an amount of time(ms)
//                Times are approximate,(varies based on workload of the js runtime)

//                setTimeout(callback, delay)

// function sayHello() {
//   window.alert("Hello");
// }
// setTimeout(sayHello, 3000); //calls sayHello after 3 seconds

//setTimeout(function(){window.alert("Hello")}, 3000); //calls sayHello after 3 seconds

// const timeoutiD =setTimeout(()=>window.alert("Hello"), 3000);

// clearTimeout(timeoutiD); //cancels the timeout

let timeoutID;

function startTimer() {
  timeoutID = setTimeout(() => window.alert("Hello"), 3000);
  console.log("Timer started");
}

function clearTimer() {
  clearTimeout(timeoutID);
  console.log("Timer cleared");
}
