import { useState } from "react";
import { domainForOrg, overrideLogoForOrg } from "@/config/orgLogos";

function initials(org: string): string {
  return org
    .replace(/\(.*?\)/g, "")
    .split(/[\s,]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

export function OrgLogo({
  org,
  size = 44,
  className = "",
  context,
}: {
  org: string;
  size?: number;
  className?: string;
  /** Optional extra context, e.g. "Ph.D. — Applied Mathematics" or "Associate Professor". */
  context?: string;
}) {
  const override = overrideLogoForOrg(org);
  const domain = domainForOrg(org);
  const [failed, setFailed] = useState(false);
  const src =
    override ??
    (domain ? `https://www.google.com/s2/favicons?sz=128&domain=${domain}` : undefined);

  const label = context
    ? `Official logo of ${org} — ${context}`
    : `Official logo of ${org}`;
  const fallbackLabel = context
    ? `${org} — ${context} (logo unavailable)`
    : `${org} (logo unavailable)`;

  return (
    <span
      role="img"
      aria-label={src && !failed ? label : fallbackLabel}
      title={org}
      className={`inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-primary/40 bg-background/70 shadow-sm ${className}`}
      style={{ width: size, height: size }}
    >
      {src && !failed ? (
        <img
          src={src}
          alt={label}
          width={size}
          height={size}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-contain p-1.5"
        />
      ) : (
        <span aria-hidden="true" className="font-display text-sm font-semibold text-primary">
          {initials(org)}
        </span>
      )}
    </span>
  );
}