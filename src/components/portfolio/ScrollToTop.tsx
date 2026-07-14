import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      title="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/50 bg-background/70 text-foreground shadow-[0_20px_60px_-20px_oklch(0_0_0/0.8)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground focus:outline-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:border-primary ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp size={18} aria-hidden="true" focusable="false" />
      <span className="sr-only">Scroll to top</span>
    </button>
  );
}
