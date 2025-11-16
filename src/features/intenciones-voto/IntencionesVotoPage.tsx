import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { encuestasData } from "./data/encuestasData";
import { ChevronLeft, ChevronRight, BarChart3 } from "lucide-react";

export default function IntencionesVotoPage() {
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 -mt-2">
        <button
          onClick={() => navigate("/home")}
          className="p-2 hover:bg-neutral-100 rounded-lg transition -ml-2"
        >
          <ChevronLeft size={24} className="text-neutral-900" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 mt-4">
            Intenciones de Voto
          </h1>
          <p className="text-sm text-neutral-600">
            Resultados de encuestas presidenciales
          </p>
        </div>
      </div>

      {/* Descripción */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
        <div className="flex items-start gap-3">
          <BarChart3 size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-blue-900 font-medium mb-1">
              Encuestas de opinión
            </p>
            <p className="text-sm text-blue-800">
              Selecciona una encuestadora para ver los resultados detallados de intención de voto presidencial.
            </p>
          </div>
        </div>
      </div>

      {/* Lista de encuestas */}
      <div className="space-y-4 pb-28">
        {encuestasData.map((encuesta) => (
          <button
            key={encuesta.id}
            onClick={() => navigate(`/intenciones-voto/${encuesta.id}`)}
            className="w-full bg-white border border-neutral-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-md transition text-left"
          >
            <div className="flex items-center gap-4">
              {/* Logo de encuestadora */}
              <div className="bg-neutral-100 rounded-xl p-3 flex items-center justify-center w-20 h-20 flex-shrink-0">
                <img
                  src={encuesta.logoUrl}
                  alt={encuesta.encuestadora}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Información */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-neutral-900 mb-1">
                  {encuesta.encuestadora}
                </h3>
                <p className="text-sm text-neutral-600 mb-2">
                  {encuesta.fecha}
                </p>
                <div className="flex items-center gap-4 text-xs text-neutral-500">
                  <span>Muestra: {encuesta.muestra.toLocaleString()}</span>
                  <span>•</span>
                  <span>Margen de error: {encuesta.margenError}</span>
                </div>
              </div>

              {/* Icono de flecha */}
              <ChevronRight size={24} className="text-neutral-400 flex-shrink-0" />
            </div>
          </button>
        ))}
      </div>
    </Layout>
  );
}
