"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  country: string;
  degree: string;
  service: string;
  initials: string;
  color: string;
}

const testimonials: Testimonial[] = [];

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    startTimer();
  };

  const prev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    startTimer();
  };

  const next = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    startTimer();
  };

  const current = testimonials[currentIndex];

  // If no testimonials, return null to hide section
  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-4">
            <span className="text-indigo-600 text-sm font-semibold">Student Voices</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Real feedback from real students who trusted us with their academic goals.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white rounded-3xl border border-slate-200 p-8 md:p-10 shadow-sm"
              >
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="w-8 h-8 text-indigo-200 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <StarRating />
                    <p className="text-slate-700 text-lg leading-relaxed mt-3 italic">
                      &ldquo;{current.quote}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${current.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="font-heading font-bold text-white text-sm">
                      {current.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{current.name}</p>
                    <p className="text-slate-500 text-sm">{current.degree}</p>
                    <p className="text-slate-400 text-xs">{current.country}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium">
                      {current.service}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-slate-500 group-hover:text-indigo-600" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    i === currentIndex
                      ? "w-6 h-2 bg-indigo-500"
                      : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                  )}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 rounded-xl border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-600" />
            </button>
          </div>
        </div>

        {/* Grid of mini testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100"
            >
              <div
                className={`w-9 h-9 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}
              >
                <span className="font-bold text-white text-xs">{t.initials}</span>
              </div>
              <div>
                <p className="font-medium text-slate-800 text-sm">{t.name}</p>
                <p className="text-slate-400 text-xs">{t.country}</p>
              </div>
              <StarRating count={5} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
