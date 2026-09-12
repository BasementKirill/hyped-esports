import { motion } from "motion/react";
import { Target, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const pillars = [
  {
    icon: Target,
    title: "Competitive Excellence",
    description:
      "We invest in top-tier talent, analytics, and coaching to stay ahead of the meta.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Our fans fuel everything we do — from content to events, you're part of the team.",
  },
  {
    icon: Zap,
    title: "Relentless Drive",
    description:
      "Every scrim, every match, every moment — we push harder than anyone else.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-hyped-charcoal/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Badge variant="default" className="mb-6">
              About HYPED
            </Badge>
            <h2 className="font-display text-5xl uppercase leading-tight text-hyped-cream md:text-6xl">
              Built Different.
              <br />
              <span className="text-gradient-gold">Play Different.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-hyped-sage">
              HYPED is a next-generation esports organization founded on the
              belief that greatness isn't given — it's earned. From grassroots
              to global stages, we develop players, create unforgettable
              moments, and build a legacy that lasts.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-hyped-sage">
              Whether you're a fan, a partner, or a future champion — welcome
              to the movement.
            </p>
          </motion.div>

          <div className="flex flex-col gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass group flex gap-5 rounded-xl p-6 transition-all hover:border-hyped-gold/20"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-hyped-gold/10 text-hyped-gold transition-colors group-hover:bg-hyped-gold/20">
                  <pillar.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl uppercase tracking-wide text-hyped-cream">
                    {pillar.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-hyped-sage">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
