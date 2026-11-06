const boton = document.getElementById('boton-tema');

boton.addEventListener('click', function() {
    document.body.classList.toggle('modo-oscuro');

    if (document.body.classList.contains('modo-oscuro')) {
        boton.textContent = "Cambiar a Modo Claro";
    } else {
        boton.textContent = "Cambiar a Modo Oscuro";
    }
});
