//sunchronous = executes line by line consecutively in a sequence
//              code waits for each line to finish before moving on

//asynchronous = allows multiple lines of code to be executed at the same time
//               code does not wait for each line to finish before moving on

function func1(callback) {
  setTimeout(() => {console.log("Task 1");
                    callback()},3000);
}

function func2() {
  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4");
}

func1(func2);
