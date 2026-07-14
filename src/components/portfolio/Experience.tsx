import { EXPERIENCE } from "@/lib/portfolio-data";
import { Reveal, SectionHeader } from "./Reveal";
import { Briefcase } from "lucide-react";
import { OrgLogo } from "./OrgLogo";

export function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.55_0.15_40/0.14),transparent_55%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Experience"
          title="Fourteen years, six institutions, one throughline."
          intro="A career built quietly, class by class, paper by paper — across coastal Andhra and Bengaluru."
        />
        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2 md:block" />
          <ol className="space-y-10 md:space-y-16">
            {EXPERIENCE.map((e, i) => (
              <Reveal key={e.from + e.org} delay={i * 0.05}>
                <li
                  className={`relative grid gap-6 md:grid-cols-2 md:gap-16 ${
                    i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className={`flex items-start gap-4 ${i % 2 === 1 ? "md:flex-row-reverse md:text-right" : "md:text-right md:justify-end"}`}>
                    <OrgLogo org={e.org} size={52} context={e.role} />
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
                        {e.from} — {e.to}
                      </p>
                      <h3 className="mt-2 font-display text-2xl text-foreground">{e.role}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{e.org}</p>
                      {e.detail && (
                        <p className="mt-2 text-xs italic text-muted-foreground">{e.detail}</p>
                      )}
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-2 top-4 hidden h-4 w-4 rounded-full border-2 border-primary bg-background md:left-[-42px] md:block" />
                    <div className="glass-panel rounded-2xl p-6">
                      <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                        <Briefcase size={14} className="text-primary" /> Position #{EXPERIENCE.length - i}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                        Delivered undergraduate & graduate courses in mathematics and statistics; contributed to curriculum design, mentorship, and institutional research culture.
                      </p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}