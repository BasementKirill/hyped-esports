import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const teams = [
  {
    game: "Counter-Strike 2",
    tag: "CS2",
    roster: "5 Players",
    status: "Active",
    accent: "#f5cb5c",
  },
  {
    game: "Valorant",
    tag: "VAL",
    roster: "6 Players",
    status: "Active",
    accent: "#cfdbd5",
  },
  {
    game: "League of Legends",
    tag: "LoL",
    roster: "5 Players",
    status: "Active",
    accent: "#e8eddf",
  },
  {
    game: "Rocket League",
    tag: "RL",
    roster: "3 Players",
    status: "Recruiting",
    accent: "#f5cb5c",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function TeamsSection() {
  return (
    <section id="teams" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <Badge variant="secondary" className="mb-4">
              Our Rosters
            </Badge>
            <h2 className="font-display text-5xl uppercase tracking-wide text-hyped-cream md:text-6xl">
              Teams
            </h2>
          </div>
          <p className="max-w-md text-hyped-sage">
            World-class talent across the most competitive titles. Each roster
            is built to win — backed by elite coaching and infrastructure.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {teams.map((team) => (
            <motion.div key={team.tag} variants={item}>
              <Card className="group relative h-full overflow-hidden hover:border-hyped-gold/30 hover:-translate-y-1">
                <div
                  className="absolute top-0 left-0 h-1 w-full transition-all duration-500 group-hover:h-1.5"
                  style={{ backgroundColor: team.accent }}
                />
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge
                      variant="outline"
                      className="font-display text-lg tracking-wider"
                    >
                      {team.tag}
                    </Badge>
                    <Badge
                      variant={team.status === "Active" ? "default" : "secondary"}
                      className="text-[10px]"
                    >
                      {team.status}
                    </Badge>
                  </div>
                  <CardTitle className="mt-4">{team.game}</CardTitle>
                  <CardDescription>{team.roster}</CardDescription>
                </CardHeader>
                <CardContent>
                  <button
                    type="button"
                    className="flex items-center gap-2 text-sm font-medium text-hyped-gold opacity-0 transition-all group-hover:opacity-100"
                  >
                    View Roster
                    <ExternalLink className="h-3.5 w-3.5" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
