import { ArrowLeft, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AprendeHomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F7FA] pb-24">

      {/* HEADER */}
      <header className="px-4 pt-4 flex items-center gap-3">
        <button onClick={() => window.history.back()}>
          <ArrowLeft size={26} className="text-neutral-700" />
        </button>

        <GraduationCap size={28} className="text-blue-600" />

        <h1 className="text-[20px] font-semibold text-neutral-900">
          Aprende: Conocimiento Electoral
        </h1>
      </header>

      {/* SUBTÍTULO */}
      <div className="px-4 mt-3">
        <h2 className="text-[17px] font-semibold text-neutral-900">
          Pon a prueba tu conocimiento electoral
        </h2>
        <p className="text-[14px] text-neutral-600 mt-1">
          Elige una categoría para empezar.
        </p>
      </div>

      {/* GRID DE CATEGORÍAS */}
      <div className="grid grid-cols-2 gap-4 px-4 mt-5">

        {/* CATEGORÍA 1 */}
        <button
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => navigate("/aprende/votacion")}
        >
          <img
            src="/images/aprende-votacion.png"
            className="h-28 w-full object-cover"
          />
          <div className="p-3">
            <p className="font-medium text-neutral-800 text-[15px] leading-tight">
              ¿Cómo funciona la Votación?
            </p>

            {/* Barra progreso */}
            <div className="h-2 bg-neutral-200 rounded-full mt-2">
              <div className="h-full bg-blue-600 rounded-full w-1/4"></div>
            </div>
          </div>
        </button>

        {/* CATEGORÍA 2 */}
        <button
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => navigate("/aprende/historia")}
        >
          <img
            src="/images/aprende-historia.png"
            className="h-28 w-full object-cover"
          />
          <div className="p-3">
            <p className="font-medium text-neutral-800 text-[15px] leading-tight">
              Historia de las Elecciones
            </p>
            <div className="h-2 bg-neutral-200 rounded-full mt-2">
              <div className="h-full bg-blue-600 rounded-full w-1/5"></div>
            </div>
          </div>
        </button>

        {/* CATEGORÍA 3 */}
        <button
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => navigate("/aprende/partidos")}
        >
          <img
            src="/images/aprende-partidos.png"
            className="h-28 w-full object-cover"
          />
          <div className="p-3">
            <p className="font-medium text-neutral-800 text-[15px] leading-tight">
              Partidos y Candidatos
            </p>
            <div className="h-2 bg-neutral-200 rounded-full mt-2">
              <div className="h-full bg-blue-600 rounded-full w-1/6"></div>
            </div>
          </div>
        </button>

        {/* CATEGORÍA 4 */}
        <button
          className="bg-white rounded-xl shadow-sm overflow-hidden"
          onClick={() => navigate("/aprende/reglas")}
        >
          <img
            src="/images/aprende-reglas.png"
            className="h-28 w-full object-cover"
          />
          <div className="p-3">
            <p className="font-medium text-neutral-800 text-[15px] leading-tight">
              Reglas Electorales Clave
            </p>
            <div className="h-2 bg-neutral-200 rounded-full mt-2">
              <div className="h-full bg-blue-600 rounded-full w-1/4"></div>
            </div>
          </div>
        </button>

      </div>

      {/* SECCIÓN LOGROS */}
      <div className="mt-7 px-4">
        <h3 className="font-semibold text-neutral-800 text-[17px]">
          Mis Logros
        </h3>

        <div className="bg-white rounded-xl p-4 shadow-sm mt-3">
          <p className="font-medium text-neutral-800">Votante Informado</p>
          <p className="text-sm text-neutral-600 mt-1">
            Completa tu primer quiz.
          </p>
        </div>
      </div>
    </div>
  );
}
