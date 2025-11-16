interface Chip {
    label: string;
    active: boolean;
  }
  
  interface MatchChipsProps {
    chips?: Chip[];
    onToggle?: (label: string) => void;
  }
  
  export default function MatchChips({
    chips = [
      { label: "salud", active: true },
      { label: "minería", active: false },
      { label: "animales", active: true },
    ],
    onToggle,
  }: MatchChipsProps) {
    return (
      <div className="flex flex-wrap gap-2 mt-4">
  
        {chips.map((chip) => (
          <button
            key={chip.label}
            onClick={() => onToggle && onToggle(chip.label)}
            className={`
              px-3 py-1 rounded-full text-sm font-medium 
              border transition active:scale-95
              ${chip.active 
                ? "bg-blue-100 text-blue-600 border-blue-300" 
                : "bg-neutral-100 text-neutral-600 border-neutral-300"}
            `}
          >
            {chip.label}
          </button>
        ))}
  
      </div>
    );
  }
  