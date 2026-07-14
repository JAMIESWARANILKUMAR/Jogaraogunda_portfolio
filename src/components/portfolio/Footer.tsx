import { PROFILE } from "@/lib/portfolio-data";


export function Footer() {
  return (
    <footer className="relative border-t border-border py-12">
      <div className="pointer-events-none absolute inset-x-0 top-0 gold-divider" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center sm:px-6 md:flex-row md:text-left">
        <p className="whitespace-pre-line text-sm text-muted-foreground">
          © {new Date().getFullYear()} {PROFILE.name}.{"\n"}
          &nbsp;Mantained By Jami Eswar Anil Kumar
        </p>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          AITAM · Tekkali · Andhra Pradesh
        </p>
      </div>

      {/* Corporate credit */}
      <div className="mx-auto mt-6 flex max-w-7xl items-center justify-center px-4 sm:px-6">
        <a
          href="https://vyntyraconsultancyservices.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs tracking-wide text-muted-foreground/60 transition-colors hover:text-muted-foreground"
        >
          Designed &amp; Developed by{" "}
          <span className="font-semibold text-foreground/70 hover:text-foreground">
            Vyntyra Consultancy Services
          </span>
        </a>
      </div>
    </footer>
  );
}