import { useEffect, useState } from "react";
import { PROFILE } from "@/lib/portfolio-data";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Linkedin,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

type Leaf = { label: string; href: string };
type Group = { label: string; href?: string; children?: Leaf[] };
type MenuItem = { label: string; href?: string; groups?: Group[] };

const MENU: MenuItem[] = [
  { label: "Blog", href: "/blog" },
  {
    label: "Explore",
    groups: [
      {
        label: "Profile",
        children: [
          { label: "About the Professor", href: "#about" },
          { label: "Academic Journey", href: "#about" },
          { label: "Teaching Philosophy", href: "#about" },
        ],
      },
      {
        label: "Experience",
        children: [
          { label: "AITAM — Present Role", href: "#experience" },
          { label: "GITAM University", href: "#experience" },
          { label: "Earlier Positions", href: "#experience" },
        ],
      },
      {
        label: "Research",
        children: [
          { label: "Publications (Scopus / WoS)", href: "#research" },
          { label: "Almost Distributive Lattices", href: "#research" },
          { label: "Fuzzy Structures & Filters", href: "#research" },
        ],
      },
      {
        label: "Expertise",
        children: [
          { label: "Subject Areas", href: "#expertise" },
          { label: "Technical Craft", href: "#expertise" },
          { label: "Certifications", href: "#expertise" },
        ],
      },
    ],
  },
  {
    label: "About",
    groups: [
      {
        label: "Profile",
        children: [
          { label: "Biography", href: "#about" },
          { label: "Education", href: "#about" },
        ],
      },
      {
        label: "Affiliations",
        children: [
          { label: "AITAM, Tekkali", href: "#experience" },
          { label: "Memberships", href: "#expertise" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    groups: [
      {
        label: "Scholar",
        children: [
          {
            label: "Scopus Profile",
            href: `https://www.scopus.com/authid/detail.uri?authorId=${PROFILE.scopusId}`,
          },
          { label: "ORCID", href: `https://orcid.org/${PROFILE.orcid}` },
          { label: "Web of Science", href: "#research" },
        ],
      },
      {
        label: "Community",
        children: [
          { label: "LinkedIn", href: PROFILE.linkedin },
          { label: "Email", href: `mailto:${PROFILE.email}` },
        ],
      },
    ],
  },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isExternal = (h?: string) =>
    !!h && (h.startsWith("http") || h.startsWith("mailto:"));

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      {/* Ambient glow behind capsule */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-[radial-gradient(ellipse_at_center_top,oklch(0.82_0.13_82/0.18),transparent_70%)]"
      />

      <div className="pointer-events-auto mx-auto w-[96%] max-w-7xl px-1 pt-3 sm:pt-5">
        <motion.nav
          initial={{ y: -18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`relative flex items-center justify-between gap-3 rounded-full border border-white/10 bg-zinc-900/60 px-3 py-2 shadow-[0_20px_60px_-25px_rgba(0,0,0,0.85)] backdrop-blur-xl transition-all duration-500 sm:px-5 sm:py-2.5 ${
            scrolled ? "border-primary/25 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)]" : ""
          }`}
        >
          {/* Top gold hairline */}
          <span className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

          {/* Brand */}
          <a
            href="#top"
            className="flex shrink-0 items-center pl-2 text-[12px] font-medium tracking-[0.22em] text-white transition-opacity hover:opacity-80 sm:text-[13px]"
          >
            <span>JOGARAO</span>
            <span className="ml-1.5 font-bold text-primary">GUNDA</span>
          </a>

          {/* Desktop menu */}
          <ul className="hidden items-center gap-8 lg:flex">
            {MENU.map((item) => {
              const hasMenu = !!item.groups;
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasMenu && setHover(item.label)}
                  onMouseLeave={() => setHover(null)}
                >
                  {hasMenu ? (
                    <button
                      type="button"
                      className="group flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white"
                    >
                      {item.label}
                      <ChevronDown
                        size={11}
                        strokeWidth={2.5}
                        className={`opacity-50 transition-transform group-hover:opacity-100 ${
                          hover === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white"
                    >
                      {item.label}
                    </a>
                  )}

                  <AnimatePresence>
                    {hasMenu && hover === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.18 }}
                        style={{ width: "min(92vw, 640px)", maxHeight: "min(70vh, 520px)" }}
                        className="absolute left-1/2 top-full z-50 mt-4 -translate-x-1/2 overflow-y-auto rounded-2xl border border-white/10 bg-zinc-950/90 p-5 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
                      >
                        <div
                          className={`grid gap-x-6 gap-y-5 ${
                            (item.groups!.length ?? 0) > 2
                              ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                              : "grid-cols-1 sm:grid-cols-2"
                          }`}
                        >
                          {item.groups!.map((g) => (
                            <div key={g.label} className="min-w-0">
                              <div className="mb-2 flex items-center gap-1.5 border-b border-white/10 pb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                                <ChevronRight size={10} className="shrink-0" />
                                <span className="truncate">{g.label}</span>
                              </div>
                              <ul className="flex flex-col gap-0.5">
                                {g.children?.map((c) => (
                                  <li key={c.label + c.href} className="min-w-0">
                                    <a
                                      href={c.href}
                                      target={isExternal(c.href) ? "_blank" : undefined}
                                      rel={isExternal(c.href) ? "noreferrer" : undefined}
                                      className="block break-words rounded-md px-2 py-1.5 text-[12.5px] leading-snug text-zinc-300 transition-colors hover:bg-white/5 hover:text-primary"
                                    >
                                      {c.label}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hidden h-9 w-9 items-center justify-center rounded-full text-zinc-400 transition-colors hover:text-white sm:inline-flex"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full bg-rose-600 px-4 py-2 text-[10.5px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_12px_28px_-12px_rgba(225,29,72,0.7)] transition-all hover:-translate-y-0.5 hover:bg-rose-500 active:scale-95 sm:inline-flex"
            >
              <MessageSquare size={12} strokeWidth={2.5} />
              Talk to Me
            </a>
            <button
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:border-primary/60 hover:text-primary lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="pointer-events-auto mx-auto mt-3 w-[96%] max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/90 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.9)] backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500">
                Menu
              </span>
              <ThemeToggle />
            </div>
            <ul className="p-2">
              {MENU.map((item) => {
                const hasMenu = !!item.groups;
                const isOpen = openMobileGroup === item.label;
                if (!hasMenu) {
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2.5 text-[11.5px] font-bold uppercase tracking-[0.2em] text-zinc-300 hover:bg-white/5 hover:text-primary"
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                }
                return (
                  <li key={item.label} className="border-b border-white/5 last:border-0">
                    <button
                      className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-[11.5px] font-bold uppercase tracking-[0.2em] text-zinc-300 hover:bg-white/5"
                      onClick={() => setOpenMobileGroup(isOpen ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 px-3 pb-3">
                            {item.groups!.map((g) => (
                              <div key={g.label}>
                                <div className="mb-1 text-[9.5px] font-bold uppercase tracking-[0.2em] text-primary">
                                  {g.label}
                                </div>
                                <ul>
                                  {g.children?.map((c) => (
                                    <li key={c.label + c.href}>
                                      <a
                                        href={c.href}
                                        target={isExternal(c.href) ? "_blank" : undefined}
                                        rel={isExternal(c.href) ? "noreferrer" : undefined}
                                        onClick={() => setOpen(false)}
                                        className="block rounded-md px-2 py-1.5 text-[12.5px] text-zinc-300 hover:bg-white/5 hover:text-primary"
                                      >
                                        {c.label}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
            <div className="flex flex-col gap-2 border-t border-white/5 p-3">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-200 hover:border-primary/50 hover:text-primary"
              >
                <Linkedin size={14} /> LinkedIn
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-rose-600 px-3 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:bg-rose-500"
              >
                <MessageSquare size={14} /> Talk to Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
