import teamData from "../content/team.json";

const ICONS = {
  degree: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.1 2.7 2 6 2s6-.9 6-2v-5" />
    </svg>
  ),
  pi: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m3 11 18-5v12L3 14v-3Z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  ),
  supervisor: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  website: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20Z" />
    </svg>
  ),
  cv: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
    </svg>
  ),
  gscholar: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4 2 9l10 5 10-5-10-5Z" />
      <path d="M6 11v5c0 1.5 2.5 3 6 3s6-1.5 6-3v-5" />
    </svg>
  ),
  github: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.9 5.32.9 11.6c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.17.69-3.84-1.35-3.84-1.35-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.72-1.53-2.53-.29-5.19-1.27-5.19-5.63 0-1.24.44-2.26 1.18-3.06-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.17a10.9 10.9 0 0 1 5.74 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.06 0 4.37-2.67 5.33-5.21 5.62.41.36.77 1.07.77 2.15 0 1.55-.01 2.8-.01 3.18 0 .3.2.66.79.55A11.1 11.1 0 0 0 23.1 11.6C23.1 5.32 18.27.5 12 .5Z" />
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.84-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.37V9h3.4v1.56h.05c.47-.9 1.63-1.84 3.36-1.84 3.6 0 4.27 2.37 4.27 5.45v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  ),
  bluesky: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 8.5C10.5 5.5 7 3.2 4 3c-.5 3.5 1 6.8 4 8.5-3 1.7-4.5 5-4 8.5 3-.2 6.5-2.5 8-5.5 1.5 3 5 5.3 8 5.5.5-3.5-1-6.8-4-8.5 3-1.7 4.5-5 4-8.5-3 .2-6.5 2.5-8 5.5Z" />
    </svg>
  ),
};

const LINK_LABELS = {
  website: "website",
  cv: "cv",
  gscholar: "gscholar",
  github: "github",
  linkedin: "linkedin",
  bluesky: "bluesky",
};

function badgeIcon(degree) {
  const normalized = (degree || "").trim().toLowerCase();
  if (normalized === "pi") return ICONS.pi;
  if (normalized === "supervisor") return ICONS.supervisor;
  return ICONS.degree;
}

function initials(name) {
  const cleaned = name.replace(/[[\]]/g, "");
  const parts = cleaned.trim().split(/\s+/);
  return parts.slice(0, 2).map((p) => p[0]).join("").toUpperCase();
}

function MemberRow({ member }) {
  return (
    <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
      <div className="flex-shrink-0">
        {member.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.photo}
            alt=""
            className="w-36 h-36 rounded-md object-cover grayscale"
          />
        ) : (
          <div className="w-36 h-36 rounded-md bg-accent-primary/10 text-accent-primary flex items-center justify-center font-semibold text-2xl">
            {initials(member.name)}
          </div>
        )}
      </div>
      <div className="sm:pl-6 sm:border-l border-divider grid gap-1.5 flex-1 min-w-0">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <h4 className="text-xl font-bold">{member.name}</h4>
          {member.degree && (
            <span className="inline-flex items-center gap-1 text-[0.8125rem] font-semibold tracking-[0.05em] text-muted shrink-0 mt-1">
              {member.degree} {badgeIcon(member.degree)}
            </span>
          )}
        </div>
        {member.jobtitle && (
          <div className="text-muted text-[1rem] italic">
            {member.jobtitle}
          </div>
        )}
        {member.bio && (
          <p className="mt-1 max-w-[65ch]">{member.bio}</p>
        )}
        {member.links && member.links.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {member.links.map((l, li) => (
              <a
                key={li}
                href={l.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-divider px-3 py-1.5 text-base text-muted hover:text-accent-primary hover:border-accent-primary transition-colors"
              >
                {ICONS[l.type]} {LINK_LABELS[l.type]}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function TeamSection() {
  const { members, supervisors, alumni, collaboratorsNote, intro } = teamData;

  return (
    <section id="team" className="grid gap-6 scroll-mt-24">
      <div className="pb-2 grid gap-3">
        <h2 className="text-[clamp(1.125rem,1.3vw,1.25rem)] font-semibold">
          Research Team
        </h2>
        <p className="text-muted text-[clamp(1rem,1.1vw,1.0625rem)] max-w-[70ch]">
          {intro}
        </p>
      </div>

      <div className="grid gap-10">
        {members.map((m, i) => (
          <MemberRow key={i} member={m} />
        ))}
      </div>

      <hr className="border-divider" />

      <div className="grid gap-6">
        <h3 className="text-base font-bold">Faculty Supervisors</h3>
        <div className="grid gap-10">
          {supervisors.map((m, i) => (
            <MemberRow key={i} member={m} />
          ))}
        </div>
      </div>

      <hr className="border-divider" />

      <div className="grid gap-4">
        <h3 className="text-base font-bold">Alumni</h3>
        <ul className="grid gap-3">
          {alumni.map((a, i) => (
            <li key={i} className="text-base leading-[1.65]">
              <span className="font-bold">
                {a.href ? (
                  <a href={a.href} className="hover:underline">
                    {a.name}
                  </a>
                ) : (
                  a.name
                )}
              </span>{" "}
              &ndash; {a.role}
              {a.focus ? `, ${a.focus}` : ""} ({a.years})
              {a.now && (
                <>
                  , now{" "}
                  {a.nowHref ? (
                    <a href={a.nowHref} className="hover:underline">
                      {a.now}
                    </a>
                  ) : (
                    a.now
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-divider" />

      <div className="grid gap-2">
        <h3 className="text-base font-bold">Collaborators</h3>
        <p className="text-muted">{collaboratorsNote}</p>
      </div>
    </section>
  );
}
