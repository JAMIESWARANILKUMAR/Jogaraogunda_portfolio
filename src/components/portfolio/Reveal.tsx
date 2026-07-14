import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <Reveal>
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-primary/80">
          — {eyebrow} —
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-2xl font-medium text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">{intro}</p>
        </Reveal>
      )}
      <div className="gold-divider mx-auto mt-8 w-40" />
    </div>
  );
}