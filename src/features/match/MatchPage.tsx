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
import { defaultChips } from "./data/chipsData";
import { defaultAttributes } from "./data/attributesData";

export default function MatchPage() {
    const [search, setSearch] = useState("");
    const [region, setRegion] = useState("all");
    const [type, setType] = useState("all");

    const [chips, setChips] = useState(defaultChips);
    const [attributes, setAttributes] = useState(defaultAttributes);

    const toggleChip = (label: string) => {
        setChips(prev =>
            prev.map(chip =>
                chip.label === label ? { ...chip, active: !chip.active } : chip
            )
        );
    };

    const toggleAttribute = (label: string) => {
        setAttributes(prev =>
            prev.map(attr =>
                attr.label === label ? { ...attr, active: !attr.active } : attr
            )
        );
    };

    const filteredCandidates = useMemo(() => {
        const activeChips = chips.filter(c => c.active).map(c => c.label.toLowerCase());
        const activeAttributes = attributes.filter(a => a.active).map(a => a.label.toLowerCase());

        return candidatesData
            .map(c => {
                // 🔍 1. Búsqueda básica
                const matchesSearch =
                    search === "" ||
                    c.name.toLowerCase().includes(search.toLowerCase()) ||
                    c.party.toLowerCase().includes(search.toLowerCase());

                // 🌎 2. Región / Tipo
                const matchesRegion = region === "all" || c.region === region;
                const matchesType = type === "all" || c.type === type;

                // 🟦 3. CHIP MATCH
                let chipMatches = 0;
                let chipMatchPercentage = 0;

                if (activeChips.length > 0) {
                    const proposalLower = c.proposal.toLowerCase();
                    chipMatches = activeChips.filter(ch =>
                        proposalLower.includes(ch)
                    ).length;

                    chipMatchPercentage =
                        (chipMatches / activeChips.length) * 100;
                }

                // 🟪 4. ATRIBUTOS MATCH
                const candidateAttrs = c.attributes.map(a => a.toLowerCase());

                const attrMatches = activeAttributes.filter(attr =>
                    candidateAttrs.includes(attr)
                ).length;

                const attrMatchPercentage =
                    activeAttributes.length > 0
                        ? Math.round((attrMatches / activeAttributes.length) * 100)
                        : 0;

                // ⭐ 5. MATCH FINAL (70% atributos / 30% chips)
                const finalMatch = Math.round(
                    attrMatchPercentage * 0.7 +
                    chipMatchPercentage * 0.3
                );

                return {
                    ...c,
                    matchesSearch,
                    matchesRegion,
                    matchesType,
                    match: finalMatch,
                    attrMatches,     // ✔ agregado
                    chipMatches,     // ✔ agregado
                };
            })
            .filter(
                c =>
                    c.matchesSearch &&
                    c.matchesRegion &&
                    c.matchesType
            )
            .sort((a, b) => b.match - a.match);
    }, [search, region, type, chips, attributes]);

    return (
        <div>
            <div className="p-5 pb-20">
                <MatchTitle />

                <MatchSearchBar value={search} onChange={setSearch} />

                <MatchFiltersMain
                    region={region}
                    type={type}
                    onRegionChange={setRegion}
                    onTypeChange={setType}
                />

                <MatchChips chips={chips} onToggle={toggleChip} />

                <MatchAttributes attributes={attributes} onToggle={toggleAttribute} />

                <MatchResultsCount
                    count={filteredCandidates.length}
                    onReset={() => {
                        setSearch("");
                        setRegion("all");
                        setType("all");
                        setChips(defaultChips.map(c => ({ ...c, active: false })));
                        setAttributes(defaultAttributes.map(a => ({ ...a, active: false })));
                    }}
                />

                <MatchCandidatesList candidates={filteredCandidates} />
            </div>
        </div>
    );
}
