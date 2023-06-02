// Definición de la clase Turno
class Turno {
  constructor(nombre, especialidad) {
    this.nombre = nombre;
    this.especialidad = especialidad;
  }
}

// Función principal del simulador
function simulador() {
  console.log("¡Bienvenido al simulador de turnos!");

  // Array para almacenar los turnos
  const turnos = [];

  // Variable para controlar la ejecución del ciclo
  let ejecutar = true;

  // Ciclo para ejecutar el simulador hasta que el usuario lo detenga
  while (ejecutar) {
    console.log("Por favor, elige una opción:");
    console.log("1. Solicitar turno");
    console.log("2. Ver turnos");
    console.log("3. Salir");

    // Obtener la opción elegida por el usuario
    const opcion = parseInt(window.prompt("Opción seleccionada:"));

    // Realizar la operación correspondiente
    switch (opcion) {
      case 1:
        const nombre = window.prompt("Nombre:");
        const especialidad = window.prompt("Especialidad:");
        const nuevoTurno = new Turno(nombre, especialidad);
        turnos.push(nuevoTurno);
        console.log("Turno solicitado con éxito.");
        break;

      case 2:
        console.log("Turnos disponibles:");
        if (turnos.length === 0) {
          console.log("No hay turnos disponibles.");
        } else {
          turnos.forEach((turno, index) => {
            console.log(`Turno ${index + 1}: ${turno.nombre} - ${turno.especialidad}`);
          });
        }
        break;

      case 3:
        console.log("¡Hasta luego!");
        ejecutar = false; // Establecer la variable ejecutar a false para salir del ciclo
        break;

      default:
        console.log("Opción inválida. Por favor, intenta nuevamente.");
        break;
    }
  }
}

// Ejecutar el simulador
simulador();



