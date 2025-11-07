import { Rocket } from "lucide-react";

export default function BrandHeader() {
  return (
    <div className="flex items-center justify-center gap-3 mb-8">
      <div className="p-2.5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-200/50">
        <Rocket className="h-6 w-6" />
      </div>
      <div className="text-center">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">Welcome to Vibe</h1>
        <p className="text-sm text-gray-500">Sign in to continue or create a new account</p>
      </div>
    </div>
  );
}
