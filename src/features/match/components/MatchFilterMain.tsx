interface MatchFiltersMainProps {
    region?: string;
    type?: string;
    onRegionChange?: (value: string) => void;
    onTypeChange?: (value: string) => void;
  }
  
  export default function MatchFiltersMain({
    region = "Áncash",
    type = "Presidenciales",
    onRegionChange,
    onTypeChange,
  }: MatchFiltersMainProps) {
    return (
      <div className="grid grid-cols-2 gap-3 mt-4">
        
        {/* Región */}
        <select
          value={region}
          onChange={(e) => onRegionChange && onRegionChange(e.target.value)}
          className="
            bg-white border border-neutral-300
            px-3 py-2 rounded-xl
            text-sm text-neutral-800
            outline-none
            focus:border-blue-500 transition
          "
        >
          <option>Áncash</option>
          <option>Lima</option>
          <option>Cusco</option>
          <option>Arequipa</option>
          <option>La Libertad</option>
        </select>
  
        {/* Tipo de elección */}
        <select
          value={type}
          onChange={(e) => onTypeChange && onTypeChange(e.target.value)}
          className="
            bg-white border border-neutral-300
            px-3 py-2 rounded-xl
            text-sm text-neutral-800
            outline-none
            focus:border-blue-500 transition
          "
        >
          <option>Presidenciales</option>
          <option>Senadores</option>
          <option>Diputados</option>
          <option>Parlamento Andino</option>
        </select>
  
      </div>
    );
  }
  