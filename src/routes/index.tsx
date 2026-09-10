import { createFileRoute } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Publications } from "@/components/portfolio/Publications";
import { Expertise } from "@/components/portfolio/Expertise";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";
import { PROFILE } from "@/lib/portfolio-data";

const TITLE =
  "Dr. Jogarao Gunda — Associate Professor & Asst HOD TPC, AITAM Tekkali";
const DESCRIPTION =
  "Portfolio of Dr. Jogarao Gunda: Ph.D. in Applied Mathematics, 14+ years in academia, Assistant HOD TPC at AITAM Tekkali, with 12+ Scopus/WoS publications.";

export const Route = createFileRoute("/")({
  component: Index,
  validateSearch: zodValidator(
    z.object({
      cat: fallback(z.string(), "all").default("all"),
      q: fallback(z.string(), "").default(""),
    }),
  ),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "Dr. Jogarao Gunda, Jogarao Gunda, Associate Professor, Applied Mathematics, AITAM Tekkali, Assistant Head of Training and Placement, Assistant HOD TPC, Almost Distributive Lattices, Fuzzy Set Theory, Discrete Mathematics, Graph Theory, Modern Algebra, Probability & Statistics, GITAM University, PhD Applied Mathematics, Research Methodology, Mathematical Methods, Single Variable Calculus, Several Variable Calculus, Mathematical Foundation of Computer Science, Elementary Statistics, Statistical Inference, Engineering Mathematics-1",
      },
      { name: "author", content: PROFILE.name },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: "/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: `${PROFILE.name} — ${PROFILE.title}` },
      { property: "profile:first_name", content: "Jogarao" },
      { property: "profile:last_name", content: "Gunda" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "/og-image.jpg" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: PROFILE.name,
          jobTitle: PROFILE.title,
          email: `mailto:${PROFILE.email}`,
          telephone: PROFILE.phone,
          url: "/",
          image: "/og-image.jpg",
          sameAs: [
            PROFILE.linkedin,
            `https://orcid.org/${PROFILE.orcid}`,
            `https://www.scopus.com/authid/detail.uri?authorId=${PROFILE.scopusId}`,
          ],
          worksFor: {
            "@type": "CollegeOrUniversity",
            name: PROFILE.institution,
            address: PROFILE.location,
          },
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: "GITAM (Deemed to be) University, Visakhapatnam",
          },
          knowsAbout: [
            "Almost Distributive Lattices",
            "Fuzzy Set Theory",
            "Discrete Mathematics",
            "Graph Theory",
            "Modern Algebra",
            "Engineering Mathematics",
          ],
          nationality: "Indian",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Publications />
        <Expertise />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
