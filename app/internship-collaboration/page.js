import icData from "../../content/internship-collaboration.json";

export const metadata = {
  title: "Get Involved | Connected Minds",
  description:
    "Internship opportunities and collaboration opportunities with the Connected Minds, Stronger Minds research project.",
};

const CARD_COLORS = [
  {
    header: "bg-amber-100 dark:bg-amber-900/40 text-amber-900 dark:text-amber-100",
    body: "bg-amber-50 dark:bg-amber-950/20",
  },
  {
    header: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-900 dark:text-emerald-100",
    body: "bg-emerald-50 dark:bg-emerald-950/20",
  },
  {
    header: "bg-sky-100 dark:bg-sky-900/40 text-sky-900 dark:text-sky-100",
    body: "bg-sky-50 dark:bg-sky-950/20",
  },
  {
    header: "bg-violet-100 dark:bg-violet-900/40 text-violet-900 dark:text-violet-100",
    body: "bg-violet-50 dark:bg-violet-950/20",
  },
];

function OpportunityCard({ item, kind, colorIndex }) {
  const c = CARD_COLORS[colorIndex % CARD_COLORS.length];
  return (
    <div className="rounded-xl overflow-hidden border border-divider">
      <div className={`px-5 py-3 font-bold ${c.header}`}>{item.title}</div>
      <div className={`px-5 py-4 grid gap-2 ${c.body}`}>
        {item.description && (
          <p className="leading-[1.7]">{item.description}</p>
        )}
        {kind === "internship" && item.requirements && (
          <p className="text-base leading-[1.7]">
            <span className="font-semibold">Requirements:</span>{" "}
            {item.requirements}
          </p>
        )}
        {kind === "internship" && item.howToApply && (
          <p className="text-base leading-[1.7]">
            <span className="font-semibold">How to apply:</span>{" "}
            {item.howToApply}
          </p>
        )}
        {kind === "collaboration" && item.contact && (
          <p className="text-base leading-[1.7]">
            <span className="font-semibold">Contact:</span> {item.contact}
          </p>
        )}
      </div>
    </div>
  );
}

export default function InternshipCollaborationPage() {
  const { title, intro, internships, collaborations, faq, contact } = icData;

  const contactHref = contact?.email
    ? `mailto:${contact.email}${
        contact.subject ? `?subject=${encodeURIComponent(contact.subject)}` : ""
      }`
    : undefined;

  return (
    <article className="max-w-[900px] mx-auto pb-24">
      <header className="grid gap-3 mb-10">
        <h1 className="text-[clamp(1.75rem,3.2vw,2.25rem)] font-bold leading-[1.2]">
          {title}
        </h1>
        <p className="text-muted text-[1.0625rem] leading-[1.6] max-w-[70ch]">
          {intro}
        </p>
      </header>

      <div className="grid gap-14">
        {internships && internships.length > 0 && (
          <section className="grid gap-4">
            <h2 className="text-[clamp(1.125rem,1.3vw,1.25rem)] font-semibold">
              Internship Opportunities
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {internships.map((item, i) => (
                <OpportunityCard
                  key={i}
                  item={item}
                  kind="internship"
                  colorIndex={i}
                />
              ))}
            </div>
          </section>
        )}

        {collaborations && collaborations.length > 0 && (
          <section className="grid gap-4">
            <h2 className="text-[clamp(1.125rem,1.3vw,1.25rem)] font-semibold">
              Collaboration Opportunities
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {collaborations.map((item, i) => (
                <OpportunityCard
                  key={i}
                  item={item}
                  kind="collaboration"
                  colorIndex={i + 1}
                />
              ))}
            </div>
          </section>
        )}

        {faq && faq.length > 0 && (
          <section className="grid gap-4">
            <h2 className="text-[clamp(1.125rem,1.3vw,1.25rem)] font-semibold">
              FAQ
            </h2>
            <div className="grid gap-3">
              {faq.map((item, i) => (
                <details
                  key={i}
                  className="rounded-xl border border-divider p-5 group [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-[1.0625rem]">
                    {item.q}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>
                  <p className="text-muted leading-[1.75] mt-3">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {contact && (contact.note || contactHref) && (
          <div className="rounded-xl border border-accent-primary/30 bg-accent-primary/5 p-6 flex items-center justify-between gap-6 flex-wrap">
            {contact.note && (
              <p className="leading-[1.65] max-w-[55ch]">{contact.note}</p>
            )}
            {contactHref && (
              <a
                href={contactHref}
                className="inline-flex items-center w-fit shrink-0 rounded-full bg-accent-primary text-white px-5 py-2.5 text-base font-medium hover:opacity-90 transition-opacity"
              >
                {contact.buttonLabel || "Get in touch"}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
