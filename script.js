// class Bit {
    constructor(creador, visitante) {
        this.creador = creador;
        this.visitante = visitante.toLowerCase();
        this.conocidos = ["esme", "esmeralda", "alexis", "robert", "sebastian"];
    }

    saludar() {
        alert(`Hola Soy Bit, amigo de ${this.creador}, el dueño del teléfono. (Él me programó por cierto.)`);
    }

    declaracion() {
        setTimeout(() => {
            alert("Primero una disculpa, pero no quería morir sin decirlo. Espero no haberte incomodado.");
            setTimeout(() => {
                alert(`Me gusta demasiado tu sonrisa. Sé que no debería decirlo, pero no quiero ser uno más de la encuesta. ${this.visitante.charAt(0).toUpperCase() + this.visitante.slice(1)}`);
                setTimeout(() => {
                    alert("Si llegaste hasta este punto, solo regálame un like con tu mano porfa! Eso me motivaría a continuar con más producción :)");
                    setTimeout(() => {
                        alert(`Si necesitas más información sobre la encuesta, envía un WhatsApp al creador: ${this.creador} 0222222`);
                    }, 2000);
                }, 3000);
            }, 2000);
        }, 3000);
    }

    flujoEsmeralda() {
        this.visitante = "Esmeralda";
        setTimeout(() => {
            alert(`Hola ${this.visitante}, parece que el creador te conoce.`);
            setTimeout(() => {
                let respuesta = prompt("¿Eres la muchachita de la bonita sonrisa en la tienda? (Responde: si / no)").toLowerCase();
                if (respuesta === "si") {
                    setTimeout(() => {
                        alert("Perfecto, tengo algo que decirte...");
                        setTimeout(() => {
                            alert("Pero antes debo preguntar algo.");
                            let pregunta = prompt("¿Eres capaz de guardar un secreto?");
                            if (pregunta.toLowerCase() === "si") {
                                let lanzamiento = prompt("¿Sabías que una encuesta realizada por el World Regret Survey a 19,000 personas en 105 países encontró que la mayoría se arrepiente más de lo que no hizo que de lo que sí hizo?").toLowerCase();
                                if (lanzamiento === "si") {
                                    alert("¡Interesante!");
                                } else {
                                    alert("No te preocupes, no tendrías que saberlo. Igual ya te ganaste mi confianza.");
                                    setTimeout(() => {
                                        this.declaracion();
                                    }, 3000);
                                }
                            }
                        }, 3000);
                    }, 3000);
                }
            }, 3000);
        }, 3000);
    }

    conocerVisitante() {
        if (this.conocidos.includes(this.visitante)) {
            if (["esme", "esmeralda"].includes(this.visitante)) {
                this.flujoEsmeralda();
            }
        }
    }
}

document.getElementById('boton').addEventListener('click', () => {
    const creador = "Alejandro Fuentes";
    const visitante = prompt("¿Cuál es tu nombre? Responde con tu nombre porfa:").toLowerCase();

    const bit = new Bit(creador, visitante);
    bit.saludar();
    bit.conocerVisitante();
});

