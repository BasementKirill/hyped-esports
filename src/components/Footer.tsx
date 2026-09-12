import { motion } from "motion/react";
import { Instagram, Twitch, Twitter, Youtube } from "lucide-react";

const socials = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Twitch, label: "Twitch", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

const footerLinks = [
  { label: "Teams", href: "#teams" },
  { label: "About", href: "#about" },
  { label: "Partners", href: "#partners" },
  { label: "Events", href: "#events" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-hyped-sage/10 bg-hyped-charcoal/20 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-hyped-gold/40 bg-hyped-charcoal">
                <span className="font-display text-lg text-hyped-gold">H</span>
              </div>
              <span className="font-display text-2xl tracking-[0.2em] text-hyped-cream">
                HYPED
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-hyped-sage">
              Elite esports organization. Compete at the highest level. Join
              the movement.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-hyped-cream">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-hyped-sage transition-colors hover:text-hyped-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-hyped-cream">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-hyped-sage/20 text-hyped-sage transition-colors hover:border-hyped-gold/40 hover:text-hyped-gold"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-hyped-sage/10 pt-8 sm:flex-row">
          <p className="text-xs text-hyped-sage/50">
            &copy; {new Date().getFullYear()} HYPED Esports. All rights
            reserved.
          </p>
          <p className="font-display text-sm tracking-[0.3em] text-hyped-gold/40">
            GET HYPED
          </p>
        </div>
      </div>
    </footer>
  );
}
