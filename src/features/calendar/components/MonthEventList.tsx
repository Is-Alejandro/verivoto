import MonthEventItem from "./MonthEventItem";
import { eventsData } from "../../../data/eventsData";

interface MonthEventsListProps {
    selectedDate: string | null;
  }
  

export default function MonthEventsList({ selectedDate }: MonthEventsListProps) {


    // Si no hay día seleccionado, no mostramos nada (queda limpio)
    const filtered =
        selectedDate
            ? eventsData.filter(ev => ev.date === selectedDate)
            : [];

    return (
        <div className="mt-8 mb-20">
            <h2 className="text-lg font-semibold text-neutral-800 mb-3">
                {selectedDate ? "Eventos del día" : "Selecciona un día"}
            </h2>

            <div className="flex flex-col gap-3">

                {/* No hay eventos */}
                {selectedDate && filtered.length === 0 && (
                    <p className="text-neutral-500 text-sm italic">
                        No hay eventos este día.
                    </p>
                )}

                {/* Sí hay eventos */}
                {filtered.map((event) => {
                    const day = Number(event.date.split("-")[2]);
                    return (
                        <MonthEventItem
                            key={event.id}
                            day={day}
                            month="ABR"
                            title={event.title}
                            subtitle={event.subtitle}
                            color={event.color}
                        />
                    );
                })}
            </div>

        </div>
    );
}
