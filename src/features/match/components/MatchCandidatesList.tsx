import MatchCandidateCard from "./MatchCandidateCard";

interface Candidate {
  name: string;
  party: string;
  age: number;
  proposal: string;
  photo?: string;
}

interface MatchCandidatesListProps {
  candidates?: Candidate[];
}

export default function MatchCandidatesList({
  candidates = [],
}: MatchCandidatesListProps) {
  return (
    <div className="mt-4 flex flex-col gap-3 pb-10">
      
      {candidates.length > 0 ? (
        candidates.map((candidate, index) => (
          <MatchCandidateCard
            key={index}
            name={candidate.name}
            party={candidate.party}
            age={candidate.age}
            proposal={candidate.proposal}
            photo={candidate.photo}
          />
        ))
      ) : (
        <p className="text-neutral-500 text-sm text-center mt-6">
          No se encontraron candidatos.
        </p>
      )}

    </div>
  );
}
