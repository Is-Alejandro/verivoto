import MonthEventItem from "./MonthEventItem";
import { eventsData } from "../../../data/eventsData";

export default function MonthEventsList() {

  // ✔ Filtrar eventos del mes Abril 2026
  const events = eventsData.filter(ev => ev.date.startsWith("2026-04"));

  return (
    <div className="mt-8 mb-20">
      <h2 className="text-lg font-semibold text-neutral-800 mb-3">
        Eventos de este mes
      </h2>

      <div className="flex flex-col gap-3">
        {events.slice(0, 4).map((event) => {
          const day = Number(event.date.split("-")[2]);
          const month = "ABR"; // opcional por ahora

          return (
            <MonthEventItem
              key={event.id}
              day={day}
              month={month}
              title={event.title}
              subtitle={event.subtitle}
              color={event.color}
            />
          );
        })}
      </div>

      {/* Botón de ver más */}
      <button
        className="
          w-full mt-4 py-3 text-blue-600 font-medium
          bg-blue-50 rounded-xl active:scale-95 transition
        "
      >
        Ver más eventos
      </button>
    </div>
  );
}
