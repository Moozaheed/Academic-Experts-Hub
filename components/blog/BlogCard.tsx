import Link from "next/link";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/lib/blog-data";

const categoryColors: Record<string, string> = {
  "Academic Writing": "bg-blue-50 text-blue-700 border-blue-100",
  "Thesis Development": "bg-purple-50 text-purple-700 border-purple-100",
  "Research Methodology": "bg-indigo-50 text-indigo-700 border-indigo-100",
  "Data Analysis": "bg-cyan-50 text-cyan-700 border-cyan-100",
  "Artificial Intelligence": "bg-violet-50 text-violet-700 border-violet-100",
  "Software Engineering": "bg-green-50 text-green-700 border-green-100",
  "Business Studies": "bg-orange-50 text-orange-700 border-orange-100",
  "Career Development": "bg-rose-50 text-rose-700 border-rose-100",
};

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const colorClass =
    categoryColors[post.category] || "bg-slate-100 text-slate-700 border-slate-200";

  return (
    <article
      className={`group bg-white rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300 overflow-hidden flex flex-col ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {/* Top color band */}
      <div className="h-1.5 bg-gradient-to-r from-indigo-500 to-purple-600" />

      <div className="p-6 flex flex-col flex-1">
        {/* Category + read time */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${colorClass}`}
          >
            {post.category}
          </span>
          <div className="flex items-center gap-1 text-slate-400 text-xs">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h3
            className={`font-heading font-bold text-slate-900 leading-snug mb-3 group-hover:text-indigo-700 transition-colors ${
              featured ? "text-xl md:text-2xl" : "text-lg"
            }`}
          >
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-5">{post.excerpt}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{formatDate(post.date)}</span>
            </div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="flex items-center gap-1.5 text-indigo-600 text-sm font-semibold hover:gap-2.5 transition-all duration-200"
          >
            Read
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
