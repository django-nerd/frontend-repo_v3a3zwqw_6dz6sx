import { useState } from "react";
import InputField from "./InputField";
import { Loader2 } from "lucide-react";

export default function AuthForm({ mode = "login" }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const isRegister = mode === "register";

  function handleChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      // No backend yet: just simulate success UX
      await new Promise((r) => setTimeout(r, 900));
      setMessage(isRegister ? "Account created. You can log in now." : "Welcome back! You are logged in.");
    } catch (err) {
      setMessage("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isRegister && (
        <InputField
          label="Full Name"
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Jane Doe"
          autoComplete="name"
        />
      )}
      <InputField
        label="Email"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="jane@example.com"
        autoComplete="email"
      />
      <InputField
        label="Password"
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="••••••••"
        autoComplete={isRegister ? "new-password" : "current-password"}
      />

      <button
        type="submit"
        disabled={loading}
        className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-indigo-600 px-4 py-2.5 font-semibold text-white shadow-lg transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 disabled:opacity-70"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : isRegister ? (
          "Create account"
        ) : (
          "Sign in"
        )}
      </button>

      {message && (
        <p className="text-center text-sm text-green-600">{message}</p>
      )}

      {!isRegister && (
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600">
            <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
            Remember me
          </label>
          <button type="button" className="font-medium text-indigo-600 hover:text-indigo-700">
            Forgot password?
          </button>
        </div>
      )}
    </form>
  );
}
