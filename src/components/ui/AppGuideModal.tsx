import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Import mockups
import HomeMockup from "../../assets/images/mockups/Home.png";
import CalendarioMockup from "../../assets/images/mockups/Calendario.png";
import MatchMockup from "../../assets/images/mockups/Match.png";
import LocalVotacionMockup from "../../assets/images/mockups/Mi_local_de_votacion.png";
import AprendeMockup from "../../assets/images/mockups/Aprende.png";
import NoticiasMockup from "../../assets/images/mockups/Noticias.png";
import VerificadorMockup from "../../assets/images/mockups/Verificador.png";
import InformacionElectoresMockup from "../../assets/images/mockups/Información_Electores.png";

interface AppGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  isFirstTime?: boolean;
}

interface GuideSlide {
  image: string;
  title: string;
  description: string;
}

const guideSlides: GuideSlide[] = [
  {
    image: HomeMockup,
    title: "Inicio",
    description: "Tu centro de información electoral. Aquí encontrarás accesos rápidos a todas las funcionalidades, noticias importantes y el conteo para las elecciones 2026.",
  },
  {
    image: CalendarioMockup,
    title: "Calendario Electoral",
    description: "Mantente al día con todos los eventos importantes del proceso electoral. Consulta debates, fechas límite de inscripción y eventos políticos relevantes.",
  },
  {
    image: MatchMockup,
    title: "Match de Candidatos",
    description: "Descubre qué candidatos se alinean mejor con tus valores e intereses. Filtra por propuestas, partido político y región para tomar decisiones informadas.",
  },
  {
    image: LocalVotacionMockup,
    title: "Mi Local de Votación",
    description: "Encuentra tu local de votación asignado, obtén direcciones y consulta recomendaciones para el día de la elección. ¡Nunca te pierdas el camino!",
  },
  {
    image: AprendeMockup,
    title: "Aprende",
    description: "Accede a contenido educativo sobre el proceso electoral peruano, tus derechos como votante y cómo funcionan las elecciones en nuestro país.",
  },
  {
    image: NoticiasMockup,
    title: "Noticias Verificadas",
    description: "Lee noticias confiables y verificadas sobre el proceso electoral. Mantente informado con fuentes oficiales y evita la desinformación.",
  },
  {
    image: VerificadorMockup,
    title: "Verificador de Noticias",
    description: "¿No estás seguro si una noticia es verdadera? Usa nuestro verificador para confirmar la autenticidad de la información que recibes.",
  },
  {
    image: InformacionElectoresMockup,
    title: "Información de Electores",
    description: "Consulta tu información como elector, verifica tu inscripción en el padrón electoral y conoce tus datos de votación oficiales.",
  },
];

export default function AppGuideModal({ isOpen, onClose, isFirstTime = false }: AppGuideModalProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentSlide < guideSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      handleFinish();
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleFinish = () => {
    // Marcar que el usuario ya vio la guía
    localStorage.setItem("appGuideCompleted", "true");
    onClose();
  };

  const handleSkip = () => {
    localStorage.setItem("appGuideCompleted", "true");
    onClose();
  };

  const currentGuide = guideSlides[currentSlide];
  const isLastSlide = currentSlide === guideSlides.length - 1;

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
      <div className="bg-white w-full h-full flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-neutral-200">
          <h2 className="text-lg font-bold text-neutral-900">
            {isFirstTime ? "Conoce VeriVoto" : "Guía de la Aplicación"}
          </h2>
          <button
            onClick={handleSkip}
            className="p-2 hover:bg-neutral-100 rounded-lg transition"
          >
            <X size={20} className="text-neutral-600" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {/* Mockup Image */}
          <div className="mb-6 rounded-2xl overflow-hidden bg-neutral-100 shadow-lg">
            <img
              src={currentGuide.image}
              alt={currentGuide.title}
              className="w-full h-auto object-contain"
              style={{ maxHeight: "400px" }}
            />
          </div>

          {/* Title and Description */}
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold text-neutral-900 mb-3">
              {currentGuide.title}
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              {currentGuide.description}
            </p>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {guideSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-8 bg-blue-600"
                    : "w-2 bg-neutral-300 hover:bg-neutral-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="p-4 border-t border-neutral-200 flex items-center justify-between gap-4">
          <button
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
              currentSlide === 0
                ? "text-neutral-400 cursor-not-allowed"
                : "text-neutral-700 hover:bg-neutral-100"
            }`}
          >
            <ChevronLeft size={20} />
            <span className="hidden sm:inline">Anterior</span>
          </button>

          <div className="text-sm text-neutral-500">
            {currentSlide + 1} de {guideSlides.length}
          </div>

          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
          >
            <span>{isLastSlide ? "Finalizar" : "Siguiente"}</span>
            {!isLastSlide && <ChevronRight size={20} />}
          </button>
        </div>
      </div>
    </div>
  );
}
