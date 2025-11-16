import { Link as LinkIcon } from "lucide-react";

interface Props {
  fuente: { titulo: string; url: string };
}

export default function ResultadoFuenteItem({ fuente }: Props) {
  return (
    <a
      href={fuente.url}
      target="_blank"
      className="flex items-center gap-2 text-blue-600 text-sm font-medium"
    >
      <LinkIcon size={16} />
      {fuente.titulo}
    </a>
  );
}
