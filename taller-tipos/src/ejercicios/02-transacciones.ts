// 2. Agrupación por tipo de transacción

export type TipoTransaccion = "ingreso" | "egreso";

export interface Transaccion {
  monto: number;
  tipo: TipoTransaccion;
  categoria: string;
}

export class AnalizadorTransacciones {
  static sumarPorTipo(
    transacciones: Transaccion[]
  ): Record<TipoTransaccion, number> {
    const totales: Record<TipoTransaccion, number> = { ingreso: 0, egreso: 0 };
    for (const t of transacciones) {
      totales[t.tipo] += t.monto;
    }
    return totales;
  }
}
