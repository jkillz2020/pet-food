var dogFoodString = "";
var currentDogFood; 
var contentEl = document.getElementById("dog");


  // console.log(dogFoodData);
  contentEl.innerHTML = dogFoodString;

var myRequest = new XMLHttpRequest();
// console.log("myRequest", myRequest);

myRequest.addEventListener("load", loadDogFood); //Callback
//myRequest.addEventListener("error")
//myRequest.addEventListener("progress", executeThisCodeWhenChunksArrive)
myRequest.open("GET", "dogfood.json")
myRequest.send();

// myRequest.addEventListener("load", executeThisCodeAfterFileLoaded); //Callback
// myRequest.addEventListener("error", executeThisCodeIfXHRFails)
// myRequest.addEventListener("progress", executeThisCodeWhenChunksArrive)
// myRequest.open("GET", "https://teamtreehouse.com/zoeleblanc.json")
// myRequest.send();

function loadDogFood() {
var dogFoodData = JSON.parse(this.responseText);
console.log(dogFoodData);
};
// for (var i = 0; i < dogFoodData.name.length; i++) {
//     currentDogFood = dogFoodData.name[i];

  //   dogFoodString += "<div>";
  //     dogFoodString += `<h1>${currentDogFood.name}</h1>`;
  //   dogFoodString += "</div>";
  // };