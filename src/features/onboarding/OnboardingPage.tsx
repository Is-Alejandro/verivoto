import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Step1Welcome from "./components/Step1Welcome";
import Step2Preferences from "./components/Step2Preferences";
import { CheckCircle } from "lucide-react";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
  const [showReturnModal, setShowReturnModal] = useState(false);
  const [userData, setUserData] = useState<any>(null);
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(false);
  const [formData, setFormData] = useState({
    dni: "",
    age: "",
    topics: [] as string[],
    accessibility: {
      textReader: false,
      seniorMode: false,
      nativeLanguage: false,
      selectedLanguage: "",
    },
  });
  const navigate = useNavigate();

  const handleStep1Complete = (data: { dni: string; age: string; userData: any }) => {
    setFormData({ ...formData, dni: data.dni, age: data.age });
    setUserData(data.userData);

    // Si el usuario ya completó onboarding, mostrar modal
    if (data.userData.hasCompletedOnboarding) {
      setShowReturnModal(true);
      setIsFirstTimeUser(false);
    } else {
      // Es un usuario nuevo que nunca ha hecho onboarding
      setIsFirstTimeUser(true);
      setStep(2);
    }
  };

  const handleContinueToHome = () => {
    // Guardar que completó onboarding
    localStorage.setItem("onboardingCompleted", "true");
    
    // Navegar al home
    navigate("/");
  };

  const handleGoToPreferences = () => {
    setShowReturnModal(false);
    setIsFirstTimeUser(false); // Usuario recurrente actualizando preferencias
    setStep(2);
  };

  const handleStep2Complete = (data: {
    accessibility: {
      textReader: boolean;
      seniorMode: boolean;
      nativeLanguage: boolean;
      selectedLanguage: string;
    };
  }) => {
    const finalData = { ...formData, ...data };
    
    // Guardar en localStorage
    localStorage.setItem("onboardingCompleted", "true");
    localStorage.setItem("userPreferences", JSON.stringify(finalData));
    
    // Actualizar usuario para marcar onboarding como completado
    if (userData) {
      const updatedUser = { ...userData, hasCompletedOnboarding: true };
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    }
    
    // Solo mostrar la guía si es un usuario nuevo (primera vez)
    if (isFirstTimeUser) {
      navigate("/app-guide");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {step === 1 && <Step1Welcome onComplete={handleStep1Complete} />}
      {step === 2 && (
        <Step2Preferences
          onComplete={handleStep2Complete}
          onBack={() => setStep(1)}
        />
      )}

      {/* Modal para usuarios que ya completaron onboarding */}
      {showReturnModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-6">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-100 rounded-full p-4 mb-4">
                <CheckCircle size={48} className="text-green-600" />
              </div>
              
              <h2 className="text-xl font-bold text-neutral-900 mb-2">
                ¡Bienvenido de vuelta!
              </h2>
              
              <p className="text-sm text-neutral-600 mb-2">
                Hola {userData?.nombre}, vemos que ya completaste tu configuración inicial.
              </p>
              
              <p className="text-sm text-neutral-600 mb-6">
                ¿Deseas actualizar tus preferencias o ir directamente al inicio?
              </p>

              <div className="w-full space-y-3">
                <button
                  onClick={handleContinueToHome}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
                >
                  Ir al Inicio
                </button>
                
                <button
                  onClick={handleGoToPreferences}
                  className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 font-semibold py-3 rounded-xl transition"
                >
                  Actualizar Preferencias
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
