export type VerificacionStatus = "warning" | "success";

export interface VerificacionItem {
  id: number;
  status: VerificacionStatus;
  texto: string;
  fecha: string;
}
