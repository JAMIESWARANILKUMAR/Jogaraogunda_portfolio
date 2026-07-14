import { useState, useEffect, useRef } from "react";
import { PROFILE } from "@/lib/portfolio-data";
import { Reveal, SectionHeader } from "./Reveal";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  Check,
  Loader2,
  ArrowUpRight,
  Clock,
  ShieldCheck,
  Cloud,
  Shield,
  Smartphone,
} from "lucide-react";

function formatWhatsAppText(data: { name: string; email: string; subject: string; message: string }) {
  const host = typeof window !== "undefined" ? window.location.host : "portfolio";
  return [
    `*New enquiry via portfolio*`,
    ``,
    `*Name:* ${data.name}`,
    `*Email:* ${data.email}`,
    `*Subject:* ${data.subject}`,
    ``,
    `*Message:*`,
    data.message,
    ``,
    `— Sent from ${host}`,
  ].join("\n");
}

export function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [err, setErr] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  function updateField(field: keyof typeof formData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };
    if (!data.name || !data.email || !data.subject || !data.message) return;
    setState("sending");
    setErr(null);
    try {
      const text = encodeURIComponent(formatWhatsAppText(data));
      const phone = PROFILE.phone.replace(/\D/g, "");
      const url = `https://wa.me/${phone}?text=${text}`;
      setState("sent");
      e.currentTarget.reset();
      setFormData({ name: "", email: "", subject: "", message: "" });
      window.open(url, "_blank", "noopener,noreferrer");
      setTimeout(() => setState("idle"), 4000);
    } catch (ex) {
      setErr(ex instanceof Error ? ex.message : "Something went wrong");
      setState("error");
    }
  }

  return (
    <section id="contact" className="relative py-20 md:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.82_0.13_82/0.14),transparent_60%),radial-gradient(ellipse_at_bottom_left,oklch(0.55_0.15_40/0.10),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact"
          title="Open to research collaboration, guest lectures, and doctoral guidance."
        />
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left rail */}
          <Reveal y={16} className="lg:col-span-5">
            <div className="flex h-full flex-col gap-5">
              <div className="rounded-2xl border border-border/60 bg-background/40 p-8">
                <Reveal y={12}>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                    Direct channels
                  </p>
                </Reveal>
                <Reveal y={12} delay={0.04}>
                  <h3 className="font-display text-2xl font-normal text-foreground">
                    Let's begin a conversation.
                  </h3>
                </Reveal>
                <Reveal y={12} delay={0.08}>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    Preferred for research proposals, workshop invites, and doctoral
                    co-supervision enquiries.
                  </p>
                </Reveal>

                <div className="mt-8 divide-y divide-border/50 border-y border-border/50">
                  <Reveal y={10} delay={0.12}>
                    <ContactRow
                      icon={<Mail size={16} />}
                      label="Personal email"
                      value={PROFILE.email}
                      href={`mailto:${PROFILE.email}`}
                    />
                  </Reveal>
                  <Reveal y={10} delay={0.16}>
                    <ContactRow
                      icon={<Mail size={16} />}
                      label="Institutional"
                      value={PROFILE.emailInst}
                      href={`mailto:${PROFILE.emailInst}`}
                    />
                  </Reveal>
                  <Reveal y={10} delay={0.20}>
                    <ContactRow
                      icon={<Phone size={16} />}
                      label="Phone"
                      value={PROFILE.phone}
                      href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
                    />
                  </Reveal>
                  <Reveal y={10} delay={0.24}>
                    <ContactRow
                      icon={<Linkedin size={16} />}
                      label="LinkedIn"
                      value="/in/dr-jogarao-gunda-59994652"
                      href={PROFILE.linkedin}
                    />
                  </Reveal>
                  <Reveal y={10} delay={0.28}>
                    <ContactRow
                      icon={<MapPin size={16} />}
                      label="Campus"
                      value={`${PROFILE.institution}`}
                      hint={PROFILE.location}
                    />
                  </Reveal>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-6">
                <Reveal y={12}>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-primary/80">
                    — Research identifiers —
                  </p>
                </Reveal>
                <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  <Reveal y={10} delay={0.06}>
                    <IdRow label="Scopus" value={PROFILE.scopusId} />
                  </Reveal>
                  <Reveal y={10} delay={0.10}>
                    <IdRow label="ORCID" value={PROFILE.orcid} />
                  </Reveal>
                  <Reveal y={10} delay={0.14}>
                    <IdRow label="Web of Science" value={PROFILE.wosId} />
                  </Reveal>
                  <Reveal y={10} delay={0.18}>
                    <IdRow label="Languages" value={PROFILE.languages.join(", ")} />
                  </Reveal>
                </dl>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal y={16} delay={0.1} className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-8 md:p-10"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />

              <div className="mb-8 flex items-start justify-between gap-4">
                <Reveal y={12}>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-primary/80">
                      — Send a message —
                    </p>
                    <h3 className="mt-1 font-display text-2xl text-foreground">
                      Compose your enquiry
                    </h3>
                  </div>
                </Reveal>
                <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary sm:inline-flex">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                  Accepting
                </span>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Reveal y={10} delay={0.05}>
                  <Field
                    name="name"
                    label="Your name"
                    placeholder="Full name"
                    required
                    value={formData.name}
                    onChange={(v) => updateField("name", v)}
                  />
                </Reveal>
                <Reveal y={10} delay={0.10}>
                  <Field
                    name="email"
                    label="Email"
                    type="email"
                    placeholder="you@domain.edu"
                    required
                    value={formData.email}
                    onChange={(v) => updateField("email", v)}
                  />
                </Reveal>
              </div>
              <Reveal y={10} delay={0.15}>
                <div className="mt-5">
                  <Field
                    name="subject"
                    label="Subject"
                    placeholder="Collaboration on lattice theory…"
                    required
                    value={formData.subject}
                    onChange={(v) => updateField("subject", v)}
                  />
                </div>
              </Reveal>
              <Reveal y={10} delay={0.20}>
                <div className="mt-5">
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    minLength={10}
                    rows={6}
                    placeholder="Tell me about your project, workshop, or research question…"
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    className="w-full resize-none rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/70 focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </Reveal>

              <Reveal y={10} delay={0.25}>
                <WhatsAppPreview data={formData} />
              </Reveal>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <button
                  disabled={state === "sending"}
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,oklch(0.9_0.09_88),oklch(0.82_0.13_82),oklch(0.55_0.15_40))] px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_20px_60px_-15px_oklch(0.82_0.13_82/0.8)] transition hover:translate-y-[-2px] hover:shadow-[0_25px_70px_-15px_oklch(0.82_0.13_82/0.95)] disabled:opacity-70"
                >
                  {state === "sending" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending…
                    </>
                  ) : state === "sent" ? (
                    <>
                      <Check size={16} /> Message received
                    </>
                  ) : (
                    <>
                      <Send size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      Send message
                    </>
                  )}
                </button>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-primary/80" /> Private inbox
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} className="text-primary/80" /> Reply in 3–5 days
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5"
                    title="Traffic protected by Cloudflare"
                  >
                    <Cloud size={13} className="text-primary/80" /> Secured by Cloudflare
                  </span>
                  <span
                    className="inline-flex items-center gap-1.5"
                    title="Zero-trust routing via Cloudflare WARP"
                  >
                    <Shield size={13} className="text-primary/80" /> Cloudflare WARP
                  </span>
                </div>
              </div>

              {err && (
                <p className="mt-3 text-xs text-destructive">{err}</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", placeholder, required, value, onChange }: { name: string; label: string; type?: string; placeholder?: string; required?: boolean; value?: string; onChange?: (value: string) => void }) {
  return (
    <div>
      <label className="mb-2 block text-[11px] uppercase tracking-[0.25em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-background/70 focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

type WhatsAppMode = "light" | "dark";
type WhatsAppWallpaper = "default" | "doodles" | "solid" | "sunset";

const WALLPAPERS: Record<
  WhatsAppWallpaper,
  { label: string; light: React.CSSProperties; dark: React.CSSProperties }
> = {
  default: {
    label: "Default",
    light: {
      backgroundColor: "#efeae2",
      backgroundImage:
        "radial-gradient(circle, #d1cdc5 1.2px, transparent 1.2px)",
      backgroundSize: "20px 20px",
    },
    dark: {
      backgroundColor: "#0b141a",
      backgroundImage:
        "radial-gradient(circle, #1f2c34 1.2px, transparent 1.2px)",
      backgroundSize: "20px 20px",
    },
  },
  doodles: {
    label: "Doodles",
    light: {
      backgroundColor: "#ece5dd",
      backgroundImage:
        "radial-gradient(circle at 20% 30%, #d7ccb9 2px, transparent 2px), radial-gradient(circle at 70% 60%, #cfc3ae 1.5px, transparent 1.5px), radial-gradient(circle at 40% 80%, #c9bda6 1.8px, transparent 1.8px)",
      backgroundSize: "60px 60px, 45px 45px, 80px 80px",
    },
    dark: {
      backgroundColor: "#0a1014",
      backgroundImage:
        "radial-gradient(circle at 20% 30%, #1a252b 2px, transparent 2px), radial-gradient(circle at 70% 60%, #17222a 1.5px, transparent 1.5px), radial-gradient(circle at 40% 80%, #131c22 1.8px, transparent 1.8px)",
      backgroundSize: "60px 60px, 45px 45px, 80px 80px",
    },
  },
  solid: {
    label: "Solid",
    light: { backgroundColor: "#e5ddd5" },
    dark: { backgroundColor: "#0b141a" },
  },
  sunset: {
    label: "Sunset",
    light: {
      backgroundImage:
        "linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)",
    },
    dark: {
      backgroundImage:
        "linear-gradient(135deg, #2b1055 0%, #7597de 100%)",
    },
  },
};

function formatWhatsAppTime(date: Date) {
  let h = date.getHours();
  const m = date.getMinutes();
  const ampm = h >= 12 ? "pm" : "am";
  h = h % 12;
  if (h === 0) h = 12;
  return `${h}:${m.toString().padStart(2, "0")} ${ampm}`;
}

function formatWhatsAppDatePill(date: Date) {
  const now = new Date();
  const startOfDay = (d: Date) =>
    new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const diffDays = Math.round(
    (startOfDay(now) - startOfDay(date)) / 86400000,
  );
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays > 1 && diffDays < 7) {
    return date.toLocaleDateString(undefined, { weekday: "long" });
  }
  return date.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function WhatsAppPreview({
  data,
}: {
  data: { name: string; email: string; subject: string; message: string };
}) {
  const hasContent = data.name || data.email || data.subject || data.message;
  const previewText = hasContent
    ? formatWhatsAppText(data)
    : `*New enquiry via portfolio*\n\n*Name:*\n*Email:*\n*Subject:*\n\n*Message:*\n\n— Sent from portfolio`;

  const [mode, setMode] = useState<WhatsAppMode>("light");
  const [wallpaper, setWallpaper] = useState<WhatsAppWallpaper>("default");
  const [now, setNow] = useState(() => new Date());
  const [isTyping, setIsTyping] = useState(false);
  const [sendPulse, setSendPulse] = useState(0);
  const typingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastMessage = useRef(data.message);

  // Keep the timestamp fresh
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  // Typing indicator when user edits the message
  useEffect(() => {
    if (data.message !== lastMessage.current) {
      lastMessage.current = data.message;
      setIsTyping(true);
      if (typingTimer.current) clearTimeout(typingTimer.current);
      typingTimer.current = setTimeout(() => {
        setIsTyping(false);
        setSendPulse((n) => n + 1);
      }, 900);
    }
    return () => {
      if (typingTimer.current) clearTimeout(typingTimer.current);
    };
  }, [data.message]);

  const isDark = mode === "dark";
  const wp = WALLPAPERS[wallpaper];
  const wpStyle = isDark ? wp.dark : wp.light;

  const headerBg = isDark ? "#1f2c34" : "#008069";
  const footerBg = isDark ? "#1f2c34" : "#f0f2f5";
  const bubbleBg = isDark ? "#005c4b" : "#d9fdd3";
  const bubbleText = isDark ? "#e9edef" : "#111b21";
  const metaText = isDark ? "#8696a0" : "#667781";
  const pillBg = isDark ? "#182229" : "#ffffff";
  const pillText = isDark ? "#8696a0" : "#54656f";
  const inputBg = isDark ? "#2a3942" : "#ffffff";
  const iconMuted = isDark ? "#8696a0" : "#54656f";

  return (
    <div className="mt-6 space-y-2">
      {/* Theme + wallpaper controls */}
      <div className="flex flex-wrap items-center gap-2 text-[11px]">
        <span className="uppercase tracking-[0.22em] text-muted-foreground">
          Preview
        </span>
        <div className="inline-flex overflow-hidden rounded-full border border-border">
          {(["light", "dark"] as WhatsAppMode[]).map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setMode(m)}
              className={`px-3 py-1 text-[11px] capitalize transition ${
                mode === m
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
        <div className="inline-flex overflow-hidden rounded-full border border-border">
          {(Object.keys(WALLPAPERS) as WhatsAppWallpaper[]).map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => setWallpaper(w)}
              className={`px-3 py-1 text-[11px] transition ${
                wallpaper === w
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {WALLPAPERS[w].label}
            </button>
          ))}
        </div>
      </div>

      <div
        className="overflow-hidden rounded-2xl shadow-lg"
        style={{ border: `1px solid ${isDark ? "#222c32" : "#d1d7db"}` }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-2 px-3 py-2.5"
          style={{ backgroundColor: headerBg }}
        >
          <svg
            className="h-5 w-5 text-white/90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <div
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-sm font-bold"
            style={{
              backgroundColor: isDark ? "#005c4b" : "#d9fdd3",
              color: isDark ? "#e9edef" : "#008069",
            }}
          >
            JG
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[15px] font-medium text-white">
              Dr. Jogarao Gunda
            </p>
            <p className="text-[11px] text-white/70">
              {isTyping ? "typing…" : "online"}
            </p>
          </div>
          <div className="flex items-center gap-4 text-white/90">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
            <Phone size={18} />
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </div>
        </div>

        {/* Chat */}
        <div className="relative min-h-[220px] p-3" style={wpStyle}>
          <div
            className="mx-auto mb-4 w-fit rounded-lg px-3 py-1 text-[11px] font-medium shadow-sm"
            style={{ backgroundColor: pillBg, color: pillText }}
          >
            {formatWhatsAppDatePill(now)}
          </div>

          <div className="flex justify-end">
            <div
              key={sendPulse}
              className="relative max-w-[88%] animate-scale-in rounded-lg rounded-tr-sm px-2.5 py-1.5 shadow-sm"
              style={{ backgroundColor: bubbleBg }}
            >
              <svg
                className="absolute -right-[5px] top-0 h-3 w-2"
                viewBox="0 0 8 12"
                fill={bubbleBg}
              >
                <path d="M0 0 C4 0, 8 4, 8 10 L0 10 Z" />
              </svg>

              <div
                className="whitespace-pre-wrap pr-16 text-[13.5px] leading-relaxed"
                style={{ color: bubbleText }}
              >
                {previewText.split("\n").map((line, i) => {
                  if (!line.trim()) return <div key={i} className="h-2" />;
                  const parts = line.split(/(\*[^*]+\*)/g);
                  return (
                    <p key={i} className="text-[13.5px] leading-relaxed">
                      {parts.map((part, j) =>
                        part.startsWith("*") && part.endsWith("*") ? (
                          <span key={j} className="font-semibold">
                            {part.slice(1, -1)}
                          </span>
                        ) : (
                          <span key={j}>{part}</span>
                        ),
                      )}
                    </p>
                  );
                })}
              </div>

              <div className="absolute bottom-1 right-2 flex items-center gap-1">
                <span className="text-[10px]" style={{ color: metaText }}>
                  {formatWhatsAppTime(now)}
                </span>
                <svg
                  className="h-3.5 w-3.5 text-[#53bdeb]"
                  viewBox="0 0 16 11"
                  fill="currentColor"
                >
                  <path d="M11.39 1.73L6.36 6.76 4.61 5.01a1 1 0 00-1.41 1.41l2.45 2.45a1 1 0 001.41 0l5.73-5.73a1 1 0 00-1.41-1.41z" />
                  <path d="M15.39 1.73L10.36 6.76 8.61 5.01a1 1 0 00-1.41 1.41l2.45 2.45a1 1 0 001.41 0l5.73-5.73a1 1 0 00-1.41-1.41z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Typing indicator (incoming) */}
          {isTyping && (
            <div className="mt-3 flex justify-start animate-fade-in">
              <div
                className="flex items-center gap-1 rounded-lg rounded-tl-sm px-3 py-2 shadow-sm"
                style={{ backgroundColor: isDark ? "#202c33" : "#ffffff" }}
              >
                <TypingDot delay="0ms" color={metaText} />
                <TypingDot delay="150ms" color={metaText} />
                <TypingDot delay="300ms" color={metaText} />
              </div>
            </div>
          )}
        </div>

        {/* Bottom input bar */}
        <div
          className="flex items-center gap-2 px-3 py-2"
          style={{ backgroundColor: footerBg }}
        >
          <svg
            className="h-5 w-5"
            style={{ color: iconMuted }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <svg
            className="h-5 w-5"
            style={{ color: iconMuted }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <div
            className="flex-1 rounded-full px-3 py-1.5 text-[13px]"
            style={{ backgroundColor: inputBg, color: iconMuted }}
          >
            {isTyping ? "typing…" : "Message"}
          </div>
          <div
            className="grid h-8 w-8 place-items-center rounded-full text-white transition"
            style={{
              backgroundColor: isDark ? "#00a884" : "#008069",
              transform: isTyping ? "scale(1.08)" : "scale(1)",
            }}
          >
            <Send size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TypingDot({ delay, color }: { delay: string; color: string }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 rounded-full"
      style={{
        backgroundColor: color,
        animation: "wa-typing 1s ease-in-out infinite",
        animationDelay: delay,
      }}
    />
  );
}

function ContactRow({ icon, label, value, href, hint }: { icon: React.ReactNode; label: string; value: string; href?: string; hint?: string }) {
  const Wrap: React.ElementType = href ? "a" : "div";
  const isExternal = href?.startsWith("http");
  return (
    <Wrap
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-lg py-3.5 px-2 -mx-2 transition-colors duration-300 hover:bg-primary/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-1 focus-visible:ring-offset-background"
    >
      <span className="grid h-8 w-8 shrink-0 place-items-center text-muted-foreground transition duration-300 group-hover:text-foreground group-hover:scale-105">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground/80 transition-colors duration-300 group-hover:text-muted-foreground">
          {label}
        </p>
        <p className="mt-0.5 truncate text-sm text-foreground transition-colors duration-300 group-hover:text-foreground/90">
          {value}
        </p>
        {hint && (
          <p className="truncate text-[11px] text-muted-foreground">{hint}</p>
        )}
      </div>
      {href && (
        <ArrowUpRight
          size={14}
          className="shrink-0 text-muted-foreground/60 opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground group-hover:opacity-100"
        />
      )}
    </Wrap>
  );
}

function IdRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border/70 bg-background/30 p-3">
      <dt className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 truncate font-mono text-[13px] text-foreground">{value}</dd>
    </div>
  );
}
