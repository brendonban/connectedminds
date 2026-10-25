import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import readingListData from "../../../content/reading-list.json";

function findPost(slug) {
  return (readingListData.posts || []).find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return (readingListData.posts || [])
    .filter((p) => p.slug && !p.externalHref)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Connected Minds`,
    description: post.body ? post.body.slice(0, 160).replace(/\n+/g, " ") : undefined,
  };
}

export default async function ReadingListPostPage({ params }) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();

  const html = marked.parse(post.body || "");

  return (
    <article className="max-w-[720px] mx-auto pb-24">
      <div className="mb-4">
        <Link
          href="/reading-list/"
          className="text-muted text-base hover:text-accent-primary"
        >
          &larr; Back to Reading List
        </Link>
      </div>

      <header className="grid gap-3 mb-10">
        <h1 className="text-[clamp(1.75rem,3.2vw,2.25rem)] font-bold leading-[1.2]">
          {post.title}
        </h1>
        {post.publishedDate && (
          <p className="text-muted text-base">Published on {post.publishedDate}</p>
        )}
      </header>

      <div
        className="prose prose-neutral dark:prose-invert max-w-none text-base prose-headings:font-bold prose-a:text-accent-primary prose-a:no-underline hover:prose-a:underline prose-p:leading-[1.75] prose-li:leading-[1.75]"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {post.references && post.references.length > 0 && (
        <div className="mt-12 pt-8 border-t border-divider">
          <h2 className="text-lg font-bold mb-4">References</h2>
          <ol className="grid gap-3 text-base text-muted list-decimal pl-5">
            {post.references.map((r, i) => (
              <li key={i}>
                {r.text}{" "}
                <a
                  href={r.href}
                  className="text-accent-primary hover:underline break-all"
                >
                  {r.href}
                </a>
              </li>
            ))}
          </ol>
        </div>
      )}

      {post.author && post.author.name && (
        <div className="mt-12 pt-8 border-t border-divider grid gap-1.5">
          <h2 className="text-lg font-bold mb-2">About the Author</h2>
          <p className="font-semibold">{post.author.name}</p>
          {post.author.role && (
            <p className="text-muted italic text-base">{post.author.role}</p>
          )}
          {post.author.bio && (
            <p className="mt-2 max-w-[65ch]">{post.author.bio}</p>
          )}
        </div>
      )}
    </article>
  );
}
