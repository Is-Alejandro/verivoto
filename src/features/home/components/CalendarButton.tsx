import { CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CalendarButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/calendar")}
      className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition shadow-sm"
    >
      <CalendarDays size={18} />
      Ver calendario electoral
    </button>
  );
}
