import { MonitorSmartphone } from "lucide-react";

export function DevicePreviewLauncher() {
  return (
    <a
      href="/preview"
      title="Multi-device preview"
      aria-label="Open multi-device preview"
      className="group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-background/70 px-3.5 py-2.5 text-xs font-semibold text-foreground shadow-[0_20px_60px_-20px_oklch(0_0_0/0.8)] backdrop-blur-md transition hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
    >
      <MonitorSmartphone size={14} className="text-primary group-hover:text-primary-foreground" />
      <span className="hidden sm:inline">Device preview</span>
    </a>
  );
}