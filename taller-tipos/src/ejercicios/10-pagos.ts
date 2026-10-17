// 10. Sistema de pagos con métodos variados

export interface PagoTarjeta {
  metodo: "tarjeta";
  numeroTarjeta: string;
  cvv: string;
}

export interface PagoTransferencia {
  metodo: "transferencia";
  banco: string;
  numeroCuenta: string;
}

export interface PagoEfectivo {
  metodo: "efectivo";
}

export type Pago = PagoTarjeta | PagoTransferencia | PagoEfectivo;

export class ValidadorPagos {
  // Acepta unknown por si los datos llegan sin validar (JSON, formularios, etc.)
  private static lleno(texto: unknown): boolean {
    return typeof texto === "string" && texto.trim() !== "";
  }

  static validar(pago: Pago): boolean {
    switch (pago.metodo) {
      case "tarjeta":
        return this.lleno(pago.numeroTarjeta) && this.lleno(pago.cvv);
      case "transferencia":
        return this.lleno(pago.banco) && this.lleno(pago.numeroCuenta);
      case "efectivo":
        return true;
    }
  }
}
