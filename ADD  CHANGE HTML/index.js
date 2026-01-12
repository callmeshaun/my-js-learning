// const newH1 = document.createElement("h1");
const newListItem=document.createElement("li");

// newH1.textContent = "Hello World";
newListItem.textContent="coconut";
newListItem.id="coconut";
newListItem.style.fontWeight="bold";
newListItem.style.backgroundColor="blue";


//document.body.append(newListItem);
//document.body.prepend(newListItem);
//document.getElementById("fruits").appendChild(newListItem);
//document.getElementById("fruits").prepend(newListItem);

// newH1.id = "myH1";
// newH1.style.color = "red";
// newH1.style.textAlign = "center";
//document.body.appendChild(newH1);
//document.body.prepend(newH1);

// document.getElementById("box1").append(newH1);
//document.getElementById("box2").prepend(newH1);

const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, banana);
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItems[0]);
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[1]);


// document.getElementById("box1").removeChild(newH1);