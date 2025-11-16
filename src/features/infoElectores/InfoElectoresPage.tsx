import { ArrowLeft, Box, HelpCircle } from "lucide-react";
import InfoCard from "./components/InfoCard";

export default function InfoElectoresPage() {
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
      <div className="mt-4 px-4 flex flex-col gap-5">

        {/* CARD 1 — Bicameralidad */}
        <InfoCard
          title="¡Vuelve la Bicameralidad!"
          description="Aprende a votar paso a paso por Diputados y Senadores para las elecciones generales de 2026."
          image="/images/peru-flag-abstract.png"
          buttonLabel="Saber..."
          onClick={() => console.log("Ir a Bicameralidad")}
        />

        {/* CARD 2 — Quizzes */}
        <InfoCard
          title="¡Pon a Prueba tus Conocimientos!"
          description="Responde los quizzes, gana puntos y desbloquea logros mientras te conviertes en un elector experto."
          icon={<HelpCircle size={26} className="text-yellow-700" />}
          backgroundColor="#FCE58F"
          buttonLabel="Ir a los Quizzes"
          onClick={() => console.log("Ir a quizzes")}
        />

        {/* CARD 3 — Practica tu voto */}
        <InfoCard
          title="Practica tu Voto Aquí"
          description="Participa en nuestro tutorial interactivo para aprender a marcar la cédula de sufragio correctamente."
          image="/images/voto-practico.png"
          buttonLabel="Iniciar"
          onClick={() => console.log("Ir al entrenamiento de voto")}
        />
      </div>
    </div>
  );
}
