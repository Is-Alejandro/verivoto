import React from "react";
import {
  Vote,
  FileCheck,
  Mic,
  CalendarDays,
} from "lucide-react";

import { eventsData } from "../../../data/eventsData";

// Iconos según tipo
const eventIcons: Record<string, React.ReactNode> = {
  votacion: <Vote size={20} className="text-red-500" />,
  inscripciones: <FileCheck size={20} className="text-blue-600" />,
  debate: <Mic size={20} className="text-purple-600" />,
  general: <CalendarDays size={20} className="text-slate-600" />,
};

// Etiqueta según tipo
const typeLabels: Record<string, string> = {
  votacion: "Elecciones Generales",
  inscripciones: "Inscripciones",
  debate: "Debate",
  general: "Evento",
};

// Color de texto según tipo
const typeColors: Record<string, string> = {
  votacion: "text-red-500",
  inscripciones: "text-blue-600",
  debate: "text-purple-600",
  general: "text-slate-600",
};

// Calcular días restantes desde la fecha actual
function getDaysLeft(dateStr: string) {
  const today = new Date();
  const target = new Date(dateStr);
  const diff = target.getTime() - today.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export default function UpcomingEventsCarousel() {
  // Obtener solo los próximos 3 eventos (ordenados por fecha)
  const upcomingEvents = [...eventsData]
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3);

  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold text-neutral-800 mb-3">
        Próximos Eventos
      </h2>

      <div
        className="
          flex gap-4 overflow-x-auto pb-2
          snap-x snap-mandatory
          scrollbar-none
        "
      >
        {upcomingEvents.map((ev) => {
          const daysLeft = getDaysLeft(ev.date);
          const day = new Date(ev.date).getDate();
          const monthName = ev.date.slice(5, 7) === "04" ? "Abril" : "";

          return (
            <div
              key={ev.id}
              className="
                min-w-[240px] snap-start
                bg-white shadow-md rounded-2xl 
                p-4 flex flex-col gap-2
              "
            >
              {/* ICON + LABEL */}
              <div className="flex items-center gap-2">
                {eventIcons[ev.type]}
                <span
                  className={`text-sm font-medium ${typeColors[ev.type]}`}
                >
                  {typeLabels[ev.type]}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-[17px] font-semibold text-neutral-900 leading-tight">
                {ev.title}
              </h3>

              {/* DAYS LEFT */}
              <p className={`text-3xl font-bold ${typeColors[ev.type]}`}>
                {daysLeft}{" "}
                <span className="text-lg font-medium text-neutral-700">
                  días
                </span>
              </p>

              {/* DATE */}
              <span className="text-neutral-500 text-sm">
                {day} de {monthName}, {ev.date.slice(0, 4)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
