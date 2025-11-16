import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CalendarMonth() {
    const monthName = "Abril";
    const year = 2026;

    const weekDays = ["L", "M", "M", "J", "V", "S", "D"];
    const totalDays = 30;

    // Abril 2026 inicia miércoles → índice 2
    const startDayIndex = 2;

    // EVENTOS IMPORTANTES DEL MES
    const monthEvents = [
        { day: 12, type: "votacion", color: "bg-red-500" },
        { day: 20, type: "debate", color: "bg-purple-600" },
        { day: 6, type: "inscripcion", color: "bg-blue-600" },
        { day: 28, type: "general", color: "bg-green-500" },
    ];

    const eventMap = new Map(monthEvents.map(ev => [ev.day, ev.color]));

    // Días vacíos antes del día 1
    const emptyDays = Array.from({ length: startDayIndex }, () => null);
    const monthDays = Array.from({ length: totalDays }, (_, i) => i + 1);

    const calendarGrid = [...emptyDays, ...monthDays];

    return (
        <div className="mt-6">
            {/* HEADER DEL MES */}
            <div className="flex items-center justify-between mb-3">
                <button className="p-2 active:scale-90 transition">
                    <ChevronLeft size={22} className="text-neutral-700" />
                </button>

                <h2 className="text-xl font-semibold text-neutral-800">
                    {monthName} {year}
                </h2>

                <button className="p-2 active:scale-90 transition">
                    <ChevronRight size={22} className="text-neutral-700" />
                </button>
            </div>

            {/* DÍAS DE LA SEMANA */}
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {weekDays.map((d, index) => (
                    <span
                        key={index}
                        className="text-neutral-500 text-[13px] font-medium"
                    >
                        {d}
                    </span>
                ))}
            </div>


            {/* GRID DEL MES CON EVENTOS */}
            <div className="grid grid-cols-7 gap-2">
                {calendarGrid.map((day, index) => {
                    const hasEvent = day && eventMap.has(day);
                    const eventColor = hasEvent ? eventMap.get(day) : null;

                    return (
                        <div
                            key={index}
                            className={`
                h-12 flex flex-col items-center justify-center
                rounded-xl shadow-sm 
                ${day ? "bg-white text-neutral-800 font-medium" : "bg-transparent"}
              `}
                        >
                            {day}

                            {/* PUNTITO DE EVENTO */}
                            {hasEvent && (
                                <span
                                    className={`w-2 h-2 rounded-full mt-1 ${eventColor}`}
                                ></span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
