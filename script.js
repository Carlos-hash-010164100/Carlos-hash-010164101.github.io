// Obtenemos los botones del DOM
const iniciarBtn = document.getElementById('iniciar');       // Botón para comenzar la aventura
const continuarBtn = document.getElementById('continuar');   // Botón para continuar después de responder

// Obtenemos las secciones principales de la página
const intro = document.getElementById('intro');              // Sección de introducción
const desafio = document.getElementById('desafio');          // Sección con la siguiente pregunta

// Elementos dinámicos
const saludo = document.getElementById('saludoPersonalizado');
const pregunta = document.getElementById('preguntaSiguiente');
const mensajeEspecial = document.getElementById('mensajeEspecial');
const musica = document.getElementById('musica');

let nombre = ""; // Aquí guardamos el nombre del usuario

// Lista de nombres permitidos
const nombresPermitidos = ["Gustavo", "Gris", "Bassman", "Chinikis", "Eduardo"];

// Evento al hacer clic en "Comenzar"
iniciarBtn.addEventListener('click', () => {
  const nombreInput = document.getElementById('nombreUsuario').value.trim();

  if (nombreInput !== "") {
    if (nombresPermitidos.includes(nombreInput)) {
      nombre = nombreInput;
      saludo.textContent = `Bien, ${nombre}.`;
      pregunta.textContent = `¿Qué es lo que más te impulsa a seguir adelante?`;
      intro.style.display = 'none';
      desafio.style.display = 'block';
      musica.play();
    } else {
      mensajeEspecial.innerHTML = `
        <p><strong>${nombreInput}</strong>, el creador no te reconoció en su lista... pero cada quien forja su propio destino.</p>
      `;
    }
  }
});

// Evento al hacer clic en "Continuar"
continuarBtn.addEventListener('click', () => {
  const respuesta = document.getElementById('respuestaUsuario').value.trim();

  if (respuesta !== "") {
    mensajeEspecial.innerHTML = `
      <p><em>${nombre}</em>, nunca olvides que tu motivación — <strong>${respuesta}</strong> — es tu superpoder. ¡Sigue adelante!</p>
    `;
    desafio.style.display = 'none';
  }
});

