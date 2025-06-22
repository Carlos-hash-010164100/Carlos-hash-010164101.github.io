// Obtenemos los botones del DOM
const iniciarBtn = document.getElementById('iniciar');   // Botón para comenzar la aventura
const continuarBtn = document.getElementById('continuar'); // Botón para continuar después de responder

// Obtenemos las secciones principales de la página
const intro = document.getElementById('intro');         // Sección de introducción con la pregunta del nombre
const desafio = document.getElementById('desafio');     // Sección del "desafío" o siguiente paso

// Elementos donde colocaremos texto personalizado
const saludo = document.getElementById('saludoPersonalizado'); // Mensaje tipo: "Bien, Juan."
const pregunta = document.getElementById('preguntaSiguiente'); // Siguiente pregunta basada en el nombre
const mensajeEspecial = document.getElementById('mensajeEspecial'); // Área final de mensaje motivador

// Audio motivacional que se reproduce al comenzar
const musica = document.getElementById('musica');

let nombre = ""; // Variable para guardar el nombre del usuario

// Evento que se activa al hacer clic en el botón "Comenzar"
iniciarBtn.addEventListener('click', () => {
  const nombreInput = document.getElementById('nombreUsuario').value.trim(); // Obtenemos el valor del input

  if (nombreInput !== "") {
    nombre = nombreInput; // Guardamos el nombre
    saludo.textContent = `Bien, ${nombre}.`; // Personalizamos el saludo
    pregunta.textContent = `¿Qué es lo que más te impulsa a seguir adelante?`; // Mostramos la siguiente pregunta

    // Ocultamos la introducción y mostramos la siguiente sección
    intro.style.display = 'none';
    desafio.style.display = 'block';

    musica.play(); // Iniciamos el audio motivacional
  }
});

// Evento que se activa al hacer clic en el botón "Continuar"
continuarBtn.addEventListener('click', () => {
  const respuesta = document.getElementById('respuestaUsuario').value.trim(); // Obtenemos la respuesta del usuario

  if (respuesta !== "") {
    // Mostramos un mensaje final usando el nombre y la respuesta dada
    mensajeEspecial.innerHTML = `
      <p><em>${nombre}</em>, nunca olvides que tu motivación — <strong>${respuesta}</strong> — es tu superpoder. ¡Sigue adelante!</p>
    `;

    // Ocultamos la sección de preguntas para dar espacio al mensaje final
    desafio.style.display = 'none';
  }
});
