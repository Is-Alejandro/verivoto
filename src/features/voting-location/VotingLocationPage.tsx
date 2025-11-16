import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import Layout from "../../components/layout/Layout";
import LocationCard from "./components/LocationCard";
import RecommendationsCard from "./components/RecommendationsCard";

export default function VotingLocationPage() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="pb-24">
        {/* Título */}
        <div className="flex items-center gap-3 mb-6 mt-2">
          <button
            onClick={() => navigate("/home")}
            className="p-2 hover:bg-neutral-100 rounded-lg transition -ml-2"
          >
            <ChevronLeft size={24} className="text-neutral-900" />
          </button>
          <h1 className="text-2xl font-bold text-neutral-900">
            📍 Mi local de votación
          </h1>
        </div>

        {/* Card del Local de Votación */}
        <LocationCard />

        {/* Card de Recomendaciones */}
        <RecommendationsCard />
      </div>
    </Layout>
  );
}
