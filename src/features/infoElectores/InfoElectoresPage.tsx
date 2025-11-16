import { ArrowLeft, Box, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import InfoCard from "./components/InfoCard";

// Importar imágenes desde /src/assets/illustrations/
import bicameralImg from "../../assets/illustrations/bicameralidad.jpg";
import practicaVotoImg from "../../assets/illustrations/aprendeVotar.jpg";

export default function InfoElectoresPage() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F7FB] pb-24">

      {/* HEADER */}
      <header className="px-4 pt-4 flex items-center gap-3">
        <button onClick={() => window.history.back()}>
          <ArrowLeft size={26} className="text-neutral-700" />
        </button>

        <Box size={28} className="text-blue-600" />

        <h1 className="text-[20px] font-semibold text-neutral-900">
          Información para Electores
        </h1>
      </header>

      {/* CONTENIDO */}
      <div className="mt-5 px-4 flex flex-col gap-6">

        {/* CARD 1 — Bicameralidad */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden fade-up delay-100">
          <img
            src={bicameralImg}
            alt="Bicameralidad"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-neutral-900">
              ¡Vuelve la Bicameralidad!
            </h3>
            <p className="text-neutral-700 text-sm mt-1">
              Aprende a votar paso a paso por Diputados y Senadores para las elecciones generales de 2026.
            </p>

            <button
              onClick={() => console.log("Ir a Bicameralidad")}
              className="mt-4 bg-blue-600 text-white text-sm px-5 py-2.5 rounded-xl font-medium hover:bg-blue-700 active:scale-95 transition"
            >
              Saber más
            </button>
          </div>
        </div>

        {/* CARD 2 — Quizzes */}
        <div className="rounded-2xl overflow-hidden shadow-sm w-full bg-[#FCE58F] fade-up delay-200">
          <div className="p-4">
            <div className="mb-2">
              <HelpCircle size={28} className="text-yellow-700" />
            </div>

            <h3 className="text-lg font-semibold text-neutral-900">
              ¡Pon a Prueba tus Conocimientos!
            </h3>

            <p className="text-neutral-700 text-sm mt-1">
              Responde los quizzes, gana puntos y desbloquea logros mientras te conviertes en un elector experto.
            </p>

            <button
              onClick={() => navigate("/aprende")}
              className="mt-4 bg-yellow-600 text-white text-sm px-5 py-2.5 rounded-xl font-medium hover:bg-yellow-700 active:scale-95 transition"
            >
              Ir a los Quizzes
            </button>
          </div>
        </div>

        {/* CARD 3 — Practica tu voto */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden fade-up delay-300">
          <img
            src={practicaVotoImg}
            alt="Practica tu voto"
            className="w-full h-32 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-neutral-900">
              Practica tu Voto Aquí
            </h3>

            <p className="text-neutral-700 text-sm mt-1">
              Participa en nuestro tutorial interactivo para aprender a marcar la cédula de sufragio correctamente.
            </p>

            <button
              onClick={() => console.log("Ir al entrenamiento de voto")}
              className="mt-4 bg-blue-600 text-white text-sm px-5 py-2.5 rounded-xl font-medium hover:bg-blue-700 active:scale-95 transition"
            >
              Iniciar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
