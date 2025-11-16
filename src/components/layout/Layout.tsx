import { ReactNode } from "react";
import Header from "./Header";
import BottomNav from "../ui/BottomNav";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="min-h-screen w-full bg-[#F5F7FA] flex flex-col">

            {/* Header */}
            <Header name="Mauro Lázaro" />

            {/* Contenido principal */}
            <main className="flex-1 overflow-y-auto px-4 py-3">
                {children}
            </main>

            {/* Barra inferior (la haremos después) */}
            <nav className="h-[70px] w-full bg-white shadow-[0_-2px_8px_rgba(0,0,0,0.08)] flex items-center justify-around">
                {/* Aquí irán los botones del menú inferior */}
            </nav>

            <nav>
                <BottomNav />
            </nav>
        </div>
    );
}
