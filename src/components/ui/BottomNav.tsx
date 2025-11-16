import { Home, CalendarDays, ListChecks, ShieldCheck, Plus } from "lucide-react";
import { useState } from "react";
import BottomMenu from "./BottomMenu";

export default function BottomNav() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* Barra inferior */}
      <nav className="h-[70px] w-full bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.07)] flex items-center justify-around z-30">
        
        <div className="flex flex-col items-center text-neutral-700">
          <Home size={24} />
          <span className="text-xs mt-1">Inicio</span>
        </div>

        <div className="flex flex-col items-center text-neutral-700">
          <CalendarDays size={24} />
          <span className="text-xs mt-1">Calendario</span>
        </div>

        <div className="flex flex-col items-center text-neutral-700">
          <ListChecks size={24} />
          <span className="text-xs mt-1">Match</span>
        </div>

        <div className="flex flex-col items-center text-neutral-700">
          <ShieldCheck size={24} />
          <span className="text-xs mt-1">Verificador</span>
        </div>

        {/* Botón + */}
        <button
          className="bg-[#E4E9EE] p-3 rounded-xl shadow-md active:scale-95 transition"
          onClick={() => setOpenMenu(true)}
        >
          <Plus size={26} className="text-neutral-700" />
        </button>
      </nav>

      {/* Menú flotante */}
      <BottomMenu open={openMenu} onClose={() => setOpenMenu(false)} />
    </>
  );
}
