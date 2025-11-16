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
  
  const photoPool = [
    "/assets/images/candidates/candidates.jpg",
    "/assets/images/candidates/Keiko_Fujimori_2.jpg",
    "/assets/images/candidates/LopezAliaga.jpg",
    "/assets/images/candidates/presidente.png",
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
    "Partido Esperanza Nacional",
    "Renovación Democrática",
    "Frente Futuro",
    "Movimiento Libertad Perú",
    "Alianza Nacional",
    "Perú Moderno",
    "Partido Avanza País",
    "Unión Ciudadana",
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
    (_, i) => ({
      name: `Candidato ${i + 1}`,
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
      photo: random(photoPool),
    })
  );
  