import { ChevronRight } from "lucide-react";

interface MonthEventItemProps {
  day: number;
  month: string;
  title: string;
  subtitle: string;
  color: string;
}

export default function MonthEventItem({
  day,
  month,
  title,
  subtitle,
  color
}: MonthEventItemProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm active:scale-[0.98] transition">
      
      {/* FECHA */}
      <div className="flex flex-col items-center justify-center">
        <div className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center text-white font-bold ${color}`}>
          <span className="text-[18px] leading-none">{day}</span>
          <span className="text-[11px] uppercase tracking-wide">{month}</span>
        </div>
      </div>

      {/* TEXTO */}
      <div className="flex-1">
        <h3 className="text-[16px] font-semibold text-neutral-900 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-neutral-500 mt-1">{subtitle}</p>
      </div>

      {/* ICONO */}
      <ChevronRight size={22} className="text-neutral-400" />
    </div>
  );
}
