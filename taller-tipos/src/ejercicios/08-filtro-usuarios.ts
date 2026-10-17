// 8. Filtro avanzado de usuarios

export type Rol = "admin" | "editor" | "visitante";

export interface Usuario {
  nombre: string;
  edad: number;
  activo: boolean;
  rol: Rol;
}

export class FiltroUsuarios {
  static filtrar(usuarios: Usuario[]): Usuario[] {
    return usuarios.filter(
      (u) => u.edad >= 18 && u.activo && u.rol !== "visitante"
    );
  }
}
