import { useState } from "react";
import { useNavigate } from "react-router-dom";
import VerificadorIntro from "./components/VerificadorIntro";
import VerificadorTextarea from "./components/VerificadorTextarea";
import VerificarButton from "./components/VerificadorButton";
import VerificacionesHistorial from "./components/VerificacionesHistorial";

import { useVerificador } from "./components/VerificadorContext";

export default function VerificadorPage() {
  const navigate = useNavigate();
  const [texto, setTexto] = useState("");

  // ⬇️ AHORA EL HISTORIAL VIENE DEL CONTEXT GLOBAL
  const { historial, agregarVerificacion } = useVerificador();

  const handleVerificar = () => {
    if (!texto.trim()) return;

    // Resultado mock
    const resultado = Math.random() > 0.5 ? "verdadero" : "falso";

    // Guardar en el historial global
    agregarVerificacion(texto, resultado);

    // Navegar al resultado
    navigate("/verificador/resultado", {
      state: {
        texto,
        resultado,
      },
    });

    // Limpiar textarea
    setTexto("");
  };

  return (
    <div>
      <VerificadorIntro />

      <VerificadorTextarea value={texto} onChange={setTexto} />

      <VerificarButton onClick={handleVerificar} />

      {/* Historial global y persistente */}
      <VerificacionesHistorial historial={historial} />
    </div>
  );
}
