import { createContext, useContext, useState, ReactNode } from "react";
import { VerificacionItem, VerificacionStatus, VerificacionResultado } from "../types";

interface VerificadorContextProps {
  historial: VerificacionItem[];
  agregarVerificacion: (texto: string, resultado: VerificacionResultado) => void;
}

const VerificadorContext = createContext<VerificadorContextProps | undefined>(undefined);

export function VerificadorProvider({ children }: { children: ReactNode }) {
  const [historial, setHistorial] = useState<VerificacionItem[]>([]);

  const agregarVerificacion = (texto: string, resultado: VerificacionResultado) => {
    const status: VerificacionStatus =
      resultado === "verdadero" ? "success" : "warning";

    const nuevo: VerificacionItem = {
      id: Date.now(),
      status,
      texto,
      fecha: "Justo ahora",
    };

    setHistorial((prev) => [nuevo, ...prev]);
  };

  return (
    <VerificadorContext.Provider value={{ historial, agregarVerificacion }}>
      {children}
    </VerificadorContext.Provider>
  );
}

export function useVerificador() {
  const context = useContext(VerificadorContext);
  if (!context) {
    throw new Error("useVerificador debe usarse dentro de <VerificadorProvider>");
  }
  return context;
}
