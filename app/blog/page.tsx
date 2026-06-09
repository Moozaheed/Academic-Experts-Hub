"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "@/components/blog/BlogCard";
import CategoryFilter from "@/components/blog/CategoryFilter";
import { blogPosts, blogCategories } from "@/lib/blog-data";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filtered =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(99,102,241,0.5) 0, transparent 50%), radial-gradient(circle at 70% 20%, rgba(139,92,246,0.4) 0, transparent 50%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
            <span className="text-white/80 text-sm font-medium">Academic Resources</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-5">
            Insights &amp; <span className="gradient-text">Guidance</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed">
            Expert guides, methodology deep-dives, and practical advice from our
            academic consulting team — freely available for students everywhere.
          </p>
        </div>
      </section>

      {/* Blog content */}
      <section className="py-16 px-4 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Filter */}
          <div className="mb-10">
            <CategoryFilter
              categories={blogCategories}
              selected={selectedCategory}
              onChange={setSelectedCategory}
            />
          </div>

          {/* Results count */}
          <p className="text-slate-500 text-sm mb-8">
            Showing{" "}
            <span className="font-semibold text-slate-900">{filtered.length}</span>{" "}
            {filtered.length === 1 ? "article" : "articles"}
            {selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}
          </p>

          {/* Grid */}
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-400 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
