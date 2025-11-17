import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import HomePage from "../features/home/HomePage";
import CalendarPage from "../features/calendar/CalendarPage";
import MatchPage from "../features/match/MatchPage";
import VotingLocationPage from "../features/voting-location/VotingLocationPage";
import OnboardingPage from "../features/onboarding/OnboardingPage";
import MesaMemberPage from "../features/mesa-member/MesaMemberPage";
import IntencionesVotoPage from "../features/intenciones-voto/IntencionesVotoPage";
import EncuestaResultsPage from "../features/intenciones-voto/EncuestaResultsPage";
import BocaUrnaPage from "../features/boca-urna/BocaUrnaPage";
import AppGuidePage from "../features/app-guide/AppGuidePage";

import VerificadorPage from "../features/verificador/VerificadorPage";
import VerificacionResultadoPage from "../features/verificador/VerificacionResultadoPage";

import Layout from "../components/layout/Layout";
import InfoElectoresPage from "../features/infoElectores/InfoElectoresPage";

// Aprende
import AprendeHomePage from "../features/aprende/AprendeHomePage";
import AprendeCategoriaPage from "../features/aprende/AprendeCategoriaPage";
import VotacionLeccionesPage from "../features/aprende/VotacionLeccionesPage";

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

// Componente para proteger rutas
function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(
        localStorage.getItem("onboardingCompleted") === "true"
    );

    useEffect(() => {
        const checkOnboarding = () => {
            setIsOnboardingCompleted(localStorage.getItem("onboardingCompleted") === "true");
        };

        // Escuchar cambios en localStorage
        window.addEventListener("storage", checkOnboarding);
        
        return () => {
            window.removeEventListener("storage", checkOnboarding);
        };
    }, []);

    if (!isOnboardingCompleted) {
        return <Navigate to="/onboarding" replace />;
    }

    return <>{children}</>;
}

export default function AppRouter() {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(
    localStorage.getItem("onboardingCompleted") === "true"
  );

  useEffect(() => {
    const checkOnboarding = () => {
      setIsOnboardingCompleted(localStorage.getItem("onboardingCompleted") === "true");
    };

    window.addEventListener("storage", checkOnboarding);
    const interval = setInterval(checkOnboarding, 500);
    
    return () => {
      window.removeEventListener("storage", checkOnboarding);
      clearInterval(interval);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        {/* Onboarding - redirige al home si ya está completado */}
        <Route 
          path="/onboarding" 
          element={isOnboardingCompleted ? <Navigate to="/" replace /> : <OnboardingPage />} 
        />

        {/* Guía de la Aplicación */}
        <Route path="/app-guide" element={<AppGuidePage />} />

        {/* Layout global envuelve todas las páginas protegidas */}
        <Route element={<Layout />}>

          {/* Home */}
          <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />

          {/* Calendario */}
          <Route path="/calendar" element={<ProtectedRoute><CalendarPage /></ProtectedRoute>} />

          {/* Match */}
          <Route path="/match" element={<ProtectedRoute><MatchPage /></ProtectedRoute>} />

          {/* Verificador */}
          <Route path="/verificador" element={<ProtectedRoute><VerificadorPage /></ProtectedRoute>} />
          <Route path="/verificador/resultado" element={<ProtectedRoute><VerificacionResultadoPage /></ProtectedRoute>} />

          {/* QuickActions */}
          <Route path="/local-votacion" element={<ProtectedRoute><VotingLocationPage /></ProtectedRoute>} />
          <Route path="/miembro-mesa" element={<ProtectedRoute><MesaMemberPage /></ProtectedRoute>} />
          <Route path="/info-electores" element={<ProtectedRoute><InfoElectoresPage /></ProtectedRoute>} />

          {/* HeaderChips */}
          <Route path="/intenciones-voto" element={<ProtectedRoute><IntencionesVotoPage /></ProtectedRoute>} />
          <Route path="/intenciones-voto/:encuestaId" element={<ProtectedRoute><EncuestaResultsPage /></ProtectedRoute>} />
          <Route path="/boca-urna" element={<ProtectedRoute><BocaUrnaPage /></ProtectedRoute>} />

          {/* Inicio de Elecciones */}
          <Route path="/inicio-elecciones" element={<ProtectedRoute><PlaceholderPage title="Inicio de Elecciones" /></ProtectedRoute>} />

          {/* ----------------------------- */}
          {/*      SECCIÓN APRENDE 🚀      */}
          {/* ----------------------------- */}

          {/* Aprende Home */}
          <Route path="/aprende" element={<AprendeHomePage />} />

          {/* Categorías internas */}
          <Route
            path="/aprende/votacion"
            element={<VotacionLeccionesPage />}
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
