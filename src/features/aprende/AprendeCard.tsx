import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AprendeCardProps {
  icon: ReactNode;
  title: string;
  progress?: number;
  route: string;
  delay?: number;
}

export default function AprendeCard({
  icon,
  title,
  progress = 0.2,
  route,
  delay = 100,
}: AprendeCardProps) {

  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(route)}
      className={`
        bg-white rounded-2xl shadow-sm p-4 w-full text-left
        fade-up delay-${delay}
        active:scale-[0.97] transition-all
      `}
    >
      {/* Icono dentro de un círculo */}
      <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center mb-3">
        {icon}
      </div>

      {/* Título */}
      <p className="font-semibold text-neutral-900 text-[15px] leading-tight">
        {title}
      </p>

      {/* Barra de progreso */}
      <div className="h-2 bg-neutral-200 rounded-full mt-3">
        <div
          className="h-full bg-blue-600 rounded-full transition-all"
          style={{ width: `${progress * 100}%` }}
        ></div>
      </div>
    </button>
  );
}
