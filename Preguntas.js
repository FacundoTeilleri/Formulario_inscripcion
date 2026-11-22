
async function sweet() {

    let continuar = true;

    while (continuar) {

        let { value: pregunta, isConfirmed } = await Swal.fire({
            imageUrl: "imagenes/logobien.png",
            imageWidth: "125",
            imageHeight: "125",
            title: "",
            text: "Bienvenido/a a nuestra sección de Preguntas frecuentes",
            theme: "dark",
            input: "select",

            inputOptions: {
                p1: "¿Los cursos son gratuitos?",
                p2: "¿Qué cursos se dictan?",
                p3: "¿Cuándo abren las inscripciones?",
                p4: "¿Qué requisitos necesito para anotarme?",
                p5: "¿Qué documentación debo presentar?",
                p6: "¿Los cursos entregan un certificado oficial?",
                p7: "¿Cuánto duran los cursos?",
                p8: "¿Cómo puedo comunicarme con la institución?",
                p9: "¿Puedo consultar si quedan vacantes?",
                p10: "¿Puedo anotarme si soy menor de edad?",
                p11: "¿Qué pasa si queda en lista de espera?",
                p12: "¿Puedo inscribirme a más de un curso?",
                p13: "¿Puedo cambiarme de curso después de inscribirme?",
                p14: "¿Cómo sé si mi inscripción fue confirmada?",
                p15: "¿Qué pasa si me inscribí, pero finalmente no puedo cursar?",
                p16: "¿Puedo volver a anotarme si abandoné un curso anteriormente?",
                p17: "¿Necesito tener el secundario completo para inscribirme?",
                p18: "¿Dónde está ubicado el centro?",
                p19: "¿Cuál es el horario de atención en el centro?"
            },

            inputPlaceholder: "Seleccione su pregunta deseada",
            showCancelButton: true,
            confirmButtonText: "Confirmar",
            cancelButtonText: "Finalizar",
            allowOutsideClick: false,
            allowEscapeKey: false
        });

        // Si presiona "Finalizar" o cierra el menú
        if (!isConfirmed || !pregunta) {
            continuar = false;
            break;
        }

        // Variable que almacena la respuesta
        let respuesta = "";

        // Selección de respuestas

        if (pregunta == "p1") {
            respuesta = "Sí. El centro ofrece cursos de formación profesional gratuitos y oficiales. Si lo desea, puede colaborar abonando la cooperadora anual, que actualmente es de $20.000.";
        }

        if (pregunta == "p2") {
            respuesta = "Se ofrecen cursos de distintas áreas, como construcción, electricidad, textil e indumentaria, gastronomía, administración, informática, electrónica y servicios sociocomunitarios. La oferta puede variar según el ciclo lectivo.";
        }

        if (pregunta == "p3") {
            respuesta = "Las fechas de inscripción se anuncian en los canales oficiales de la institución. Consultá las redes sociales o escribinos por WhatsApp para conocer las próximas convocatorias.";
        }

        if (pregunta == "p4") {
            respuesta = "Los requisitos dependen del curso elegido. Algunas formaciones pueden exigir una edad mínima o conocimientos previos. Consultá las condiciones específicas antes de inscribirte.";
        }

        if (pregunta == "p5") {
            respuesta = "Generalmente se solicita: 1) dos fotocopias del DNI y 2) una fotocopia del título secundario o primario. Confirmá qué documentos necesitás y cómo presentarlos durante la inscripción.";
        }

        if (pregunta == "p6") {
            respuesta = "Sí. El CFP N.º 401 ofrece formación profesional con certificación oficial, proveniente de la Dirección General de Cultura y Educación.";
        }

        if (pregunta == "p7") {
            respuesta = "La duración depende de cada curso y de su carga horaria. Algunos trayectos son cuatrimestrales, otros anuales e incluso pueden extenderse durante más de un ciclo lectivo. Consultá la duración del curso que te interesa.";
        }

        if (pregunta == "p8") {
            respuesta = "Podés comunicarte por WhatsApp al 11-5055-0774, llamar al 4249-1940 o escribir a cfp401lanus@abc.gob.ar. La sede está en Ferré 3100, Remedios de Escalada, Lanús Este.";
        }

        if (pregunta == "p9") {
            respuesta = "Sí. Escribinos por WhatsApp al 11-5055-0774 e indicá qué curso te interesa para consultar si hay vacantes disponibles.";
        }

        if (pregunta == "p10") {
            respuesta = "Depende del curso y de sus requisitos de edad. Además, la institución cuenta con propuestas de Educación Profesional Secundaria destinadas a jóvenes de 14 a 18 años. Consultá qué opción se adapta a tu situación.";
        }

        if (pregunta == "p11") {
            respuesta = "Si no hay vacantes, consultá si podés quedar en lista de espera. La posibilidad de ingresar dependerá de que se libere un lugar y de las condiciones establecidas por la institución.";
        }

        if (pregunta == "p12") {
            respuesta = "Depende de las normas de inscripción, los horarios y la disponibilidad de vacantes. Consultá con la institución si podés cursar las opciones que te interesan simultáneamente.";
        }

        if (pregunta == "p13") {
            respuesta = "Los cambios dependen de la disponibilidad de vacantes y de las normas de cada curso. Comunicarse con la institución antes de realizar cualquier cambio.";
        }

        if (pregunta == "p14") {
            respuesta = "Verificá si recibiste una confirmación por el canal utilizado para inscribirte. Si tenés dudas, escribinos por WhatsApp con tu nombre y el curso elegido para consultar el estado de tu inscripción.";
        }

        if (pregunta == "p15") {
            respuesta = "Avisá a la institución lo antes posible para informar que no podrás asistir. Así podrán indicarte cómo proceder y, si corresponde, considerar la vacante para otra persona.";
        }

        if (pregunta == "p16") {
            respuesta = "Podés consultar la posibilidad de inscribirte nuevamente. La admisión dependerá de los requisitos del curso y de las condiciones vigentes de inscripción.";
        }

        if (pregunta == "p17") {
            respuesta = "No necesariamente. El requisito educativo depende del curso elegido. Algunas propuestas pueden exigir estudios previos y otras admitir diferentes trayectorias educativas. Consultá los requisitos específicos antes de anotarte.";
        }

        if (pregunta == "p18") {
            respuesta = "Estamos ubicados en General Ferré 3100, Remedios de Escalada, Lanús Este.";
        }

        if (pregunta == "p19") {
            respuesta = "Nuestros días y horarios de atención son de lunes a viernes, de 08:00 a 21:00 horas.";
        }

        // Mostrar respuesta y botones

        let resultado = await Swal.fire({
            text: respuesta,
            icon: "success",
            theme: "dark",
            showCancelButton: true,
            confirmButtonText: "Volver",
            cancelButtonText: "Finalizar",
            allowOutsideClick: false,
            allowEscapeKey: false
        });

        // Si presiona "Finalizar"
        if (resultado.isDismissed) {
            continuar = false;
        }

        // Si presiona "Volver", el while vuelve al inicio
    }

}
