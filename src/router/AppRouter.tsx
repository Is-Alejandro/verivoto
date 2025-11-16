import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Pages
import HomePage from "../features/home/HomePage";
import CalendarPage from "../features/calendar/CalendarPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Calendario */}
        <Route path="/calendar" element={<CalendarPage />} />

        {/* Redirección profesional */}
        <Route path="/home" element={<Navigate to="/" replace />} />

        {/* (opcional) Manejo de 404 profesional */}
        {/* <Route path="*" element={<Navigate to="/" replace />} /> */}

      </Routes>
    </BrowserRouter>
  );
}
