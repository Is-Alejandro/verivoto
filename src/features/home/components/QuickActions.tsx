import { MapPin, Users, Info } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow-sm mt-6 border border-neutral-200">
      
      <div className="grid grid-cols-2 border-b border-neutral-200">
        
        {/* Mi local */}
        <button className="flex items-center gap-2 p-3 text-sm text-neutral-700 active:bg-neutral-100">
          <MapPin size={18} />
          Mi local de votación
        </button>

        {/* Miembro de mesa */}
        <button className="flex items-center gap-2 p-3 text-sm text-neutral-700 border-l border-neutral-200 active:bg-neutral-100">
          <Users size={18} />
          Miembro de Mesa
        </button>

      </div>

      {/* Información para electores */}
      <button className="flex items-center gap-2 p-3 text-sm text-neutral-700 w-full active:bg-neutral-100">
        <Info size={18} />
        Información para electores
      </button>
    </div>
  );
}
