import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import VerificadorIntro from "./components/VerificadorIntro";
import VerificadorTextarea from "./components/VerificadorTextarea";
import VerificarButton from "./components/VerificadorButton";
import VerificacionesHistorial from "./components/VerificacionesHistorial";

import { VerificacionItem } from "./types";

export default function VerificadorPage() {
  const navigate = useNavigate();
  const [texto, setTexto] = useState("");

  const [historial, setHistorial] = useState<VerificacionItem[]>([
    {
      id: 1,
      status: "warning",
      texto:
        "Declaración sobre presupuesto de educación fue sacada de contexto...",
      fecha: "Hace 2 horas",
    },
    {
      id: 2,
      status: "success",
      texto:
        "La ONPE confirma la fecha para la capacitación de miembros de mesa...",
      fecha: "Ayer",
    },
  ]);

  const handleVerificar = () => {
    if (!texto.trim()) return;

    // 🔥 Resultado aleatorio — simula IA
    const resultado = Math.random() > 0.5 ? "verdadero" : "falso";

    // 👇 Navegar y pasar datos
    navigate("/verificador/resultado", {
      state: {
        texto,
        resultado,
      },
    });

    // Agregar al historial visual
    const nuevo: VerificacionItem = {
      id: Date.now(),
      status: "warning",
      texto,
      fecha: "Justo ahora",
    };

    setHistorial([nuevo, ...historial]);
    setTexto("");
  };

  return (
    <Layout>
      <VerificadorIntro />

      <VerificadorTextarea value={texto} onChange={setTexto} />

      <VerificarButton onClick={handleVerificar} />

      <VerificacionesHistorial historial={historial} />
    </Layout>
  );
}
