// Tipo genérico para múltiples claves
export type TranslationKeys = {
    [key: string]: string;
  };
  
  // Idiomas permitidos
  export type SupportedLanguages = "es" | "en" | "qu";
  
  // Traducciones completas para AprendeHomePage
  const translations: Record<SupportedLanguages, TranslationKeys> = {
    es: {
      aprender_title: "Aprende: Conocimiento Electoral",
  
      aprende_subtitle: "Pon a prueba tu conocimiento electoral",
      aprende_subtext: "Elige una categoría para empezar.",
  
      categoria_votacion: "¿Cómo funciona la Votación?",
      categoria_historia: "Historia de las Elecciones",
      categoria_partidos: "Partidos y Candidatos",
      categoria_reglas: "Reglas Electorales Clave",
  
      mis_logros: "Mis Logros",
      logro_1: "Votante Informado",
      logro_1_desc: "Completa tu primer quiz.",
    },
  
    en: {
      aprender_title: "Learn: Electoral Knowledge",
  
      aprende_subtitle: "Test your electoral knowledge",
      aprende_subtext: "Choose a category to begin.",
  
      categoria_votacion: "How Voting Works",
      categoria_historia: "History of Elections",
      categoria_partidos: "Parties and Candidates",
      categoria_reglas: "Key Electoral Rules",
  
      mis_logros: "My Achievements",
      logro_1: "Informed Voter",
      logro_1_desc: "Complete your first quiz.",
    },
  
    qu: {
      aprender_title: "Yachay: Llaqta Akllanakuy",
  
      aprende_subtitle: "Akllay yachayki llamk'ayta",
      aprende_subtext: "Kategoriata akllay kallpachaykunata qallarimuy.",
  
      categoria_votacion: "Imayna votay ruwanakun",
      categoria_historia: "Akllanakuy willayninkuna",
      categoria_partidos: "Ayllu t'ikraykuna hinallataq akllakuykuna",
      categoria_reglas: "Akllanakuy ñawpaq ruwaykuna",
  
      mis_logros: "Lurayniykuna",
      logro_1: "Yachaq Votante",
      logro_1_desc: "Ñawpaq kutita quiz ruway.",
    },
  };
  
  export default translations;
  