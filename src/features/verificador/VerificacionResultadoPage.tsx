import Layout from "../../components/layout/Layout";
import ResultadoVolver from "./components/ResultadoVolver";
import ResultadoCard from "./components/ResultadoCard";
import { VerificacionDetalle } from "./types";
import { useLocation, useNavigate } from "react-router-dom";

export default function VerificacionResultadoPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const data = location.state;

  // Si entran sin datos → redirigir
  if (!data) {
    navigate("/verificador");
    return null;
  }

  const { texto, resultado } = data;

  const detalle: VerificacionDetalle = {
    resultado,
    resumen:
      resultado === "falso"
        ? `La afirmación enviada es falsa. Los organismos electorales han descartado esta información de forma oficial.`
        : `La afirmación enviada es verdadera según datos y fuentes oficiales verificadas.`,
    fuentes: [
      {
        titulo: "Comunicado Oficial - Jurado Nacional de Elecciones (JNE)",
        url: "https://jne.gob.pe",
      },
      {
        titulo: "El Comercio - Verificador de Datos",
        url: "https://elcomercio.pe",
      },
    ],
  };

  return (
    <Layout>
      <div className="mt-4">
        <ResultadoVolver />
        <ResultadoCard detalle={detalle} texto={texto} />
      </div>
    </Layout>
  );
}
