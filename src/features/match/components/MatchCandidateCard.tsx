interface MatchCandidateCardProps {
  name: string;
  party: string;
  age: number;
  proposal: string;
  photo?: string;
  match?: number; 
}

export default function MatchCandidateCard({
  name,
  party,
  age,
  proposal,
  photo,
  match = 0,
}: MatchCandidateCardProps) {

  // 🎨 Color dinámico según porcentaje
  const getMatchColor = () => {
    if (match >= 80) return "bg-green-500";
    if (match >= 40) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div
      className="
        bg-white p-4 rounded-xl shadow-sm 
        border border-neutral-200
        active:scale-[0.98] transition
      "
    >
      <div className="flex gap-4">
        
        {/* Foto */}
        <div className="w-14 h-14 rounded-full bg-neutral-200 overflow-hidden shrink-0">
          {photo ? (
            <img src={photo} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-neutral-300" />
          )}
        </div>

        {/* Info */}
        <div className="flex-1">
          
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-neutral-900 leading-tight">
              {name}
            </h3>

            {/* Badge pequeño */}
            <span
              className="
                text-[11px] px-2 py-1 rounded-full 
                bg-purple-100 text-purple-700 font-semibold
              "
            >
              {match}%
            </span>
          </div>

          <p className="text-sm text-neutral-600">
            {party} | Edad: {age}
          </p>

          <p className="text-[11px] text-neutral-500 mt-2 mb-1">
            Compatibilidad:
          </p>

          {/* Barra dinámica */}
          <div className="w-full bg-neutral-200 rounded-full h-2 overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${getMatchColor()}`}
              style={{ width: `${match}%` }}
            />
          </div>

          <p className="text-sm mt-3 leading-snug text-neutral-700">
            <span className="font-semibold">Propuesta principal: </span>
            {proposal}
          </p>
        </div>

      </div>
    </div>
  );
}
