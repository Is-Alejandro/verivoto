// Importar imágenes de candidatos
import keikoFujimori from "../../../assets/images/candidates-2/Keiko_Fujimori_2_(cropped).jpg";
import cesarAcuna from "../../../assets/images/candidates-2/César_Acuña_Peralta.jpg";
import alfonsoLopez from "../../../assets/images/candidates-2/Alfonso_López-Chau.jpg";
import barnechea from "../../../assets/images/candidates-2/Barnechea.jpg";
import fiorellaMollinelli from "../../../assets/images/candidates-2/120px-Fiorella_Mollinelli.jpg";

export interface Candidate {
    name: string;
    party: string;
    age: number;
    region: string;
    type: string;
    proposal: string;
    attributes: string[];
    photo: string;
  }
  
  const candidateNames = [
    "Keiko Fujimori",
    "César Acuña Peralta",
    "Alfonso López Chau",
    "Barnechea",
    "Fiorella Mollinelli",
  ];

  const photoPool = [
    keikoFujimori,
    cesarAcuna,
    alfonsoLopez,
    barnechea,
    fiorellaMollinelli,
  ];
  
  const regions = [
    "Áncash",
    "Lima",
    "Cusco",
    "Arequipa",
    "La Libertad",
    "Piura",
    "Puno",
    "Junín",
    "Loreto",
    "Tacna",
  ];
  
  const parties = [
    "Fuerza Popular",
    "Alianza Para el Progreso",
    "Renovación Popular",
    "Acción Popular",
    "Somos Perú",
    "Partido Morado",
    "Perú Libre",
    "Avanza País",
  ];
  
  const proposals = [
    "Mejorar el sistema de salud en zonas rurales.",
    "Impulsar tecnología sostenible en minería.",
    "Reforma total de la seguridad ciudadana.",
    "Plan nacional de empleo joven.",
    "Desarrollo de infraestructura educativa.",
    "Modernización del transporte público.",
    "Más apoyo para emprendedores.",
    "Protección de animales callejeros.",
    "Expansión de hospitales regionales.",
    "Lucha contra la corrupción en municipios.",
  ];
  
  const attributesPool = [
    "menor de 30",
    "estudios completos",
    "experiencia política",
    "sin antecedentes",
    "pro-medio ambiente",
    "pro-inversión",
    "pro-animales",
    "pro-tecnología",
  ];
  
  const random = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];
  const randomAge = () => 25 + Math.floor(Math.random() * 40);
  const randomAttributes = () =>
    attributesPool.sort(() => Math.random() - 0.5).slice(0, 3);
  
  export const candidatesData: Candidate[] = Array.from({ length: 80 }).map(
    (_, i) => {
      const candidateIndex = i % candidateNames.length;
      return {
        name: candidateNames[candidateIndex],
        party: random(parties),
        age: randomAge(),
        region: random(regions),
        type: random([
          "Presidenciales",
          "Senadores",
          "Diputados",
          "Parlamento Andino",
        ]),
        proposal: random(proposals),
        attributes: randomAttributes(),
        photo: photoPool[candidateIndex],
      };
    }
  );
  