import { Pin, CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ElectionStartCard() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/inicio-elecciones")}
      className="bg-white rounded-2xl shadow-md shadow-black/5 p-5 mt-5 border border-neutral-200 text-left w-full active:scale-95 transition"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="bg-red-50 p-2 rounded-lg">
          <Pin size={20} className="text-red-500" />
        </div>
        <h3 className="text-neutral-900 font-semibold text-base">Inicio de Elecciones</h3>
      </div>

      <div className="flex items-center gap-2 text-neutral-700 text-sm">
        <CalendarDays size={16} className="text-neutral-800" />
        <span className="text-neutral-600">Fecha:</span>
        <span className="font-semibold text-neutral-900">12/04/2026</span>
      </div>
    </button>
  );
}
