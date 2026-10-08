// Make

const burgerTownHeading = document.querySelector('h1');

burgerTownHeading.addEventListener('click', function(){
    console.log("Alguien hizo clic en BURGER TOWN!");
});
const riceWord = document.getElementById('arroz-palabra');
const pictureHeader = document.querySelectorAll('h2')[1];

riceWord.addEventListener('click', function(){
    pictureHeader.classList.add('text-red');
});