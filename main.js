var dogData = [];
var currentDogFood; 
displayDiv ="";
var contentEl = document.getElementById("dog");


var myRequest = new XMLHttpRequest();

myRequest.addEventListener("load", loadDogFood); //Callback
//myRequest.addEventListener("error")
//myRequest.addEventListener("progress", executeThisCodeWhenChunksArrive)
myRequest.open("GET", "dogfood.json")
myRequest.send();

function loadDogFood() {
var dogData = JSON.parse(this.responseText).dog_brands;

for (var i = 0; i < dogData.length; i++) {
    console.log(dogData);
     dogFoodLoop = dogData[i];

  displayDiv +=
    // dogFoodData = dogData[i].name;
    `<div>
    <h1>${dogFoodLoop.name}</h1>
    <hr>
    <h2>${dogFoodLoop.types[0].type}</h2>
    <h3>${dogFoodLoop.types[0].volumes[0].name}</h3>
    <h3>${dogFoodLoop.types[0].volumes[0].price}</h3>
    <h3>${dogFoodLoop.types[0].volumes[1].name}</h3>
    <h3>${dogFoodLoop.types[0].volumes[1].price}</h3>
    <h2>${dogFoodLoop.types[1].type}</h2>
    <h3>${dogFoodLoop.types[1].volumes[0].name}</h3>
    <h3>${dogFoodLoop.types[1].volumes[0].price}</h3>
    <h3>${dogFoodLoop.types[1].volumes[1].name}</h3>
    <h3>${dogFoodLoop.types[1].volumes[1].price}</h3>
    </div>
    `
  contentEl.innerHTML = displayDiv;
  };
};

//listDogFood();