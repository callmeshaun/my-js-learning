//Promise = An object that manages asynchronous operations
//          wrap a Promise Object around {asynchronous code}
//          "I promise to return a value"
//          PENDING -> RESOLVED or REJECTED
//          new Promise((resolve , reject)=>{asynchronous code})

// DO THESE CHORES IN ORDER

//1.WALK THE DOG
//2.CLEAN THE KITCHEN
//3.TAKE OUT THE TRASH


function walkDog(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{

      const dogWalked=false;

      if(dogWalked){
      resolve("Dog Walked");
      }

      else{
        reject("Dog Not Walked");
      }
    },1500)
  })
    
}

function cleanKitchen(){

  return new Promise((resolve,reject)=>{
    setTimeout(()=>{

      const kitchenCleaned=true;

      if(kitchenCleaned){
      resolve("Kitchen Cleaned");
      }

      else{
        reject("Kitchen Not Cleaned");
      }
    },2500)
  })
}

function takeOutTrash(){

  return new Promise((resolve,reject)=>{
    setTimeout(()=>{

      const trashtaken=true;

      if(trashtaken){
      resolve("Trash Taken Out");
      }

      else{
        reject("Trash Not Taken Out");
      }
    },3000)
  })
}


walkDog().then(value=>{console.log(value);return cleanKitchen()})
         .then(value=>{console.log(value);return takeOutTrash()})
         .then(value=>{console.log(value);console.log("Done")})
      .catch(error=>console.log(error));
