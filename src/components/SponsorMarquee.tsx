import { motion } from "motion/react";

const sponsors = [
  "RAZER",
  "RED BULL",
  "INTEL",
  "HYPERX",
  "LOGITECH G",
  "ASUS ROG",
  "CORSAIR",
  "MONSTER",
  "SPONSOR",
  "PARTNER",
];

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const items = [...sponsors, ...sponsors];

  return (
    <div className="flex shrink-0 overflow-hidden">
      <motion.div
        className="flex shrink-0 items-center gap-16 px-8"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          x: {
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          },
        }}
      >
        {items.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="group flex shrink-0 items-center gap-4"
          >
            <div className="h-px w-8 bg-hyped-gold/30 transition-all group-hover:w-12 group-hover:bg-hyped-gold" />
            <span className="font-display text-2xl tracking-[0.15em] text-hyped-sage/40 transition-colors group-hover:text-hyped-gold/80 md:text-3xl">
              {name}
            </span>
            <div className="h-px w-8 bg-hyped-gold/30 transition-all group-hover:w-12 group-hover:bg-hyped-gold" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function SponsorMarquee() {
  return (
    <section id="partners" className="relative border-y border-hyped-sage/10 bg-hyped-charcoal/30 py-6">
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-hyped-dark to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-hyped-dark to-transparent" />

      <div className="mb-4 text-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-hyped-sage/50">
          Powered By
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <MarqueeTrack />
        <MarqueeTrack reverse />
      </div>
    </section>
  );
}
