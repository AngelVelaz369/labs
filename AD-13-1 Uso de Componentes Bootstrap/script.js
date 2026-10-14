
const btnAlerta = document.getElementById('btnAlerta');
const alertaDinamica = document.getElementById('alertaDinamica');

btnAlerta.addEventListener('click', function(){
    alertaDinamica.classList.remove('d-done');
});

function ocultarAlerta(){
    alertaDinamica.classList.add('d-done');
}
