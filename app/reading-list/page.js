import Link from "next/link";
import readingListData from "../../content/reading-list.json";
import { groupByYear, postHref } from "../../lib/reading-list";

export const metadata = {
  title: "Reading List | Connected Minds",
  description:
    "Articles from the Connected Minds, Stronger Minds research team on healthy ageing, cognition, and social interaction.",
};

export default function ReadingListPage() {
  const readingListByYear = groupByYear(readingListData.posts || []);

  return (
    <article className="max-w-[1200px] mx-auto pb-24">
      <header className="grid gap-3 mb-10">
        <h1 className="text-[clamp(1.75rem,3.2vw,2.25rem)] font-bold leading-[1.2]">
          Reading List
        </h1>
        <p className="text-muted text-base leading-[1.6] max-w-[65ch]">
          Articles from our research team on healthy ageing, cognition, and
          social interaction.
        </p>
      </header>

      {readingListByYear.length === 0 ? (
        <p className="text-muted">Nothing posted yet — check back soon.</p>
      ) : (
        <div className="grid">
          {readingListByYear.map((group, i) => (
            <div
              key={i}
              className="grid grid-cols-12 border-b last:border-b-0 border-divider"
            >
              <p className="text-muted text-[clamp(0.9375rem,0.95vw,1.0625rem)] font-medium tracking-[0.025em] py-4 col-span-2 relative top-[2px]">
                {group.year}
              </p>
              <div className="col-span-10 pr-2">
                {group.items.map((item, j) => (
                  <Link
                    key={j}
                    href={postHref(item)}
                    className="group flex sm:flex-row flex-col border-b last-of-type:border-b-0 py-4 pr-4 lg:pr-0 transition-all border-divider"
                  >
                    <h3 className="flex-1 text-[clamp(1rem,1.2vw,1.125rem)] font-semibold group-hover:text-accent-primary">
                      {item.title}
                    </h3>
                    <p className="text-muted text-[clamp(0.9375rem,0.95vw,1.0625rem)] font-medium tracking-[0.025em]">
                      {item.date}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </article>
  );
}
