import Layout from "../../components/layout/Layout";
import MatchTitle from "./components/MatchTitle";
import MatchSearchBar from "./components/MatchSearchBar";
import MatchFiltersMain from "./components/MatchFilterMain";
import MatchChips from "./components/MatchChips";
import MatchAttributes from "./components/MatchAttributes";
import MatchResultsCount from "./components/MatchResultsCount";
import MatchCandidateCard from "./components/MatchCandidateCard";
import MatchCandidatesList from "./components/MatchCandidatesList";

export default function MatchPage() {
    return (
        <Layout>
            <div className="p-5 pb-20">

                <MatchTitle />

                {/* Barra de búsqueda */}
                <MatchSearchBar />


                {/* Selectores principales */}
                <MatchFiltersMain />


                {/* Chips principales */}
                <MatchChips />


                {/* Atributos o cualidades */}
                <MatchAttributes />


                {/* Contador */}
                <MatchResultsCount count={30} />

                {/* Lista de candidatos */}
                <MatchCandidatesList
                    candidates={[
                        {
                            name: "Luis Quispe",
                            party: "Partido Popular",
                            age: 45,
                            proposal: "Mejorar el sistema de salud en zonas rurales.",
                        },
                        {
                            name: "Ana Flores",
                            party: "Alianza Perú",
                            age: 38,
                            proposal: "Incentivos para tecnología minera sostenible.",
                        }
                    ]}
                />

            </div>
        </Layout>
    );
}
