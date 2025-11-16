import { Bell, Info, Accessibility, Lightbulb } from "lucide-react";

interface HeaderProps {
  name: string;
}

export default function Header({ name }: HeaderProps) {
  return (
    <header className="h-[60px] w-full bg-white shadow-sm flex items-center justify-between px-4 sticky top-0 z-50">
      
      {/* Usuario */}
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-600 font-semibold text-sm">
            {name?.charAt(0).toUpperCase()}
          </span>
        </div>

        <p className="font-medium text-gray-800 text-sm">
          {name}
        </p>
      </div>

      {/* Iconos de acciones */}
      <div className="flex items-center gap-5 text-gray-600">
        <div className="flex flex-col items-center text-xs">
          <Lightbulb size={20} strokeWidth={1.6} className="text-yellow-400" />
          <span className="text-[10px] text-gray-500">Aprende</span>
        </div>

        <Accessibility size={22} strokeWidth={1.7} />
        <Info size={22} strokeWidth={1.7} />
        <Bell size={22} strokeWidth={1.7} />
      </div>

    </header>
  );
}
