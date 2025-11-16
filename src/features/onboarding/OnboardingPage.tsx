import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Step1Welcome from "./components/Step1Welcome";
import Step2Preferences from "./components/Step2Preferences";

export default function OnboardingPage() {
  const [step, setStep] = useState(1);
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

  const handleStep1Complete = (data: { dni: string; age: string }) => {
    setFormData({ ...formData, ...data });
    setStep(2);
  };

  const handleStep2Complete = (data: {
    topics: string[];
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
    
    // Navegar al home
    navigate("/");
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
    </div>
  );
}
