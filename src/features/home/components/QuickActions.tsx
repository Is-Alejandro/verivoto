import { MapPin, Users, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function QuickActions() {
  const navigate = useNavigate();
  const [isMesaMember, setIsMesaMember] = useState(false);

  useEffect(() => {
    const userStr = localStorage.getItem("currentUser");
    if (userStr) {
      const user = JSON.parse(userStr);
      setIsMesaMember(user.isMesaMember || false);
    }
  }, []);

  return (
    <div className="bg-white rounded-2xl shadow-md shadow-black/5 mt-6 border border-neutral-200">
      
      {/* Primera fila */}
      <div className="grid grid-cols-2 divide-x divide-neutral-200 border-b border-neutral-200">
        
        {/* Mi local de votación */}
        <button
          onClick={() => navigate("/local-votacion")}
          className="flex items-center gap-3 p-4 text-sm text-neutral-800 w-full hover:bg-neutral-50 active:bg-neutral-100 transition"
        >
          <div className="bg-blue-50 p-2 rounded-lg">
            <MapPin size={18} className="text-blue-600" />
          </div>
          <span className="font-medium">Mi local de votación</span>
        </button>

        {/* Miembro de mesa */}
        <button
          onClick={() => isMesaMember && navigate("/miembro-mesa")}
          disabled={!isMesaMember}
          className={`flex items-center gap-3 p-4 text-sm w-full transition ${
            isMesaMember
              ? "text-neutral-800 hover:bg-neutral-50 active:bg-neutral-100 cursor-pointer"
              : "text-neutral-400 cursor-not-allowed opacity-60"
          }`}
        >
          <div className={`p-2 rounded-lg ${
            isMesaMember ? "bg-purple-50" : "bg-neutral-100"
          }`}>
            <Users size={18} className={isMesaMember ? "text-purple-600" : "text-neutral-400"} />
          </div>
          <span className="font-medium">Miembro de Mesa</span>
        </button>

      </div>

      {/* Información para electores */}
      <button
        onClick={() => navigate("/info-electores")}
        className="flex items-center gap-3 p-4 text-sm text-neutral-800 w-full hover:bg-neutral-50 active:bg-neutral-100 transition"
      >
        <div className="bg-emerald-50 p-2 rounded-lg">
          <Info size={18} className="text-emerald-600" />
        </div>
        <span className="font-medium">Información para electores</span>
      </button>

    </div>
  );
}
