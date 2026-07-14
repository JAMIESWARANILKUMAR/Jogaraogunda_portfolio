import { useState } from "react";
import { PUBLICATIONS } from "@/lib/portfolio-data";
import { Reveal, SectionHeader } from "./Reveal";
import { ExternalLink, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FILTERS = ["All", "2025", "2024", "2022", "2020", "2018", "2017"];

export function Publications() {
  const [f, setF] = useState<string>("All");
  const list = f === "All" ? PUBLICATIONS : PUBLICATIONS.filter((p) => String(p.year) === f);

  return (
    <section id="research" className="relative py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Research"
          title="Selected publications in algebra, lattices & fuzzy structures."
          intro="Twelve peer-reviewed papers in Scopus- and Web of Science-indexed journals, plus book chapters and international conferences."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {FILTERS.map((tag) => (
            <button
              key={tag}
              onClick={() => setF(tag)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition ${
                f === tag
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-primary"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div layout className="grid gap-5 md:grid-cols-2">
            {list.map((p, i) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_20px_60px_-20px_oklch(0.82_0.13_82/0.4)]"
              >
                <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-4">
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {p.tier}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                </div>
                <h3 className="mt-4 font-display text-lg leading-snug text-foreground group-hover:text-primary">
                  {p.title}
                </h3>
                <p className="mt-2 flex items-start gap-2 text-sm italic text-muted-foreground">
                  <FileText size={14} className="mt-0.5 shrink-0 text-primary/70" />
                  {p.venue}
                </p>
                {p.doi && (
                  <a
                    href={`https://doi.org/${p.doi}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary/90 hover:text-primary"
                  >
                    DOI: {p.doi}
                    <ExternalLink size={12} />
                  </a>
                )}
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}