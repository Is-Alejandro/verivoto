import { MapPin, Clock, Users, BookOpen } from "lucide-react";

interface MesaInfoCardProps {
  mesaInfo: {
    numero: string;
    rol: string;
    horario: string;
  };
  votingLocation: {
    nombre: string;
    direccion: string;
    pabellon: string;
    aula: string;
  };
}

export default function MesaInfoCard({ mesaInfo, votingLocation }: MesaInfoCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
      <h2 className="text-xl font-bold text-neutral-900 mb-4">
        Tu Asignación
      </h2>

      <div className="space-y-4">
        {/* Rol */}
        <div className="flex items-start gap-3">
          <div className="bg-purple-100 rounded-lg p-2.5 mt-0.5">
            <Users size={20} className="text-purple-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-neutral-500">Rol Asignado</p>
            <p className="text-base font-semibold text-neutral-900">{mesaInfo.rol}</p>
          </div>
        </div>

        {/* Mesa */}
        <div className="flex items-start gap-3">
          <div className="bg-blue-100 rounded-lg p-2.5 mt-0.5">
            <BookOpen size={20} className="text-blue-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-neutral-500">Mesa de Sufragio</p>
            <p className="text-base font-semibold text-neutral-900">Mesa N° {mesaInfo.numero}</p>
          </div>
        </div>

        {/* Horario */}
        <div className="flex items-start gap-3">
          <div className="bg-orange-100 rounded-lg p-2.5 mt-0.5">
            <Clock size={20} className="text-orange-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-neutral-500">Horario de Atención</p>
            <p className="text-base font-semibold text-neutral-900">{mesaInfo.horario}</p>
          </div>
        </div>

        {/* Ubicación */}
        <div className="flex items-start gap-3">
          <div className="bg-green-100 rounded-lg p-2.5 mt-0.5">
            <MapPin size={20} className="text-green-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm text-neutral-500">Local de Votación</p>
            <p className="text-base font-semibold text-neutral-900">{votingLocation.nombre}</p>
            <p className="text-sm text-neutral-600 mt-1">{votingLocation.direccion}</p>
            <p className="text-sm text-neutral-600">
              Pabellón {votingLocation.pabellon} - Aula {votingLocation.aula}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
