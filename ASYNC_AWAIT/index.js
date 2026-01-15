// ASYNC AWAIT = Async = makes a function return a Promise
//                Await = makes a async function wait for a Promise

//               Allows you write async code in a sync manner
//               Async doesnt have resolve or reject parameters
//               Everything after Await is placed in  an event queue


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

async function doChroes(){

  try{
    const walkDogResult=await walkDog();
  console.log(walkDogResult);

  const cleanKitchenResult=await cleanKitchen();
  console.log(cleanKitchenResult);

  const takeOutTrashResult=await takeOutTrash();
  console.log(takeOutTrashResult);

  console.log("Done");
  }

  catch(error){
    console.log(error);
  }

}

doChroes();


// walkDog().then(value=>{console.log(value);return cleanKitchen()})
//          .then(value=>{console.log(value);return takeOutTrash()})
//          .then(value=>{console.log(value);console.log("Done")})
//       .catch(error=>console.log(error));
