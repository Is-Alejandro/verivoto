interface Props {
    value: string;
    onChange: (v: string) => void;
  }
  
  export default function VerificadorTextarea({ value, onChange }: Props) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Escribe o pega el contenido que quieres verificar..."
        className="
          w-full min-h-[120px] p-4 mt-4
          bg-white border border-neutral-300 rounded-xl
          text-neutral-700 text-sm shadow-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500
        "
      />
    );
  }
  