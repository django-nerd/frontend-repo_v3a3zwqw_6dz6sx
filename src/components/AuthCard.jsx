import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

function Input({ label, type = "text", icon: Icon, value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="text-sm text-white/80">{label}</span>
      <div className="mt-1.5 flex items-center gap-2 rounded-xl bg-white/5 ring-1 ring-white/10 focus-within:ring-2 focus-within:ring-cyan-400 px-3 py-2">
        {Icon && <Icon className="h-4 w-4 text-white/70" />}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-white placeholder:text-white/40"
        />
      </div>
    </label>
  );
}

function PasswordInput({ label, value, onChange, placeholder }) {
  const [show, setShow] = useState(false);
  return (
    <label className="block">
      <span className="text-sm text-white/80">{label}</span>
      <div className="mt-1.5 flex items-center gap-2 rounded-xl bg-white/5 ring-1 ring-white/10 focus-within:ring-2 focus-within:ring-fuchsia-400 px-3 py-2">
        <Lock className="h-4 w-4 text-white/70" />
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-white placeholder:text-white/40"
        />
        <button type="button" onClick={() => setShow((s) => !s)} className="text-white/70 hover:text-white">
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
    </label>
  );
}

export default function AuthCard({ mode = "login", onSwitch }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Demo-only interaction (no backend yet). Replace with API calls later.
    await new Promise((r) => setTimeout(r, 900));

    setLoading(false);
    setMessage(
      mode === "login" ? "Welcome back! You are logged in." : "Account created successfully!"
    );
  };

  return (
    <div className="relative w-full max-w-md mx-auto -mt-16">
      {/* Floating decorative elements */}
      <div className="pointer-events-none absolute -inset-8">
        <div className="absolute -top-6 -left-6 h-28 w-28 bg-cyan-400/20 blur-2xl rounded-full animate-pulse" />
        <div className="absolute -bottom-8 -right-6 h-32 w-32 bg-fuchsia-400/20 blur-2xl rounded-full animate-ping" />
        <div className="absolute top-12 -right-10 h-24 w-24 bg-indigo-400/20 blur-2xl rounded-full animate-bounce [animation-duration:4s]" />
      </div>

      <form
        onSubmit={onSubmit}
        className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 md:p-8 shadow-2xl shadow-black/40"
      >
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white">
            {mode === "login" ? "Sign in" : "Create account"}
          </h2>
          <p className="text-white/70 text-sm mt-1">
            {mode === "login" ? "Enter your details to continue." : "It only takes a minute."}
          </p>
        </div>

        {mode === "register" && (
          <div className="mb-4">
            <Input
              label="Full name"
              icon={User}
              value={name}
              onChange={setName}
              placeholder="Jane Doe"
            />
          </div>
        )}

        <div className="mb-4">
          <Input
            label="Email address"
            icon={Mail}
            value={email}
            onChange={setEmail}
            placeholder="you@example.com"
            type="email"
          />
        </div>

        <div className="mb-6">
          <PasswordInput
            label="Password"
            value={password}
            onChange={setPassword}
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-indigo-400 text-black font-semibold py-2.5 shadow-lg shadow-cyan-500/30 hover:shadow-fuchsia-500/30 transition-all disabled:opacity-60"
        >
          {loading ? "Please wait…" : mode === "login" ? "Sign in" : "Create account"}
        </button>

        <p className="mt-4 text-center text-white/70 text-sm">
          {mode === "login" ? (
            <>
              New here?{" "}
              <button type="button" onClick={() => onSwitch("register")} className="text-white hover:underline">
                Create an account
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button type="button" onClick={() => onSwitch("login")} className="text-white hover:underline">
                Sign in
              </button>
            </>
          )}
        </p>

        {message && (
          <div className="mt-4 rounded-lg bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-sm px-3 py-2">
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
