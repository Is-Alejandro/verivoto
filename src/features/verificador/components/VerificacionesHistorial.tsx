import { VerificacionItem } from "../types";
import VerificacionCard from "./VerificacionCard";

interface Props {
  historial: VerificacionItem[];
}

export default function VerificacionesHistorial({ historial }: Props) {

  if (historial.length === 0) {
    return (
      <div className="mt-6 mb-20 text-center text-neutral-500 text-sm">
        Aún no hay verificaciones realizadas.
      </div>
    );
  }

  return (
    <div className="mt-6 mb-20">
      <h2 className="text-lg font-semibold text-neutral-800 mb-3">
        Historial de Verificaciones
      </h2>

      <div className="flex flex-col gap-3">
        {historial.map((item) => (
          <VerificacionCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
