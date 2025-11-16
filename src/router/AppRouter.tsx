import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "../features/home/HomePage";
import CalendarPage from "../features/calendar/CalendarPage";
import MatchPage from "../features/match/MatchPage";

import VerificadorPage from "../features/verificador/VerificadorPage";
import VerificacionResultadoPage from "../features/verificador/VerificacionResultadoPage";

import Layout from "../components/layout/Layout";
import { Outlet } from "react-router-dom";
import InfoElectoresPage from "../features/infoElectores/InfoElectoresPage";

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
                    <Route
                        path="/local-votacion"
                        element={<PlaceholderPage title="Mi local de votación" />}
                    />
                    <Route
                        path="/miembro-mesa"
                        element={<PlaceholderPage title="Miembro de Mesa" />}
                    />
                    <Route
                        path="/info-electores"
                        element={<InfoElectoresPage />}
                    />


                    {/* HeaderChips */}
                    <Route
                        path="/intenciones-voto"
                        element={<PlaceholderPage title="Intenciones de Voto" />}
                    />
                    <Route
                        path="/boca-urna"
                        element={<PlaceholderPage title="Boca de Urna" />}
                    />

                    {/* CandidatesSection */}
                    <Route
                        path="/candidatos/presidenciales"
                        element={<PlaceholderPage title="Candidatos Presidenciales" />}
                    />
                    <Route
                        path="/candidatos/senadores"
                        element={<PlaceholderPage title="Senadores" />}
                    />
                    <Route
                        path="/candidatos/diputados"
                        element={<PlaceholderPage title="Diputados" />}
                    />
                    <Route
                        path="/candidatos/parlamento-andino"
                        element={<PlaceholderPage title="Parlamento Andino" />}
                    />

                    {/* Inicio de Elecciones */}
                    <Route
                        path="/inicio-elecciones"
                        element={<PlaceholderPage title="Inicio de Elecciones" />}
                    />

                    {/* Redirects */}
                    <Route path="/home" element={<Navigate to="/" replace />} />

                    {/* 404 */}
                    <Route path="*" element={<Navigate to="/" replace />} />

                </Route>

            </Routes>
        </BrowserRouter>
    );
}
