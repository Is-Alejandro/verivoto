import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Pages reales
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

// Layout global
import Layout from "../components/layout/Layout";

interface PlaceholderProps {
    title: string;
}

function PlaceholderPage({ title }: PlaceholderProps) {
    return (
        <Layout>
            <div className="p-6">
                <h1 className="text-2xl font-bold text-neutral-900">{title}</h1>
                <p className="mt-2 text-neutral-600 text-sm">
                    Esta pantalla aún no está desarrollada.
                    (Pero ya tiene navegación funcional y layout.)
                </p>
            </div>
        </Layout>
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

        // Escuchar cambios en localStorage
        window.addEventListener("storage", checkOnboarding);
        
        // Revisar cuando se actualiza el componente
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

                {/* Todas las rutas protegidas */}
                <Route 
                    path="/" 
                    element={<ProtectedRoute><HomePage /></ProtectedRoute>} 
                />

                {/* Calendario Electoral */}
                <Route path="/calendar" element={<ProtectedRoute><CalendarPage /></ProtectedRoute>} />

                {/* QuickActions */}
                <Route
                    path="/local-votacion"
                    element={<ProtectedRoute><VotingLocationPage /></ProtectedRoute>}
                />
                <Route
                    path="/miembro-mesa"
                    element={<ProtectedRoute><MesaMemberPage /></ProtectedRoute>}
                />
                <Route
                    path="/info-electores"
                    element={<ProtectedRoute><PlaceholderPage title="Información para Electores" /></ProtectedRoute>}
                />

                {/* HeaderChips */}
                <Route
                    path="/intenciones-voto"
                    element={<ProtectedRoute><IntencionesVotoPage /></ProtectedRoute>}
                />
                <Route
                    path="/intenciones-voto/:encuestaId"
                    element={<ProtectedRoute><EncuestaResultsPage /></ProtectedRoute>}
                />
                <Route
                    path="/boca-urna"
                    element={<ProtectedRoute><BocaUrnaPage /></ProtectedRoute>}
                />

                {/* CandidatesSection */}
                <Route
                    path="/candidatos/presidenciales"
                    element={<ProtectedRoute><PlaceholderPage title="Candidatos Presidenciales" /></ProtectedRoute>}
                />
                <Route
                    path="/candidatos/senadores"
                    element={<ProtectedRoute><PlaceholderPage title="Senadores" /></ProtectedRoute>}
                />
                <Route
                    path="/candidatos/diputados"
                    element={<ProtectedRoute><PlaceholderPage title="Diputados" /></ProtectedRoute>}
                />
                <Route
                    path="/candidatos/parlamento-andino"
                    element={<ProtectedRoute><PlaceholderPage title="Parlamento Andino" /></ProtectedRoute>}
                />

                {/* Inicio de Elecciones */}
                <Route
                    path="/inicio-elecciones"
                    element={<ProtectedRoute><PlaceholderPage title="Inicio de Elecciones" /></ProtectedRoute>}
                />

                {/* Redirección profesional */}
                <Route path="/home" element={<Navigate to="/" replace />} />

                {/* Match */}
                <Route path="/match" element={<ProtectedRoute><MatchPage /></ProtectedRoute>} />

                {/* Manejo de 404 */}
                <Route path="*" element={<Navigate to="/" replace />} />

            </Routes>
        </BrowserRouter>
    );
}
