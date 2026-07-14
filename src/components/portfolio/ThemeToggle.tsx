import { motion } from "framer-motion";
import { Moon, Palette, Sparkles } from "lucide-react";
import { useTheme, type ThemeMode } from "./ThemeProvider";

const OPTIONS: { key: ThemeMode; label: string; icon: React.ReactNode }[] = [
  { key: "dark", label: "Dark mode", icon: <Moon size={14} /> },
  { key: "colorful", label: "Vivid mode", icon: <Sparkles size={14} /> },
  { key: "professional", label: "Professional mode", icon: <Palette size={14} /> },
];

export function ThemeToggle() {
  const { mode, setMode } = useTheme();
  return (
    <div
      role="radiogroup"
      aria-label="Color mode"
      className="relative inline-flex items-center gap-0.5 rounded-full border border-border bg-background/60 p-1 backdrop-blur-md"
    >
      {OPTIONS.map((o) => {
        const on = mode === o.key;
        return (
          <button
            key={o.key}
            role="radio"
            aria-checked={on}
            aria-label={o.label}
            title={o.label}
            onClick={() => setMode(o.key)}
            className="group relative grid h-8 w-8 place-items-center rounded-full outline-none transition"
          >
            {on && (
              <motion.span
                layoutId="theme-pill"
                className="absolute inset-0 -z-10 rounded-full bg-[linear-gradient(135deg,var(--gold-soft),var(--gold),var(--accent))] shadow-[0_10px_24px_-10px_oklch(0.82_0.13_82/0.9)]"
                transition={{ type: "spring", stiffness: 420, damping: 32 }}
              />
            )}
            <motion.span
              animate={on ? { rotate: [0, -12, 12, 0], scale: 1.05 } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={on ? "text-primary-foreground" : "text-muted-foreground group-hover:text-primary"}
            >
              {o.icon}
            </motion.span>
            {!on && (
              <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 ring-1 ring-primary/40 transition-opacity duration-200 group-hover:opacity-100" />
            )}
          </button>
        );
      })}
    </div>
  );
}