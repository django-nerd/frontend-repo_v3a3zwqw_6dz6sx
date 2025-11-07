import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AuthCard from "./components/AuthCard";
import FloatingDecor from "./components/FloatingDecor";

export default function App() {
  const [tab, setTab] = useState("login");

  useEffect(() => {
    // Inject keyframes for floating animations
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-12px); }
        100% { transform: translateY(0px); }
      }
      @keyframes float-slow {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
        100% { transform: translateY(0px); }
      }
      .animate-float { animation: float 6s ease-in-out infinite; }
      .animate-float-delay { animation: float 7.5s ease-in-out 0.6s infinite; }
      .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Header activeTab={tab} onTabChange={setTab} />
      <Hero />

      <main className="relative">
        <FloatingDecor />
        <div className="mx-auto max-w-6xl px-4 -mt-24 pb-20">
          <AuthCard mode={tab} onSwitch={setTab} />
        </div>
      </main>

      <footer className="relative border-t border-white/10 bg-black/60">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Nebula Access. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
