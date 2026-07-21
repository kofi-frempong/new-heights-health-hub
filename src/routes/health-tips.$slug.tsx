import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { ARTICLES } from "@/lib/articles";

export const Route = createFileRoute("/health-tips/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article not found — New Heights Pharmacy" }, { name: "robots", content: "noindex" }] };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} — New Heights Pharmacy` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ArticlePage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-bold text-foreground">Article not found</h1>
      <p className="mt-2 text-muted-foreground">This article may have moved.</p>
      <Link to="/health-tips" className="mt-6 inline-flex items-center gap-1 text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" /> Back to Health Tips
      </Link>
    </div>
  ),
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = ARTICLES.filter((a) => a.slug !== article.slug && a.category === article.category).slice(0, 3);
  const fallback = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);
  const suggestions = related.length ? related : fallback;

  return (
    <article>
      <div className={`bg-gradient-to-br ${article.gradient}`}>
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <Link to="/health-tips" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>
          <span className="mt-6 inline-flex w-fit rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-primary">
            {article.category}
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            {article.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">{article.author}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {article.readTime}</span>
          </div>
          <div className="mt-10 flex aspect-[16/9] items-center justify-center rounded-3xl bg-background/60 text-8xl shadow-inner">
            {article.icon}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
          {article.body.map((p: string, i: number) => <p key={i}>{p}</p>)}
        </div>
        {article.sources.length > 0 && (
          <div className="mt-10 rounded-2xl border border-border/60 bg-surface p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Sources</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {article.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <section className="border-t border-border/60 bg-surface py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-foreground">Related articles</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {suggestions.map((a) => (
              <Link
                key={a.slug}
                to="/health-tips/$slug"
                params={{ slug: a.slug }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card transition-shadow hover:shadow-lg"
              >
                <div className={`flex aspect-[16/10] items-center justify-center bg-gradient-to-br ${a.gradient} text-6xl`}>{a.icon}</div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <span className="w-fit rounded-full bg-secondary px-2 py-0.5 text-[11px] font-medium text-primary">{a.category}</span>
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary">{a.title}</h3>
                  <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-primary">
                    Read <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
