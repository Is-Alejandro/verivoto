import { useState, useEffect } from "react";
import { Award, AlertCircle, PlayCircle, DollarSign, X } from "lucide-react";

export default function MotivationalSection() {
  const [showVideoModal, setShowVideoModal] = useState(false);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (showVideoModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showVideoModal]);

  return (
    <div className="space-y-0">
      {/* Video motivacional */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-start gap-4">
          <div className="bg-white/20 rounded-full p-3">
            <PlayCircle size={32} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">
              Tu Rol es Fundamental
            </h3>
            <p className="text-sm text-white/90 mb-4">
              Descubre por qué ser miembro de mesa es un honor y una responsabilidad ciudadana
            </p>
            <button 
              onClick={() => setShowVideoModal(true)}
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded-lg text-sm transition"
            >
              Ver Video
            </button>
          </div>
        </div>
      </div>

      {/* Beneficios */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-green-100 rounded-lg p-2.5">
            <Award size={24} className="text-green-600" />
          </div>
          <h2 className="text-xl font-bold text-neutral-900">
            Beneficios
          </h2>
        </div>

        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <DollarSign size={20} className="text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                Pago por tu participación
              </p>
              <p className="text-sm text-neutral-600">
                Recibirás S/ 120 por tu labor como miembro de mesa
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Award size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                Certificado de participación
              </p>
              <p className="text-sm text-neutral-600">
                Válido para trámites administrativos y postulaciones laborales
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Award size={20} className="text-purple-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                Día libre remunerado
              </p>
              <p className="text-sm text-neutral-600">
                Tu empleador está obligado a darte el día libre con pago
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Multas e incumplimientos */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-red-100 rounded-lg p-2.5">
            <AlertCircle size={24} className="text-red-600" />
          </div>
          <h2 className="text-xl font-bold text-neutral-900">
            Multas por Incumplimiento
          </h2>
        </div>

        <div className="space-y-4">
          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <p className="text-sm font-semibold text-red-900 mb-1">
              No asistir el día de las elecciones
            </p>
            <p className="text-sm text-red-800">
              Multa: <span className="font-bold">S/ 230</span>
            </p>
          </div>

          <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
            <p className="text-sm font-semibold text-orange-900 mb-1">
              No asistir a ninguna capacitación
            </p>
            <p className="text-sm text-orange-800">
              Multa: <span className="font-bold">S/ 230</span>
            </p>
          </div>

          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
            <p className="text-sm font-semibold text-amber-900 mb-1">
              Justificaciones válidas
            </p>
            <p className="text-sm text-amber-800">
              Solo por enfermedad grave, viaje al extranjero programado o encontrarse a más de 300km
            </p>
          </div>
        </div>
      </div>

      {/* Motivación final */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white">
        <h3 className="text-lg font-bold mb-2">
          🗳️ ¡Sé parte del cambio!
        </h3>
        <p className="text-sm text-white/90">
          Gracias a ti y miles de peruanos como tú, nuestra democracia funciona. 
          Tu participación garantiza elecciones transparentes y justas para todos.
        </p>
      </div>

      {/* Modal de Video */}
      {showVideoModal && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[9999] p-4 overflow-y-auto"
          onClick={() => setShowVideoModal(false)}
        >
          <div 
            className="bg-white rounded-2xl w-full max-w-4xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition"
            >
              <X size={24} />
            </button>

            {/* Video de YouTube */}
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/DW5-XnnNSjo?autoplay=1"
                title="Video Miembro de Mesa"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
