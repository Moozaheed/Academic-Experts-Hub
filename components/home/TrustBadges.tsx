"use client";

import { motion } from "framer-motion";
import {
  Users,
  TrendingUp,
  Clock,
  ShieldCheck,
  Zap,
  Award,
  Globe,
  BookOpen,
} from "lucide-react";

const badges = [
  { icon: Users, label: "500+ Students Helped" },
  { icon: TrendingUp, label: "98% Success Rate" },
  { icon: Clock, label: "24/7 Support" },
  { icon: ShieldCheck, label: "Plagiarism Free" },
  { icon: Zap, label: "On-Time Delivery" },
  { icon: Award, label: "Industry Experts" },
  { icon: Globe, label: "30+ Countries Served" },
  { icon: BookOpen, label: "All Disciplines Covered" },
];

// Duplicate for seamless loop
const allBadges = [...badges, ...badges];

export default function TrustBadges() {
  return (
    <section className="bg-white border-y border-slate-100 py-6 overflow-hidden">
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll-left gap-8 w-max">
          {allBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={`${badge.label}-${index}`}
                className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 flex-shrink-0"
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 text-indigo-600" />
                </div>
                <span className="text-slate-700 text-sm font-medium whitespace-nowrap">
                  {badge.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
