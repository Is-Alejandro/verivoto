export interface Candidato {
  nombre: string;
  partido: string;
  porcentaje: number;
  imagenUrl: string;
  partidoLogoUrl: string;
}

export interface Encuesta {
  id: string;
  encuestadora: string;
  logoUrl: string;
  fecha: string;
  muestra: number;
  margenError: string;
  candidatos: Candidato[];
}

export const encuestasData: Encuesta[] = [
  {
    id: "ipsos-nov-2025",
    encuestadora: "Ipsos Perú",
    logoUrl: "/src/assets/images/encuestadoras/ipsos.jpg",
    fecha: "Noviembre 2025",
    muestra: 1500,
    margenError: "±2.5%",
    candidatos: [
      {
        nombre: "César Acuña",
        partido: "Alianza para el Progreso",
        porcentaje: 28.5,
        imagenUrl: "/src/assets/images/candidates-2/César_Acuña_Peralta.jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Alianza_para_el_Progreso_Peru.svg.png"
      },
      {
        nombre: "Keiko Fujimori",
        partido: "Fuerza Popular",
        porcentaje: 24.3,
        imagenUrl: "/src/assets/images/candidates-2/Keiko_Fujimori_2_(cropped).jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Fe_en_el_Perú_(logo).svg.png"
      },
      {
        nombre: "Alfredo Barnechea",
        partido: "Acción Popular",
        porcentaje: 18.7,
        imagenUrl: "/src/assets/images/candidates-2/Barnechea.jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Acción_Popular.png"
      },
      {
        nombre: "Alfonso López Chau",
        partido: "Avanza País",
        porcentaje: 12.4,
        imagenUrl: "/src/assets/images/candidates-2/Alfonso_López-Chau.jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Avanza_Pais.png"
      },
      {
        nombre: "Fiorella Molinelli",
        partido: "Ahora Nación",
        porcentaje: 8.6,
        imagenUrl: "/src/assets/images/candidates-2/120px-Fiorella_Mollinelli.jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Ahora_Nación.jpg"
      },
      {
        nombre: "Otros candidatos",
        partido: "Varios partidos",
        porcentaje: 7.5,
        imagenUrl: "https://i.pravatar.cc/150?img=70",
        partidoLogoUrl: "https://img.icons8.com/fluency/48/question-mark.png"
      }
    ]
  },
  {
    id: "datum-nov-2025",
    encuestadora: "Datum Internacional",
    logoUrl: "/src/assets/images/encuestadoras/datum.png",
    fecha: "Noviembre 2025",
    muestra: 1200,
    margenError: "±2.8%",
    candidatos: [
      {
        nombre: "César Acuña",
        partido: "Alianza para el Progreso",
        porcentaje: 26.8,
        imagenUrl: "/src/assets/images/candidates-2/César_Acuña_Peralta.jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Alianza_para_el_Progreso_Peru.svg.png"
      },
      {
        nombre: "Keiko Fujimori",
        partido: "Fuerza Popular",
        porcentaje: 25.1,
        imagenUrl: "/src/assets/images/candidates-2/Keiko_Fujimori_2_(cropped).jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Fe_en_el_Perú_(logo).svg.png"
      },
      {
        nombre: "Alfredo Barnechea",
        partido: "Acción Popular",
        porcentaje: 19.3,
        imagenUrl: "/src/assets/images/candidates-2/Barnechea.jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Acción_Popular.png"
      },
      {
        nombre: "Alfonso López Chau",
        partido: "Avanza País",
        porcentaje: 13.2,
        imagenUrl: "/src/assets/images/candidates-2/Alfonso_López-Chau.jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Avanza_Pais.png"
      },
      {
        nombre: "Fiorella Molinelli",
        partido: "Ahora Nación",
        porcentaje: 9.1,
        imagenUrl: "/src/assets/images/candidates-2/120px-Fiorella_Mollinelli.jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Ahora_Nación.jpg"
      },
      {
        nombre: "Otros candidatos",
        partido: "Varios partidos",
        porcentaje: 6.5,
        imagenUrl: "https://i.pravatar.cc/150?img=70",
        partidoLogoUrl: "https://img.icons8.com/fluency/48/question-mark.png"
      }
    ]
  },
  {
    id: "cpi-oct-2025",
    encuestadora: "CPI",
    logoUrl: "/src/assets/images/encuestadoras/cpi.png",
    fecha: "Octubre 2025",
    muestra: 1800,
    margenError: "±2.3%",
    candidatos: [
      {
        nombre: "Keiko Fujimori",
        partido: "Fuerza Popular",
        porcentaje: 27.2,
        imagenUrl: "/src/assets/images/candidates-2/Keiko_Fujimori_2_(cropped).jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Fe_en_el_Perú_(logo).svg.png"
      },
      {
        nombre: "César Acuña",
        partido: "Alianza para el Progreso",
        porcentaje: 25.9,
        imagenUrl: "/src/assets/images/candidates-2/César_Acuña_Peralta.jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Alianza_para_el_Progreso_Peru.svg.png"
      },
      {
        nombre: "Alfredo Barnechea",
        partido: "Acción Popular",
        porcentaje: 20.4,
        imagenUrl: "/src/assets/images/candidates-2/Barnechea.jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Acción_Popular.png"
      },
      {
        nombre: "Alfonso López Chau",
        partido: "Avanza País",
        porcentaje: 11.8,
        imagenUrl: "/src/assets/images/candidates-2/Alfonso_López-Chau.jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Avanza_Pais.png"
      },
      {
        nombre: "Fiorella Molinelli",
        partido: "Ahora Nación",
        porcentaje: 8.3,
        imagenUrl: "/src/assets/images/candidates-2/120px-Fiorella_Mollinelli.jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Ahora_Nación.jpg"
      },
      {
        nombre: "Otros candidatos",
        partido: "Varios partidos",
        porcentaje: 6.4,
        imagenUrl: "https://i.pravatar.cc/150?img=70",
        partidoLogoUrl: "https://img.icons8.com/fluency/48/question-mark.png"
      }
    ]
  },
  {
    id: "iep-oct-2025",
    encuestadora: "IEP",
    logoUrl: "/src/assets/images/encuestadoras/iep.jpg",
    fecha: "Octubre 2025",
    muestra: 1400,
    margenError: "±2.6%",
    candidatos: [
      {
        nombre: "César Acuña",
        partido: "Alianza para el Progreso",
        porcentaje: 29.1,
        imagenUrl: "/src/assets/images/candidates-2/César_Acuña_Peralta.jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Alianza_para_el_Progreso_Peru.svg.png"
      },
      {
        nombre: "Keiko Fujimori",
        partido: "Fuerza Popular",
        porcentaje: 23.7,
        imagenUrl: "/src/assets/images/candidates-2/Keiko_Fujimori_2_(cropped).jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Fe_en_el_Perú_(logo).svg.png"
      },
      {
        nombre: "Alfredo Barnechea",
        partido: "Acción Popular",
        porcentaje: 17.9,
        imagenUrl: "/src/assets/images/candidates-2/Barnechea.jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Acción_Popular.png"
      },
      {
        nombre: "Alfonso López Chau",
        partido: "Avanza País",
        porcentaje: 13.5,
        imagenUrl: "/src/assets/images/candidates-2/Alfonso_López-Chau.jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Avanza_Pais.png"
      },
      {
        nombre: "Fiorella Molinelli",
        partido: "Ahora Nación",
        porcentaje: 9.4,
        imagenUrl: "/src/assets/images/candidates-2/120px-Fiorella_Mollinelli.jpg",
        partidoLogoUrl: "/src/assets/images/partidos/Ahora_Nación.jpg"
      },
      {
        nombre: "Otros candidatos",
        partido: "Varios partidos",
        porcentaje: 6.4,
        imagenUrl: "https://i.pravatar.cc/150?img=70",
        partidoLogoUrl: "https://img.icons8.com/fluency/48/question-mark.png"
      }
    ]
  }
];
