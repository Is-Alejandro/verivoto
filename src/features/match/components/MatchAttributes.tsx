interface Attribute {
    label: string;
  }
  
  interface MatchAttributesProps {
    attributes?: Attribute[];
    onSelect?: (label: string) => void;
  }
  
  export default function MatchAttributes({
    attributes = [
      { label: "menor de 30" },
      { label: "estudios completos" },
      { label: "+" },
    ],
    onSelect,
  }: MatchAttributesProps) {
    return (
      <div className="flex flex-wrap gap-2 mt-3">
  
        {attributes.map((attr) => (
          <button
            key={attr.label}
            onClick={() => onSelect && onSelect(attr.label)}
            className="
              px-3 py-1 rounded-full text-sm 
              bg-neutral-100 text-neutral-700 
              border border-neutral-300
              font-medium active:scale-95 transition
            "
          >
            {attr.label}
          </button>
        ))}
  
      </div>
    );
  }
  