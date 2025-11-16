import HeaderChips from "./components/HeaderChips";
import ElectionStartCard from "./components/ElectionStartCard";
import CalendarButton from "./components/CalendarButton";
import QuickActions from "./components/QuickActions";
import CandidatesSection from "./components/CandidatesSection";

export default function HomePage() {
  return (
    <div className="px-4 pb-24">

      {/* BLOQUE SUPERIOR */}
      <div className="mt-4 mb-6 animate-fade-up delay-100">
        <h1 className="text-[28px] font-bold text-neutral-900 flex items-center gap-2">
          ¡Hola!
          <span className="text-2xl">👋</span>
        </h1>

        <p className="text-neutral-600 text-[15px] mt-1 leading-tight">
          ¿Listo para informarte y participar mejor?
        </p>

        <div className="animate-fade-up delay-200">
          <HeaderChips />
        </div>
      </div>

      {/* FECHA + BOTÓN CALENDARIO */}
      <div className="space-y-4 animate-fade-up delay-300">
        <ElectionStartCard />
        <CalendarButton />
      </div>

      {/* ACCESOS RÁPIDOS */}
      <div className="mt-6 animate-fade-up delay-400">
        <QuickActions />
      </div>

      {/* CANDIDATOS */}
      <div className="mt-8 animate-fade-up delay-500">
        <CandidatesSection />
      </div>

    </div>
  );
}
