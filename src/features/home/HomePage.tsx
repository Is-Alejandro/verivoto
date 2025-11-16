import Layout from "../../components/layout/Layout";
import HeaderChips from "./components/HeaderChips";
import ElectionStartCard from "./components/ElectionStartCard";
import CalendarButton from "./components/CalendarButton";
import QuickActions from "./components/QuickActions";
import CandidatesSection from "./components/CandidatesSection";

export default function HomePage() {
  return (
    <Layout>
      <div className="mt-2">
        
        {/* Greeting */}
        <h1 className="text-2xl font-semibold text-neutral-800">
          Hola, Mauro 👋
        </h1>
        <p className="text-neutral-500 text-sm mt-1">
          ¿Listo para informarte y participar mejor?
        </p>

        <HeaderChips />

        <ElectionStartCard />

        <CalendarButton />

        <QuickActions />

        <CandidatesSection />

      </div>
    </Layout>
  );
}
