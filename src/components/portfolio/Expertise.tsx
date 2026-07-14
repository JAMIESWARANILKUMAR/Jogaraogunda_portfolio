import { useMemo, useRef } from "react";
import { getRouteApi, useNavigate } from "@tanstack/react-router";
import { INTERESTS, SKILLS, CERTIFICATIONS } from "@/lib/portfolio-data";
import { Reveal, SectionHeader } from "./Reveal";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Sparkles,
  Award,
  Sigma,
  FunctionSquare,
  Binary,
  Braces,
  Search,
  X,
  LayoutGrid,
} from "lucide-react";

type SubjectGroup = {
  key: string;
  label: string;
  icon: React.ReactNode;
  items: string[];
};

const SUBJECT_GROUPS: SubjectGroup[] = [
  {
    key: "algebra",
    label: "Algebra & Lattices",
    icon: <Sigma size={14} />,
    items: ["Almost Distributive Lattices", "Modern Algebra", "Fuzzy Set Theory"],
  },
  {
    key: "discrete",
    label: "Discrete Structures",
    icon: <Binary size={14} />,
    items: ["Discrete Mathematics", "Graph Theory", "Mathematical Foundation of CS"],
  },
  {
    key: "analysis",
    label: "Analysis & Methods",
    icon: <FunctionSquare size={14} />,
    items: [
      "Single & Several Variable Calculus",
      "Mathematical Methods",
      "Engineering Mathematics",
    ],
  },
  {
    key: "stats",
    label: "Statistics & Method",
    icon: <Braces size={14} />,
    items: ["Probability & Statistics", "Statistical Inference", "Research Methodology"],
  },
];

type FlatSubject = { name: string; group: SubjectGroup };
const ALL_SUBJECTS: FlatSubject[] = SUBJECT_GROUPS.flatMap((g) =>
  g.items.map((name) => ({ name, group: g })),
);

export function Expertise() {
  void INTERESTS; // catalogued into SUBJECT_GROUPS above
  return (
    <section id="expertise" className="relative py-16 md:py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_10%,oklch(0.82_0.13_82/0.08),transparent_55%),radial-gradient(ellipse_at_80%_90%,oklch(0.55_0.15_40/0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Expertise"
          title="Teaching areas, technical craft, and continuing education."
        />

        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Subject Areas — full width, filterable */}
          <Reveal>
            <SubjectExplorer />
          </Reveal>

          {/* Technical Craft */}
          <Reveal delay={0.1}>
            <div className="glass-panel relative overflow-hidden rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8">
              <GoldCorner />
              <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                <p className="text-[11px] uppercase tracking-[0.25em] text-primary sm:text-xs sm:tracking-[0.3em]">
                  — Technical Craft —
                </p>
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  PROFICIENCY
                </span>
              </div>

              <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 md:gap-x-8 md:gap-y-5">
                {SKILLS.map((s, i) => (
                  <SkillMeter key={s.name} name={s.name} level={s.level} idx={i} />
                ))}
              </div>
            </div>
          </Reveal>

          {/* Certifications — full width */}
          <Reveal delay={0.15}>
            <div className="glass-panel relative overflow-hidden rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8">
              <GoldCorner />
              <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
                <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary sm:text-xs sm:tracking-[0.3em]">
                  <Award size={14} /> Certifications & Continuing Education
                </p>
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  {CERTIFICATIONS.length} RECORDS
                </span>
              </div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {CERTIFICATIONS.map((c, i) => (
                  <li
                    key={c}
                    className="group relative flex min-w-0 gap-3 rounded-xl border border-border bg-background/40 p-3.5 text-[13px] leading-snug transition hover:-translate-y-0.5 hover:border-primary/50 sm:p-4 sm:text-sm"
                  >
                    <span className="shrink-0 font-mono text-[10px] text-primary/70">
                      0{i + 1}
                    </span>
                    <span className="min-w-0 break-words text-foreground/90 group-hover:text-foreground">
                      {c}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SkillMeter({ name, level, idx }: { name: string; level: number; idx: number }) {
  const reduce = useReducedMotion();
  return (
    <div className="group">
      <div className="mb-2 flex items-baseline justify-between text-xs">
        <span className="flex items-center gap-2 font-medium text-foreground">
          <span className="font-mono text-[10px] text-primary/60">
            {String(idx + 1).padStart(2, "0")}
          </span>
          {name}
        </span>
        <span className="font-mono text-[11px] text-primary">{level}%</span>
      </div>
      <div className="relative h-1.5 overflow-hidden rounded-full bg-border/60">
        <motion.div
          initial={reduce ? false : { width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.2, delay: 0.05 * idx, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full rounded-full bg-[linear-gradient(90deg,oklch(0.9_0.09_88),oklch(0.82_0.13_82),oklch(0.55_0.15_40))] shadow-[0_0_20px_-2px_oklch(0.82_0.13_82/0.7)]"
        >
          <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-r from-transparent to-white/20" />
        </motion.div>
        {/* Tick marks */}
        <div className="pointer-events-none absolute inset-0 flex justify-between px-[10%]">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="h-full w-px bg-background/50" />
          ))}
        </div>
      </div>
    </div>
  );
}

function GoldCorner() {
  return (
    <>
      <span className="pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-primary/50" />
      <span className="pointer-events-none absolute right-4 top-4 h-3 w-3 border-r border-t border-primary/50" />
      <span className="pointer-events-none absolute bottom-4 left-4 h-3 w-3 border-b border-l border-primary/50" />
      <span className="pointer-events-none absolute bottom-4 right-4 h-3 w-3 border-b border-r border-primary/50" />
    </>
  );
}

function SubjectExplorer() {
  const reduce = useReducedMotion();
  const routeApi = getRouteApi("/");
  const search = routeApi.useSearch();
  const navigate = useNavigate({ from: "/" });
  const active = search.cat || "all";
  const query = search.q || "";

  const setActive = (cat: string) =>
    navigate({
      search: (prev: { cat?: string; q?: string }) => ({ ...prev, cat }),
      replace: true,
      resetScroll: false,
    });
  const setQuery = (q: string) =>
    navigate({
      search: (prev: { cat?: string; q?: string }) => ({ ...prev, q }),
      replace: true,
      resetScroll: false,
    });

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_SUBJECTS.filter((s) => {
      const groupOk = active === "all" || s.group.key === active;
      const queryOk = !q || s.name.toLowerCase().includes(q);
      return groupOk && queryOk;
    });
  }, [active, query]);

  const tabs = [
    { key: "all", label: "All", icon: <LayoutGrid size={13} /> },
    ...SUBJECT_GROUPS.map((g) => ({ key: g.key, label: g.label, icon: g.icon })),
  ];

  const marqueeItems = [...ALL_SUBJECTS, ...ALL_SUBJECTS];

  return (
    <div className="glass-panel relative overflow-hidden rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8">
      <GoldCorner />

      {/* Header — flex column on mobile, row from md */}
      <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-primary sm:text-xs sm:tracking-[0.3em]">
            <Sparkles size={14} /> Subject Areas
          </p>
          <h3 className="mt-1 font-display text-lg leading-tight text-foreground sm:text-xl md:text-2xl">
            Explore teaching &amp; research domains
          </h3>
        </div>
        <div className="flex shrink-0 items-center gap-2 font-mono text-[10px] tracking-widest text-muted-foreground">
          <span className="grid h-6 min-w-6 shrink-0 place-items-center rounded-full border border-primary/40 bg-primary/10 px-2 text-primary">
            {filtered.length}
          </span>
          / {ALL_SUBJECTS.length} MATCHING
        </div>
      </div>

      {/* Controls — flex column on mobile, row from lg */}
      <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        {/* Filters — scrollable on mobile, wrap from sm */}
        <div className="flex w-full min-w-0 flex-nowrap gap-1.5 overflow-x-auto pb-1 sm:flex-wrap sm:gap-2 sm:overflow-visible sm:pb-0 [-ms-overflow-style:none] [scrollbar-width:none]">
          {tabs.map((t) => {
            const on = active === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`group relative inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2 py-1 text-[10px] font-medium transition sm:px-2.5 sm:py-1 sm:text-[11px] md:px-3 md:py-1.5 ${
                  on
                    ? "border-primary/70 text-primary-foreground"
                    : "border-border bg-background/40 text-foreground/80 hover:border-primary/60 hover:text-primary"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="subj-tab-bg"
                    className="absolute inset-0 -z-10 rounded-full bg-[linear-gradient(135deg,oklch(0.9_0.09_88),oklch(0.82_0.13_82),oklch(0.55_0.15_40))] shadow-[0_10px_30px_-10px_oklch(0.82_0.13_82/0.8)]"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className={on ? "text-primary-foreground" : ""}>{t.icon}</span>
                <span className="whitespace-nowrap">{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Search */}
        <div className="group relative w-full lg:w-72">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground transition group-focus-within:text-primary"
          />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search keywords…"
            className="w-full rounded-full border border-border bg-background/50 py-2 pl-9 pr-9 text-[12px] text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:text-primary"
              aria-label="Clear search"
            >
              <X size={13} />
            </button>
          )}
        </div>
      </div>

      {/* Grid with animated transitions — pure flex wrap */}
      <motion.ul
        layout
        className="flex flex-wrap gap-1.5 sm:gap-2 [perspective:1000px]"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((s, i) => (
            <TiltPill key={s.name} index={i} reduce={!!reduce}>
              <span className="text-primary/70 transition group-hover:text-primary">
                {s.group.icon}
              </span>
              {highlight(s.name, query)}
            </TiltPill>
          ))}
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.li
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground"
          >
            No subjects match “{query}”. Try clearing the filters.
          </motion.li>
        )}
      </motion.ul>

      {/* Right-to-left marquee ribbon */}
      <ParallaxMarquee items={marqueeItems} reduce={!!reduce} />
    </div>
  );
}

function TiltPill({
  children,
  index,
  reduce,
}: {
  children: React.ReactNode;
  index: number;
  reduce: boolean;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [10, -10]), {
    stiffness: 220,
    damping: 18,
  });
  const ry = useSpring(useTransform(mx, [-1, 1], [-14, 14]), {
    stiffness: 220,
    damping: 18,
  });
  const glareX = useTransform(mx, [-1, 1], ["0%", "100%"]);

  const onMove = (e: React.MouseEvent<HTMLLIElement>) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.li
      ref={ref}
      layout
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={reduce ? false : { opacity: 0, x: -36, rotateY: -18, filter: "blur(8px)" }}
      animate={{ opacity: 1, x: 0, rotateY: 0, filter: "blur(0px)" }}
      exit={{
        opacity: 0,
        x: -36,
        rotateY: -18,
        filter: "blur(8px)",
        transition: { duration: 0.22, ease: [0.4, 0, 1, 1] },
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 26,
        mass: 0.6,
        delay: Math.min(index * 0.02, 0.24),
      }}
      style={{
        rotateX: reduce ? 0 : rx,
        rotateY: reduce ? 0 : ry,
        transformStyle: "preserve-3d",
      }}
      className="group relative inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full border border-border bg-background/50 px-3 py-1.5 text-[11.5px] leading-snug text-foreground/85 transition-colors will-change-transform hover:border-primary/70 hover:bg-primary/10 hover:text-primary sm:px-3.5 sm:text-[12px]"
    >
      {/* specular glare */}
      <motion.span
        aria-hidden
        style={{ x: glareX }}
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 rounded-full bg-[radial-gradient(circle_at_center,oklch(1_0_0/0.35),transparent_60%)] opacity-0 mix-blend-overlay transition-opacity duration-200 group-hover:opacity-100"
      />
      {children}
    </motion.li>
  );
}

function ParallaxMarquee({
  items,
  reduce,
}: {
  items: FlatSubject[];
  reduce: boolean;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });
  // Extra parallax nudge layered on the constant marquee sweep
  const parallax = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const tilt = useSpring(useTransform(scrollYProgress, [0, 1], [6, -6]), {
    stiffness: 80,
    damping: 20,
  });

  return (
    <div ref={wrapRef} className="relative mt-8 border-t border-border/60 pt-6 [perspective:1400px]">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        — Keyword stream —
      </p>
      <motion.div
        style={{ rotateX: reduce ? 0 : tilt, transformStyle: "preserve-3d" }}
        className="group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
      >
        <motion.div style={{ x: reduce ? 0 : parallax }} className="w-full">
          <motion.div
            className="flex w-max gap-3 whitespace-nowrap"
            initial={{ x: "0%" }}
            animate={reduce ? undefined : { x: "-50%" }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {items.map((s, i) => (
              <span
                key={`${s.name}-${i}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3.5 py-1.5 text-[11px] text-foreground/75 shadow-[0_6px_18px_-12px_oklch(0_0_0/0.6)]"
              >
                <span className="h-1 w-1 rounded-full bg-primary/70" />
                {s.name}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function highlight(text: string, q: string) {
  const query = q.trim();
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <mark className="rounded bg-primary/25 px-0.5 text-primary">
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  );
}