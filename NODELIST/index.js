// NODELIST = Static collections of HTML elements by(id , class , element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no(map , filter , reduce)
//            NodeList wont update to automatically reflect changes


let buttons = document.querySelectorAll(".myButtons");

//HTML/CSS
// buttons.forEach(button=>{
//   button.style.backgroundColor = "red";
//   button.textContent += "😊";
// })

//CLICK EVENT listner

// buttons.forEach(button=>{
//   button.addEventListener("click",event=>{
//     event.target.style.backgroundColor = "red";
//   })
// })

//MOUSEOVER MOUSEOUT


// buttons.forEach(button=>{
//   button.addEventListener("mouseover",event=>{
//     event.target.style.backgroundColor = "red";
//   })
// })

// buttons.forEach(button=>{
//   button.addEventListener("mouseout",event=>{
//     event.target.style.backgroundColor = "";
//   })
// })



//ADD AN ELEMENT

// const newButton = document.createElement("button");
// newButton.textContent = "Button 5";
// newButton.classList="myButtons";
// document.body.appendChild(newButton);

// buttons = document.querySelectorAll(".myButtons");
// console.log(buttons);


// REMOVE AN ELEMENT

buttons.forEach(button=>{
  button.addEventListener("click",event=>{
    event.target.remove();
    buttons = document.querySelectorAll(".myButtons");
    console.log(buttons);
  })
})