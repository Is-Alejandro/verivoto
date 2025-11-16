import { X, MapPin, Users, CalendarDays, Megaphone } from "lucide-react";

interface BottomMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function BottomMenu({ open, onClose }: BottomMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40">
      {/* Fondo oscurecido */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Contenedor del menú */}
      <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-xl p-6 animate-slide-up">
        <h2 className="text-lg font-semibold mb-4">Acciones rápidas</h2>

        <div className="space-y-5">

          {/* Opción 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MapPin size={22} className="text-neutral-700" />
              <span className="text-neutral-800">Mi local de votación</span>
            </div>
            <span className="text-neutral-400 text-xl">›</span>
          </div>

          {/* Opción 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Users size={22} className="text-neutral-700" />
              <span className="text-neutral-800">Miembros de mesa</span>
            </div>
            <span className="text-neutral-400 text-xl">›</span>
          </div>

          {/* Opción 3 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CalendarDays size={22} className="text-neutral-700" />
              <span className="text-neutral-800">Calendario electoral</span>
            </div>
            <span className="text-neutral-400 text-xl">›</span>
          </div>

          {/* Opción 4 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Megaphone size={22} className="text-neutral-700" />
              <span className="text-neutral-800">Reportar incidencia</span>
            </div>
            <span className="text-neutral-400 text-xl">›</span>
          </div>
        </div>

        {/* Botón cerrar */}
        <button
          className="mt-6 flex items-center justify-center gap-2 w-full bg-neutral-100 py-3 rounded-xl text-neutral-700 hover:bg-neutral-200 transition"
          onClick={onClose}
        >
          <X size={20} />
          Cerrar
        </button>
      </div>
    </div>
  );
}
