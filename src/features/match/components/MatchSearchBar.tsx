import { Search } from "lucide-react";

interface MatchSearchBarProps {
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: () => void;
}

export default function MatchSearchBar({
  value = "",
  onChange,
  onSearch,
}: MatchSearchBarProps) {
  return (
    <div className="mt-4 flex">
      <input
        type="text"
        placeholder="Buscar..."
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        className="
          flex-1 bg-white border border-neutral-300
          px-4 py-2 rounded-l-xl
          text-sm text-neutral-800
          outline-none
          focus:border-blue-500 transition
        "
      />

      <button
        onClick={onSearch}
        className="
          bg-blue-600 px-4 rounded-r-xl text-white 
          flex items-center justify-center
          hover:bg-blue-700 active:scale-95 transition
        "
      >
        <Search size={18} />
      </button>
    </div>
  );
}
