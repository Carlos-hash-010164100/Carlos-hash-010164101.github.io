document.getElementById('boton').addEventListener('click', () => {
    const mensaje = document.getElementById('mensaje');
    const musica = document.getElementById('musica'); // Seleccionamos el audio
    mensaje.textContent = '🎂 ¡ Animo ! 🎉'; // Cambiamos el mensaje
    musica.play(); // Reproducimos la música
});
