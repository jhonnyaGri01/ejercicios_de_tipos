import { GestorTareas, Tarea } from "./ejercicios/01-gestor-tareas";
import { AnalizadorTransacciones } from "./ejercicios/02-transacciones";
import { ServicioNotificaciones } from "./ejercicios/03-notificaciones";
import { ValidadorFormulario } from "./ejercicios/04-formularios";
import { HistorialUsuario } from "./ejercicios/05-historial-usuario";
import { CalculadoraCalificaciones } from "./ejercicios/06-calificaciones";
import { ControlStock } from "./ejercicios/07-control-stock";
import { FiltroUsuarios } from "./ejercicios/08-filtro-usuarios";
import { ConversorUnidades, Unidad } from "./ejercicios/09-conversor-unidades";
import { ValidadorPagos } from "./ejercicios/10-pagos";

// ============================================================
// PRUEBAS / EJEMPLOS DE USO
// ============================================================
console.log("--- 1. Tareas activas ---");
const tareas: Tarea[] = [
  { id: 1, descripcion: "Estudiar TS", completada: false, estado: "pendiente" },
  { id: 2, descripcion: "Hacer taller", completada: false, estado: "en_progreso" },
  { id: 3, descripcion: "Entregar", completada: true, estado: "finalizada" },
];
console.log(GestorTareas.filtrarActivas(tareas));

console.log("--- 2. Transacciones ---");
console.log(
  AnalizadorTransacciones.sumarPorTipo([
    { monto: 1000, tipo: "ingreso", categoria: "salario" },
    { monto: 500, tipo: "ingreso", categoria: "freelance" },
    { monto: 300, tipo: "egreso", categoria: "comida" },
    { monto: 200, tipo: "egreso", categoria: "transporte" },
  ])
); // { ingreso: 1500, egreso: 500 }

console.log("--- 3. Notificaciones ---");
console.log(
  ServicioNotificaciones.enviarNotificacion({
    tipo: "email",
    destinatario: "ana@mail.com",
    asunto: "Hola",
    cuerpo: "Bienvenida",
  })
);
console.log(
  ServicioNotificaciones.enviarNotificacion({
    tipo: "sms",
    telefono: "3001234567",
    mensaje: "Tu código es 1234",
  })
);
console.log(
  ServicioNotificaciones.enviarNotificacion({
    tipo: "push",
    dispositivoId: "device-42",
    titulo: "Nuevo mensaje",
    contenido: "Tienes 1 mensaje",
  })
);

console.log("--- 4. Formulario ---");
console.log(
  ValidadorFormulario.obtenerCamposInvalidos([
    { nombre: "usuario", tipo: "texto", valor: "" },
    { nombre: "edad", tipo: "numero", valor: "veinte" },
    { nombre: "correo", tipo: "email", valor: "no-es-email" },
    { nombre: "apodo", tipo: "texto", valor: "Pepe" },
  ])
); // [ 'usuario', 'edad', 'correo' ]

console.log("--- 5. Historial ---");
console.log(
  HistorialUsuario.resumir([
    { tipo: "nombre", anterior: "Ana", nuevo: "Ana M.", fecha: new Date() },
    { tipo: "correo", anterior: "a@a.com", nuevo: "b@b.com", fecha: new Date() },
    { tipo: "contrasena", fecha: new Date() },
    { tipo: "contrasena", fecha: new Date() },
  ])
); // { nombre: 1, correo: 1, contrasena: 2 }

console.log("--- 6. Calificaciones ---");
console.log(
  CalculadoraCalificaciones.promedioPorCategoria(
    [
      { estudianteId: 1, materia: "Mate", categoria: "tareas", nota: 4 },
      { estudianteId: 1, materia: "Mate", categoria: "tareas", nota: 5 },
      { estudianteId: 1, materia: "Mate", categoria: "examen", nota: 3.5 },
      { estudianteId: 2, materia: "Mate", categoria: "tareas", nota: 1 },
    ],
    1
  )
); // { tareas: 4.5, quices: 0, examen: 3.5 }

console.log("--- 7. Stock ---");
console.log(
  ControlStock.tieneBajoStock({ id: 1, nombre: "Arroz", cantidad: 10, categoria: "alimentos" }), // true
  ControlStock.tieneBajoStock({ id: 2, nombre: "Mouse", cantidad: 8, categoria: "tecnología" }), // false
  ControlStock.tieneBajoStock({ id: 3, nombre: "Cuaderno", cantidad: 49, categoria: "papelería" }) // true
);

console.log("--- 8. Usuarios ---");
console.log(
  FiltroUsuarios.filtrar([
    { nombre: "Ana", edad: 25, activo: true, rol: "admin" },
    { nombre: "Luis", edad: 17, activo: true, rol: "editor" },
    { nombre: "Eva", edad: 30, activo: false, rol: "editor" },
    { nombre: "Tom", edad: 40, activo: true, rol: "visitante" },
  ])
); // solo Ana

console.log("--- 9. Conversor ---");
console.log(ConversorUnidades.convertir(150, "cm", "m")); // 1.5
console.log(ConversorUnidades.convertir(2, "km", "cm")); // 200000
try {
  ConversorUnidades.convertir(5, "m", "mm" as Unidad);
} catch (e) {
  console.log((e as Error).message);
}

console.log("--- 10. Pagos ---");
console.log(
  ValidadorPagos.validar({ metodo: "tarjeta", numeroTarjeta: "", cvv: "123" }), // false
  ValidadorPagos.validar({ metodo: "tarjeta", numeroTarjeta: "4111111111111111", cvv: "123" }), // true
  ValidadorPagos.validar({ metodo: "transferencia", banco: "Bancolombia", numeroCuenta: "" }), // false
  ValidadorPagos.validar({ metodo: "efectivo" }) // true
);
