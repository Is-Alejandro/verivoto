import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import HeaderChips from "./components/HeaderChips";
import ElectionStartCard from "./components/ElectionStartCard";
import CalendarButton from "./components/CalendarButton";
import QuickActions from "./components/QuickActions";
import CandidatesSection from "./components/CandidatesSection";
import { Users, X } from "lucide-react";

export default function HomePage() {
    const [showMesaModal, setShowMesaModal] = useState(false);
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        // Obtener datos del usuario
        const userStr = localStorage.getItem("currentUser");
        if (userStr) {
            const user = JSON.parse(userStr);
            setUserData(user);

            // Si es miembro de mesa y no ha visto el modal en esta sesión
            if (user.isMesaMember) {
                const hasSeenModalThisSession = sessionStorage.getItem("hasSeenMesaModal");
                if (!hasSeenModalThisSession) {
                    setShowMesaModal(true);
                    sessionStorage.setItem("hasSeenMesaModal", "true");
                }
            }
        }
    }, []);

    const userName = userData?.nombre || "Usuario";

    return (
        <Layout>
            <div className="mt-2">
                {/* Greeting Mejorado */}
                <h1 className="text-3xl font-bold text-neutral-900 flex items-center gap-2 mt-2">
                    ¡Hola{userData ? `, ${userName}` : ""}!
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

            {/* Modal de Miembro de Mesa */}
            {showMesaModal && userData?.mesaInfo && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-6">
                    <div className="bg-white rounded-2xl p-6 max-w-sm w-full relative">
                        <button
                            onClick={() => setShowMesaModal(false)}
                            className="absolute top-4 right-4 p-2 hover:bg-neutral-100 rounded-full transition"
                        >
                            <X size={20} className="text-neutral-600" />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            <div className="bg-purple-100 rounded-full p-4 mb-4">
                                <Users size={48} className="text-purple-600" />
                            </div>

                            <h2 className="text-xl font-bold text-neutral-900 mb-2">
                                ¡Eres Miembro de Mesa!
                            </h2>

                            <p className="text-sm text-neutral-600 mb-4">
                                Has sido designado como <span className="font-semibold">{userData.mesaInfo.rol}</span>
                            </p>

                            <div className="w-full bg-neutral-50 rounded-xl p-4 mb-6 text-left">
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">Mesa:</span>
                                        <span className="font-semibold text-neutral-900">
                                            {userData.mesaInfo.numero}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">Horario:</span>
                                        <span className="font-semibold text-neutral-900">
                                            {userData.mesaInfo.horario}
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-neutral-600">Local:</span>
                                        <span className="font-semibold text-neutral-900">
                                            {userData.votingLocation.nombre}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="text-xs text-neutral-500 mb-4">
                                Recuerda llegar temprano el día de las elecciones. Tu participación es fundamental para la democracia.
                            </p>

                            <button
                                onClick={() => setShowMesaModal(false)}
                                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition"
                            >
                                Entendido
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
}
