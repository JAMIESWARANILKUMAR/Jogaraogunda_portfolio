import aitamLogo from "@/assets/aitam-logo.png.asset.json";
import gitamLogo from "@/assets/gitam-logo.png.asset.json";

/**
 * Centralized organization → logo configuration.
 *
 * Update this file (and nowhere else) to change how an organization's logo
 * is resolved across the app. Resolution order used by <OrgLogo />:
 *   1. `ORG_LOGO_OVERRIDES` — explicit official-logo asset match (preferred)
 *   2. `ORG_DOMAINS`        — favicon via Google's s2 service for the mapped domain
 *   3. Initials fallback    — when neither is available / fails to load
 *
 * To add a new official logo:
 *   - Upload the image via `lovable-assets` and import the `.asset.json` here
 *   - Add an entry to `ORG_LOGO_OVERRIDES` with a regex that matches the org name
 *
 * To add a new favicon-only org:
 *   - Add `"<Org Name>": "<domain>"` to `ORG_DOMAINS`
 */

export interface OrgLogoOverride {
  /** Case-insensitive regex tested against the org name passed to <OrgLogo />. */
  match: RegExp;
  /** CDN URL for the official logo asset. */
  src: string;
  /** Optional human-readable note for maintainers. */
  note?: string;
}

export const ORG_LOGO_OVERRIDES: OrgLogoOverride[] = [
  {
    match: /aitam|aditya institute of technology and management/i,
    src: aitamLogo.url,
    note: "Official AITAM crest",
  },
  {
    match: /gitam/i,
    src: gitamLogo.url,
    note: "Official GITAM logo (user-provided)",
  },
];

export const ORG_DOMAINS: Record<string, string> = {
  "AITAM, Tekkali": "aitam.edu.in",
  "GITAM (Deemed) University, Visakhapatnam": "gitam.edu",
  "GITAM (Deemed) University, Bangalore": "gitam.edu",
  "GITAM (Deemed to be) University, Visakhapatnam": "gitam.edu",
  "Avanthi Institute of Engineering and Technology": "avanthi.edu.in",
  "SISTAM, Srikakulam": "sistam.ac.in",
  "Dr. B. R. Ambedkar University, Srikakulam": "brau.edu.in",
  "Andhra University, Visakhapatnam": "andhrauniversity.edu.in",
};

/** Resolve the best domain for an org name (exact match, then prefix match). */
export function domainForOrg(org: string): string | undefined {
  if (ORG_DOMAINS[org]) return ORG_DOMAINS[org];
  const key = Object.keys(ORG_DOMAINS).find((k) => org.includes(k.split(",")[0]));
  return key ? ORG_DOMAINS[key] : undefined;
}

/** Resolve an official logo override URL for an org name, if configured. */
export function overrideLogoForOrg(org: string): string | undefined {
  return ORG_LOGO_OVERRIDES.find((o) => o.match.test(org))?.src;
}