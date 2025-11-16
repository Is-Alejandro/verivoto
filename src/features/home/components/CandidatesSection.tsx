import presidente from "../../../assets/images/candidates/presidente.png";
import senador from "../../../assets/images/candidates/LopezAliaga.jpg";
import diputado from "../../../assets/images/candidates/Keiko_Fujimori_2.jpg";
import parlamento from "../../../assets/images/candidates/candidates.jpg";

export default function CandidatesSection() {
  return (
    <div className="mt-8 pb-20">
      <h2 className="text-neutral-800 font-semibold mb-4 flex items-center gap-2">
        Información de Candidatos
      </h2>

      <div className="grid grid-cols-2 gap-6">

        {/* Presidenciales */}
        <div className="flex flex-col items-center">
          <img src={presidente} className="w-24 h-24 rounded-full object-cover border-4 border-blue-600" />
          <span className="mt-2 text-sm font-medium">Presidenciales</span>
        </div>

        {/* Senadores */}
        <div className="flex flex-col items-center">
          <img src={senador} className="w-24 h-24 rounded-full object-cover border-4 border-purple-600" />
          <span className="mt-2 text-sm font-medium">Para Senadores</span>
        </div>

        {/* Diputados */}
        <div className="flex flex-col items-center">
          <img src={diputado} className="w-24 h-24 rounded-full object-cover border-4 border-green-600" />
          <span className="mt-2 text-sm font-medium">Para Diputados</span>
        </div>

        {/* Parlamento Andino */}
        <div className="flex flex-col items-center">
          <img src={parlamento} className="w-24 h-24 rounded-full object-cover border-4 border-red-600" />
          <span className="mt-2 text-sm font-medium">A Parlamento Andino</span>
        </div>

      </div>
    </div>
  );
}
