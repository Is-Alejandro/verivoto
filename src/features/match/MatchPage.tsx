import { useState, useMemo } from "react";
import Layout from "../../components/layout/Layout";

import MatchTitle from "./components/MatchTitle";
import MatchSearchBar from "./components/MatchSearchBar";
import MatchFiltersMain from "./components/MatchFilterMain";
import MatchChips from "./components/MatchChips";
import MatchAttributes from "./components/MatchAttributes";
import MatchResultsCount from "./components/MatchResultsCount";
import MatchCandidatesList from "./components/MatchCandidatesList";
import { candidatesData } from "./data/candidatesData";

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

  // Estado para atributos seleccionados
  const [attributes, setAttributes] = useState([
    { label: "menor de 30", active: false },
    { label: "estudios completos", active: false },
    { label: "experiencia política", active: false },
  ]);

  // Toggle de chips
  const toggleChip = (label: string) => {
    setChips((prev) =>
      prev.map((chip) =>
        chip.label === label
          ? { ...chip, active: !chip.active }
          : chip
      )
    );
  };

  // Toggle de atributos
  const toggleAttribute = (label: string) => {
    setAttributes((prev) =>
      prev.map((attr) =>
        attr.label === label
          ? { ...attr, active: !attr.active }
          : attr
      )
    );
  };

  // Lógica completa con ranking
  const filteredCandidates = useMemo(() => {
    const activeChips = chips
      .filter((c) => c.active)
      .map((c) => c.label.toLowerCase());

    const activeAttributes = attributes
      .filter((a) => a.active)
      .map((a) => a.label.toLowerCase());

    return candidatesData
      .map((c) => {
        // Filtros básicos
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

        // Cálculo de match % por atributos
        const candidateAttrs = c.attributes.map((a) => a.toLowerCase());

        const matchesCount = activeAttributes.filter((attr) =>
          candidateAttrs.includes(attr)
        ).length;

        const matchPercentage =
          activeAttributes.length > 0
            ? Math.round((matchesCount / activeAttributes.length) * 100)
            : 0;

        return {
          ...c,
          matchesSearch,
          matchesRegion,
          matchesType,
          matchesChips,
          match: matchPercentage,
        };
      })
      .filter((c) =>
        c.matchesSearch &&
        c.matchesRegion &&
        c.matchesType &&
        c.matchesChips
      )
      .sort((a, b) => b.match - a.match); // orden por match desc
  }, [search, region, type, chips, attributes]);

  return (
    <Layout>
      <div className="p-5 pb-20">

        <MatchTitle />

        <MatchSearchBar
          value={search}
          onChange={(value) => setSearch(value)}
        />

        <MatchFiltersMain
          region={region}
          type={type}
          onRegionChange={(value) => setRegion(value)}
          onTypeChange={(value) => setType(value)}
        />

        <MatchChips chips={chips} onToggle={toggleChip} />

        <MatchAttributes
          attributes={attributes}
          onToggle={toggleAttribute}
        />

        <MatchResultsCount count={filteredCandidates.length} />

        <MatchCandidatesList candidates={filteredCandidates} />
      </div>
    </Layout>
  );
}
