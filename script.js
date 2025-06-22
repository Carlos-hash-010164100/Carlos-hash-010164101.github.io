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

// 🧠 Variable para almacenar el nombre original
let nombre = "";

// 👥 Lista de usuarios reconocidos en minúsculas
const nombresPermitidos = ["gustavo", "gris", "bassman", "chinikis", "eduardo"];

// 📦 Funciones personalizadas para cada persona
function iniciarGustavo() {
  saludo.innerHTML = `Bien, Gustavo.<br> Eres un clásico. Sabemos que vienes con la mejor actitud.`;
  pregunta.textContent = `¿Qué te motiva a seguir creyendo?`;
}
function iniciarGris() {
  // 🟣 Mostramos un mensaje de bienvenida especial para Gris
  saludo.innerHTML = `Hola Gris 🌫️<br> Siempre tan misteriosa como brillante.`;

  // 🟣 Preguntamos su sabor de pastel favorito
  pregunta.textContent = `Si pudieras tener un pastel ahora mismo... ¿de qué sabor lo pedirías?`;

  // 🟣 Definimos qué ocurre al hacer clic en el botón "Continuar", exclusivamente para Gris
  continuarBtn.onclick = () => {
    // 🟣 Obtenemos la respuesta del campo de texto y la guardamos en la variable 'sabor'
    const sabor = document.getElementById('respuestaUsuario').value.trim();

    // 🟣 Validamos que se haya ingresado algún sabor
    if (sabor !== "") {
      // 🟣 Mostramos un mensaje personalizado con el sabor elegido e incluimos un pastel en arte ASCII
      mensajeEspecial.innerHTML = `
        <p>✨ Un pastel de <strong>${sabor}</strong>... suena delicioso. Sabia que elejirias ese sabor, te lo debo. Saludos por sierto que bien te ves de negro.</p>

        <pre style="color: #d2a8ff; font-size: 0.85em; line-height: 1.2em;">
            ,   ,   ,   ,
           ||||| ||||| |||||
        ===@@@@@@@@@@@@@@@@@===
        |||||||||||||||||||||||
        |||||||||||||||||||||||
        ~~~~~~~~~~~~~~~~~~~~~~~
        🎂 Suerte, Gris 🎂
        </pre>
      `;

      // 🟣 Ocultamos la sección de pregunta para mostrar solo el mensaje final
      desafio.style.display = 'none';
    }
  };
}


function iniciarBassman() {
  // Mensaje inicial personalizado
  saludo.innerHTML = `Bassman, el ritmo te precede.<br>Bienvenido a tu sala de afinación interior.`;
  pregunta.textContent = `¿Qué melodía guía tus pasos últimamente?`;

  // Redefinir el evento del botón "Continuar" solo para Bassman
  continuarBtn.onclick = () => {
    const respuesta = document.getElementById('respuestaUsuario').value.trim();

    if (respuesta !== "") {
      mensajeEspecial.innerHTML = `
        <p><strong>Excelente melodía.</strong></p>
        <p>No tengo mucho para ti, <strong>${nombre}</strong>... solo desearte suerte.<br>
        Sigue esforzándote. 🎸</p>
      `;
      desafio.style.display = 'none';
    }
  };
}



function iniciarChinikis() {
  saludo.innerHTML = `Chinikis 😄<br> ¿Otra vez salvando el día? Adelante, esta es tu casa.`;
  pregunta.textContent = `¿Qué te hace sonreír incluso en días difíciles?`;
}

function iniciarEduardo() {
  saludo.innerHTML = `Eduardo, mente brillante y corazón leal.<br> Este espacio está hecho para ti.`;
  pregunta.textContent = `¿Qué propósito te empuja a levantarte cada mañana?`;
}

// 🚪 Evento para cuando se hace clic en "Comenzar"
iniciarBtn.addEventListener('click', () => {
  const nombreOriginal = document.getElementById('nombreUsuario').value.trim();     // Nombre tal como lo escribió el usuario
  const nombreInput = nombreOriginal.toLowerCase();                                 // Nombre convertido a minúsculas para comparar

  if (nombreInput !== "") {
    if (nombresPermitidos.includes(nombreInput)) {
      nombre = nombreOriginal; // Guardamos el original para mostrarlo con estilo

      // Elegimos la función personalizada según el nombre ingresado
      switch (nombreInput) {
        case "gustavo":
          iniciarGustavo();
          break;
        case "gris":
          iniciarGris();
          break;
        case "bassman":
          iniciarBassman();
          break;
        case "chinikis":
          iniciarChinikis();
          break;
        case "eduardo":
          iniciarEduardo();
          break;
      }

      // Mostramos la siguiente sección y reproducimos música
      intro.style.display = 'none';
      desafio.style.display = 'block';
      musica.play();
    } else {
      // Si el nombre no está en la lista, mostramos este mensaje
      mensajeEspecial.innerHTML = `
        <p><strong>${nombreOriginal}</strong>, el creador no te reconoció en su lista... pero cada quien forja su propio destino.</p>
      `;
    }
  }
});

// 🔄 Evento para cuando se hace clic en "Continuar"
continuarBtn.addEventListener('click', () => {
  const respuesta = document.getElementById('respuestaUsuario').value.trim();

  if (respuesta !== "") {
    mensajeEspecial.innerHTML = `
      <p><em>${nombre}</em>, nunca olvides que tu motivación — <strong>${respuesta}</strong> — es tu superpoder. ¡Sigue adelante!</p>
    `;

    // Ocultamos la sección de preguntas y mostramos el mensaje final
    desafio.style.display = 'none';
  }
});


