document.getElementById('boton').addEventListener('click', () => {
    const mensaje = document.getElementById('mensaje');
    const musica = document.getElementById('musica'); // Seleccionamos el audio
    mensaje.textContent = ' ¡ Piensa en lo que ya as construido ! '; // Cambiamos el mensaje
    musica.play(); // Reproducimos la música
});
