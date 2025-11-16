export type VerificacionStatus = "success" | "warning";

export type VerificacionResultado = "verdadero" | "falso";

export interface VerificacionItem {
  id: number;
  status: VerificacionStatus;
  texto: string;
  fecha: string;
}

export interface VerificacionDetalle {
  resultado: VerificacionResultado;
  resumen: string;
  fuentes: {
    titulo: string;
    url: string;
  }[];
}
