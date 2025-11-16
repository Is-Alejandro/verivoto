import MonthEventItem from "./MonthEventItem";

export default function MonthEventsList() {
  const events = [
    {
      day: 12,
      month: "ABR",
      title: "Día de Votación",
      subtitle: "Elecciones Generales 2026",
      color: "bg-red-500"
    },
    {
      day: 20,
      month: "ABR",
      title: "Debate Presidencial",
      subtitle: "Debate Final de Candidatos",
      color: "bg-purple-600"
    },
    {
      day: 6,
      month: "ABR",
      title: "Cierre de Inscripciones",
      subtitle: "Registro nacional de candidatos",
      color: "bg-blue-600"
    },
    {
      day: 28,
      month: "ABR",
      title: "Evento Informativo",
      subtitle: "Jornada nacional de orientación",
      color: "bg-green-500"
    }
  ];

  return (
    <div className="mt-8 mb-20">
      <h2 className="text-lg font-semibold text-neutral-800 mb-3">
        Eventos de este mes
      </h2>

      <div className="flex flex-col gap-3">
        {events.slice(0, 4).map((event, index) => (
          <MonthEventItem key={index} {...event} />
        ))}
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
