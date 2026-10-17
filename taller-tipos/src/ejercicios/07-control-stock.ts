// 7. Control de stock con reglas personalizadas

export type CategoriaProducto = "alimentos" | "tecnología" | "papelería";

export interface Producto {
  id: number;
  nombre: string;
  cantidad: number;
  categoria: CategoriaProducto;
}

export class ControlStock {
  private static readonly MINIMOS: Record<CategoriaProducto, number> = {
    alimentos: 20,
    tecnología: 5,
    papelería: 50,
  };

  static tieneBajoStock(producto: Producto): boolean {
    return producto.cantidad < this.MINIMOS[producto.categoria];
  }
}
