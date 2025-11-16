import Layout from "../../components/layout/Layout";
import LocationCard from "./components/LocationCard";
import RecommendationsCard from "./components/RecommendationsCard";

export default function VotingLocationPage() {
  return (
    <Layout>
      <div className="pb-24">
        {/* Título */}
        <div className="flex items-start gap-2 mb-6 mt-3">
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
