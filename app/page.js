import Link from "next/link";
import giData from "../content/get-involved.json";

function SectionHeading({ children }) {
  return <h2 className="text-xl font-bold mt-4 mb-2">{children}</h2>;
}

export default function Home() {
  const {
    title,
    subtitle,
    poster,
    intro,
    studyDetails,
    eligibility,
    partnerSection,
    compensation,
    timeline,
    notes,
    confidentiality,
    researcher,
    signupLinks,
  } = giData;

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12 py-10 md:py-[8vh]">
        <div className="grid gap-6 order-2 md:order-1">
          <p className="text-accent-primary text-[0.8125rem] font-semibold uppercase tracking-[0.08em]">
            A Healthy Ageing Research Project
          </p>
          <h1 className="text-[clamp(1.75rem,3vw,2.125rem)] font-semibold leading-[1.25] tracking-tight text-left w-full">
            Connected Minds, Stronger Minds
          </h1>
          <p className="text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.7] text-muted">
            We are a research project under Sunway University focused on
            healthy ageing. The question we are investigating is &mdash;
            &ldquo;Does social interaction during cognitive tasks impact how
            the brain works and how well people perform?&rdquo; Our focus is
            on older adults as they are experiencing age-related cognitive
            changes.
          </p>
        </div>

        <div className="order-1 md:order-2 rounded-2xl overflow-hidden border border-divider">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/eeg-headset.webp"
            alt="A researcher holding a dry EEG headset used in the study's brain activity measurements"
            className="w-full h-48 sm:h-64 md:h-full object-cover"
          />
        </div>
      </div>

      <article className="max-w-[720px] pb-24">
        <header className="grid gap-3 mb-10 scroll-mt-24" id="get-involved">
          <h2 className="text-[clamp(1.5rem,2.4vw,1.875rem)] font-bold leading-[1.2]">
            {title}
          </h2>
          <p className="text-muted text-[1.0625rem] leading-[1.6]">
            {subtitle}
          </p>
          {poster && (
            <a
              href={poster}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 w-fit rounded-full border border-divider px-4 py-2 text-base font-medium hover:border-accent-primary hover:text-accent-primary transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
              </svg>
              View Poster
            </a>
          )}
        </header>

        <div className="grid gap-6 leading-[1.75] text-[1.0625rem]">
          <p>{intro}</p>

          <p>The details of this research study is as follows:</p>

          <div className="rounded-xl border border-divider p-5 grid gap-2 text-[1rem]">
            <p>
              <span className="font-semibold">Venue (for lab sessions):</span>{" "}
              {studyDetails.venue}
            </p>
            <p>
              <span className="font-semibold">Date and Time:</span>{" "}
              {studyDetails.dateTime}
            </p>
            <p>
              <span className="font-semibold">Duration of Session:</span>{" "}
              {studyDetails.duration}
            </p>
          </div>

          <SectionHeading>Eligibility</SectionHeading>
          <p>{eligibility.intro}</p>
          <ul className="list-disc pl-5 grid gap-2">
            {eligibility.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <p className="text-muted text-base">{eligibility.partnerNote}</p>

          <SectionHeading>Choosing a Partner</SectionHeading>
          <p>{partnerSection}</p>

          <SectionHeading>Compensation</SectionHeading>
          <ul className="list-disc pl-5 grid gap-2">
            {compensation.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <SectionHeading>Study Timeline</SectionHeading>
          <p className="text-muted italic text-base">{timeline.note}</p>
          <ol className="list-decimal pl-5 grid gap-2">
            {timeline.steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>

          <SectionHeading>Notes</SectionHeading>
          <ul className="list-disc pl-5 grid gap-2">
            {notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>

          <SectionHeading>Confidentiality</SectionHeading>
          <p>{confidentiality}</p>

          <p className="text-[1rem]">
            Need directions or parking info? See the{" "}
            <Link href="/location/" className="text-accent-primary hover:underline">
              Location
            </Link>{" "}
            page. Have a question? Check the{" "}
            <Link href="/faq/" className="text-accent-primary hover:underline">
              FAQ
            </Link>
            . Looking for our research reading list instead? It's{" "}
            <Link href="/reading-list/" className="text-accent-primary hover:underline">
              here
            </Link>
            .
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-divider grid gap-1.5">
          <h2 className="text-lg font-bold mb-2">Researcher</h2>
          <p className="font-semibold">{researcher.name}</p>
          <p className="text-muted text-base">
            Email:{" "}
            <a
              href={`mailto:${researcher.email}`}
              className="text-accent-primary hover:underline"
            >
              {researcher.email}
            </a>
          </p>
          <p className="text-muted text-base">
            Contact number:{" "}
            <a
              href={`tel:${researcher.phone}`}
              className="text-accent-primary hover:underline"
            >
              {researcher.phoneDisplay}
            </a>
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-divider grid gap-6">
          <h2 className="text-lg font-bold">Sign Up</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {signupLinks.map((group, gi) => (
              <div
                key={gi}
                className="rounded-xl border border-divider p-5 grid gap-3"
              >
                <p className="font-semibold">{group.group}</p>
                <div className="flex flex-wrap gap-2">
                  {group.forms.map((f, fi) => (
                    <a
                      key={fi}
                      href={f.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full bg-accent-primary text-white px-4 py-2 text-base font-medium hover:opacity-90 transition-opacity"
                    >
                      {f.label} form
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
