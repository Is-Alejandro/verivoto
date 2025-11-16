import { ArrowLeft, BookOpenCheck, CheckCircle, Circle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function VotacionLeccionesPage() {
  const navigate = useNavigate();

  // 🚀 Más adelante este estado vendrá de Context o de la BD
  const progreso = {
    leccion1: true,
    leccion2: false,
    leccion3: false,
    leccion4: false,
  };

  const lecciones = [
    {
      id: 1,
      title: "¿Qué es votar?",
      desc: "Entiende de manera simple qué significa ejercer tu derecho al voto.",
      completed: progreso.leccion1,
      route: "/aprende/votacion/leccion-1",
    },
    {
      id: 2,
      title: "¿Quiénes pueden votar?",
      desc: "Conoce los requisitos y particularidades del padrón electoral.",
      completed: progreso.leccion2,
      route: "#",
    },
    {
      id: 3,
      title: "¿Cómo se vota?",
      desc: "Mira los pasos sencillos del proceso de votación real.",
      completed: progreso.leccion3,
      route: "#",
    },
    {
      id: 4,
      title: "¿Qué pasa después del voto?",
      desc: "Aprende qué sucede con tu voto y cómo se cuentan los resultados.",
      completed: progreso.leccion4,
      route: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA] pb-24">

      {/* HEADER */}
      <header className="px-4 pt-4 flex items-center gap-3">
        <button onClick={() => window.history.back()}>
          <ArrowLeft size={26} className="text-neutral-700" />
        </button>

        <h1 className="text-[20px] font-semibold text-neutral-900">
          ¿Cómo funciona la votación?
        </h1>
      </header>

      {/* LISTA DE LECCIONES */}
      <div className="px-4 mt-5 flex flex-col gap-4">

        {lecciones.map((lec) => (
          <div
            key={lec.id}
            onClick={() => lec.route !== "#" && navigate(lec.route)}
            className={`bg-white shadow-sm rounded-xl p-4 cursor-pointer active:scale-[0.98] transition
              ${lec.route === "#" ? "opacity-60 cursor-default" : ""}`}
          >
            {/* Top: Número + estado */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-[13px] font-medium text-blue-600">
                Lección {lec.id} de {lecciones.length}
              </span>

              {lec.completed ? (
                <CheckCircle size={20} className="text-green-500" />
              ) : (
                <Circle size={20} className="text-neutral-300" />
              )}
            </div>

            {/* Título */}
            <h3 className="text-[16px] font-semibold text-neutral-900 flex items-center gap-2">
              <BookOpenCheck size={18} className="text-blue-500" />
              {lec.title}
            </h3>

            {/* Descripción */}
            <p className="text-[14px] text-neutral-600 mt-1 leading-snug">
              {lec.desc}
            </p>

            {/* Barra progreso */}
            <div className="h-2 bg-neutral-200 rounded-full mt-3">
              <div
                className={`h-full rounded-full transition-all duration-300
                  ${lec.completed ? "bg-green-500 w-full" : "bg-blue-400 w-1/5"}`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
