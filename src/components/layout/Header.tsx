import { UserCircle, Lamp, Accessibility, Info, Bell, LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [userName, setUserName] = useState("Usuario");
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Obtener nombre del usuario
  useEffect(() => {
    const userStr = localStorage.getItem("currentUser");
    if (userStr) {
      const user = JSON.parse(userStr);
      setUserName(`${user.nombre} ${user.apellidos}`);
    }
  }, []);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  const handleLogout = () => {
    // Limpiar localStorage
    localStorage.removeItem("onboardingCompleted");
    localStorage.removeItem("userPreferences");
    localStorage.removeItem("currentUser");
    
    // Limpiar sessionStorage (para que el modal vuelva a aparecer en el próximo inicio de sesión)
    sessionStorage.clear();
    
    // Redirigir al onboarding
    navigate("/onboarding");
    setShowMenu(false);
  };

  return (
    <header className="h-[65px] w-full bg-white shadow-sm px-4 flex items-center justify-between sticky top-0 z-30">
      
      {/* Parte izquierda: Avatar + Nombre */}
      <div className="flex items-center gap-3 relative" ref={menuRef}>
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="flex items-center gap-3 hover:bg-neutral-50 rounded-lg p-2 -ml-2 transition"
        >
          <UserCircle size={38} className="text-neutral-700" />

          <div className="flex flex-col leading-tight">
            <span className="text-neutral-700 font-medium text-base">
              {userName}
            </span>
          </div>
        </button>

        {/* Menú flotante */}
        {showMenu && (
          <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg border border-neutral-200 min-w-[200px] overflow-hidden z-50">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 hover:bg-neutral-50 transition text-left"
            >
              <LogOut size={20} className="text-red-600" />
              <span className="text-neutral-900 font-medium">Cerrar Sesión</span>
            </button>
          </div>
        )}
      </div>

      {/* Parte derecha: íconos */}
      <div className="flex items-center gap-5 text-neutral-600">

        <div className="flex flex-col items-center text-xs">
          <Lamp size={20} />
          <span className="hidden sm:block">Aprende</span>
        </div>

        <div className="flex flex-col items-center text-xs">
          <Accessibility size={20} />
        </div>

        {/* Info Icon*/}
        <button 
          onClick={() => navigate("/app-guide")}
          className="flex flex-col items-center text-xs hover:text-blue-600 transition cursor-pointer"
        >
          <Info size={20} />
        </button>

        <div className="flex flex-col items-center text-xs">
          <Bell size={20} />
        </div>

      </div>
    </header>
  );
}
