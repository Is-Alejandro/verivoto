import Layout from "../../components/layout/Layout";
import UpcomingEventsCarousel from "./components/UpcomingEventsCarousel";
import CalendarMonth from "./components/CalendarMonth";
import MonthEventsList from "./components/MonthEventList";

export default function CalendarPage() {
  return (
    <Layout>
      <div className="mt-2">
        
        {/* Carrusel de Próximos Eventos */}
        <UpcomingEventsCarousel />

        {/* Calendario Mensual */}
        <CalendarMonth />

        <MonthEventsList />

      </div>
    </Layout>
  );
}
