// 4. Validación de formularios dinámicos

export type TipoCampo = "texto" | "numero" | "email";

export interface CampoFormulario {
  nombre: string;
  tipo: TipoCampo;
  valor: string | number;
}

export class ValidadorFormulario {
  private static readonly REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  private static esValido(campo: CampoFormulario): boolean {
    switch (campo.tipo) {
      case "texto":
        return typeof campo.valor === "string" && campo.valor.trim() !== "";
      case "numero":
        return typeof campo.valor === "number" && Number.isFinite(campo.valor);
      case "email":
        return (
          typeof campo.valor === "string" &&
          this.REGEX_EMAIL.test(campo.valor)
        );
    }
  }

  static obtenerCamposInvalidos(campos: CampoFormulario[]): string[] {
    return campos.filter((c) => !this.esValido(c)).map((c) => c.nombre);
  }
}
