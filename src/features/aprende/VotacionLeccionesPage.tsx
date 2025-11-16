import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function VotacionLeccionesPage() {
  const navigate = useNavigate();

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

        {/* Card de lección */}
        <div
          onClick={() => navigate("/aprende/votacion/leccion-1")}
          className="bg-white shadow-sm rounded-xl p-4 cursor-pointer active:scale-[0.98] transition"
        >
          <h3 className="text-[16px] font-semibold text-neutral-900">
            ¿Qué es votar?
          </h3>
          <p className="text-[14px] text-neutral-600 mt-1">
            Entiende de manera simple qué significa ejercer tu derecho al voto.
          </p>
        </div>

      </div>
    </div>
  );
}
