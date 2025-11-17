import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { bocaUrnaData } from "./data/bocaUrnaData";
import { ChevronLeft, RefreshCw, Clock, FileText, TrendingUp, AlertCircle } from "lucide-react";

export default function BocaUrnaPage() {
  const navigate = useNavigate();
  const data = bocaUrnaData;
  
  // Estados para animación
  const [actasAnimadas, setActasAnimadas] = useState(0);
  const [porcentajeAnimado, setPorcentajeAnimado] = useState(0);
  const [votosValidosAnimados, setVotosValidosAnimados] = useState(0);
  const [votosBlancosAnimados, setVotosBlancosAnimados] = useState(0);
  const [votosNulosAnimados, setVotosNulosAnimados] = useState(0);

  // Animación de números al cargar
  useEffect(() => {
    const duracion = 700; // 2 segundos
    const pasos = 30;
    const intervalo = duracion / pasos;

    let paso = 0;
    const timer = setInterval(() => {
      paso++;
      const progreso = paso / pasos;

      setActasAnimadas(Math.floor(data.actasContabilizadas * progreso));
      setPorcentajeAnimado(data.porcentajeActas * progreso);
      setVotosValidosAnimados(Math.floor(data.votosValidos * progreso));
      setVotosBlancosAnimados(Math.floor(data.votosBlancos * progreso));
      setVotosNulosAnimados(Math.floor(data.votosNulos * progreso));

      if (paso >= pasos) {
        clearInterval(timer);
        setActasAnimadas(data.actasContabilizadas);
        setPorcentajeAnimado(data.porcentajeActas);
        setVotosValidosAnimados(data.votosValidos);
        setVotosBlancosAnimados(data.votosBlancos);
        setVotosNulosAnimados(data.votosNulos);
      }
    }, intervalo);

    return () => clearInterval(timer);
  }, [data]);

  // Ordenar candidatos por porcentaje descendente
  const candidatosOrdenados = [...data.candidatos].sort(
    (a, b) => b.porcentaje - a.porcentaje
  );

  const maxPorcentaje = Math.max(...candidatosOrdenados.map((c) => c.porcentaje));

  const formatearNumero = (num: number) => {
    return num.toLocaleString("es-PE");
  };

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6 mt-2">
        <button
          onClick={() => navigate("/home")}
          className="p-2 hover:bg-neutral-100 rounded-lg transition -ml-2"
        >
          <ChevronLeft size={24} className="text-neutral-900" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 mt-3">
            🗳️ Boca de Urna
          </h1>
          <p className="text-sm text-neutral-600">
            Resultados en tiempo real - ONPE
          </p>
        </div>
      </div>

      {/* Banner de información en vivo */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-5 mb-6 text-white">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold">EN VIVO</span>
        </div>
        <h2 className="text-xl font-bold mb-3">
          Elecciones Presidenciales 2025
        </h2>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Clock size={16} />
            <span>Última actualización: {data.horaActualizacion}</span>
          </div>
          <div className="flex items-center gap-2">
            <RefreshCw size={16} />
            <span>{data.ultimaActualizacion}</span>
          </div>
        </div>
      </div>

      {/* Estadísticas de conteo */}
      <div className="bg-white border border-neutral-200 rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <FileText size={20} className="text-blue-600" />
          <h3 className="text-lg font-bold text-neutral-900">
            Avance del Conteo
          </h3>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-neutral-600">Actas contabilizadas</span>
            <span className="text-sm font-bold text-neutral-900">
              {formatearNumero(actasAnimadas)} / {formatearNumero(data.actasTotales)}
            </span>
          </div>
          <div className="relative w-full h-3 bg-neutral-100 rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-2000 ease-out"
              style={{ width: `${porcentajeAnimado}%` }}
            />
          </div>
          <p className="text-right text-lg font-bold text-blue-600 mt-2">
            {porcentajeAnimado.toFixed(1)}%
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-neutral-200">
          <div>
            <p className="text-xs text-neutral-500 mb-1">Votos válidos</p>
            <p className="text-sm font-bold text-neutral-900">
              {formatearNumero(votosValidosAnimados)}
            </p>
          </div>
          <div>
            <p className="text-xs text-neutral-500 mb-1">Votos en blanco</p>
            <p className="text-sm font-bold text-neutral-900">
              {formatearNumero(votosBlancosAnimados)}
            </p>
          </div>
          <div>
            <p className="text-xs text-neutral-500 mb-1">Votos nulos</p>
            <p className="text-sm font-bold text-neutral-900">
              {formatearNumero(votosNulosAnimados)}
            </p>
          </div>
        </div>
      </div>

      {/* Resultados por candidato */}
      <div className="bg-white border border-neutral-200 rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp size={20} className="text-green-600" />
          <h3 className="text-lg font-bold text-neutral-900">
            Resultados Preliminares
          </h3>
        </div>

        <div className="space-y-5">
          {candidatosOrdenados.map((candidato, index) => (
            <div key={index} className="space-y-3">
              {/* Candidato y partido */}
              <div className="flex items-center gap-3">
                {/* Posición */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                  index === 0 ? "bg-yellow-100 text-yellow-700" :
                  index === 1 ? "bg-gray-100 text-gray-700" :
                  index === 2 ? "bg-orange-100 text-orange-700" :
                  "bg-neutral-100 text-neutral-600"
                }`}>
                  {index + 1}
                </div>

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

                {/* Porcentaje y votos */}
                <div className="text-right">
                  <p className="text-2xl font-bold text-neutral-900">
                    {candidato.porcentaje.toFixed(1)}%
                  </p>
                  <p className="text-xs text-neutral-500">
                    {formatearNumero(candidato.votos)} votos
                  </p>
                </div>
              </div>

              {/* Barra de progreso */}
              <div className="relative w-full h-3 bg-neutral-100 rounded-full overflow-hidden">
                <div
                  className={`absolute top-0 left-0 h-full rounded-full transition-all duration-500 ${
                    index === 0 ? "bg-gradient-to-r from-green-500 to-green-600" :
                    index === 1 ? "bg-gradient-to-r from-blue-500 to-blue-600" :
                    index === 2 ? "bg-gradient-to-r from-purple-500 to-purple-600" :
                    "bg-gradient-to-r from-neutral-400 to-neutral-500"
                  }`}
                  style={{
                    width: `${(candidato.porcentaje / maxPorcentaje) * 100}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nota informativa */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-28">
        <div className="flex items-start gap-3">
          <AlertCircle size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-amber-900 font-medium mb-1">
              Resultados no oficiales
            </p>
            <p className="text-xs text-amber-800">
              Estos son resultados preliminares y pueden variar conforme se actualicen las actas.
              Los resultados oficiales serán publicados por la ONPE una vez concluido el conteo total.
              Actualización automática cada 5 minutos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
