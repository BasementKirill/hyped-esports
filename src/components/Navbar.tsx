import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Teams", href: "#teams" },
  { label: "About", href: "#about" },
  { label: "Partners", href: "#partners" },
  { label: "Events", href: "#events" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass border-b border-hyped-sage/10 py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        <a href="#" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-hyped-gold/40 bg-hyped-charcoal transition-colors group-hover:border-hyped-gold">
            <span className="font-display text-lg text-hyped-gold">H</span>
            <div className="absolute -inset-0.5 rounded-lg bg-hyped-gold/20 opacity-0 blur transition-opacity group-hover:opacity-100" />
          </div>
          <span className="font-display text-2xl tracking-[0.2em] text-hyped-cream">
            HYPED
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
            >
              <a
                href={link.href}
                className="relative text-sm font-medium uppercase tracking-widest text-hyped-sage transition-colors hover:text-hyped-gold"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-hyped-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="ghost" size="sm">
            Shop
          </Button>
          <Button size="sm">Join Us</Button>
        </div>

        <button
          type="button"
          className="md:hidden text-hyped-cream"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass border-t border-hyped-sage/10 md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium uppercase tracking-widest text-hyped-sage hover:text-hyped-gold"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 pt-2">
                <Button variant="ghost" size="sm" className="flex-1">
                  Shop
                </Button>
                <Button size="sm" className="flex-1">
                  Join Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
