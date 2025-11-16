import { 
    Home, 
    CalendarDays, 
    ListChecks, 
    ShieldCheck, 
    Plus 
  } from "lucide-react";
  
  import { useState } from "react";
  import BottomMenu from "./BottomMenu";
  
  export default function BottomNav() {
  
    // Estado actual de navegación
    const [active, setActive] = useState("Inicio");
    const [openMenu, setOpenMenu] = useState(false);
  
    const navItems = [
      { icon: Home, label: "Inicio" },
      { icon: CalendarDays, label: "Calendario" },
      { icon: ListChecks, label: "Match" },
      { icon: ShieldCheck, label: "Verificador" },
    ];
  
    return (
      <>
        {/* Barra inferior fija */}
        <nav className="
          fixed bottom-0 left-0 w-full h-[70px]
          bg-white border-t border-neutral-200
          shadow-[0_-4px_12px_rgba(0,0,0,0.06)]
          flex items-center justify-around
          z-50
        ">
  
          {navItems.map(({ icon: Icon, label }) => {
            
            const isActive = active === label;
  
            return (
              <button
                key={label}
                onClick={() => setActive(label)}
                className="
                  flex flex-col items-center 
                  active:scale-95 transition
                "
              >
                <Icon 
                  size={24} 
                  className={isActive ? "text-blue-600" : "text-neutral-600"} 
                />
  
                <span 
                  className={
                    `text-xs mt-1 ` + 
                    (isActive ? "text-blue-600 font-medium" : "text-neutral-600")
                  }
                >
                  {label}
                </span>
              </button>
            );
          })}
  
          {/* Botón + */}
          <button
            className="
              bg-neutral-100 p-3 rounded-2xl shadow-md 
              active:scale-95 transition
            "
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
  