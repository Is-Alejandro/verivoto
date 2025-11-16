import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  description: string;
  image?: string;
  icon?: ReactNode;
  buttonLabel: string;
  onClick: () => void;
  backgroundColor?: string; 
}

export default function InfoCard({
  title,
  description,
  image,
  icon,
  buttonLabel,
  onClick,
  backgroundColor,
}: InfoCardProps) {
  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-sm w-full`}
      style={{ backgroundColor }}
    >
      {/* Imagen (opcional) */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover"
        />
      )}

      <div className="p-4">
        {/* Icono (solo si existe) */}
        {icon && <div className="mb-2">{icon}</div>}

        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>

        <p className="text-neutral-700 text-sm mt-1">{description}</p>

        <button
          onClick={onClick}
          className="mt-4 bg-blue-600 text-white text-sm px-4 py-2 rounded-xl font-medium hover:bg-blue-700 active:scale-95 transition"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
