import { motion } from "motion/react";
import { ArrowRight, Play, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
  { value: "12+", label: "Titles" },
  { value: "8", label: "Pro Teams" },
  { value: "2M+", label: "Community" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-hyped-dark">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 50% at 50% -20%, #f5cb5c33, transparent),
              radial-gradient(ellipse 60% 40% at 80% 60%, #cfdbd522, transparent),
              radial-gradient(ellipse 50% 50% at 10% 80%, #33353388, transparent)
            `,
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(#cfdbd5 1px, transparent 1px),
              linear-gradient(90deg, #cfdbd5 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-hyped-gold/10 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-hyped-sage/10 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Diagonal accent stripe */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-0 h-full w-1/3 origin-right skew-x-[-12deg] translate-x-1/4 bg-gradient-to-b from-hyped-gold/5 via-hyped-gold/10 to-transparent"
      />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 pb-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left content */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge variant="default" className="mb-6 w-fit">
                <Trophy className="mr-1.5 h-3 w-3" />
                Season 2026 — Now Competing
              </Badge>
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[clamp(4rem,12vw,9rem)] leading-[0.85] tracking-tight text-hyped-cream"
              >
                GET
              </motion.h1>
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[clamp(4rem,12vw,9rem)] leading-[0.85] tracking-tight"
              >
                <span className="text-gradient-gold">HYPED</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="max-w-lg text-lg leading-relaxed text-hyped-sage"
            >
              Elite esports organization built for champions. We compete at the
              highest level across multiple titles — driven by passion,
              precision, and an unstoppable community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="group">
                Watch Live
                <Play className="h-4 w-4 transition-transform group-hover:scale-110" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                Our Teams
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-10 border-t border-hyped-sage/10 pt-8"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + i * 0.1 }}
                >
                  <div className="font-display text-4xl text-hyped-gold">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-hyped-sage">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right visual — logo placeholder + animated ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-md">
              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-hyped-gold/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-dashed border-hyped-sage/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />

              {/* Glow center */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-hyped-charcoal to-hyped-dark shadow-2xl">
                <div className="absolute inset-0 rounded-full bg-hyped-gold/5 animate-pulse-glow" />
              </div>

              {/* Logo placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex h-32 w-32 items-center justify-center rounded-2xl border-2 border-dashed border-hyped-gold/40 bg-hyped-charcoal/80"
                >
                  <span className="font-display text-5xl text-hyped-gold/60">
                    H
                  </span>
                </motion.div>
                <p className="mt-4 text-xs uppercase tracking-[0.3em] text-hyped-sage/60">
                  Logo Coming Soon
                </p>
              </div>

              {/* Corner accents */}
              {[0, 90, 180, 270].map((deg) => (
                <motion.div
                  key={deg}
                  className="absolute h-3 w-3 bg-hyped-gold"
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: `rotate(${deg}deg) translateY(-calc(50% + 180px))`,
                  }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: deg / 360,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-hyped-sage/50">
              Scroll
            </span>
            <div className="h-8 w-px bg-gradient-to-b from-hyped-gold/60 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
