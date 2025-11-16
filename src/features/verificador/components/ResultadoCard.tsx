import { XCircle, CheckCircle } from "lucide-react";
import ResultadoFuenteItem from "./ResultadoFuenteItem";
import { VerificacionDetalle } from "../types";

interface Props {
  detalle: VerificacionDetalle;
  texto: string; // 👈 texto original verificado
}

export default function ResultadoCard({ detalle, texto }: Props) {
  const esFalso = detalle.resultado === "falso";

  return (
    <div
      className={`
        rounded-2xl p-6 shadow-sm border 
        ${esFalso ? "bg-red-50 border-red-200" : "bg-green-50 border-green-200"}
      `}
    >
      {/* Icono */}
      <div className="flex justify-center mb-3">
        {esFalso ? (
          <XCircle size={60} className="text-red-500" />
        ) : (
          <CheckCircle size={60} className="text-green-600" />
        )}
      </div>

      {/* Título */}
      <h2
        className={`
          text-center font-bold text-xl
          ${esFalso ? "text-red-600" : "text-green-700"}
        `}
      >
        {esFalso ? "FALSO" : "VERDADERO"}
      </h2>

      {/* Texto original verificado */}
      <p className="text-neutral-600 text-sm italic text-center mt-2 mb-4">
        “{texto}”
      </p>

      {/* Resumen */}
      <p className="text-neutral-800 text-sm leading-relaxed mb-4 text-center">
        {detalle.resumen}
      </p>

      <hr className="border-neutral-300 my-4" />

      {/* Fuentes */}
      <h3 className="text-sm font-semibold text-neutral-700 mb-3">
        FUENTES VERIFICADAS
      </h3>

      <div className="flex flex-col gap-2 mb-4">
        {detalle.fuentes.map((fuente) => (
          <ResultadoFuenteItem key={fuente.url} fuente={fuente} />
        ))}
      </div>

      {/* Botón compartir */}
      <button
        className="
          w-full bg-yellow-100 text-yellow-800
          py-3 rounded-xl font-medium text-sm
          active:scale-95 transition
        "
      >
        Compartir Verificación
      </button>
    </div>
  );
}
