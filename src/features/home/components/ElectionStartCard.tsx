import { Pin, CalendarDays } from "lucide-react";

export default function ElectionStartCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mt-5 border border-neutral-200">
      
      <div className="flex items-center gap-2 mb-2">
        <Pin size={18} className="text-red-600" />
        <h3 className="text-neutral-800 font-semibold text-sm">
          Inicio de Elecciones
        </h3>
      </div>

      <div className="text-neutral-600 text-sm flex items-center gap-2 mt-1">
        <CalendarDays size={16} className="text-neutral-700" />
        Fecha: <span className="font-medium">12/04/2026</span>
      </div>
    </div>
  );
}
