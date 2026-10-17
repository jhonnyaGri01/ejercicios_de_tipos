// 1. Gestor de tareas con estados

export type EstadoTarea = "pendiente" | "en_progreso" | "finalizada";

export interface Tarea {
  id: number;
  descripcion: string;
  completada: boolean;
  estado: EstadoTarea;
}

export class GestorTareas {
  static filtrarActivas(tareas: Tarea[]): Tarea[] {
    return tareas.filter(
      (t) => t.estado === "pendiente" || t.estado === "en_progreso"
    );
  }
}
