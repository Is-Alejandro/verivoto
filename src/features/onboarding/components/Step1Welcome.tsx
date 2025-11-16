import { useState } from "react";
import VeriVotoBanner from "../../../assets/images/VeriVotoBanner.png";
import usersData from "../../../data/usersData.json";

interface Step1Props {
  onComplete: (data: { dni: string; age: string; userData: any }) => void;
}

export default function Step1Welcome({ onComplete }: Step1Props) {
  const [dni, setDni] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    if (dni.length === 8) {
      setLoading(true);
      setError("");

      // Simular delay de API
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Buscar usuario en la base de datos
      const user = usersData.find((u) => u.dni === dni);

      if (user) {
        // Guardar datos del usuario en localStorage
        localStorage.setItem("currentUser", JSON.stringify(user));
        
        onComplete({ 
          dni, 
          age: user.edad.toString(), 
          userData: user 
        });
      } else {
        setError("DNI no encontrado. Por favor verifica el número ingresado.");
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-700 flex flex-col">
      {/* Header con imagen */}
      <div className="relative h-56 overflow-hidden bg-blue-700">
        <img
          src={VeriVotoBanner}
          alt="VeriVoto Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="flex-1 bg-white rounded-t-3xl -mt-6 px-6 py-8">
        <h1 className="text-2xl font-bold text-neutral-900 mt-2">
          Bienvenido(a) a
        </h1>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4" style={{
          color: '#103569'
        }}>
          VeriVoto
        </h2>

        <p className="text-neutral-600 text-sm mb-8">
          Personaliza tu experiencia para recibir información relevante para ti
          y tu comunidad.
        </p>

        {/* Confirma tu identidad */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-5 mb-6">
          <h3 className="font-bold text-neutral-900 mb-2">
            Confirma tu identidad
          </h3>
          <p className="text-sm text-neutral-600 mb-4">
            Ingresa tu DNI para conocer tu región de votación o selecciónala
            manualmente.
          </p>

          <label className="block mb-2 text-sm font-medium text-neutral-900">
            Número de DNI
          </label>
          <input
            type="text"
            placeholder="Ingresa los 8 dígitos"
            maxLength={8}
            value={dni}
            onChange={(e) => {
              setDni(e.target.value.replace(/\D/g, ""));
              setError("");
            }}
            className={`w-full px-4 py-3 border ${
              error ? "border-red-500" : "border-neutral-300"
            } rounded-lg mb-3 focus:outline-none focus:ring-2 ${
              error ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />

          {error && (
            <p className="text-red-600 text-sm mb-3">{error}</p>
          )}

          <p className="text-xs text-neutral-500">
            DNIs de ejemplo (8 dígitos): 12345678, 87654321, 45678912, 78945612, 11111111
          </p>
        </div>

        {/* Botón Continuar */}
        <button
          onClick={handleContinue}
          disabled={dni.length !== 8 || loading}
          className="w-full bg-red-600 hover:bg-red-700 disabled:bg-neutral-300 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-xl transition"
        >
          {loading ? "Validando..." : "Continuar"}
        </button>
      </div>
    </div>
  );
}
