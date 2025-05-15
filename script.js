document.getElementById('boton').addEventListener('click', () => {
    const mensaje = document.getElementById('mensaje');
    const musica = document.getElementById('musica'); // Audio motivacional
    
    mensaje.textContent = 'No te detengas. Lo mejor está por venir.';
    musica.play(); // Reproducimos el sonido inspirador
});
