// 🎮 Botones de interacción
const iniciarBtn = document.getElementById('iniciar');
const continuarBtn = document.getElementById('continuar');

// 🗂️ Secciones principales
const intro = document.getElementById('intro');
const desafio = document.getElementById('desafio');

// 📝 Elementos dinámicos
const saludo = document.getElementById('saludoPersonalizado');
const pregunta = document.getElementById('preguntaSiguiente');
const mensajeEspecial = document.getElementById('mensajeEspecial');

// 🎵 Música
const musica = document.getElementById('musica');

// 🧠 Nombre original
let nombre = "";

// 👥 Nombres válidos
const nombresPermitidos = ["gustavo", "gris", "griselda", "bassman", "chinikis", "eduardo", "luis"];

// 🧩 Funciones personalizadas
function iniciarGustavo() {
  saludo.innerHTML = `Bien, Gustavo.<br> Eres un clásico. Sabemos que vienes con la mejor actitud.`;
  pregunta.textContent = `¿Qué te motiva a seguir creyendo?`;

  continuarBtn.onclick = () => {
    const respuesta = document.getElementById('respuestaUsuario').value.trim();
    if (respuesta !== "") {
      mensajeEspecial.innerHTML = `
        <p><strong>${nombre}</strong>, tu fuerza interior es real. Mantente firme.</p>
        <p>👉 Regala un me gusta en el enlace en <strong>WhatsApp</strong> si llegaste hasta aquí, para confirmar tu asistencia.</p>
      `;
      desafio.style.display = 'none';
    }
  };
}

function iniciarGris() {
  saludo.innerHTML = `Hola Gris 🌫️<br> Siempre tan misteriosa como brillante.`;
  pregunta.textContent = `Si pudieras tener un pastel ahora mismo... ¿de qué sabor lo pedirías?`;

  continuarBtn.onclick = () => {
    const sabor = document.getElementById('respuestaUsuario').value.trim();
    if (sabor !== "") {
      mensajeEspecial.innerHTML = `
        <p>✨ Un pastel de <strong>${sabor}</strong>... suena delicioso. Sabía que elegirías ese sabor, te lo debo. Saludos, por cierto qué bien te ves de negro.</p>
        <pre style="color: #d2a8ff; font-size: 0.85em; line-height: 1.2em;">
            ,   ,   ,   ,
           ||||| ||||| |||||
        ===@@@@@@@@@@@@@@@@@===
        |||||||||||||||||||||||
        |||||||||||||||||||||||
        ~~~~~~~~~~~~~~~~~~~~~~~
        🎂 Suerte, Gris 🎂
        </pre>
        <p>👉 Regala un me gusta en el enlace en <strong>WhatsApp</strong> si llegaste hasta aquí, para confirmar tu asistencia.</p>
      `;
      desafio.style.display = 'none';
    }
  };
}

function iniciarBassman() {
  saludo.innerHTML = `Saludos Gustavo, La música sí es un arte.`;
  pregunta.textContent = `¿Qué melodía guía tus pasos últimamente?`;

  continuarBtn.onclick = () => {
    const respuesta = document.getElementById('respuestaUsuario').value.trim();
    if (respuesta !== "") {
      mensajeEspecial.innerHTML = `
        <p><strong>Excelente melodía.</strong></p>
        <p>No tengo mucho para ti, <strong>${nombre}</strong>... solo desearte suerte.<br>Sigue esforzándote. 🎸</p>
        <p>"Tenemos el arte para no morir de la verdad."<br>– Friedrich Nietzsche</p>
        <p>👉 Regala un me gusta en el enlace en <strong>WhatsApp</strong> si llegaste hasta aquí, para confirmar tu asistencia.</p>
      `;
      desafio.style.display = 'none';
    }
  };
}

function iniciarChinikis() {
  saludo.innerHTML = `Chinikis 😄<br> ¿Otra vez salvando el día? Adelante, esta es tu casa.`;
  pregunta.textContent = `Recuerda que la ruta rápida, no siempre y casi nunca es la más segura. Saludos, saca el kikirikí.`;

  continuarBtn.onclick = () => {
    const respuesta = document.getElementById('respuestaUsuario').value.trim();
    if (respuesta !== "") {
      mensajeEspecial.innerHTML = `
        <p>⚡ Gracias por estar aquí, <strong>${nombre}</strong>. Confía en tu camino.</p>
        <p>👉 Regala un me gusta en el enlace en <strong>WhatsApp</strong> si llegaste hasta aquí, para confirmar tu asistencia.</p>
      `;
      desafio.style.display = 'none';
    }
  };
}

function iniciarEduardo() {
  saludo.innerHTML = `Eduardo, mente brillante y corazón leal.<br> Este espacio está hecho para ti.`;
  pregunta.textContent = `¿Qué propósito te empuja a levantarte cada mañana?`;

  continuarBtn.onclick = () => {
    const respuesta = document.getElementById('respuestaUsuario').value.trim();
    if (respuesta !== "") {
      mensajeEspecial.innerHTML = `
        <p><strong>${nombre}</strong>, sigue siendo ejemplo de integridad y visión. El mundo te necesita despierto.</p>
        <p>👉 Regala un me gusta en el enlace en <strong>WhatsApp</strong> si llegaste hasta aquí, para confirmar tu asistencia.</p>
      `;
      desafio.style.display = 'none';
    }
  };
}

// 🚪 Evento para comenzar
iniciarBtn.addEventListener('click', () => {
  const nombreOriginal = document.getElementById('nombreUsuario').value.trim();
  const nombreInput = nombreOriginal.toLowerCase();

  if (nombreInput !== "") {
    if (nombresPermitidos.includes(nombreInput)) {
      nombre = nombreOriginal;

      switch (nombreInput) {
        case "gustavo":
        case "bassman":
          iniciarBassman();
          break;
        case "gris":
        case "griselda":
          iniciarGris();
          break;
        case "chinikis":
        case "eduardo":
        case "luis":
          iniciarChinikis();
          break;
        default:
          mensajeEspecial.innerHTML = `
            <p><strong>${nombreOriginal}</strong>, no se reconoce este nombre... pero el viaje aún puede comenzar.</p>
            <p>👉 Regala un me gusta en el enlace en <strong>WhatsApp</strong> si llegaste hasta aquí, para confirmar tu asistencia.</p>
          `;
          return;
      }

      intro.style.display = 'none';
      desafio.style.display = 'block';
      musica.play();
    } else {
      mensajeEspecial.innerHTML = `
        <p><strong>${nombreOriginal}</strong>, el creador no te reconoció en su lista... pero cada quien forja su propio destino.</p>
        <p>👉 Regala un me gusta en el enlace en <strong>WhatsApp</strong> si llegaste hasta aquí, para confirmar tu asistencia.</p>
      `;
    }
  }
});

// 🔁 Fallback por si no hay función personalizada
continuarBtn.addEventListener('click', () => {
  const respuesta = document.getElementById('respuestaUsuario').value.trim();

  if (respuesta !== "") {
    mensajeEspecial.innerHTML = `
      <p><em>${nombre}</em>, nunca olvides que tu motivación — <strong>${respuesta}</strong> — es tu superpoder. ¡Sigue adelante!</p>
      <p>👉 Regala un me gusta en el enlace en <strong>WhatsApp</strong> si llegaste hasta aquí, para confirmar tu asistencia.</p>
    `;
    desafio.style.display = 'none';
  }
});


