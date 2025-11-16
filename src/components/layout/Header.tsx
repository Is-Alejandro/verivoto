import { UserCircle, Lamp, Accessibility, Info, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {

  const navigate = useNavigate();

  return (
    <header className="h-[65px] w-full bg-white shadow-sm px-4 flex items-center justify-between sticky top-0 z-30">
      
      {/* Parte izquierda: Avatar + Nombre */}
      <div className="flex items-center gap-3">
        <UserCircle size={38} className="text-neutral-700" />

        <div className="flex flex-col leading-tight">
          <span className="text-neutral-700 font-medium text-base">
            Mauro Lázaro
          </span>
        </div>
      </div>

      {/* Parte derecha: íconos */}
      <div className="flex items-center gap-5 text-neutral-600">

        {/* Aprende */}
        <div
          className="flex flex-col items-center text-xs cursor-pointer"
          onClick={() => navigate("/aprende")}
        >
          <Lamp size={20} />
          <span className="hidden sm:block">Aprende</span>
        </div>

        {/* Accesibilidad */}
        <div className="flex flex-col items-center text-xs cursor-pointer">
          <Accessibility size={20} />
        </div>

        {/* Info */}
        <div className="flex flex-col items-center text-xs cursor-pointer">
          <Info size={20} />
        </div>

        {/* Notificaciones */}
        <div className="flex flex-col items-center text-xs cursor-pointer">
          <Bell size={20} />
        </div>

      </div>
    </header>
  );
}
