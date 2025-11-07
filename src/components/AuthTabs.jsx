import { useState } from "react";

export default function AuthTabs({ onTabChange }) {
  const [active, setActive] = useState("login");

  const tabs = [
    { id: "login", label: "Login" },
    { id: "register", label: "Register" },
  ];

  function handleClick(id) {
    setActive(id);
    onTabChange?.(id);
  }

  return (
    <div className="grid grid-cols-2 rounded-xl bg-gray-100 p-1 text-sm font-medium mb-6">
      {tabs.map((t) => (
        <button
          key={t.id}
          onClick={() => handleClick(t.id)}
          className={`py-2.5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 ${
            active === t.id
              ? "bg-white shadow-sm text-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
          aria-pressed={active === t.id}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
