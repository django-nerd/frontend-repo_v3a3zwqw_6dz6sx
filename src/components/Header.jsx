import { LogIn, UserPlus } from "lucide-react";

export default function Header({ activeTab, onTabChange }) {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-400 via-cyan-300 to-indigo-400 shadow-md shadow-cyan-500/30" />
          <span className="text-white font-semibold tracking-tight text-lg">Nebula Access</span>
        </div>
        <nav className="flex items-center gap-2">
          <button
            onClick={() => onTabChange("login")}
            className={`group inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === "login"
                ? "bg-white text-black"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
            aria-pressed={activeTab === "login"}
          >
            <LogIn className="h-4 w-4" />
            <span>Login</span>
          </button>
          <button
            onClick={() => onTabChange("register")}
            className={`group inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === "register"
                ? "bg-white text-black"
                : "text-white/80 hover:text-white hover:bg-white/10"
            }`}
            aria-pressed={activeTab === "register"}
          >
            <UserPlus className="h-4 w-4" />
            <span>Register</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
