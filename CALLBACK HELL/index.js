// Callback Hell = Situation in js where callbacks 
//                 are nested within callbacks to the degree
//                 that it becomes hard to read and maintain
//                 Old pattern to handle asynchronous functions.
//                  Use Promises + async/await to avoid Callback Hell

function task1(callback){
  setTimeout(()=>{
    console.log("Task1 complete")
    callback()
  },2000)
}
function task2(callback){
  setTimeout(()=>{
    console.log("Task2 complete")
    callback()
  },1000)
}
function task3(callback){
  setTimeout(()=>{
    console.log("Task3 complete")
    callback()
  },3000)
}
function task4(callback){
  setTimeout(()=>{
    console.log("Task4 complete")
    callback()
  },1500)
}

task1(()=>{
  task2(()=>{
    task3(()=>{
      task4(()=>{
        console.log("All tasks complete")
      })
    })
  })
})


