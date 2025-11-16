import { Flame, Vote } from "lucide-react";

export default function HeaderChips() {
  return (
    <div className="flex gap-3 mt-4">
      
      {/* Chip 1 */}
      <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium">
        <Vote size={16} />
        Intenciones de voto
      </div>

      {/* Chip 2 */}
      <div className="flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1.5 rounded-full text-sm font-medium">
        <Flame size={16} />
        Boca de Urna
      </div>

    </div>
  );
}
