import { UserCircle, Lamp, Accessibility, Info, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";

export default function Header() {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();

  // Alternar idioma: ES → EN → QU → ES...
  const toggleLanguage = () => {
    if (language === "es") setLanguage("en");
    else if (language === "en") setLanguage("qu");
    else setLanguage("es");
  };

  // Mostrar letra del idioma actual (ES / EN / QU)
  const languageLabel = language.toUpperCase();

  return (
    <header className="h-[65px] w-full bg-white shadow-sm px-4 flex items-center justify-between sticky top-0 z-30">
      
      {/* IZQUIERDA: Avatar + Nombre */}
      <div className="flex items-center gap-3">
        <UserCircle size={38} className="text-neutral-700" />

        <div className="flex flex-col leading-tight">
          <span className="text-neutral-700 font-medium text-base">
            Mauro Lázaro
          </span>
        </div>
      </div>

      {/* DERECHA: Iconos */}
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

        {/* Selector de Idioma — reemplaza la campana */}
        <div
          className="flex flex-col items-center text-xs cursor-pointer"
          onClick={toggleLanguage}
        >
          <Globe size={20} />
          <span className="text-[11px] mt-1">{languageLabel}</span>
        </div>

      </div>
    </header>
  );
}
