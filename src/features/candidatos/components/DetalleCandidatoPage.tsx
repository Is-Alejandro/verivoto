import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

// (Las interfaces se mantienen igual que antes...)
// --- INTERFACES (Omitidas por brevedad, pero están en el código final) ---
interface DatosPersonales {
    idHojaVida: number;
    strNombres: string;
    strApellidoPaterno: string;
    strApellidoMaterno: string;
    strFechaNacimiento: string;
    strUbigeoNacimiento: string;
    strNaciDepartamento: string;
    strNaciProvincia: string;
    strNaciDistrito: string;
    strUbigeoDomicilio: string;
    strDomiDepartamento: string;
    strDomiProvincia: string;
    strDomiDistrito: string;
    strDomicilioDirecc: string;
    strCargoEleccion: string;
    strOrganizacionPolitica: string;
    strRutaArchivo: string; // Ruta a la foto
}

interface ExperienciaLaboral {
    strCentroTrabajo: string;
    strOcupacionProfesion: string;
    strAnioTrabajoDesde: string;
    strAnioTrabajoHasta: string;
}

interface EducacionUniversitaria {
    strUniversidad: string;
    strCarreraUni: string;
    strAnioBachiller: string;
}

interface EducacionPosgrado {
    strCenEstudioPosgrado: string;
    strEspecialidadPosgrado: string;
    strAnioPosgrado: string;
}

interface CargoPartidario {
    strOrgPolCargoPartidario: string;
    strCargoPartidario: string;
    strAnioCargoPartiDesde: string;
    strAnioCargoPartiHasta: string;
}

interface CargoEleccion {
    strOrgPolCargoElec: string;
    strAnioCargoElecDesde: string;
    strAnioCargoElecHasta: string;
    strCargoEleccion2: string; // Campo correcto del JSON
}

interface InfoAdicional {
    strInfoAdicional: string;
}


interface HojaDeVidaData {
    data: {
        oDatosPersonales: DatosPersonales;
        lExperienciaLaboral: ExperienciaLaboral[];
        lEduUniversitaria: EducacionUniversitaria[];
        lEduPosgrado: EducacionPosgrado[];
        lCargoPartidario: CargoPartidario[];
        lCargoEleccion: CargoEleccion[];
        lInfoAdicional: InfoAdicional[];
    };
}

// Interfaces para los Procesos Electorales
interface ProcesoElectoralDetalles {
    estado_lista: string;
    estado_candidato: string;
    porcentaje_votos_org_politica: string;
    posicion_obtenida_org_politica: number;
    org_politica_logro_representacion: boolean;
    votos_preferenciales_candidato: number;
}

interface ProcesoElectoral {
    proceso_electoral: string;
    cargo_postulado: string;
    organizacion_politica: string;
    circunscripcion: string;
    elegido: boolean;
    detalles: ProcesoElectoralDetalles;
}

interface ProcesosElectoralesData {
    procesos_electorales: ProcesoElectoral[];
}

// --- INTERFAZ PARA PROPUESTAS ---
interface Propuesta {
    titulo: string;
    descripcion: string;
    puntos_clave: string[];
}
interface PropuestasData {
    titulo_plan: string;
    organizacion_politica: string;
    presentacion: string;
    propuestas: Propuesta[];
}


export default function DetalleCandidatoPage() {
    const { partidoId, candidatoId } = useParams<{ partidoId: string; candidatoId: string }>();
    const [hojaDeVida, setHojaDeVida] = useState<HojaDeVidaData | null>(null);
    const [procesosElectorales, setProcesosElectorales] = useState<ProcesosElectoralesData | null>(null);
    const [propuestas, setPropuestas] = useState<PropuestasData | null>(null); // Estado para propuestas
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // --- MAPEO DE IDs A CARPETAS DE DATOS ---
        // Aquí se soluciona el problema. Añadiremos más candidatos aquí en el futuro.
        const getCandidateDataFolder = (id: string) => {
            if (id === 'fp_pres_1') {
                return 'keiko_fujimori';
            }
            // Por defecto, se podría retornar el ID o un valor nulo
            return id; 
        };

        const loadData = async () => {
            try {
                setLoading(true);
                setError(null);

                const dataFolder = getCandidateDataFolder(candidatoId!);
                if (!dataFolder) throw new Error('Candidato no reconocido.');

                // Cargar Hoja de Vida, Procesos Electorales y Propuestas
                const [hvResponse, peResponse, propResponse] = await Promise.all([
                    fetch(`/candidatos/${dataFolder}/hoja_de_vida.json`),
                    fetch(`/candidatos/${dataFolder}/procesos_electorales.json`),
                    fetch(`/candidatos/${dataFolder}/propuestas.json`) // Carga las propuestas
                ]);

                if (!hvResponse.ok) throw new Error('No se encontró la hoja de vida.');
                if (!peResponse.ok) throw new Error('No se encontraron los procesos electorales.');

                const hvData = await hvResponse.json();
                const peData = await peResponse.json();
                
                setHojaDeVida(hvData);
                setProcesosElectorales(peData);

                // Carga las propuestas si el archivo existe
                if(propResponse.ok) {
                    const propData = await propResponse.json();
                    setPropuestas(propData);
                }

            } catch (err: any) {
                console.error("Error al cargar datos del candidato:", err);
                setError(err.message || 'Error desconocido al cargar los datos.');
            } finally {
                setLoading(false);
            }
        };

        if (candidatoId) {
            loadData();
        } else {
            setError('ID del candidato no proporcionado.');
            setLoading(false);
        }

    }, [candidatoId]);

    if (loading) return <div className="p-4 text-center">Cargando perfil del candidato...</div>;
    if (error) return <div className="p-4 text-center text-red-600">Error: {error}</div>;
    if (!hojaDeVida || !procesosElectorales) return <div className="p-4 text-center">Datos del candidato no disponibles.</div>;
    
    const { oDatosPersonales, lExperienciaLaboral, lEduUniversitaria, lEduPosgrado, lCargoPartidario, lCargoEleccion, lInfoAdicional } = hojaDeVida.data;

    return (
        <div className="max-w-3xl mx-auto p-4 pb-20">
            <Link to={`/candidatos/presidenciales/${partidoId}`} className="text-blue-600 hover:underline mb-4 block">
                &larr; Volver a la lista de candidatos
            </Link>

            <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                    <img
                        src={`/img/candidatos/Keiko_Fujimori_2.jpg`} // Ruta corregida y directa
                        alt={`${oDatosPersonales.strNombres} ${oDatosPersonales.strApellidoPaterno}`}
                        className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
                    />
                    <div className="text-center sm:text-left">
                        <h1 className="text-4xl font-bold text-gray-900">
                            {oDatosPersonales.strNombres} {oDatosPersonales.strApellidoPaterno} {oDatosPersonales.strApellidoMaterno}
                        </h1>
                        <p className="text-xl text-gray-600 mt-1">{oDatosPersonales.strCargoEleccion}</p>
                        <p className="text-md text-gray-500">{oDatosPersonales.strOrganizacionPolitica}</p>
                    </div>
                </div>

                {/* --- SECCIÓN DE DATOS PERSONALES --- */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-3">Datos Personales</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                        <p><b>Nacimiento:</b> {oDatosPersonales.strFechaNacimiento}</p>
                        <p><b>Lugar:</b> {oDatosPersonales.strNaciDistrito}, {oDatosPersonales.strNaciProvincia}</p>
                        <p><b>Domicilio:</b> {oDatosPersonales.strDomiDistrito}, {oDatosPersonales.strDomiProvincia}</p>
                    </div>
                </section>
                
                {/* --- SECCIÓN DE PROPUESTAS --- */}
                {propuestas && (
                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-3">Plan de Gobierno</h2>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <h3 className="font-bold text-lg text-blue-700">{propuestas.titulo_plan}</h3>
                            <p className="text-sm italic text-gray-700 mt-2 mb-4">{propuestas.presentacion}</p>
                            {propuestas.propuestas.map((prop, index) => (
                                <details key={index} className="mb-2">
                                    <summary className="font-semibold text-gray-900 cursor-pointer hover:text-blue-600">{prop.titulo}</summary>
                                    <div className="pl-4 pt-2 pb-2 border-l-2 border-gray-200">
                                        <p className="text-sm text-gray-600 mb-2">{prop.descripcion}</p>
                                        <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                                            {prop.puntos_clave.map((punto, i) => <li key={i}>{punto}</li>)}
                                        </ul>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </section>
                )}

                {/* --- SECCIÓN DE HISTORIAL ELECTORAL --- */}
                {procesosElectorales.procesos_electorales.length > 0 && (
                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-3">Historial Electoral</h2>
                        {procesosElectorales.procesos_electorales.map((proceso, index) => (
                            <div key={index} className="mb-3 p-3 bg-blue-50 rounded-md border border-blue-200">
                                <p><b>Proceso:</b> {proceso.proceso_electoral}</p>
                                <p><b>Cargo:</b> {proceso.cargo_postulado}</p>
                                <p><b>Organización:</b> {proceso.organizacion_politica}</p>
                                <p className={proceso.elegido ? "font-bold text-green-700" : "font-bold text-red-700"}>
                                    Resultado: {proceso.elegido ? "Elegido(a)" : "No Elegido(a)"}
                                </p>
                            </div>
                        ))}
                    </section>
                )}

                {/* ... (Otras secciones como Experiencia Laboral, Educación, etc., pueden ir aquí) ... */}
            </div>
        </div>
    );
}
