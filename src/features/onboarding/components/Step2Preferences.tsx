import { useState } from "react";
import {
  Shield,
  Building2,
  GraduationCap,
  Heart,
  ChevronLeft,
} from "lucide-react";

interface Step2Props {
  onComplete: (data: {
    topics: string[];
    accessibility: {
      textReader: boolean;
      seniorMode: boolean;
      nativeLanguage: boolean;
      selectedLanguage: string;
    };
  }) => void;
  onBack: () => void;
}

const TOPICS = [
  { id: "security", label: "Seguridad", icon: Shield },
  { id: "economy", label: "Economía", icon: Building2 },
  { id: "education", label: "Educación", icon: GraduationCap },
  { id: "health", label: "Salud", icon: Heart },
];

export default function Step2Preferences({ onComplete, onBack }: Step2Props) {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [textReader, setTextReader] = useState(false);
  const [seniorMode, setSeniorMode] = useState(false);
  const [nativeLanguage, setNativeLanguage] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const toggleTopic = (topicId: string) => {
    if (selectedTopics.includes(topicId)) {
      setSelectedTopics(selectedTopics.filter((id) => id !== topicId));
    } else if (selectedTopics.length < 3) {
      setSelectedTopics([...selectedTopics, topicId]);
    }
  };

  const handleComplete = () => {
    onComplete({
      topics: selectedTopics,
      accessibility: {
        textReader,
        seniorMode,
        nativeLanguage,
        selectedLanguage,
      },
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header con botón volver */}
      <div className="bg-white border-b border-neutral-200 px-6 py-4 flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 hover:bg-neutral-100 rounded-lg transition"
        >
          <ChevronLeft size={24} className="text-neutral-900" />
        </button>
        <h1 className="text-xl font-bold text-neutral-900">
          Personaliza tu experiencia
        </h1>
      </div>

      {/* Contenido scrolleable */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-32">
        {/* Temas prioritarios */}
        <div className="mb-8">
          <h2 className="font-bold text-neutral-900 mb-2">
            ¿Qué temas te importan más?
          </h2>
          <p className="text-sm text-neutral-600 mb-4">
            Selecciona hasta 3 temas prioritarios.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {TOPICS.map((topic) => {
              const Icon = topic.icon;
              const isSelected = selectedTopics.includes(topic.id);

              return (
                <button
                  key={topic.id}
                  onClick={() => toggleTopic(topic.id)}
                  disabled={
                    !isSelected && selectedTopics.length >= 3
                  }
                  className={`
                    flex flex-col items-center gap-3 p-5 rounded-xl border-2 transition
                    ${
                      isSelected
                        ? "border-blue-600 bg-blue-50"
                        : "border-neutral-200 bg-white hover:border-neutral-300"
                    }
                    ${
                      !isSelected && selectedTopics.length >= 3
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }
                  `}
                >
                  <Icon
                    size={32}
                    className={
                      isSelected ? "text-blue-600" : "text-neutral-700"
                    }
                  />
                  <span
                    className={`font-medium text-sm ${
                      isSelected ? "text-blue-600" : "text-neutral-900"
                    }`}
                  >
                    {topic.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Modo Inclusivo */}
        <div className="bg-neutral-50 rounded-2xl p-5 mb-6">
          <h2 className="font-bold text-neutral-900 mb-2">Modo Inclusivo</h2>
          <p className="text-sm text-neutral-600 mb-5">
            Activa las herramientas que necesites para una mejor experiencia.
          </p>

          {/* Opciones de accesibilidad */}
          <div className="space-y-4">
            {/* Lector de texto */}
            <label className="flex items-center justify-between">
              <span className="text-sm text-neutral-900">Lector de texto</span>
              <input
                type="checkbox"
                checked={textReader}
                onChange={(e) => setTextReader(e.target.checked)}
                className="w-5 h-5 rounded border-neutral-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* Modo Adulto Mayor */}
            <label className="flex items-center justify-between">
              <span className="text-sm text-neutral-900">
                Modo Adulto Mayor
              </span>
              <input
                type="checkbox"
                checked={seniorMode}
                onChange={(e) => setSeniorMode(e.target.checked)}
                className="w-5 h-5 rounded border-neutral-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* Traducción a Lengua Originaria */}
            <label className="flex items-center justify-between">
              <span className="text-sm text-neutral-900">
                Traducción a Lengua Originaria
              </span>
              <input
                type="checkbox"
                checked={nativeLanguage}
                onChange={(e) => setNativeLanguage(e.target.checked)}
                className="w-5 h-5 rounded border-neutral-300 text-blue-600 focus:ring-2 focus:ring-blue-500"
              />
            </label>

            {/* Selector de idioma */}
            {nativeLanguage && (
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full px-4 py-3 border border-neutral-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              >
                <option value="">Seleccionar idioma</option>
                <option value="quechua">Quechua</option>
                <option value="aymara">Aymara</option>
                <option value="ashaninka">Asháninka</option>
              </select>
            )}
          </div>
        </div>
      </div>

      {/* Botones fijos en la parte inferior */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-6 space-y-3">
        <button
          onClick={handleComplete}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-xl transition"
        >
          Empezar
        </button>
        <button
          onClick={handleComplete}
          className="w-full text-neutral-600 text-sm hover:underline"
        >
          Omitir por ahora
        </button>
      </div>
    </div>
  );
}
