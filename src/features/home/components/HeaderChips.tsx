import { Flame, Vote } from "lucide-react";

export default function HeaderChips() {
  return (
    <div className="flex gap-3 mt-4">
      
      {/* Chip 1 */}
      <div className="flex items-center gap-2 bg-[#D9F8DB] text-green-800 px-4 py-2 rounded-full text-[13px] font-medium shadow-sm border border-green-200">
        <Vote size={16} className="text-green-700" />
        Intenciones de voto
      </div>

      {/* Chip 2 */}
      <div className="flex items-center gap-2 bg-[#FFD9D9] text-red-800 px-4 py-2 rounded-full text-[13px] font-medium shadow-sm border border-red-200">
        <Flame size={16} className="text-red-700" />
        Boca de Urna
      </div>

    </div>
  );
}
