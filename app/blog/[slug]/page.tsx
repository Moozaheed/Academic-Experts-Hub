import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { formatDate, buildWhatsAppUrl } from "@/lib/utils";
import BlogCard from "@/components/blog/BlogCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Academic Experts Hub Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const otherPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category !== post.category)
    .slice(0, 2 - relatedPosts.length);

  const suggestedPosts = [...relatedPosts, ...otherPosts].slice(0, 2);

  // Convert markdown-like content to structured HTML segments
  const contentSections = post.content
    .trim()
    .split("\n\n")
    .filter(Boolean);

  return (
    <>
      {/* Article header */}
      <section className="relative pt-32 pb-14 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(99,102,241,0.5) 0, transparent 50%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-start justify-between mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">
              {post.category}
            </span>
          </div>

          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white leading-snug mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">SA</span>
              </div>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <article className="lg:col-span-2">
              {/* Excerpt */}
              <div className="text-slate-600 text-xl leading-relaxed mb-10 pb-10 border-b border-slate-100 font-medium">
                {post.excerpt}
              </div>

              {/* Content */}
              <div className="prose prose-slate max-w-none">
                {contentSections.map((section, i) => {
                  if (section.startsWith("## ")) {
                    return (
                      <h2
                        key={i}
                        className="font-heading text-2xl font-bold text-slate-900 mt-10 mb-4 leading-snug"
                      >
                        {section.replace("## ", "")}
                      </h2>
                    );
                  }
                  if (section.startsWith("### ")) {
                    return (
                      <h3
                        key={i}
                        className="font-heading text-xl font-semibold text-slate-900 mt-8 mb-3"
                      >
                        {section.replace("### ", "")}
                      </h3>
                    );
                  }
                  return (
                    <p
                      key={i}
                      className="text-slate-600 leading-relaxed mb-5 text-base"
                    >
                      {section}
                    </p>
                  );
                })}
              </div>

              {/* Post footer CTA */}
              <div className="mt-14 p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100">
                <h3 className="font-heading font-bold text-slate-900 text-xl mb-3">
                  Need Expert Support?
                </h3>
                <p className="text-slate-600 mb-5 leading-relaxed">
                  Academic Experts Hub provides professional guidance for {post.category.toLowerCase()} and all
                  academic disciplines. Book a free consultation today.
                </p>
                <a
                  href={buildWhatsAppUrl(
                    `Hi, I read your article on "${post.title}" and I'd like to discuss academic support.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-glow"
                >
                  <MessageCircle className="w-4 h-4" />
                  Book Free Consultation
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-7">
              {/* Author card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h3 className="font-heading font-semibold text-slate-900 text-sm uppercase tracking-wide mb-4">
                  Written By
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-white">SA</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{post.author}</p>
                    <p className="text-slate-500 text-sm">Founder &amp; Lead Consultant</p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Software Engineer with 3+ years of experience in enterprise software, AI, and
                  academic consulting.
                </p>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-white mb-2">
                  Need Academic Help?
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Get expert guidance on your thesis, dissertation, or any academic project.
                </p>
                <a
                  href={buildWhatsAppUrl("Hi, I need academic support.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-400 transition-colors text-white text-sm font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Related posts */}
              {suggestedPosts.length > 0 && (
                <div>
                  <h3 className="font-heading font-semibold text-slate-900 text-sm uppercase tracking-wide mb-4">
                    Related Articles
                  </h3>
                  <div className="space-y-4">
                    {suggestedPosts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="block group p-4 rounded-xl border border-slate-200 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all duration-200"
                      >
                        <span className="text-xs font-medium text-indigo-600 mb-1 block">
                          {p.category}
                        </span>
                        <p className="text-slate-800 text-sm font-semibold leading-snug group-hover:text-indigo-700 transition-colors">
                          {p.title}
                        </p>
                        <div className="flex items-center gap-1 mt-2 text-slate-400 text-xs">
                          <Clock className="w-3 h-3" />
                          <span>{p.readTime} min read</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
