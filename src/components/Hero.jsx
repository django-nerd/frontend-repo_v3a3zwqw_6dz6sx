import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for mood without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 h-full flex items-end">
        <div className="pb-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-indigo-400">Nebula Access</span>
          </h1>
          <p className="mt-3 md:mt-4 text-white/80 max-w-2xl">
            Sign in to continue or create a new account to explore a modern, immersive experience.
          </p>
        </div>
      </div>
    </section>
  );
}
