document.addEventListener("DOMContentLoaded", function(){
    console.log("El sitio web del Blog estructurado según el wireframe se ha cargado con éxito.")

    const activeLink = document.querySelector(".nav-item a.active");
    if (activeLink) {
        console.log("Sección activa actual: " + activeLink.textContent);
    }
});