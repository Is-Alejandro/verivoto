import React from "react";
import {
  Vote,
  FileCheck,
  Mic,
  CalendarDays
} from "lucide-react";

interface UpcomingEvent {
  id: number;
  title: string;
  date: string;
  daysLeft: number;
  type: "votacion" | "inscripciones" | "debate" | "general";
}

const eventIcons: Record<UpcomingEvent["type"], React.ReactNode> = {
  votacion: <Vote size={20} className="text-red-500" />,
  inscripciones: <FileCheck size={20} className="text-blue-600" />,
  debate: <Mic size={20} className="text-purple-600" />,
  general: <CalendarDays size={20} className="text-slate-600" />,
};

const typeLabels: Record<UpcomingEvent["type"], string> = {
  votacion: "Elecciones Generales",
  inscripciones: "Inscripciones",
  debate: "Debate",
  general: "Evento",
};

const typeColors: Record<UpcomingEvent["type"], string> = {
  votacion: "text-red-500",
  inscripciones: "text-blue-600",
  debate: "text-purple-600",
  general: "text-slate-600",
};

export default function UpcomingEventsCarousel() {
  const events: UpcomingEvent[] = [
    {
      id: 1,
      title: "Cierre de Inscripciones",
      date: "12 de Octubre, 2025",
      daysLeft: 120,
      type: "inscripciones",
    },
    {
      id: 2,
      title: "Día de Votación",
      date: "12 de Abril, 2026",
      daysLeft: 215,
      type: "votacion",
    },
    {
      id: 3,
      title: "Debate Presidencial",
      date: "20 de Abril, 2026",
      daysLeft: 223,
      type: "debate",
    },
  ];

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
        {events.map((ev) => (
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
            <p
              className={`text-3xl font-bold ${typeColors[ev.type]}`}
            >
              {ev.daysLeft}{" "}
              <span className="text-lg font-medium text-neutral-700">
                días
              </span>
            </p>

            {/* DATE */}
            <span className="text-neutral-500 text-sm">
              {ev.date}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
