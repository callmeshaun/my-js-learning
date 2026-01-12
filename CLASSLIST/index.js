//CLASSLIST = Element property in js used to interact with
//            an elements list of classes(CSS classes)
//             Allows you to make reuasble claasses for many elements
//            accross your webpage

// const myButton = document.getElementById("myButton")
// const myH1 = document.getElementById("myH1")



// myH1.classList.add("enabled")
// // myButton.classList.add("enabled")
// // myButton.classList.remove("enabled")

// // myButton.addEventListener("mouseover", event=>{
// //   event.target.classList.toggle("hover");
// // })

// // myButton.addEventListener("mouseout", event=>{
// //   event.target.classList.toggle("hover");
// // })


// myH1.addEventListener("click" , event=>{

//   if(event.target.classList.contains("disabled")){
//     event.target.textContent += "😊"
//   }
//   else{
//   event.target.classList.replace("enabled" , "disabled")
//   }
// })

// myButton.classList.add("enabled");
// myButton.addEventListener("click" , event=>{

//   if(event.target.classList.contains("disabled")){
//     event.target.textContent = "😊"
//   }
//   else{
//   event.target.classList.replace("enabled" , "disabled")
//   }
// })


let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button=>{
  button.classList.add("enabled");
})

// buttons.forEach(button=>{
//   button.classList.remove("enabled");
// })

buttons.forEach(button=>{
  button.addEventListener("mouseover" , event=>{
    event.target.classList.toggle("hover");
  })
})

buttons.forEach(button=>{
  button.addEventListener("mouseout" , event=>{
    event.target.classList.toggle("hover");
  })
})

buttons.forEach(button=>{
  button.addEventListener("click" , event=>{
    if(event.target.classList.contains("disabled")){
      event.target.textContent += "😊"
    }
    else{
    event.target.classList.replace("enabled" , "disabled");
    }
    
  })
})