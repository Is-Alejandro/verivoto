import { ReactNode } from "react";
import Header from "./Header";
import BottomNav from "../ui/BottomNav";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen w-full bg-[#F5F7FA] flex flex-col">
      <Header />

      <main className="flex-1 overflow-y-auto px-4 py-3">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
