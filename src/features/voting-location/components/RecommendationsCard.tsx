import { CheckCircle2, Shield } from "lucide-react";

export default function RecommendationsCard() {
  const recommendations = [
    "Lleva tu DNI físico, es el único documento válido para votar.",
    "Acude a tu local de votación en el horario recomendado para evitar aglomeraciones.",
    "Ubica tu mesa y pabellón antes de ingresar para un proceso más ágil.",
    "Evita llevar objetos de valor o grandes bultos.",
  ];

  return (
    <div className="bg-white rounded-2xl shadow-md shadow-black/5 p-5 mt-5 border border-neutral-200">
      {/* Título */}
      <div className="flex items-center gap-2 mb-4">
        <Shield size={20} className="text-neutral-900" />
        <h2 className="text-lg font-bold text-neutral-900">Recomendaciones</h2>
      </div>

      {/* Lista de recomendaciones */}
      <div className="space-y-3.5">
        {recommendations.map((text, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle2
              size={20}
              className="text-neutral-400 flex-shrink-0 mt-0.5"
            />
            <p className="text-sm text-neutral-700 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
