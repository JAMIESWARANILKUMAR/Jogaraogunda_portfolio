import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { PROFILE, EXPERIENCE, EDUCATION } from "@/lib/portfolio-data";
import { Briefcase, BookOpen, GraduationCap, Award, Users, Activity, FileText } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: Blog,
  head: () => ({
    meta: [
      { title: `Blog & Comprehensive Profile — ${PROFILE.name}` },
      { name: "description", content: "Comprehensive professional profile and blog of Dr. Jogarao Gunda." },
      { name: "keywords", content: "Dr. Jogarao Gunda, Jogarao Gunda, Associate Professor, Applied Mathematics, AITAM Tekkali, Assistant Head of Training and Placement, Assistant HOD TPC, Almost Distributive Lattices, Fuzzy Set Theory, Discrete Mathematics, Graph Theory, Modern Algebra, Probability & Statistics, GITAM University, PhD Applied Mathematics, Research Methodology, Mathematical Methods, Single Variable Calculus, Several Variable Calculus, Mathematical Foundation of Computer Science, Elementary Statistics, Statistical Inference, Engineering Mathematics-1" },
    ],
  }),
});

function Blog() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />
      <Nav />
      <main className="mx-auto max-w-4xl px-4 pt-32 pb-20 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <section className="mb-16 rounded-2xl border border-white/10 bg-zinc-900/40 p-8 shadow-2xl backdrop-blur-md">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-white md:text-5xl">{PROFILE.name}</h1>
          <p className="text-lg font-medium text-primary">{PROFILE.title}</p>
          <p className="mt-4 text-zinc-400">
            Assistant Head of Training and Placement (Asst. HOD of TPC)<br />
            {PROFILE.department}<br />
            {PROFILE.institution}<br />
            {PROFILE.location}
          </p>
          
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-zinc-300">
            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-2 hover:text-primary"><div className="h-2 w-2 rounded-full bg-primary"></div> {PROFILE.email}</a>
            <a href="https://www.jogaraogunda.in" target="_blank" className="flex items-center gap-2 hover:text-primary"><div className="h-2 w-2 rounded-full bg-primary"></div> www.jogaraogunda.in</a>
            <span className="flex items-center gap-2"><div className="h-2 w-2 rounded-full bg-primary"></div> {PROFILE.phone}</span>
          </div>
        </section>

        {/* Academic Excellence */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <GraduationCap className="text-primary" size={28} />
            <h2 className="text-2xl font-bold text-white">Academic Excellence</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="rounded-xl border border-white/5 bg-zinc-900/30 p-5 transition-colors hover:bg-zinc-900/60">
                <h3 className="font-bold text-white">{edu.deg}</h3>
                <p className="mt-1 text-sm text-zinc-400">{edu.org}</p>
                <div className="mt-3 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-primary">
                  <span>{edu.year}</span>
                  <span>{edu.grade}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Overview */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <Briefcase className="text-primary" size={28} />
            <h2 className="text-2xl font-bold text-white">Professional Journey</h2>
          </div>
          <div className="relative space-y-8 before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-white/10">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="relative pl-8">
                <div className="absolute left-0 top-1.5 h-6 w-6 -translate-x-[5px] rounded-full border-4 border-background bg-primary" />
                <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                <p className="font-medium text-primary">{exp.org}</p>
                <p className="mt-1 text-sm text-zinc-400">{exp.from} — {exp.to}</p>
                {exp.detail && <p className="mt-2 text-sm text-zinc-500">{exp.detail}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* Memberships & Responsibilities */}
        <section className="mb-16 grid gap-8 md:grid-cols-2">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Users className="text-primary" size={24} />
              <h2 className="text-xl font-bold text-white">Professional Memberships</h2>
            </div>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> Life member: AP Council for Mathematical Science (ID: 1171)</li>
              <li className="flex items-start gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> International Association of Engineers (IAENG, ID: 366807)</li>
              <li className="flex items-start gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> IFERP (ID: PROF-34338395)</li>
              <li className="flex items-start gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> ISTE (ID: LM 147433)</li>
            </ul>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <Activity className="text-primary" size={24} />
              <h2 className="text-xl font-bold text-white">Other Responsibilities</h2>
            </div>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> Counseling and guidance</li>
              <li className="flex items-start gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> Aptitude (Arithmetic & Reasoning) Trainer TPC</li>
              <li className="flex items-start gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> Dept timetable coordinator (AITAM) from June 2025</li>
              <li className="flex items-start gap-2"><div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" /> Dept timetable coordinator (GITAM) June 2022 - April 2024</li>
            </ul>
          </div>
        </section>

        {/* Selected Conferences (Summarized for web) */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <FileText className="text-primary" size={28} />
            <h2 className="text-2xl font-bold text-white">Selected Conferences & FDPs</h2>
          </div>
          <div className="rounded-xl border border-white/5 bg-zinc-900/30 p-6 text-sm text-zinc-400">
            <p className="mb-6">
              Participated in over 49 National and International Conferences, Workshops, and Faculty Development Programs. Key highlights include:
            </p>
            <ul className="space-y-4">
              <li className="border-l-2 border-primary/30 pl-4">
                <strong className="text-white">AI-Assisted Research Writing & LLMs</strong>
                <p>National Level FDP by AMIEE & CMAOI in collaboration with Heritage Institute of Technology (2026).</p>
              </li>
              <li className="border-l-2 border-primary/30 pl-4">
                <strong className="text-white">Next Generation Mathematical Sciences through AI</strong>
                <p>International FDP Organized by NPSBCET (2026).</p>
              </li>
              <li className="border-l-2 border-primary/30 pl-4">
                <strong className="text-white">Role of Mathematics in Emerging Technologies (NCRMET)</strong>
                <p>National Conference by GIET University (2026, 2024).</p>
              </li>
              <li className="border-l-2 border-primary/30 pl-4">
                <strong className="text-white">Big Data Analysis and Circular Statistics using R</strong>
                <p>Organized Two-day National Workshop at GITAM Visakhapatnam (2023).</p>
              </li>
            </ul>
          </div>
        </section>

      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
