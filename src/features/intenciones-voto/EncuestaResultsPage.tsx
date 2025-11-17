import { useNavigate, useParams } from "react-router-dom";
import { encuestasData } from "./data/encuestasData";
import { ChevronLeft, Calendar, Users, AlertCircle } from "lucide-react";

export default function EncuestaResultsPage() {
  const navigate = useNavigate();
  const { encuestaId } = useParams<{ encuestaId: string }>();

  const encuesta = encuestasData.find((e) => e.id === encuestaId);

  if (!encuesta) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <AlertCircle size={48} className="text-neutral-400 mb-4" />
        <h2 className="text-xl font-bold text-neutral-900 mb-2">
          Encuesta no encontrada
        </h2>
        <p className="text-neutral-600 mb-6">
          No se pudo encontrar la encuesta solicitada
        </p>
        <button
          onClick={() => navigate("/intenciones-voto")}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
        >
          Volver a encuestas
        </button>
      </div>
    );
  }

  // Ordenar candidatos por porcentaje descendente
  const candidatosOrdenados = [...encuesta.candidatos].sort(
    (a, b) => b.porcentaje - a.porcentaje
  );

  const maxPorcentaje = Math.max(...candidatosOrdenados.map((c) => c.porcentaje));

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 -mt-2">
        <button
          onClick={() => navigate("/intenciones-voto")}
          className="p-2 hover:bg-neutral-100 rounded-lg transition -ml-2"
        >
          <ChevronLeft size={24} className="text-neutral-900" />
        </button>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-neutral-900 mt-4">
            {encuesta.encuestadora}
          </h1>
          <p className="text-sm text-neutral-600">Resultados de encuesta</p>
        </div>
      </div>

      {/* Información de la encuesta */}
      <div className="bg-white border border-neutral-200 rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-neutral-100 rounded-xl p-3 flex items-center justify-center w-16 h-16">
            <img
              src={encuesta.logoUrl}
              alt={encuesta.encuestadora}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold text-neutral-900">
              {encuesta.encuestadora}
            </h2>
            <p className="text-sm text-neutral-600">{encuesta.fecha}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Users size={18} className="text-neutral-500" />
            <div>
              <p className="text-xs text-neutral-500">Muestra</p>
              <p className="text-sm font-semibold text-neutral-900">
                {encuesta.muestra.toLocaleString()} personas
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={18} className="text-neutral-500" />
            <div>
              <p className="text-xs text-neutral-500">Margen de error</p>
              <p className="text-sm font-semibold text-neutral-900">
                {encuesta.margenError}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div className="bg-white border border-neutral-200 rounded-2xl p-5 mb-6">
        <h3 className="text-lg font-bold text-neutral-900 mb-4">
          Intención de Voto
        </h3>

        <div className="space-y-5">
          {candidatosOrdenados.map((candidato, index) => (
            <div key={index} className="space-y-2">
              {/* Candidato y partido */}
              <div className="flex items-center gap-3">
                {/* Imagen del candidato */}
                <img
                  src={candidato.imagenUrl}
                  alt={candidato.nombre}
                  className="w-12 h-12 rounded-full object-cover border-2 border-neutral-200"
                />

                {/* Información */}
                <div className="flex-1">
                  <p className="text-sm font-semibold text-neutral-900">
                    {candidato.nombre}
                  </p>
                  <div className="flex items-center gap-2">
                    <img
                      src={candidato.partidoLogoUrl}
                      alt={candidato.partido}
                      className="w-5 h-5 rounded object-cover"
                    />
                    <p className="text-xs text-neutral-600">{candidato.partido}</p>
                  </div>
                </div>

                {/* Porcentaje */}
                <div className="text-right">
                  <p className="text-2xl font-bold text-neutral-900">
                    {candidato.porcentaje.toFixed(1)}%
                  </p>
                </div>
              </div>

              {/* Barra de progreso */}
              <div className="relative w-full h-3 bg-neutral-100 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500"
                  style={{
                    width: `${(candidato.porcentaje / maxPorcentaje) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nota legal */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-28">
        <p className="text-xs text-amber-900">
          <span className="font-semibold">Nota:</span> Los resultados mostrados son
          referenciales y pueden variar según la metodología de cada encuestadora.
          La intención de voto no garantiza el resultado final de las elecciones.
        </p>
      </div>
    </div>
  );
}
