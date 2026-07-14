import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Monitor,
  Smartphone,
  Tablet,
  RotateCw,
  ExternalLink,
  X,
  Maximize2,
} from "lucide-react";

type Preset = { name: string; w: number; h: number };
type Category = "mobile" | "tablet" | "desktop";

const PRESETS: Record<Category, Preset[]> = {
  mobile: [
    { name: "iPhone SE (1st)", w: 320, h: 568 },
    { name: "Galaxy Fold (closed)", w: 344, h: 882 },
    { name: "Galaxy S8", w: 360, h: 740 },
    { name: "Galaxy S22", w: 360, h: 780 },
    { name: "iPhone SE (2/3)", w: 375, h: 667 },
    { name: "iPhone 12 mini", w: 375, h: 812 },
    { name: "iPhone 13/14", w: 390, h: 844 },
    { name: "iPhone 15", w: 393, h: 852 },
    { name: "Pixel 7", w: 412, h: 915 },
    { name: "Pixel 8 Pro", w: 412, h: 892 },
    { name: "OnePlus 12", w: 412, h: 919 },
    { name: "iPhone 14 Plus", w: 428, h: 926 },
    { name: "iPhone 15 Pro Max", w: 430, h: 932 },
    { name: "Galaxy S23 Ultra", w: 412, h: 883 },
  ],
  tablet: [
    { name: "iPad Mini", w: 768, h: 1024 },
    { name: "iPad 10.2", w: 810, h: 1080 },
    { name: "iPad Air", w: 820, h: 1180 },
    { name: "iPad Pro 11″", w: 834, h: 1194 },
    { name: "Surface Pro 7", w: 912, h: 1368 },
    { name: "Galaxy Tab S8", w: 800, h: 1280 },
    { name: "iPad Pro 12.9″", w: 1024, h: 1366 },
    { name: "Nest Hub Max", w: 1280, h: 800 },
  ],
  desktop: [
    { name: "Laptop 720p", w: 1280, h: 720 },
    { name: "Laptop HD", w: 1366, h: 768 },
    { name: "MacBook Air 13″", w: 1440, h: 900 },
    { name: "Desktop 1080p", w: 1536, h: 864 },
    { name: "MacBook Pro 16″", w: 1728, h: 1117 },
    { name: "Full HD", w: 1920, h: 1080 },
    { name: "iMac 24″", w: 2240, h: 1260 },
    { name: "QHD", w: 2560, h: 1440 },
    { name: "Ultrawide 21:9", w: 3440, h: 1440 },
    { name: "4K UHD", w: 3840, h: 2160 },
  ],
};

export const Route = createFileRoute("/preview")({
  head: () => ({
    meta: [
      { title: "Device Preview — Multi-device audit" },
      { name: "description", content: "Preview the portfolio across 25+ device presets and orientations." },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: PreviewPage,
});

function PreviewPage() {
  const [cat, setCat] = useState<Category>("mobile");
  const [preset, setPreset] = useState<Preset>(PRESETS.mobile[6]);
  const [landscape, setLandscape] = useState(false);
  const [zoomToFit, setZoomToFit] = useState(true);

  const dims = landscape
    ? { w: preset.h, h: preset.w }
    : { w: preset.w, h: preset.h };

  const scale = useMemo(() => {
    if (!zoomToFit) return 1;
    // Fit into ~ viewport minus header/padding
    if (typeof window === "undefined") return 1;
    const availW = Math.max(320, window.innerWidth - 380);
    const availH = Math.max(320, window.innerHeight - 220);
    return Math.min(1, availW / dims.w, availH / dims.h);
  }, [dims, zoomToFit]);

  const CAT_META: { key: Category; label: string; icon: React.ReactNode }[] = [
    { key: "mobile", label: "Mobile", icon: <Smartphone size={14} /> },
    { key: "tablet", label: "Tablet", icon: <Tablet size={14} /> },
    { key: "desktop", label: "Desktop", icon: <Monitor size={14} /> },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
          <a href="/" className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary">
            <X size={16} /> Close preview
          </a>
          <span className="hidden h-6 w-px bg-border sm:block" />

          {/* Category tabs */}
          <div className="inline-flex overflow-hidden rounded-full border border-border">
            {CAT_META.map((c) => {
              const on = cat === c.key;
              return (
                <button
                  key={c.key}
                  onClick={() => {
                    setCat(c.key);
                    setPreset(PRESETS[c.key][0]);
                    setLandscape(false);
                  }}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition ${
                    on ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {c.icon}
                  {c.label}
                </button>
              );
            })}
          </div>

          {/* Preset select */}
          <select
            value={preset.name}
            onChange={(e) => {
              const p = PRESETS[cat].find((x) => x.name === e.target.value);
              if (p) setPreset(p);
            }}
            className="min-w-[190px] rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs text-foreground outline-none focus:border-primary/60"
          >
            {PRESETS[cat].map((p) => (
              <option key={p.name} value={p.name}>
                {p.name} — {p.w}×{p.h}
              </option>
            ))}
          </select>

          <button
            onClick={() => setLandscape((v) => !v)}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-foreground hover:border-primary/60 hover:text-primary"
            title="Rotate"
          >
            <RotateCw size={13} /> {landscape ? "Portrait" : "Landscape"}
          </button>

          <label className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">
            <input
              type="checkbox"
              checked={zoomToFit}
              onChange={(e) => setZoomToFit(e.target.checked)}
              className="accent-primary"
            />
            <Maximize2 size={12} /> Fit
          </label>

          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-primary/50 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Open live <ExternalLink size={12} />
          </a>
        </div>

        {/* Info bar */}
        <div className="mx-auto flex max-w-[1600px] flex-wrap items-center gap-3 px-4 pb-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:px-6">
          <span>Viewport</span>
          <span className="font-mono text-foreground">
            {dims.w} × {dims.h}
          </span>
          <span>·</span>
          <span>Aspect</span>
          <span className="font-mono text-foreground">
            {(dims.w / dims.h).toFixed(3)}
          </span>
          <span>·</span>
          <span>Zoom</span>
          <span className="font-mono text-foreground">{Math.round(scale * 100)}%</span>
        </div>
      </header>

      {/* Stage */}
      <div className="flex min-h-[calc(100vh-140px)] items-start justify-center overflow-auto p-6 sm:p-10">
        <div
          style={{
            width: dims.w,
            height: dims.h,
            transform: `scale(${scale})`,
            transformOrigin: "top center",
          }}
          className="relative shrink-0 overflow-hidden rounded-[28px] border border-border bg-background shadow-[0_40px_120px_-30px_oklch(0_0_0/0.7)]"
        >
          <iframe
            key={`${dims.w}x${dims.h}`}
            title={`Preview at ${dims.w}×${dims.h}`}
            src="/"
            className="block h-full w-full border-0 bg-background"
          />
        </div>
      </div>
    </div>
  );
}