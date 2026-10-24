export default function DemoBanner() {
  return (
    <aside
      aria-label="Demonstration website notice"
      className="bg-espresso text-caramel-light border-b border-caramel/20 py-2 px-4 text-xs relative z-[60] text-center"
      style={{ fontFamily: "var(--font-lato), sans-serif" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <span className="inline-flex items-center gap-1 font-semibold text-white tracking-wide uppercase text-[11px] bg-terracotta/80 px-2 py-0.5 rounded">
          Portfolio Demo
        </span>
        <span className="text-white/80">
          This is a portfolio demonstration project. All business information, prices, and images are fictional samples.
        </span>
      </div>
    </aside>
  );
}
