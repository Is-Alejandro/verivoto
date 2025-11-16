// chipsData.ts

export interface ChipItem {
    label: string;
    active: boolean;
  }
  
  export const defaultChips: ChipItem[] = [
    { label: "salud", active: false },
    { label: "minería", active: false },
    { label: "animales", active: false },
    // Puedes agregar más chips sin tocar MatchPage:
    // { label: "economía", active: false },
    // { label: "seguridad", active: false },
    // { label: "educación", active: false },
  ];
  