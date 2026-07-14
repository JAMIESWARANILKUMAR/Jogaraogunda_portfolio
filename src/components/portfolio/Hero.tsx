import { motion } from "framer-motion";
import { Scene3D } from "./Scene3D";
import { PROFILE, STATS } from "@/lib/portfolio-data";
import profileImg from "@/assets/profile.jpg";
import { ArrowDown, Mail, Linkedin, GraduationCap } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-24 sm:pt-28 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.28_0.05_260/0.6),transparent_60%)]" />
      <Scene3D />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-40" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-20 sm:px-6 md:gap-12 md:pb-24 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-primary"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Ph.D. · Applied Mathematics · Since {PROFILE.since}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-display text-[clamp(2.4rem,8vw,5.5rem)] font-medium leading-[1.05] text-foreground"
          >
            Dr. Jogarao
            <br />
            <span className="text-gradient-gold italic">Gunda.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#research"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.82_0.13_82/0.8)] transition hover:translate-y-[-2px] hover:shadow-[0_18px_60px_-10px_oklch(0.82_0.13_82/0.9)]"
            >
              Explore Research
              <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/60 hover:text-primary"
            >
              <Mail size={16} /> Get in touch
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-3 text-sm font-semibold text-foreground transition hover:border-primary/60 hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {STATS.map((s, i) => (
              <div key={s.label} className="relative">
                <div className="absolute -left-3 top-1 h-8 w-px bg-gradient-to-b from-primary/60 to-transparent" />
                <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="mt-1 font-display text-3xl font-medium text-foreground md:text-4xl">
                  <span className="text-gradient-gold">{s.value}</span>
                </dd>
                {i < STATS.length - 1 && (
                  <span className="pointer-events-none absolute right-0 top-0 hidden h-full w-px bg-border sm:block" />
                )}
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
          style={{ perspective: 1200 }}
        >
          <div className="animate-float-slow">
            <div className="relative rounded-[2rem] p-1.5 [background:conic-gradient(from_140deg,oklch(0.82_0.13_82),oklch(0.55_0.15_40),oklch(0.4_0.06_260),oklch(0.82_0.13_82))]">
              <div className="glass-panel overflow-hidden rounded-[1.85rem]">
                <img
                  src={profileImg}
                  alt="Dr. Jogarao Gunda, Associate Professor of Mathematics at AITAM Tekkali"
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                />
                <div className="border-t border-border/50 bg-background/60 p-5 backdrop-blur">
                  <p className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-primary">
                    <GraduationCap size={14} /> AITAM · Tekkali
                  </p>
                  <p className="mt-2 font-display text-lg text-foreground">
                    Associate Professor
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Department of BS&amp;H (Mathematics)
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -right-6 -top-6 hidden rounded-2xl border border-primary/30 bg-background/80 px-4 py-3 text-xs font-medium text-primary backdrop-blur md:block">
              Scopus Q2 · 2025
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-background/80 px-4 py-3 text-xs text-muted-foreground backdrop-blur md:block">
              ORCID <span className="text-foreground">0000-0002-9008-7183</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-muted-foreground hover:text-primary"
      >
        Scroll
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-primary to-transparent" />
      </motion.a>
    </section>
  );
}