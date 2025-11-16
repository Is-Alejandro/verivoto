import { ArrowLeft, CheckCircle, Info, Lightbulb } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function VotacionLeccion1Page() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F7FA] pb-32">

      {/* HEADER */}
      <header className="px-4 pt-4 flex items-center gap-3">
        <button onClick={() => window.history.back()}>
          <ArrowLeft size={26} className="text-neutral-700" />
        </button>

        <h1 className="text-[20px] font-semibold text-neutral-900">
          ¿Qué es votar?
        </h1>
      </header>

      {/* PROGRESO */}
      <div className="px-4 mt-4">
        <p className="text-[13px] text-neutral-600 font-medium mb-1">
          Lección 1 de 4
        </p>
        <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
          <div className="h-full w-1/4 bg-blue-600 rounded-full"></div>
        </div>
      </div>

      {/* CONTENIDO */}
      <div className="px-4 mt-6 flex flex-col gap-6">

        {/* BLOQUE PRINCIPAL */}
        <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-3">
          <h2 className="text-[17px] font-semibold text-neutral-900 flex items-center gap-2">
            <Info size={20} className="text-blue-600" />
            ¿Qué significa votar?
          </h2>

          <p className="text-[15px] text-neutral-700 leading-relaxed">
            Votar es una de las formas más importantes en las que los ciudadanos
            participan en la vida democrática de un país. A través del voto,
            eliges a tus representantes y decides sobre asuntos que afectan a tu comunidad
            y al futuro del país.
          </p>
        </div>

        {/* IMAGEN */}
        <img
          src="/images/votacion-simple.png"
          className="rounded-xl shadow-sm w-full"
          alt="Ilustración de voto"
        />

        {/* SECCIÓN 2 */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          <h3 className="font-semibold text-neutral-900 flex items-center gap-2">
            <Lightbulb size={18} className="text-yellow-500" />
            ¿Por qué es importante votar?
          </h3>
          <p className="text-[14px] text-neutral-700 mt-2 leading-relaxed">
            Cuando votas, estás ayudando a construir un país más justo y representativo.
            Cada elección es una oportunidad para que tu voz sea escuchada.
            Incluso si crees que un voto no hace la diferencia, recuerda que las
            decisiones colectivas nacen de miles de pequeñas acciones individuales.
          </p>
        </div>

        {/* CONSEJO EXTRA (ESTILO DUOLINGO) */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-blue-700 text-[14px] leading-relaxed flex gap-2">
            <CheckCircle size={18} className="text-blue-600 shrink-0" />
            <span>
              Tip: En democracias sólidas, votar es tanto un derecho como una responsabilidad.
              Participar ayuda a que las decisiones sean más representativas.
            </span>
          </p>
        </div>

      </div>

      {/* BOTÓN SIGUIENTE */}
      <div className="px-4 mt-8 fixed bottom-5 left-0 right-0">
        <button
          onClick={() => navigate("#")} // luego lo conectamos a lección 2
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl text-[16px] shadow-md active:scale-[0.98] transition"
        >
          Siguiente lección →
        </button>
      </div>
    </div>
  );
}
