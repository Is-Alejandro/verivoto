import { useState } from "react";
import MonthEventItem from "./MonthEventItem";
import { eventsData } from "../../../data/eventsData";

interface MonthEventsListProps {
  selectedDate: string | null;
}

export default function MonthEventsList({ selectedDate }: MonthEventsListProps) {
  // Evento abierto (solo uno a la vez)
  const [openEventId, setOpenEventId] = useState<number | null>(null);

  // Eventos del mes
  const monthEvents = eventsData.filter(ev => ev.date.startsWith("2026-04"));

  // Si hay fecha seleccionada → filtrar por el día
  const filteredEvents = selectedDate
    ? monthEvents.filter(ev => ev.date === selectedDate)
    : monthEvents;

  return (
    <div className="mt-8 mb-20">
      <h2 className="text-lg font-semibold text-neutral-800 mb-3">
        {selectedDate ? "Eventos del día" : "Eventos del mes"}
      </h2>

      <div className="flex flex-col gap-3">

        {/* Si hay día seleccionado pero no eventos */}
        {selectedDate && filteredEvents.length === 0 && (
          <p className="text-neutral-500 text-sm italic">
            No hay eventos este día.
          </p>
        )}

        {/* Renderizar eventos */}
        {filteredEvents.map(event => {
          const day = Number(event.date.split("-")[2]);

          return (
            <MonthEventItem
              key={event.id}
              day={day}
              month="ABR"
              title={event.title}
              subtitle={event.subtitle}
              color={event.color}
              isOpen={openEventId === event.id}
              onToggle={() =>
                setOpenEventId(prev => (prev === event.id ? null : event.id))
              }
            />
          );
        })}
      </div>

      {/* Botón solo si NO hay día seleccionado */}
      {!selectedDate && (
        <button
          className="
            w-full mt-4 py-3 text-blue-600 font-medium
            bg-blue-50 rounded-xl active:scale-95 transition
          "
        >
          Ver más eventos
        </button>
      )}
    </div>
  );
}
