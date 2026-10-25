import faqData from "../../content/faq.json";

export const metadata = {
  title: "FAQ | Connected Minds",
  description: "Common questions about taking part in the Connected Minds study.",
};

export default function FaqPage() {
  const { title, intro, items } = faqData;

  return (
    <article className="max-w-[720px] mx-auto pb-24">
      <header className="grid gap-3 mb-10">
        <h1 className="text-[clamp(1.75rem,3.2vw,2.25rem)] font-bold leading-[1.2]">
          {title}
        </h1>
        {intro && (
          <p className="text-muted text-[1.0625rem] leading-[1.6] max-w-[65ch]">{intro}</p>
        )}
      </header>

      <div className="grid gap-3">
        {(items || []).map((item, i) => (
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
    </article>
  );
}
