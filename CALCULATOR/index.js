
const dispay =document.getElementById("display");

function appendToDisplay(input) {
  dispay.value+=input;
}

function clearDisplay() {
  dispay.value="";
}

function calculate() {

  try{
  dispay.value=eval(dispay.value);
  }
  catch(error){
    dispay.value="Error";
  }

}