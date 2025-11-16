import { CalendarDays } from "lucide-react";

export default function CalendarButton() {
  return (
    <button className="mt-4 w-full bg-blue-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 active:scale-95 transition shadow-sm">
      <CalendarDays size={18} />
      Ver calendario electoral
    </button>
  );
}
