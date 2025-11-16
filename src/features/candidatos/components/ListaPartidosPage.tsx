import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
// Importa el JSON directamente
import data from '../data/data.json';

// --- INTERFACES ADAPTADAS AL data.json ---
interface Candidato {
  id: string;
  nombre: string;
  cargo: string; // Campo clave para el filtro
  region: string;
  edad: number;
  propuesta_principal: string;
  foto_url: string;
  infogob_url: string;
}

interface Partido {
  id: string;
  nombre: string;
  logo_url: string;
  candidatos: Candidato[];
}
// ------------------------------------------

// Renombra el tipo para evitar conflictos
type PartidoData = Partido;

export default function ListaPartidosPage() {
  const { cargo } = useParams<{ cargo: string }>();
  const [partidos, setPartidos] = useState<PartidoData[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const cargoParam = cargo?.toLowerCase() || '';
    let targetCargo = '';

    if (cargoParam === 'presidenciales') {
      targetCargo = 'presidente';
    } else if (cargoParam === 'parlamento-andino') {
      targetCargo = 'parlamento andino';
    } else {
      targetCargo = cargoParam.replace(/es$/, '');
    }

    // Filtra los datos directamente desde el JSON importado
    const partidosFiltrados = data.filter(partido =>
      partido.candidatos.some(
        (c: Candidato) => c.cargo.toLowerCase() === targetCargo
      )
    );

    setPartidos(partidosFiltrados);

  }, [cargo]);

  const filteredPartidos = partidos.filter(partido => {
    const busqueda = searchTerm.toLowerCase();
    if (partido.nombre.toLowerCase().includes(busqueda)) return true;

    return partido.candidatos.some(c =>
      c.nombre.toLowerCase().includes(busqueda)
    );
  });

  // Ya no se necesita el estado de "loading"
  return (
    <div className="max-w-md mx-auto p-4 pb-20">
      <Link to="/" className="text-blue-600 hover:underline mb-4 block">&larr; Volver al Inicio</Link>
      <h1 className="text-3xl font-bold">Elecciones</h1>
      <h2 className="text-2xl text-gray-700 mb-4 capitalize">{cargo}</h2>

      <input
        type="text"
        placeholder="Buscar partido o candidato..."
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <h3 className="text-lg font-semibold text-gray-800">
        {filteredPartidos.length} {filteredPartidos.length === 1 ? 'partido' : 'partidos'} encontrados
      </h3>

      <div className="mt-4 space-y-3">
        {filteredPartidos.length === 0 ? (
          <p className="text-gray-500 pt-4">No se encontraron partidos para "{cargo}" con los filtros aplicados.</p>
        ) : (
          filteredPartidos.map(partido => (
            <Link
              key={partido.id}
              to={`/candidatos/${cargo}/${partido.id}`}
              className="flex items-center p-4 border bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
            >
              {/* Las rutas de los logos ahora son relativas a la carpeta public */}
              <img src={partido.logo_url} alt={partido.nombre} className="w-12 h-12 mr-4 object-contain" />
              <span className="font-semibold text-lg text-gray-800">{partido.nombre}</span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}