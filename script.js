document.getElementById('boton').addEventListener('click', () => {
    const mensaje = document.getElementById('mensaje');
    const musica = document.getElementById('musica'); // Audio motivacional
    
    mensaje.textContent = 'Suerte  amig@.';
    musica.play(); // Reproducimos el sonido inspirador
});
