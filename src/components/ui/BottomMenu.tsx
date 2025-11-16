import { 
    X, 
    MapPin, 
    Users, 
    CalendarDays, 
    Megaphone 
  } from "lucide-react";
  
  interface BottomMenuProps {
    open: boolean;
    onClose: () => void;
  }
  
  export default function BottomMenu({ open, onClose }: BottomMenuProps) {
    if (!open) return null;
  
    const options = [
      { icon: MapPin, label: "Mi local de votación" },
      { icon: Users, label: "Miembros de mesa" },
      { icon: CalendarDays, label: "Calendario electoral" },
      { icon: Megaphone, label: "Reportar incidencia" },
    ];
  
    return (
      <div className="fixed inset-0 z-50">
  
        {/* Fondo oscurecido */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
          onClick={onClose}
        />
  
        {/* Contenedor del menú */}
        <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-xl p-6 animate-slide-up">
          
          <h2 className="text-lg font-semibold mb-4 text-neutral-900">
            Acciones rápidas
          </h2>
  
          <div className="space-y-5">
  
            {options.map(({ icon: Icon, label }, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-between active:scale-[0.98] transition"
              >
                <div className="flex items-center gap-3">
                  <Icon size={22} className="text-neutral-700" />
                  <span className="text-neutral-800">{label}</span>
                </div>
                <span className="text-neutral-400 text-xl">›</span>
              </div>
            ))}
  
          </div>
  
          {/* Botón cerrar */}
          <button
            className="
              mt-6 w-full py-3 flex items-center justify-center gap-2 
              bg-neutral-100 rounded-xl text-neutral-700 
              hover:bg-neutral-200 active:scale-[0.98] 
              transition
            "
            onClick={onClose}
          >
            <X size={20} />
            Cerrar
          </button>
  
        </div>
      </div>
    );
  }
  