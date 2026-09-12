import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const events = [
  {
    date: "Sep 28, 2026",
    title: "VCT Champions — Group Stage",
    location: "Los Angeles, USA",
    game: "Valorant",
  },
  {
    date: "Oct 12, 2026",
    title: "IEM Cologne — Playoffs",
    location: "Cologne, Germany",
    game: "CS2",
  },
  {
    date: "Nov 02, 2026",
    title: "Worlds 2026 — Swiss Stage",
    location: "London, UK",
    game: "LoL",
  },
];

export function EventsSection() {
  return (
    <section id="events" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <Badge variant="secondary" className="mb-4">
            Upcoming
          </Badge>
          <h2 className="font-display text-5xl uppercase tracking-wide text-hyped-cream md:text-6xl">
            Events
          </h2>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-4">
          {events.map((event, i) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass group flex flex-col gap-4 rounded-xl p-6 transition-all hover:border-hyped-gold/20 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-lg bg-hyped-gold/10 text-hyped-gold">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <Badge variant="outline" className="mb-2 text-[10px]">
                    {event.game}
                  </Badge>
                  <h3 className="font-display text-xl uppercase tracking-wide text-hyped-cream">
                    {event.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-1.5 text-sm text-hyped-sage">
                    <MapPin className="h-3.5 w-3.5" />
                    {event.location}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:flex-col sm:items-end">
                <span className="text-sm font-medium text-hyped-gold">
                  {event.date}
                </span>
                <Button variant="ghost" size="sm">
                  Details
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
