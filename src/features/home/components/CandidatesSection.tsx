import { useNavigate } from "react-router-dom";
import presidente from "../../../assets/images/candidates/presidente.png";
import senador from "../../../assets/images/candidates/LopezAliaga.jpg";
import diputado from "../../../assets/images/candidates/Keiko_Fujimori_2.jpg";
import parlamento from "../../../assets/images/candidates/candidates.jpg";

export default function CandidatesSection() {
  const navigate = useNavigate();

  return (
    <div className="mt-8 pb-20">
      <h2 className="text-neutral-900 font-semibold mb-4 flex items-center gap-2">
        Información de Candidatos
      </h2>

      <div className="grid grid-cols-2 gap-6">

        {/* Presidenciales */}
        <button onClick={() => navigate("/candidatos/presidenciales")} className="flex flex-col items-center relative active:scale-95 transition">
          <div className="relative">
            <img src={presidente} className="w-24 h-24 rounded-full object-cover border border-neutral-200 shadow-md shadow-black/10"/>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">
              1
            </div>
          </div>
          <span className="mt-4 text-sm font-semibold text-neutral-800">Presidenciales</span>
        </button>

        {/* Senadores */}
        <button onClick={() => navigate("/candidatos/senadores")} className="flex flex-col items-center relative active:scale-95 transition">
          <div className="relative">
            <img src={senador} className="w-24 h-24 rounded-full object-cover border border-neutral-200 shadow-md shadow-black/10"/>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">
              60
            </div>
          </div>
          <span className="mt-4 text-sm font-semibold text-neutral-800">Para Senadores</span>
        </button>

        {/* Diputados */}
        <button onClick={() => navigate("/candidatos/diputados")} className="flex flex-col items-center relative active:scale-95 transition">
          <div className="relative">
            <img src={diputado} className="w-24 h-24 rounded-full object-cover border border-neutral-200 shadow-md shadow-black/10"/>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-green-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">
              130
            </div>
          </div>
          <span className="mt-4 text-sm font-semibold text-neutral-800">Para Diputados</span>
        </button>

        {/* Parlamento Andino */}
        <button onClick={() => navigate("/candidatos/parlamento-andino")} className="flex flex-col items-center relative active:scale-95 transition">
          <div className="relative">
            <img src={parlamento} className="w-24 h-24 rounded-full object-cover border border-neutral-200 shadow-md shadow-black/10"/>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-semibold px-2 py-0.5 rounded-full shadow">
              5
            </div>
          </div>
          <span className="mt-4 text-sm font-semibold text-neutral-800">A Parlamento Andino</span>
        </button>

      </div>
    </div>
  );
}
