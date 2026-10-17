// 5. Historial de cambios de usuario

export interface CambioNombre {
  tipo: "nombre";
  anterior: string;
  nuevo: string;
  fecha: Date;
}

export interface CambioCorreo {
  tipo: "correo";
  anterior: string;
  nuevo: string;
  fecha: Date;
}

export interface CambioContrasena {
  tipo: "contrasena";
  fecha: Date; // nunca se guarda la contraseña en el historial
}

export type CambioUsuario = CambioNombre | CambioCorreo | CambioContrasena;

export class HistorialUsuario {
  static resumir(
    cambios: CambioUsuario[]
  ): Record<CambioUsuario["tipo"], number> {
    const resumen: Record<CambioUsuario["tipo"], number> = {
      nombre: 0,
      correo: 0,
      contrasena: 0,
    };
    for (const c of cambios) {
      resumen[c.tipo]++;
    }
    return resumen;
  }
}
