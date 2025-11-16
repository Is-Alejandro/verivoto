import { defaultChips } from "../data/chipsData";
import { defaultAttributes } from "../data/attributesData";

interface MatchResultsCountProps {
  count?: number;
  onReset?: () => void;
}

export default function MatchResultsCount({
  count = 0,
  onReset,
}: MatchResultsCountProps) {
  return (
    <div className="mt-5 flex items-center justify-between">

      {/* Conteo */}
      <p className="font-medium text-neutral-800">
        {count} candidatos encontrados
      </p>

      {/* Botón reset */}
      <button
        onClick={onReset}
        className="
          text-sm px-3 py-1.5 rounded-lg
          bg-neutral-200 text-neutral-700
          hover:bg-neutral-300
          active:scale-95 transition
        "
      >
        Resetear
      </button>
    </div>
  );
}
