// 6. Sistema de calificaciones por categoría

export type CategoriaNota = "tareas" | "quices" | "examen";

export interface Calificacion {
  estudianteId: number;
  materia: string;
  categoria: CategoriaNota;
  nota: number;
}

export class CalculadoraCalificaciones {
  static promedioPorCategoria(
    calificaciones: Calificacion[],
    estudianteId: number
  ): Record<CategoriaNota, number> {
    const suma: Record<CategoriaNota, number> = { tareas: 0, quices: 0, examen: 0 };
    const cuenta: Record<CategoriaNota, number> = { tareas: 0, quices: 0, examen: 0 };

    for (const c of calificaciones) {
      if (c.estudianteId !== estudianteId) continue;
      suma[c.categoria] += c.nota;
      cuenta[c.categoria]++;
    }

    const categorias: CategoriaNota[] = ["tareas", "quices", "examen"];
    const promedios = { tareas: 0, quices: 0, examen: 0 };
    for (const cat of categorias) {
      promedios[cat] = cuenta[cat] > 0 ? suma[cat] / cuenta[cat] : 0;
    }
    return promedios;
  }
}
