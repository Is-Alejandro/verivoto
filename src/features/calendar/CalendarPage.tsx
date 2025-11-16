import Layout from "../../components/layout/Layout";
import UpcomingEventsCarousel from "./components/UpcomingEventsCarousel";

export default function CalendarPage() {
  return (
    <Layout>
      <div className="mt-2">
        
        {/* Carrusel de Próximos Eventos */}
        <UpcomingEventsCarousel />

        {/* Título temporal mientras armamos el resto */}
        <h1 className="text-2xl font-bold mt-6">Calendario Electoral</h1>
        <p className="text-neutral-600 mt-2">
          Aquí se mostrará el calendario electoral completo.
        </p>
      </div>
    </Layout>
  );
}
