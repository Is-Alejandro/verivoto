import Layout from "../../components/layout/Layout";
import HeaderChips from "./components/HeaderChips";
import ElectionStartCard from "./components/ElectionStartCard";
import CalendarButton from "./components/CalendarButton";
import QuickActions from "./components/QuickActions";
import CandidatesSection from "./components/CandidatesSection";

export default function HomePage() {
    return (
        <div>
            <div className="mt-2">
                {/* Greeting Mejorado */}
                <h1 className="text-3xl font-bold text-neutral-900 flex items-center gap-2 mt-2">
                    ¡Hola!
                    <span className="text-2xl">👋</span>
                </h1>

                <p className="text-neutral-500 text-[15px] mt-2">
                    ¿Listo para informarte y participar mejor?
                </p>

                <HeaderChips />

                <ElectionStartCard />

                <CalendarButton />

                <QuickActions />

                <CandidatesSection />

            </div>
        </div>
    );
}
