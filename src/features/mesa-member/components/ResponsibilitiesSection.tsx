import { CheckCircle2 } from "lucide-react";

interface ResponsibilitiesSectionProps {
  rol: string;
}

const responsibilitiesData: Record<string, string[]> = {
  "Presidente de Mesa": [
    "Instalar la mesa de sufragio a las 7:00 AM en punto",
    "Verificar que todos los materiales estén completos",
    "Dirigir el proceso de votación durante toda la jornada",
    "Garantizar el orden y el respeto en la mesa",
    "Firmar las actas y entregarlas al ODPE al finalizar",
    "Resolver consultas de los electores",
    "Coordinar con los otros miembros de mesa"
  ],
  "Secretario de Mesa": [
    "Apoyar al presidente en la instalación de la mesa",
    "Verificar la identidad de los electores",
    "Entregar las cédulas de sufragio",
    "Registrar las firmas en el padrón electoral",
    "Ayudar en el conteo de votos al cierre",
    "Completar documentación requerida",
    "Asistir en la resolución de incidencias"
  ],
  "Tercer Miembro": [
    "Colaborar en la instalación de la mesa",
    "Vigilar el correcto desarrollo de la votación",
    "Orientar a los electores sobre el proceso",
    "Participar en el conteo final de votos",
    "Firmar las actas correspondientes",
    "Apoyar en el mantenimiento del orden"
  ]
};

export default function ResponsibilitiesSection({ rol }: ResponsibilitiesSectionProps) {
  const responsibilities = responsibilitiesData[rol] || responsibilitiesData["Tercer Miembro"];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
      <h2 className="text-xl font-bold text-neutral-900 mb-2">
        Tus Responsabilidades
      </h2>
      <p className="text-sm text-neutral-600 mb-4">
        Como {rol}, estas son tus funciones principales:
      </p>

      <div className="space-y-3">
        {responsibilities.map((responsibility, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-neutral-700">{responsibility}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-blue-50 rounded-xl p-4">
        <p className="text-sm text-blue-900 font-medium">
          💡 Recuerda: Tu participación es fundamental para la democracia
        </p>
      </div>
    </div>
  );
}
