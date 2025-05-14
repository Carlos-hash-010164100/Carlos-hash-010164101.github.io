document.getElementById('boton').addEventListener('click', () => {
    const mensaje = document.getElementById('mensaje');
    const musica = document.getElementById('musica'); // Seleccionamos el audio
    mensaje.textContent = 'El sistema te observa... Bienvenido al código.';
    musica.play(); // Reproducimos el sonido de fondo
});
