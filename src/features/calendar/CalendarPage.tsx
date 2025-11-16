import { useState } from "react";
import Layout from "../../components/layout/Layout";
import UpcomingEventsCarousel from "./components/UpcomingEventsCarousel";
import CalendarMonth from "./components/CalendarMonth";
import MonthEventsList from "./components/MonthEventList";

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  return (
    <div>
      <div className="mt-2">
        
        {/* Carrusel de Próximos Eventos */}
        <UpcomingEventsCarousel />

        {/* Calendario Mensual */}
        <CalendarMonth 
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        {/* Lista dinámica según el día seleccionado */}
        <MonthEventsList selectedDate={selectedDate} />

      </div>
    </div>
  );
}
