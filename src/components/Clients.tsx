const clients = ['TechVentura', 'BeautyNest', 'DataPulse', 'GreenPath', 'SwiftPay', 'NovaTech', 'PixelForge', 'CloudSync'];

export default function Clients() {
  const doubled = [...clients, ...clients];
  return (
    <section className="relative overflow-hidden border-y border-kamui-800/30 py-8 sm:py-10">
      <div className="mb-6 text-center text-[10px] font-semibold uppercase tracking-[0.35em] text-kamui-700">
        Dipercaya oleh perusahaan terkemuka • 信頼される企業
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#0d0515] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#0d0515] to-transparent" />
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((c, i) => (
            <span key={i} className="mx-8 sm:mx-12 inline-block font-display text-lg sm:text-xl font-bold text-kamui-800 hover:text-kamui-400 transition-colors duration-500 cursor-default select-none">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
