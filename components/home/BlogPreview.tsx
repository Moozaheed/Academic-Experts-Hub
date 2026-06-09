"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/lib/blog-data";

const latestPosts = blogPosts.slice(0, 3);

export default function BlogPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-4">
              <span className="text-indigo-600 text-sm font-semibold">Insights & Guidance</span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 mb-3">
              Academic Resources
            </h2>
            <p className="text-slate-500 text-lg max-w-xl">
              Expert guides, methodology insights, and practical advice from our consulting team.
            </p>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-indigo-600 font-semibold hover:gap-3 transition-all duration-200 flex-shrink-0"
          >
            View All Posts
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Blog grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
