// src/components/DetallePartido.tsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// Importa el JSON directamente
import allPartidosData from '../data/data.json';

// --- ¡MOLDES (INTERFACES)! ---
interface Candidato {
  id: string;
  nombre: string;
  cargo: string;
  slug?: string; // Hago slug opcional
  infogob_url: string;
}
interface Partido {
  id: string;
  nombre: string;
  logo_url: string;
  historia: string;
  ideologia: string;
  plan_gobierno_url: string; // Puede ser una URL a un PDF
  candidatos: Candidato[];
}
// Estas interfaces se mantienen por si en el futuro decides tener estos datos.
// Por ahora, sus valores se inicializarán vacíos o nulos.
interface Autoridad {
  TxCargo: string;
  TxRepresentante: string;
  TxFecha: string;
  TxRutaPolitico: string;
  TxRutaFoto: string;
}

interface Propuesta {
  titulo: string;
  descripcion: string;
  puntos_clave: string[];
}
interface PlanGobierno {
  titulo_plan: string;
  organizacion_politica: string;
  presentacion: string;
  propuestas: Propuesta[];
}
// -----------------------------------------------------


export default function DetallePartido() {
  const { partidoId } = useParams<{ partidoId: string }>();
  
  const [partido, setPartido] = useState<Partido | null>(null);
  // Inicializamos como vacíos porque no se cargarán de archivos externos
  const [autoridades, setAutoridades] = useState<Autoridad[]>([]); 
  const [plan, setPlan] = useState<PlanGobierno | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    try {
      if (!partidoId) {
        throw new Error("ID del partido no proporcionado.");
      }
      setLoading(true);
      setError(null);
      
      // Obtiene el partido directamente de los datos importados
      const foundPartido = allPartidosData.find(p => p.id === partidoId);
      if (!foundPartido) {
        throw new Error(`Partido con ID "${partidoId}" no encontrado.`);
      }
      setPartido(foundPartido);
      
      // No intentamos cargar autoridades ni plan de gobierno por fetch aquí,
      // ya que sabemos que esos archivos no existen o no son usados de esta forma.
      // Los estados se quedan con sus valores iniciales ([] o null)
      
    } catch (e: any) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [partidoId]);

  if (loading) return <div className="p-4 text-center">Cargando detalles del partido...</div>;
  if (error) return <div className="p-4 text-center text-red-600">Error: {error.message}</div>;
  if (!partido) return <div className="p-4 text-center">No se encontró el partido.</div>;

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-50 min-h-screen">
      <Link to="/" className="text-blue-600 hover:underline mb-4 block">&larr; Volver a Inicio</Link>

      <div className="text-center my-6">
        <h1 className="text-4xl font-bold mb-4">{partido.nombre}</h1>
        {partido.logo_url && (
          <img
            src={partido.logo_url}
            alt={`Logo de ${partido.nombre}`}
            className="mx-auto w-32 h-32 object-contain mb-4"
            onError={(e) => (e.currentTarget.style.display = 'none')} // Oculta si la imagen no carga
          />
        )}
      </div>

      <div className="space-y-4">
        
        {/* --- HISTORIA --- */}
        <div className="border bg-white rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Historia</h2>
          <p className="text-gray-700">{partido.historia || "Historia no disponible."}</p>
        </div>

        {/* --- IDEOLOGÍA --- */}
        <div className="border bg-white rounded-lg p-4 shadow-sm">
          <h2 className="text-xl font-bold mb-2">Ideología</h2>
          <p className="text-gray-700">{partido.ideologia || "Ideología no disponible."}</p>
        </div>

        {/* --- PLAN DE GOBIERNO --- */}
        <div className="border bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-bold p-4">Plan de Gobierno</h2>
          {partido.plan_gobierno_url ? (
            <div className="p-4 border-t border-gray-200">
              <p className="text-gray-700 mb-2">
                Puedes ver el plan de gobierno completo en el siguiente enlace:
              </p>
              <a
                href={partido.plan_gobierno_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium block"
              >
                Ver Plan de Gobierno (PDF) &rarr;
              </a>
            </div>
          ) : plan ? (
            <div className="p-4 border-t border-gray-200">
              <div className="pb-4 border-b border-gray-100">
                <h3 className="font-bold text-lg text-blue-700">{plan.titulo_plan}</h3>
                <p className="text-sm italic text-gray-700 mt-2">{plan.presentacion}</p>
              </div>
              <div className="space-y-4 pt-4">
                {plan.propuestas.map((prop, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-900 text-lg">{prop.titulo}</h4>
                    <p className="text-sm text-gray-600 mt-2 mb-3">{prop.descripcion}</p>
                    <ul className="list-disc list-inside text-sm text-gray-800 space-y-1 pl-2">
                      {prop.puntos_clave.map((punto, i) => (
                        <li key={i}>{punto}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-gray-500 text-sm p-4 border-t border-gray-200">
              No se encontró plan de gobierno detallado para este partido.
            </p>
          )}
        </div>
        
        {/* --- AUTORIDADES PARTIDARIAS --- */}
        <div className="p-4 border bg-white rounded-lg shadow-sm">
          <h2 className="text-xl font-bold mb-4">Autoridades Partidarias</h2>
          <div className="space-y-3">
            {autoridades.length > 0 ? (
              autoridades.map((aut, index) => {
                const hojaVidaUrl = `https://infogob.jne.gob.pe${aut.TxRutaPolitico}`;
                const fotoUrl = `https://infogob.jne.gob.pe${aut.TxRutaFoto}`;

                return (
                  <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-md border border-gray-200">
                    <img 
                      src={fotoUrl} 
                      alt={aut.TxRepresentante}
                      className="w-16 h-16 rounded-full object-cover flex-shrink-0 bg-gray-300"
                      onError={(e) => (e.currentTarget.style.display = 'none')}
                    />
                    <div className="ml-4 flex-grow">
                      <h3 className="font-bold text-gray-900">{aut.TxRepresentante}</h3>
                      <p className="text-sm text-gray-700">{aut.TxCargo}</p>
                      <p className="text-xs text-gray-500">Desde: {aut.TxFecha}</p>
                      <a 
                        href={hojaVidaUrl}
                        target="_blank" rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline font-medium"
                      >
                        Ver Hoja de Vida y Procesos &rarr;
                      </a>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-gray-500 text-sm">No se encontró información de autoridades partidarias.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}