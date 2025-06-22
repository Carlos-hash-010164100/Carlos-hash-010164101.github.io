// 🎮 Botones de interacción
const iniciarBtn = document.getElementById('iniciar');       // Botón para comenzar la historia
const continuarBtn = document.getElementById('continuar');   // Botón para avanzar a la siguiente sección

// 🗂️ Secciones principales de la interfaz
const intro = document.getElementById('intro');              // Bloque de introducción
const desafio = document.getElementById('desafio');          // Sección para la siguiente pregunta

// 📝 Elementos dinámicos donde se escribe contenido
const saludo = document.getElementById('saludoPersonalizado');     // Mensaje de bienvenida personalizado
const pregunta = document.getElementById('preguntaSiguiente');     // Pregunta dirigida
const mensajeEspecial = document.getElementById('mensajeEspecial');// Respuesta final o despedida

// 🎵 Reproductor de audio
const musica = document.getElementById('musica');

// 🧠 Variable para almacenar el nombre del usuario
let nombre = "";

// 👥 Lista de usuarios reconocidos por el "creador"
const nombresPermitidos = ["Gustavo", "Gris", "Bassman", "Chinikis", "Eduardo"];

// 📦 Funciones para cada persona reconocida
function iniciarGustavo() {
  saludo.innerHTML = `Bien, Gustavo.<br> Eres un clásico. Sabemos que vienes con la mejor actitud.`;
  pregunta.textContent = `¿Qué te motiva a seguir creyendo?`;
}

function iniciarGris() {
  saludo.innerHTML = `Hola Gris 🌫️<br> Siempre tan misteriosa como brillante.`;
  pregunta.textContent = `¿Qué te hace sentir viva?`;
}

function iniciarBassman() {
  saludo.innerHTML = `Bassman, el ritmo te precede.<br> Bienvenido a tu sala de afinación interior.`;
  pregunta.textContent = `¿Qué melodía guía tus pasos últimamente?`;
}

function iniciarChinikis() {
  saludo.innerHTML = `Chinikis 😄<br> ¿Otra vez salvando el día? Adelante, esta es tu casa.`;
  pregunta.textContent = `¿Qué te hace sonreír incluso en días difíciles?`;
}

function iniciarEduardo() {
  saludo.innerHTML = `Eduardo, mente brillante y corazón leal.<br> Este espacio está hecho para ti.`;
  pregunta.textContent = `¿Qué propósito te empuja a levantarte cada mañana?`;
}

// 🚪 Evento que se activa al hacer clic en "Comenzar"
iniciarBtn.addEventListener('click', () => {
  const nombreInput = document.getElementById('nombreUsuario').value.trim();

  // Verificamos que el campo no esté vacío
  if (nombreInput !== "") {
    // Si el nombre está en la lista de acceso
    if (nombresPermitidos.includes(nombreInput)) {
      nombre = nombreInput;

      // Elegimos el bloque personalizado según el nombre
      switch (nombre) {
        case "Gustavo":
          iniciarGustavo();
          break;
        case "Gris":
          iniciarGris();
          break;
        case "Bassman":
          iniciarBassman();
          break;
        case "Chinikis":
          iniciarChinikis();
          break;
        case "Eduardo":
          iniciarEduardo();
          break;
      }

      // Mostramos siguiente sección y reproducimos audio
      intro.style.display = 'none';
      desafio.style.display = 'block';
      musica.play();
    } else {
      // Si no está en la lista, mostramos un mensaje alternativo
      mensajeEspecial.innerHTML = `
        <p><strong>${nombreInput}</strong>, el creador no te reconoció en su lista... pero cada quien forja su propio destino.</p>
      `;
    }
  }
});

// 🔄 Evento que se activa al hacer clic en "Continuar"
continuarBtn.addEventListener('click', () => {
  const respuesta = document.getElementById('respuestaUsuario').value.trim();

  // Si el usuario respondió algo, mostramos mensaje final personalizado
  if (respuesta !== "") {
    mensajeEspecial.innerHTML = `
      <p><em>${nombre}</em>, nunca olvides que tu motivación — <strong>${respuesta}</strong> — es tu superpoder. ¡Sigue adelante!</p>
    `;

    // Ocultamos sección de desafío
    desafio.style.display = 'none';
  }
});


