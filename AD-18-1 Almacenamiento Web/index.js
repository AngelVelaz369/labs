const itemsContainer = document.querySelector("#list-items")

const btnClear = document.querySelector("#btn-clear");
const btnLoad = document.querySelector("#btn-load");


function addItem(item) {
  const colourCard = document.createElement("section");
  colourCard.className = "card w-75 mb-3";
  itemsContainer.append(colourCard);

  const colourCardBody = document.createElement("article");
  colourCardBody.className = "card-body";
  colourCard.append(colourCardBody);

  const colourCardTitle = document.createElement("h5");
  colourCardTitle.className = "card-title";
  colourCardTitle.innerText = item.name;
  colourCardBody.append(colourCardTitle);

  const colourCardText = document.createElement("p");
  colourCardText.className = "card-text";
  colourCardText.innerText = item.pantone_value;
  colourCardBody.append(colourCardText);

  const colourCardColour = document.createElement("figure");
  colourCardColour.style = "background-color: " + item.color + ";";
  colourCardColour.innerText = item.color;
  colourCardBody.append(colourCardColour);

  const colourCardBreak = document.createElement("br");
  itemsContainer.append(colourCardBreak);
}

function ColoresStore(colorsList) {
  itemsContainer.innerHTML= "";
  colorsList.forEach((colorItem) => {
    addItem(colorItem);
  });
  localStorage.setItem("colors", JSON.stringify(colorsList));
}

function fetchColorsList() {
  fetch("https://reqres.in/api/unknown")
  .then((response) => response.json())
  .then((data) => {
    const colorsList = data.data;
    ColoresStore(colorsList);
    })
}

function loadColorsFromStorage() {
  const storedColors = localStorage.getItem("colors");
  if(storedColors){
    const colorsList = JSON.parse(storedColors);
    ColoresStore(colorsList);
  } else {
    fetchColorsList();
  }
}

if (btnClear){
  btnClear.addEventListener("click", () => {
    localStorage.removeItem("colors");
    itemsContainer.innerHTML = "";
  });
}

if (btnLoad) {
  btnLoad.addEventListener("click", () => {
    fetchColorsList();
  });
}

//fetchColorsList()
loadColorsFromStorage()