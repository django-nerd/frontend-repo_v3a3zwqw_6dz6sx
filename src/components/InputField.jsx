export default function InputField({ label, type = "text", name, value, onChange, placeholder, autoComplete }) {
  const id = name || label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-gray-900 shadow-sm outline-none ring-0 transition placeholder:text-gray-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200"
      />
    </div>
  );
}
