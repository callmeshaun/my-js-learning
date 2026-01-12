// MouseEvent => click, doubleclick, mousedown, mouseup, mousemove, mouseover, mouseout, mouseenter, mouseleave
// .addEventListener(event , callback)
const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");


myButton.addEventListener("click" , event =>{

  event.target.style.backgroundColor = "red";
  event.target.textContent = "Clicked";

});

myButton.addEventListener("mouseover" , event =>{

  event.target.style.backgroundColor = "blue";
  event.target.textContent = "Mouse Over";

});


myButton.addEventListener("mouseout" , event =>{
   event.target.style.backgroundColor = "lightgreen";
   event.target.textContent = "Click Me";
})

