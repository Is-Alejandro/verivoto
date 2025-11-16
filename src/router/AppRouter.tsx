import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages reales
import HomePage from "../features/home/HomePage";
import CalendarPage from "../features/calendar/CalendarPage";

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

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Calendario Electoral */}
        <Route path="/calendar" element={<CalendarPage />} />

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
          element={<PlaceholderPage title="Información para Electores" />}
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

        {/* Redirección profesional */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* Manejo de 404 */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}
