interface Attribute {
    label: string;
    active: boolean;
  }
  
  interface MatchAttributesProps {
    attributes?: Attribute[];
    onToggle?: (label: string) => void;
  }
  
  export default function MatchAttributes({
    attributes = [
      { label: "menor de 30", active: false },
      { label: "estudios completos", active: false },
      { label: "experiencia política", active: false },
    ],
    onToggle,
  }: MatchAttributesProps) {
    return (
      <div className="flex flex-wrap gap-2 mt-3">
  
        {attributes.map((attr) => (
          <button
            key={attr.label}
            onClick={() => onToggle && onToggle(attr.label)}
            className={`
              px-3 py-1 rounded-full text-sm font-medium shadow-sm
              border active:scale-95 transition
        
              ${
                attr.active
                  ? "bg-purple-100 text-purple-700 border-purple-400"
                  : "bg-neutral-100 text-neutral-700 border-neutral-300"
              }
            `}
          >
            {attr.label}
          </button>
        ))}
  
      </div>
    );
  }
  