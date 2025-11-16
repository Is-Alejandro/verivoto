import { MapPin, Users, Info } from "lucide-react";

export default function QuickActions() {
  return (
    <div className="bg-white rounded-2xl shadow-md shadow-black/5 mt-6 border border-neutral-200">
      
      {/* Primera fila */}
      <div className="grid grid-cols-2 divide-x divide-neutral-200 border-b border-neutral-200">
        
        {/* Mi local de votación */}
        <button className="flex items-center gap-3 p-4 text-sm text-neutral-800 w-full hover:bg-neutral-50 active:bg-neutral-100 transition">
          <div className="bg-blue-50 p-2 rounded-lg">
            <MapPin size={18} className="text-blue-600" />
          </div>
          <span className="font-medium">Mi local de votación</span>
        </button>

        {/* Miembro de mesa */}
        <button className="flex items-center gap-3 p-4 text-sm text-neutral-800 w-full hover:bg-neutral-50 active:bg-neutral-100 transition">
          <div className="bg-purple-50 p-2 rounded-lg">
            <Users size={18} className="text-purple-600" />
          </div>
          <span className="font-medium">Miembro de Mesa</span>
        </button>

      </div>

      {/* Información para electores */}
      <button className="flex items-center gap-3 p-4 text-sm text-neutral-800 w-full hover:bg-neutral-50 active:bg-neutral-100 transition">
        <div className="bg-emerald-50 p-2 rounded-lg">
          <Info size={18} className="text-emerald-600" />
        </div>
        <span className="font-medium">Información para electores</span>
      </button>

    </div>
  );
}
