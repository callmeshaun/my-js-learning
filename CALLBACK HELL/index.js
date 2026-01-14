// Callback Hell = Situation in js where callbacks 
//                 are nested within callbacks to the degree
//                 that it becomes hard to read and maintain
//                 Old pattern to handle asynchronous functions.
//                  Use Promises + async/await to avoid Callback Hell

function task1(){
  console.log("Task1 complete")
}
function task2(){
  console.log("Task2 complete")
}
function task3(){
  console.log("Task3 complete")
}
function task4(){
  console.log("Task4 complete")
}

task1()
task2()
task3()
task4()
console.log("All tasks complete")

