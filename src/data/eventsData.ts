export interface CalendarEvent {
    id: number;
    title: string;
    subtitle: string;
    date: string; // formato YYYY-MM-DD
    type: "votacion" | "inscripciones" | "debate" | "general";
    color: string; // tailwind color
  }
  
  // Base de datos de eventos simulada
  export const eventsData: CalendarEvent[] = [
    {
      id: 1,
      title: "Cierre de Inscripciones",
      subtitle: "Registro nacional de candidatos",
      date: "2026-04-06",
      type: "inscripciones",
      color: "bg-blue-600",
    },
    {
      id: 2,
      title: "Día de Votación",
      subtitle: "Elecciones Generales 2026",
      date: "2026-04-12",
      type: "votacion",
      color: "bg-red-500",
    },
    {
      id: 3,
      title: "Debate Presidencial",
      subtitle: "Debate final de candidatos",
      date: "2026-04-20",
      type: "debate",
      color: "bg-purple-600",
    },
    {
      id: 4,
      title: "Evento Informativo",
      subtitle: "Jornada nacional de orientación",
      date: "2026-04-28",
      type: "general",
      color: "bg-green-500",
    }
  ];
  