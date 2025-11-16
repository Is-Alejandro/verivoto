import { 
    Home, 
    CalendarDays, 
    ListChecks, 
    ShieldCheck, 
    Plus 
  } from "lucide-react";
  
  import { useState } from "react";
  import { useNavigate, useLocation } from "react-router-dom";
  import BottomMenu from "./BottomMenu";
  
  export default function BottomNav() {
  
    const navigate = useNavigate();
    const location = useLocation();
  
    const [openMenu, setOpenMenu] = useState(false);
  
    // 👇 Solo incluimos rutas que existen realmente
    const navItems = [
      { icon: Home, label: "Inicio", path: "/" },
      { icon: CalendarDays, label: "Calendario", path: "/calendar" },
      { icon: ListChecks, label: "Match", path: "/match" },
      { icon: ShieldCheck, label: "Verificador", path: "/verificador" }
    ];
  
    return (
      <>
        <nav
          className="
            fixed bottom-0 left-0 w-full h-[70px]
            bg-white border-t border-neutral-200
            shadow-[0_-4px_12px_rgba(0,0,0,0.06)]
            flex items-center justify-around
            z-50
          "
        >
  
          {navItems.map(({ icon: Icon, label, path }) => {
            
            const isActive = path && location.pathname === path;
  
            return (
              <button
                key={label}
                onClick={() => {
                  if (path) navigate(path);      // 👈 Solo navega si existe ruta
                }}
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
                  className={`text-xs mt-1 ${
                    isActive ? "text-blue-600 font-medium" : "text-neutral-600"
                  }`}
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
  
        <BottomMenu open={openMenu} onClose={() => setOpenMenu(false)} />
      </>
    );
  }
  