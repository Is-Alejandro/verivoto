import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      </Routes>
    </BrowserRouter>
  );
}
