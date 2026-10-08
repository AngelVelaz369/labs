const h5Element = document.querySelectorAll('h5');
const colors = ['green' , 'blue', 'red']

h5Element.forEach(h5 => {
    h5.addEventListener('click', function(){
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        h5.style.color = randomColor;
    })
})