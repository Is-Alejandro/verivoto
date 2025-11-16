import { MapPin, Navigation } from "lucide-react";
import { useState } from "react";
import LocationGirl from "../../../assets/images/LocaltionGirl.png";
import MapModal from "./MapModal";

export default function LocationCard() {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <>
      <div className="bg-white rounded-2xl shadow-md shadow-black/5 overflow-hidden border border-neutral-200">
      {/* Imagen superior */}
      <div className="relative h-56 flex items-center justify-center overflow-hidden">
        {/* Mujer con laptop */}
        <div className="relative z-10 flex items-end justify-center h-full w-full">
          <img
            src={LocationGirl}
            alt="Mujer con laptop"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Pin de ubicación */}
        <div className="absolute right-1/3 top-1/3 bg-yellow-400 p-3 rounded-full shadow-lg">
          <MapPin size={24} className="text-neutral-900" fill="currentColor" />
        </div>
      </div>

      {/* Información del local */}
      <div className="p-5">
        {/* Nombre del local */}
        <h2 className="text-lg font-bold text-neutral-900 mb-2">
          I.E. 2025 "Manuel Scorza"
        </h2>
        <p className="text-sm text-neutral-600 mb-5">
          Av. Los Próceres 1234, Santiago de Surco, Lima
        </p>

        {/* Mesa de sufragio */}
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-neutral-100 p-2 rounded-lg">
            <svg
              className="w-5 h-5 text-neutral-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="4" width="18" height="4" rx="1" />
              <rect x="5" y="8" width="14" height="12" rx="1" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-neutral-500 mb-0.5">Mesa de sufragio</p>
            <p className="text-base font-semibold text-neutral-900">045678</p>
          </div>
        </div>

        {/* Pabellón / Aula */}
        <div className="flex items-start gap-3 mb-5">
          <div className="bg-neutral-100 p-2 rounded-lg">
            <svg
              className="w-5 h-5 text-neutral-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-neutral-500 mb-0.5">Pabellón / Aula</p>
            <p className="text-base font-semibold text-neutral-900">B / 201</p>
          </div>
        </div>

        {/* Botón "Cómo llegar" */}
        <button
          onClick={() => setIsMapOpen(true)}
          className="w-full bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-neutral-900 font-semibold py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 transition"
        >
          <Navigation size={18} />
          Cómo llegar
        </button>
      </div>
    </div>

    <MapModal isOpen={isMapOpen} onClose={() => setIsMapOpen(false)} />
    </>
  );
}
