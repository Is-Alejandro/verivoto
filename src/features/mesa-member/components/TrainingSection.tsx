import { Calendar, MapPin, Video } from "lucide-react";

interface TrainingSectionProps {
  capacitaciones: Array<{
    fecha: string;
    horario: string;
    modalidad: string;
    lugar: string;
  }>;
}

export default function TrainingSection({ capacitaciones }: TrainingSectionProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00");
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('es-PE', options);
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
      <h2 className="text-xl font-bold text-neutral-900 mb-2">
        Capacitaciones Programadas
      </h2>
      <p className="text-sm text-neutral-600 mb-4">
        Es obligatorio asistir al menos a una capacitación
      </p>

      <div className="space-y-4">
        {capacitaciones.map((capacitacion, index) => (
          <div
            key={index}
            className="border border-neutral-200 rounded-xl p-4 hover:border-blue-300 transition"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className={`${
                capacitacion.modalidad === "Presencial" 
                  ? "bg-purple-100" 
                  : "bg-blue-100"
              } rounded-lg px-3 py-1`}>
                <span className={`text-xs font-semibold ${
                  capacitacion.modalidad === "Presencial"
                    ? "text-purple-700"
                    : "text-blue-700"
                }`}>
                  {capacitacion.modalidad}
                </span>
              </div>
            </div>

            {/* Fecha */}
            <div className="flex items-start gap-3 mb-2">
              <Calendar size={18} className="text-neutral-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-neutral-900 capitalize">
                  {formatDate(capacitacion.fecha)}
                </p>
                <p className="text-sm text-neutral-600">{capacitacion.horario}</p>
              </div>
            </div>

            {/* Lugar */}
            <div className="flex items-start gap-3">
              {capacitacion.modalidad === "Presencial" ? (
                <MapPin size={18} className="text-neutral-500 mt-0.5" />
              ) : (
                <Video size={18} className="text-neutral-500 mt-0.5" />
              )}
              <p className="text-sm text-neutral-600">{capacitacion.lugar}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-amber-50 rounded-xl p-4 border border-amber-200">
        <p className="text-sm text-amber-900">
          <span className="font-semibold">⚠️ Importante:</span> La asistencia a capacitación es obligatoria. 
          Si no asistes, podrías recibir una multa de hasta S/ 230.
        </p>
      </div>
    </div>
  );
}
