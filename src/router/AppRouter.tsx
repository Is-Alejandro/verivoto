import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../features/home/HomePage";
import CalendarPage from "../features/calendar/CalendarPage";
import MatchPage from "../features/match/MatchPage";

import VerificadorPage from "../features/verificador/VerificadorPage";
import VerificacionResultadoPage from "../features/verificador/VerificacionResultadoPage";

import Layout from "../components/layout/Layout";
import InfoElectoresPage from "../features/infoElectores/InfoElectoresPage";

// Aprende
import AprendeHomePage from "../features/aprende/AprendeHomePage";
import AprendeCategoriaPage from "../features/aprende/AprendeCategoriaPage";

//Candidatos
import ListaPartidosPage from "../features/candidatos/components/ListaPartidosPage"; 
import ListaCandidatosPage from "../features/candidatos/ListaCandidatosPage";
import DetallePartido from "../features/candidatos/components/DetallePartido";
import DetalleCandidatoPage from "../features/candidatos/components/DetalleCandidatoPage"; // Nueva importación


interface PlaceholderProps {
  title: string;
}

function PlaceholderPage({ title }: PlaceholderProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-neutral-900">{title}</h1>
      <p className="mt-2 text-neutral-600 text-sm">
        Esta pantalla aún no está desarrollada.
        (Pero ya tiene navegación funcional.)
      </p>
    </div>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout global envuelve todas las páginas */}
        <Route element={<Layout />}>

          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Calendario */}
          <Route path="/calendar" element={<CalendarPage />} />

          {/* Match */}
          <Route path="/match" element={<MatchPage />} />

          {/* Verificador */}
          <Route path="/verificador" element={<VerificadorPage />} />
          <Route path="/verificador/resultado" element={<VerificacionResultadoPage />} />

          {/* QuickActions */}
          <Route path="/local-votacion" element={<PlaceholderPage title="Mi local de votación" />} />
          <Route path="/miembro-mesa" element={<PlaceholderPage title="Miembro de Mesa" />} />
          <Route path="/info-electores" element={<InfoElectoresPage />} />

          {/* HeaderChips */}
          <Route path="/intenciones-voto" element={<PlaceholderPage title="Intenciones de Voto" />} />
          <Route path="/boca-urna" element={<PlaceholderPage title="Boca de Urna" />} />

          {/* Inicio de Elecciones */}
          <Route path="/inicio-elecciones" element={<PlaceholderPage title="Inicio de Elecciones" />} />

          {/* ----------------------------- */}
          {/*      SECCIÓN APRENDE 🚀      */}
          {/* ----------------------------- */}

          {/* Aprende Home */}
          <Route path="/aprende" element={<AprendeHomePage />} />

          {/* Categorías internas */}
          <Route
            path="/aprende/votacion"
            element={
              <AprendeCategoriaPage
                title="¿Cómo funciona la votación?"
                description="Aprende el proceso paso a paso."
              />
            }
          />

          <Route
            path="/aprende/historia"
            element={
              <AprendeCategoriaPage
                title="Historia de las elecciones"
                description="Conoce cómo evolucionó nuestro sistema electoral."
              />
            }
          />

          <Route
            path="/aprende/partidos"
            element={
              <AprendeCategoriaPage
                title="Partidos y candidatos"
                description="Descubre cómo se organizan y cómo participan políticamente."
              />
            }
          />

          <Route
            path="/aprende/reglas"
            element={
              <AprendeCategoriaPage
                title="Reglas electorales clave"
                description="Todo lo que debe saber un elector responsable."
              />
            }
          />

          {/* ----------------------------- */}
          {/*      SECCIÓN CANDIDATOS 🚀     */}
          {/* ----------------------------- */}
          <Route path="/candidatos/:cargo" element={<ListaPartidosPage />} />
          <Route path="/candidatos/:cargo/:partidoId" element={<ListaCandidatosPage />} />
          <Route path="/partido/:partidoId" element={<DetallePartido />} />
          {/* Nueva ruta para el perfil del candidato */}
          <Route path="/candidatos/:partidoId/:candidatoId/perfil" element={<DetalleCandidatoPage />} />

          {/* Redirects */}
          <Route path="/home" element={<Navigate to="/" replace />} />

          {/* 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        
        </Route>
        
      </Routes>
      
    </BrowserRouter>
  );
}
