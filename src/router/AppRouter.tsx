import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Pages reales
import HomePage from "../features/home/HomePage";
import CalendarPage from "../features/calendar/CalendarPage";
import MatchPage from "../features/match/MatchPage";
import VotingLocationPage from "../features/voting-location/VotingLocationPage";
import OnboardingPage from "../features/onboarding/OnboardingPage";

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

    return (
        <BrowserRouter>
            <Routes>

                {/* Onboarding */}
                <Route path="/onboarding" element={<OnboardingPage />} />

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
                    element={<ProtectedRoute><PlaceholderPage title="Miembro de Mesa" /></ProtectedRoute>}
                />
                <Route
                    path="/info-electores"
                    element={<ProtectedRoute><PlaceholderPage title="Información para Electores" /></ProtectedRoute>}
                />

                {/* HeaderChips */}
                <Route
                    path="/intenciones-voto"
                    element={<ProtectedRoute><PlaceholderPage title="Intenciones de Voto" /></ProtectedRoute>}
                />
                <Route
                    path="/boca-urna"
                    element={<ProtectedRoute><PlaceholderPage title="Boca de Urna" /></ProtectedRoute>}
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
