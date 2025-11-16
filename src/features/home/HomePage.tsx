import Layout from "../../components/layout/layout";
import { MapPin, ShieldCheck, ListChecks, CalendarDays, Megaphone } from "lucide-react";

export default function HomePage() {
  return (
    <Layout>
      {/* Greeting */}
      <div className="mt-2 mb-4">
        <h1 className="text-2xl font-semibold text-neutral-800">
          Hola, Mauro 👋
        </h1>
        <p className="text-neutral-500 text-sm mt-1">
          ¿Listo para informarte y participar mejor?  
        </p>
      </div>

      {/* Grid de botones principales */}
      <section className="grid grid-cols-2 gap-4 mt-4">
        
        {/* Botón 1 */}
        <button className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center hover:scale-[1.02] active:scale-95 transition">
          <MapPin size={32} className="text-blue-600 mb-2" />
          <span className="text-sm font-medium text-neutral-700">
            Mi Local
          </span>
        </button>

        {/* Botón 2 */}
        <button className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center hover:scale-[1.02] active:scale-95 transition">
          <CalendarDays size={32} className="text-purple-600 mb-2" />
          <span className="text-sm font-medium text-neutral-700">
            Calendario
          </span>
        </button>

        {/* Botón 3 */}
        <button className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center hover:scale-[1.02] active:scale-95 transition">
          <ListChecks size={32} className="text-green-600 mb-2" />
          <span className="text-sm font-medium text-neutral-700">
            Match
          </span>
        </button>

        {/* Botón 4 */}
        <button className="bg-white rounded-xl shadow-sm p-4 flex flex-col items-center hover:scale-[1.02] active:scale-95 transition">
          <ShieldCheck size={32} className="text-red-600 mb-2" />
          <span className="text-sm font-medium text-neutral-700">
            Verificador
          </span>
        </button>
      </section>

      {/* Sección de avisos, noticias o recomendaciones */}
      <section className="mt-8">
        <h2 className="text-lg font-semibold text-neutral-800 mb-3">
          Información y avisos
        </h2>

        {/* Card 1 */}
        <div className="bg-white shadow-sm rounded-xl p-4 flex items-start gap-3 mb-4">
          <Megaphone size={28} className="text-orange-600 mt-1" />
          <div>
            <h3 className="font-medium text-neutral-800">Próximas elecciones</h3>
            <p className="text-neutral-500 text-sm mt-1">
              Revisa las fechas importantes del calendario electoral y evita multas.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-sm rounded-xl p-4 flex items-start gap-3">
          <ShieldCheck size={28} className="text-blue-600 mt-1" />
          <div>
            <h3 className="font-medium text-neutral-800">Verifica rumores</h3>
            <p className="text-neutral-500 text-sm mt-1">
              Comprueba si la información que circula en redes es verdadera.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
