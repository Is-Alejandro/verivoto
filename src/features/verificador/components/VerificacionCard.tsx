import { CheckCircle, AlertCircle } from "lucide-react";
import { VerificacionItem } from "../types";

interface Props {
  item: VerificacionItem;
}

export default function VerificacionCard({ item }: Props) {
  const isSuccess = item.status === "success";

  return (
    <div
      className="
        bg-white p-4 rounded-xl shadow-sm
        flex items-start gap-3 border border-neutral-200
      "
    >
      <div
        className={`
          p-2 rounded-full 
          ${isSuccess ? "bg-green-100" : "bg-yellow-100"}
        `}
      >
        {isSuccess ? (
          <CheckCircle size={20} className="text-green-600" />
        ) : (
          <AlertCircle size={20} className="text-yellow-600" />
        )}
      </div>

      <div>
        <p className="text-neutral-800 text-sm leading-tight font-medium">
          "{item.texto}"
        </p>
        <p className="text-neutral-500 text-xs mt-1">Verificado: {item.fecha}</p>
      </div>
    </div>
  );
}
