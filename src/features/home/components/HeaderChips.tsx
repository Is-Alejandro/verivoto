import { Flame, Vote } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HeaderChips() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-3 mt-4">
      
      {/* Intenciones de voto */}
      <button
        onClick={() => navigate("/intenciones-voto")}
        className="flex items-center gap-2 bg-[#D9F8DB] text-green-800 px-4 py-2 rounded-full text-[13px] font-medium shadow-sm border border-green-200 active:scale-95 transition"
      >
        <Vote size={16} className="text-green-700" />
        Intenciones de voto
      </button>

      {/* Boca de urna */}
      <button
        onClick={() => navigate("/boca-urna")}
        className="flex items-center gap-2 bg-[#FFD9D9] text-red-800 px-4 py-2 rounded-full text-[13px] font-medium shadow-sm border border-red-200 active:scale-95 transition"
      >
        <Flame size={16} className="text-red-700" />
        Boca de Urna
      </button>

    </div>
  );
}
