// attributesData.ts

export interface AttributeItem {
    label: string;
    active: boolean;
  }
  
  export const defaultAttributes: AttributeItem[] = [
    { label: "menor de 30", active: false },
    { label: "estudios completos", active: false },
    { label: "experiencia política", active: false },
    // Puedes agregar más atributos libremente
    // { label: "sin antecedentes", active: false },
    // { label: "pro-tecnología", active: false },
  ];
  