export default function FloatingDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0">
      {/* subtle starfield */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.08),transparent_60%)]" />

      {/* floating orbs */}
      <div className="absolute left-10 top-16 h-24 w-24 rounded-full bg-cyan-400/20 blur-2xl animate-float-slow" />
      <div className="absolute right-16 top-24 h-32 w-32 rounded-full bg-fuchsia-400/20 blur-2xl animate-float" />
      <div className="absolute left-1/2 bottom-10 -translate-x-1/2 h-28 w-28 rounded-full bg-indigo-400/20 blur-2xl animate-float-delay" />

      {/* soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
    </div>
  );
}

/* Tailwind keyframes via arbitrary values applied in index.css are not available here,
   so we use inline style tags in App to inject keyframes. */
