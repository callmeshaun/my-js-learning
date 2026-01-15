// fetch = function used for making HTTP request to fectch
//         resources.(JSON style data , images , files)
//         Simplifies asynchronous data fetching in js and 
//         used for interacting with APIs to retrieve data and
//         send data async over the web .
//         fetch(url , {method:"GET" , "POST" , "PUT" , "DELETE"})



// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then(response => {

//     if(!response.ok){
//       throw new Error("Network response was not ok");
//     }

//     return response.json();

//   })
// .then(data => console.log(data.id))
// .catch(error => console.log(error));

// fetchData();

async function fetchData(){

  try{

    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if(!response.ok){
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    const pokemonSprite=data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src=pokemonSprite;
    imgElement.style.display="block";
  }

  catch(error){
    console.log(error);
  }

}