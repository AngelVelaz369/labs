const helloBye = document.getElementsByTagName("h1");
if (helloBye.length > 0){
        helloBye[0].textContent = "Adios";
}
const redOrange = document.getElementsByTagName("h4");
if (redOrange.length > 0){
        redOrange[0].style.color = "orange";
}
const encInteractiv = document.getElementById("interactiv");
if(encInteractiv){
    encInteractiv.addEventListener("click", function(){
        encInteractiv.style.color = "brown";
    })
}