import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import MesaInfoCard from "./components/MesaInfoCard";
import MesaMapSection from "./components/MesaMapSection";
import ResponsibilitiesSection from "./components/ResponsibilitiesSection";
import TrainingSection from "./components/TrainingSection";
import MotivationalSection from "./components/MotivationalSection";
import { ChevronLeft } from "lucide-react";

export default function MesaMemberPage() {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const userStr = localStorage.getItem("currentUser");
    if (userStr) {
      const user = JSON.parse(userStr);
      
      // Verificar que el usuario sea miembro de mesa
      if (!user.isMesaMember) {
        navigate("/home");
        return;
      }
      
      setUserData(user);
    } else {
      navigate("/onboarding");
    }
    setLoading(false);
  }, [navigate]);

  if (loading || !userData) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-neutral-500">Cargando...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header con botón de regreso */}
      <div className="flex items-center gap-3 mb-6 -mt-2">
        <button
          onClick={() => navigate("/home")}
          className="p-2 hover:bg-neutral-100 rounded-lg transition -ml-2"
        >
          <ChevronLeft size={24} className="text-neutral-900" />
        </button>
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 mt-4">
            Miembro de Mesa
          </h1>
          <p className="text-sm text-neutral-600">
            Información completa sobre tu rol
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div className="space-y-6 pb-20">
        {/* Información de la mesa */}
        <MesaInfoCard 
          mesaInfo={userData.mesaInfo}
          votingLocation={userData.votingLocation}
        />

        {/* Mapa */}
        <MesaMapSection votingLocation={userData.votingLocation} />

        {/* Responsabilidades */}
        {/* <ResponsibilitiesSection rol={userData.mesaInfo.rol} /> */}

        {/* Capacitaciones */}
        {userData.mesaInfo.capacitaciones && (
          <TrainingSection capacitaciones={userData.mesaInfo.capacitaciones} />
        )}

        {/* Contenido motivacional */}
        <MotivationalSection />
      </div>
    </Layout>
  );
}
