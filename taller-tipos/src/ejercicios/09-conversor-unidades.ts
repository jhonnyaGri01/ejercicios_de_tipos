// 9. Conversor de unidades tipado

export type Unidad = "cm" | "m" | "km";

export class ConversorUnidades {
  // Factor para pasar cada unidad a metros
  private static readonly A_METROS: Record<Unidad, number> = {
    cm: 0.01,
    m: 1,
    km: 1000,
  };

  // Type guard: valida en tiempo de ejecución (útil si viene de un input externo)
  static esUnidad(valor: string): valor is Unidad {
    return valor in this.A_METROS;
  }

  static convertir(valor: number, de: Unidad, a: Unidad): number {
    if (!Number.isFinite(valor)) {
      throw new Error("El valor debe ser un número finito.");
    }
    if (!this.esUnidad(de) || !this.esUnidad(a)) {
      throw new Error("Unidad no válida. Use: cm, m o km.");
    }
    const enMetros = valor * this.A_METROS[de];
    return enMetros / this.A_METROS[a];
  }
}
