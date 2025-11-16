import Header from "./Header";
import BottomNav from "../ui/BottomNav";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen w-full bg-[#F5F7FA] flex flex-col">
      <Header />

      <main className="flex-1 overflow-y-auto px-4 py-3">
        <Outlet />
      </main>

      <BottomNav />
    </div>
  );
}
