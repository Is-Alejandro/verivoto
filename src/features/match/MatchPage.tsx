import { useState, useMemo } from "react";
import Layout from "../../components/layout/Layout";

import MatchTitle from "./components/MatchTitle";
import MatchSearchBar from "./components/MatchSearchBar";
import MatchFiltersMain from "./components/MatchFilterMain";
import MatchChips from "./components/MatchChips";
import MatchAttributes from "./components/MatchAttributes";
import MatchResultsCount from "./components/MatchResultsCount";
import MatchCandidatesList from "./components/MatchCandidatesList";

// Dataset inicial (temporal)
const candidatesData = [
  {
    name: "Luis Quispe",
    party: "Partido Popular",
    age: 45,
    region: "Áncash",
    type: "Presidenciales",
    proposal: "Mejorar el sistema de salud en zonas rurales.",
  },
  {
    name: "Ana Flores",
    party: "Alianza Perú",
    age: 38,
    region: "Lima",
    type: "Presidenciales",
    proposal: "Incentivos para tecnología minera sostenible.",
  },
];

export default function MatchPage() {
  // Estados principales
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("Áncash");
  const [type, setType] = useState("Presidenciales");

  // Estado para chips
  const [chips, setChips] = useState([
    { label: "salud", active: true },
    { label: "minería", active: false },
    { label: "animales", active: true },
  ]);

  // Función para activar/desactivar chips
  const toggleChip = (label: string) => {
    setChips((prev) =>
      prev.map((chip) =>
        chip.label === label
          ? { ...chip, active: !chip.active }
          : chip
      )
    );
  };

  // Filtrado final (búsqueda + región + tipo + chips)
  const filteredCandidates = useMemo(() => {
    const activeChips = chips
      .filter((c) => c.active)
      .map((c) => c.label.toLowerCase());

    return candidatesData.filter((c) => {
      const matchesSearch =
        search === "" ||
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.party.toLowerCase().includes(search.toLowerCase());

      const matchesRegion = c.region === region;
      const matchesType = c.type === type;

      const matchesChips =
        activeChips.length === 0 ||
        activeChips.some((topic) =>
          c.proposal.toLowerCase().includes(topic)
        );

      return matchesSearch && matchesRegion && matchesType && matchesChips;
    });
  }, [search, region, type, chips]);

  return (
    <Layout>
      <div className="p-5 pb-20">

        <MatchTitle />

        {/* Búsqueda */}
        <MatchSearchBar
          value={search}
          onChange={(value) => setSearch(value)}
          onSearch={() => console.log("Buscar:", search)}
        />

        {/* Filtros principales */}
        <MatchFiltersMain
          region={region}
          type={type}
          onRegionChange={(value) => setRegion(value)}
          onTypeChange={(value) => setType(value)}
        />

        {/* Chips conectados */}
        <MatchChips chips={chips} onToggle={toggleChip} />

        {/* Atributos (pronto se conectará con match ranking) */}
        <MatchAttributes />

        {/* Contador dinámico */}
        <MatchResultsCount count={filteredCandidates.length} />

        {/* Lista filtrada */}
        <MatchCandidatesList candidates={filteredCandidates} />

      </div>
    </Layout>
  );
}
