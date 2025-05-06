document.getElementById('boton').addEventListener('click', () => {
    const mensaje = document.getElementById('mensaje');
    const musica = document.getElementById('musica'); // Seleccionamos el audio
    mensaje.textContent = ' ¡ Piensa, crea y descubre que ahi todo un mundo de posibilidades. ! '; // Cambiamos el mensaje
    musica.play(); // Reproducimos la música
});
