// let username;

// username=window.prompt("whats your username?");
// console.log(username);

// let username;
// document.getElementById("mySubmit").onclick=function(){
//   username = document.getElementById("myText").value;
//   document.getElementById("myH1").textContent=`Hello ${username}`
//  }

//type conversion string to number
// let age = window.prompt("how old are ypu");
// age = Number(age);
// age+=6;
// console.log(age);

// let x
// let y
// let z
// x=Number(x)
// y=String(y)
// z=Boolean(z)
// console.log(x,typeof x)
// console.log(y,typeof y)
// console.log(z,typeof z)

//constants
// const PI=3.14159
// let radius;
// let circumference;

// document.getElementById("mySubmit").onclick=function(){
//   radius=document.getElementById("myText").value
//   radius=Number(radius)
//   circumference=2*PI*radius
//   document.getElementById("myH3").textContent=`circumference is ${circumference+"cm"} `
// }

//counter program

// const decreaseBtn=document.getElementById("decreaseBtn");
// const resetBtn=document.getElementById("resetBtn");
// const increaseBtn=document.getElementById("increaseBtn");
// const countLabel=document.getElementById("countLabel")
// let count=0

// increaseBtn.onclick=function(){
//   count++;
//   countLabel.textContent=count
// }

// decreaseBtn.onclick=function(){
//   count--;
//   countLabel.textContent=count
// }

// resetBtn.onclick=function(){
//   count=0
//   countLabel.textContent=count
// }


//Math

// console.log(Math.PI);
// console.log(Math.E)
// let x=3.12
// let y=4
// let z;
//z=Math.round(x);
//z=Math.floor(x);
//z=Math.ceil(x);
//z=Math.trunc(x);
//z=Math.pow(x,y);
//z=Math.sqrt(y);
//z=Math.log(y);
//let max=Math.max(x,y)

//Random number genertaor

// let randomNum=Math.floor(Math.random()*100)+1;
// console.log(randomNum)

// const myButton=document.getElementById("myButton");
// const mylabel1=document.getElementById("myLabel1");
// const mylabel2=document.getElementById("myLabel2");
// const mylabel3=document.getElementById("myLabel3");
// const min=1;
// const max=6;

// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick=function(){
//   randomNum1=Math.floor(Math.random()*max)+min;
//   randomNum2=Math.floor(Math.random()*max)+min;
//   randomNum3=Math.floor(Math.random()*max)+min;
//    myLabel1.textContent=randomNum1;
//    myLabel2.textContent=randomNum2;
//    myLabel3.textContent=randomNum3;
 
// }

//if else

  // const myText = document.getElementById("myText")
  // const mySubmit=document.getElementById("mySubmit");
  // const resultElement=document.getElementById("resultElement")

  // let age;

  // mySubmit.onclick=function(){

  //   age=myText.value;
  //   age=Number(age)
  //   if(age>=100){
      
  //     resultElement.textContent=`you are too old to enter this site`
  //   }

  //   else if(age==0){
     
  //     resultElement.textContent=`you cant enter you were just born`
  //   }

  //   else if(age>=18){
   
  //     resultElement.textContent=`you are old enough to enter this site`
  //   }

  //   else if(age<0){
      
  //     resultElement.textContent=`ypur age cant be zero`
  //   }

  //   else{
    
  //     resultElement.textContent=`you must be 18+ to enter this site`
  //   }
  // }


// //checked operator
// const myCheckbox = document.getElementById("myCheckbox");
// const visaBtn=document.getElementById("visaBtn");
// const mastercardBtn = document.getElementById("mastercardBtn")
// const paypalBtn = document.getElementById("paypalBtn")
// const mySubmit = document.getElementById("mySubmit")
// const subResult = document.getElementById("subResult")
// const paymentResult = document.getElementById("paymentResult")

// mySubmit.onclick=function(){
//   if(myCheckbox.checked){
//     subResult.textContent=`you are subscribe`
//   }
//   else{
//     subResult.textContent=`you are not subscibe`
//   }

//   if(visaBtn.checked){
//     paymentResult.textContent=`you are paying with visa`
//   }
//   else if(mastercardBtn.checked){
//     paymentResult.textContent=`you are paying with mastercard`
//   }
//   else if(paypalBtn.checked){
//     paymentResult.textContent=`you are paying with paypal`
//   }
//   else{
//     paymentResult.textContent=`you must select a payment type`
//   }
// }


//ternary operator

// let age=21;
// let message=age>=22 ? "you are an adult" : "your a minor";
// console.log(message);

// let isstudent = false
// let message = isstudent ?"you are student" :"you are not a student"
// console.log(message)

//switch

// let testScore=10
// let letterGrade

// switch(true){
//   case testScore>=90:
//     letterGrade='A'
//     break;
  
//   case testScore>=80:
//     letterGrade='B'
//     break
  
//   default:
//     letterGrade='F'
// }

// console.log(letterGrade)










