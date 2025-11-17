import React from 'react';
import { useParams, Link } from 'react-router-dom';
// Importamos los datos directamente
import data from './data/data.json';

// --- INTERFACES ---
interface Candidato {
  id: string;
  nombre: string;
  cargo: string;
  region: string;
  edad: number;
  propuesta_principal: string;
  foto_url: string;
  infogob_url: string; 
}

interface Partido {
  id: string;
  nombre: string;
  logo_url: string; // Añadido para consistencia
  candidatos: Candidato[];
}

// -----------------------------------------------------------

export default function ListaCandidatosPage() {
  const { cargo, partidoId } = useParams<{ cargo: string, partidoId: string }>();

  // 1. Encontrar el partido directamente desde los datos importados
  const partido = data.find(p => p.id === partidoId) as Partido | undefined;

  // 2. Normalizar el cargo de la URL
  const cargoParam = cargo?.toLowerCase() || '';
  let targetCargo = '';

  if (cargoParam === 'presidenciales') {
    targetCargo = 'presidente';
  } else if (cargoParam === 'parlamento-andino') {
    targetCargo = 'parlamento andino';
  } else {
    targetCargo = cargoParam.replace(/es$/, '');
  }
  
  // 3. Filtrar los candidatos para el cargo correcto
  const candidatos = partido
    ? partido.candidatos.filter(c => c.cargo.toLowerCase() === targetCargo)
    : [];

  // --- RENDERIZADO ---
  // Ya no se necesita 'loading'. Si el partido no existe, lo indicamos.
  if (!partido) {
    return (
      <div className="max-w-md mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold text-red-600">Error</h1>
        <p className="text-gray-700 mt-2">
          El partido con ID "{partidoId}" no fue encontrado.
        </p>
        <Link to="/" className="text-blue-600 hover:underline mt-4 block">
          &larr; Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4 pb-20">
      {/* Botón Volver (CORREGIDO) */}
      <Link to={`/candidatos/${cargo}`} className="text-blue-600 hover:underline mb-4 block">
        &larr; Volver a Partidos
      </Link>

      <div className="flex items-center mb-4">
        <img src={partido.logo_url} alt={partido.nombre} className="w-16 h-16 mr-4 object-contain" />
        <div>
            <h1 className="text-3xl font-bold">{partido.nombre}</h1>
            <h2 className="text-xl text-gray-700 capitalize">Candidatos para {cargo}</h2>
        </div>
      </div>
      
      {/* Link a la PANTALLA DE DETALLE PARTIDO */}
      <Link 
        to={`/partido/${partido.id}`} 
        className="text-blue-600 font-semibold block my-4 hover:underline"
      >
        Conoce el plan de gobierno y más sobre {partido.nombre} &rarr;
      </Link>

      {/* --- LISTA DE CANDIDATOS --- */}
      <div className="space-y-4 mt-6">
        {candidatos.length > 0 ? (
          candidatos.map(c => (
            // CAMBIO: Ahora es un Link a la página de perfil del candidato
            <Link
              key={c.id}
              to={`/candidatos/${partidoId}/${c.id}/perfil`} // Ruta al perfil del candidato
              className="block bg-white p-4 border rounded-lg shadow-sm hover:bg-gray-50 transition-all"
            >
              <div className="flex items-start">
                <img src={c.foto_url} alt={c.nombre} className="w-20 h-20 rounded-full mr-5 object-cover border" /> 
                <div className="flex-grow">
                  <h4 className="font-bold text-lg">{c.nombre}</h4>
                  <p className="text-sm text-gray-600"><b>Edad:</b> {c.edad} años</p>
                  <p className="text-sm text-gray-600 mt-1"><b>Región:</b> {c.region}</p>
                  <p className="text-sm mt-2">
                    <b>Propuesta principal:</b>
                    <span className="block text-gray-800">"{c.propuesta_principal}"</span>
                  </p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 pt-4 text-center">
            No se encontraron candidatos de este partido para "{cargo}".
          </p>
        )}
      </div>
    </div>
  );
}
