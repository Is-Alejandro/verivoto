interface MatchResultsCountProps {
    count?: number;
  }
  
  export default function MatchResultsCount({ count = 0 }: MatchResultsCountProps) {
    return (
      <p className="mt-5 font-medium text-neutral-800">
        {count} candidatos encontrados
      </p>
    );
  }
  