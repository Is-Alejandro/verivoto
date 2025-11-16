import { Scale } from "lucide-react";

export default function VerificadorIntro() {
  return (
    <div className="mt-4 mb-3">
      <div className="flex items-center gap-2">
        <Scale size={26} className="text-blue-700" />
        <h1 className="text-xl font-semibold text-neutral-800">
          Verificador de Rumores Electorales
        </h1>
      </div>

      <p className="text-neutral-600 mt-2 text-sm leading-relaxed">
        ¿Leíste algo y no estás seguro si es verdad? Pega el texto o el enlace
        aquí para comprobarlo.
      </p>
    </div>
  );
}
