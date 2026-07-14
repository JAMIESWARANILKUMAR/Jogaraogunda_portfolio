import { PROFILE, EDUCATION, MEMBERSHIPS } from "@/lib/portfolio-data";
import { Reveal, SectionHeader } from "./Reveal";
import { BookOpen, Award, Users } from "lucide-react";
import { OrgLogo } from "./OrgLogo";

export function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="About"
          title="A mathematician devoted to structure, rigor, and mentorship."
          intro="Fourteen years across six institutions have shaped a teaching practice grounded in classical algebra and a research life that lives in the world of almost distributive lattices, filters, and fuzzy structures."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="glass-panel rounded-3xl p-8 md:p-10">
              <p className="text-lg leading-relaxed text-foreground/90">
                I am <span className="text-primary">Dr. Jogarao Gunda</span>, Associate
                Professor at {PROFILE.institution}. My doctoral work at GITAM (Deemed to be)
                University explored{" "}
                <em className="text-primary/90">weak relatively complemented almost distributive lattices</em>,
                a thread I've continued through twelve peer-reviewed publications in
                journals indexed by Scopus and Web of Science.
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Alongside research, I teach engineering mathematics, probability, statistics,
                discrete mathematics, and graph theory — and mentor two Ph.D. scholars. I
                believe abstract algebra is a tool for clarity, and clarity is the greatest
                gift a teacher can offer.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-3">
                <Fact icon={<BookOpen size={16} />} k="Domain" v="Applied Mathematics" />
                <Fact icon={<Users size={16} />} k="Guiding" v="2 Ph.D. Scholars" />
                <Fact icon={<Award size={16} />} k="Category" v="BC-D · Hindu" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border p-6 sm:p-8">
              <h3 className="text-xs uppercase tracking-[0.3em] text-primary/80">
                — Academic path —
              </h3>
              <ol className="mt-6 space-y-6">
                {EDUCATION.map((e) => (
                  <li key={e.deg} className="grid grid-cols-[auto_auto_1fr] items-start gap-4">
                    <div className="flex flex-col items-center">
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-primary/50 bg-primary/10 text-[11px] font-semibold text-primary">
                        {e.year}
                      </span>
                      <span className="mt-1 h-full w-px bg-border" />
                    </div>
                    <OrgLogo org={e.org} size={44} context={e.deg} />
                    <div className="pb-2">
                      <p className="font-display text-lg text-foreground">{e.deg}</p>
                      <p className="text-sm text-muted-foreground">{e.org}</p>
                      <p className="mt-1 text-xs uppercase tracking-wider text-primary/70">
                        {e.grade}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {MEMBERSHIPS.map((m) => (
              <div
                key={m}
                className="glass-panel flex items-start gap-3 rounded-2xl p-5 text-sm text-muted-foreground"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span className="text-foreground/90">{m}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Fact({ icon, k, v }: { icon: React.ReactNode; k: string; v: string }) {
  return (
    <div>
      <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {icon} {k}
      </p>
      <p className="mt-1 text-sm font-medium text-foreground">{v}</p>
    </div>
  );
}