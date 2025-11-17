import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

export default function AppGuidePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const navigate = useNavigate();

  // Mínima distancia de swipe (en px)
  const minSwipeDistance = 50;

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
    navigate("/");
  };

  const handleSkip = () => {
    localStorage.setItem("appGuideCompleted", "true");
    navigate("/");
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0); // Reset
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    
    if (isDragging) {
      const offset = currentTouch - touchStart;
      
      // Limitar el offset para no mostrar espacios en blanco
      const maxOffset = currentSlide === 0 ? 0 : Infinity;
      const minOffset = currentSlide === guideSlides.length - 1 ? 0 : -Infinity;
      
      const limitedOffset = Math.max(
        Math.min(offset, maxOffset > 0 ? 100 : offset),
        minOffset < 0 ? -100 : offset
      );
      
      setDragOffset(limitedOffset);
    }
  };

  const onTouchEnd = () => {
    setIsDragging(false);
    setDragOffset(0);
    
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe izquierda -> siguiente
      handleNext();
    }
    
    if (isRightSwipe) {
      // Swipe derecha -> anterior
      handlePrev();
    }
  };

  const currentGuide = guideSlides[currentSlide];
  const isLastSlide = currentSlide === guideSlides.length - 1;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-neutral-200">
        <h2 className="text-lg font-bold text-neutral-900">
          Conoce VeriVoto
        </h2>
        <button
          onClick={handleSkip}
          className="p-2 hover:bg-neutral-100 rounded-lg transition"
        >
          <X size={20} className="text-neutral-600" />
        </button>
      </div>

      {/* Content */}
      <div 
        className="flex-1 overflow-hidden px-6 py-6 pb-32"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative h-full overflow-visible">
          {/* Slides Container */}
          <div 
            className={`flex ${!isDragging ? 'transition-transform duration-300 ease-out' : ''}`}
            style={{
              transform: `translateX(calc(-${currentSlide * 100}% + ${dragOffset}px))`
            }}
          >
            {guideSlides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 px-2"
              >
                {/* Mockup Image */}
                <div className="mb-6 rounded-2xl overflow-hidden bg-neutral-100 shadow-lg">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-auto object-contain select-none"
                    style={{ maxHeight: "400px" }}
                    draggable={false}
                  />
                </div>

                {/* Title and Description */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">
                    {slide.title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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

      {/* Footer Navigation - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4 flex items-center justify-between gap-4">
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
  );
}
