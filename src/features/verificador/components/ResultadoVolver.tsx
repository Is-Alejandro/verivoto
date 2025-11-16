import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ResultadoVolver() {
  const navigate = useNavigate();

  return (
    <div
      className="
        bg-white border border-neutral-200 shadow-sm
        rounded-xl py-3 px-4
        flex items-center justify-center gap-2
        mb-5 active:scale-95 transition
      "
      onClick={() => navigate(-1)}
    >
      <ChevronLeft size={20} className="text-neutral-600" />
      <span className="font-medium text-neutral-700">Volver</span>
    </div>
  );
}
