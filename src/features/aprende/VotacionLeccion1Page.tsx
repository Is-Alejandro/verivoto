import { ArrowLeft } from "lucide-react";

export default function VotacionLeccion1Page() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] pb-24">

      {/* HEADER */}
      <header className="px-4 pt-4 flex items-center gap-3">
        <button onClick={() => window.history.back()}>
          <ArrowLeft size={26} className="text-neutral-700" />
        </button>

        <h1 className="text-[20px] font-semibold text-neutral-900">
          ¿Qué es votar?
        </h1>
      </header>

      {/* CONTENIDO */}
      <div className="px-4 mt-4 flex flex-col gap-4">

        <p className="text-[15px] text-neutral-700 leading-relaxed">
          Votar es una forma en la que los ciudadanos participan en la vida
          democrática del país. A través del voto, eliges a tus representantes
          y decides sobre asuntos importantes para tu comunidad.
        </p>

        <div className="bg-white rounded-xl shadow-sm p-4">
          <h3 className="font-semibold text-neutral-800">
            ¿Por qué es importante?
          </h3>
          <p className="text-[14px] text-neutral-600 mt-2">
            Tu voto ayuda a construir un país más justo y representativo.
            Cada elección es una oportunidad para que tu voz sea escuchada.
          </p>
        </div>

        <img
          src="/images/votacion-simple.png"
          className="rounded-xl shadow-sm"
          alt="Ilustración de voto"
        />
      </div>
    </div>
  );
}
