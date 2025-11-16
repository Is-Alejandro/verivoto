import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importaremos las páginas más adelante
import HomePage from "../features/home/HomePage";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<HomePage />} />

        {/* Aquí agregaremos todas las demás páginas */}
      </Routes>
    </BrowserRouter>
  );
}
