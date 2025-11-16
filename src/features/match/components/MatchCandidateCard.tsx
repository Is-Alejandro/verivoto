interface MatchCandidateCardProps {
  name: string;
  party: string;
  age: number;
  proposal: string;
  photo?: string;
  match?: number; // Porcentaje de match
}

export default function MatchCandidateCard({
  name,
  party,
  age,
  proposal,
  photo,
  match = 0,
}: MatchCandidateCardProps) {
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
        <div className="w-14 h-14 rounded-full bg-neutral-200 overflow-hidden">
          {photo ? (
            <img src={photo} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-neutral-300" />
          )}
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-neutral-900">{name}</h3>

            {/* Porcentaje de match */}
            <span
              className="
                text-xs px-2 py-1 rounded-full 
                bg-purple-100 text-purple-700 font-semibold
              "
            >
              {match}%
            </span>
          </div>

          <p className="text-sm text-neutral-600">
            {party} | Edad: {age}
          </p>

          <p className="text-sm mt-1 leading-snug">
            <span className="font-semibold">Propuesta principal: </span>
            {proposal}
          </p>
        </div>

      </div>
    </div>
  );
}
