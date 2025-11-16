interface Props {
    onClick: () => void;
  }
  
  export default function VerificarButton({ onClick }: Props) {
    return (
      <button
        onClick={onClick}
        className="
          w-full mt-4 py-3 rounded-xl
          bg-blue-600 text-white font-medium
          shadow-sm active:scale-[0.97] transition
        "
      >
        Verificar Ahora
      </button>
    );
  }
  