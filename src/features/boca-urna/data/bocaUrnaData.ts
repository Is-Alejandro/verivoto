export interface CandidatoBocaUrna {
  nombre: string;
  partido: string;
  votos: number;
  porcentaje: number;
  imagenUrl: string;
  partidoLogoUrl: string;
}

export interface BocaUrnaData {
  ultimaActualizacion: string;
  horaActualizacion: string;
  actasContabilizadas: number;
  actasTotales: number;
  porcentajeActas: number;
  votosValidos: number;
  votosBlancos: number;
  votosNulos: number;
  candidatos: CandidatoBocaUrna[];
}

export const bocaUrnaData: BocaUrnaData = {
  ultimaActualizacion: "16 de Noviembre, 2025",
  horaActualizacion: "23:45",
  actasContabilizadas: 87534,
  actasTotales: 95420,
  porcentajeActas: 91.7,
  votosValidos: 18456789,
  votosBlancos: 234567,
  votosNulos: 187432,
  candidatos: [
    {
      nombre: "César Acuña",
      partido: "Alianza para el Progreso",
      votos: 5234567,
      porcentaje: 28.4,
      imagenUrl: "/src/assets/images/candidates-2/César_Acuña_Peralta.jpg",
      partidoLogoUrl: "/src/assets/images/partidos/Alianza_para_el_Progreso_Peru.svg.png"
    },
    {
      nombre: "Keiko Fujimori",
      partido: "Fuerza Popular",
      votos: 4789234,
      porcentaje: 25.9,
      imagenUrl: "/src/assets/images/candidates-2/Keiko_Fujimori_2_(cropped).jpg",
      partidoLogoUrl: "/src/assets/images/partidos/Fe_en_el_Perú_(logo).svg.png"
    },
    {
      nombre: "Alfredo Barnechea",
      partido: "Acción Popular",
      votos: 3567890,
      porcentaje: 19.3,
      imagenUrl: "/src/assets/images/candidates-2/Barnechea.jpg",
      partidoLogoUrl: "/src/assets/images/partidos/Acción_Popular.png"
    },
    {
      nombre: "Alfonso López Chau",
      partido: "Avanza País",
      votos: 2345678,
      porcentaje: 12.7,
      imagenUrl: "/src/assets/images/candidates-2/Alfonso_López-Chau.jpg",
      partidoLogoUrl: "/src/assets/images/partidos/Avanza_Pais.png"
    },
    {
      nombre: "Fiorella Molinelli",
      partido: "Ahora Nación",
      votos: 1678234,
      porcentaje: 9.1,
      imagenUrl: "/src/assets/images/candidates-2/120px-Fiorella_Mollinelli.jpg",
      partidoLogoUrl: "/src/assets/images/partidos/Ahora_Nación.jpg"
    },
    {
      nombre: "Otros candidatos",
      partido: "Varios partidos",
      votos: 841186,
      porcentaje: 4.6,
      imagenUrl: "https://i.pravatar.cc/150?img=70",
      partidoLogoUrl: "https://img.icons8.com/fluency/48/question-mark.png"
    }
  ]
};
