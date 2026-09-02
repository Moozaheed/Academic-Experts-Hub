"use client";

import { motion } from "framer-motion";
import { GraduationCap, Clock } from "lucide-react";

const activities = [
  { name: "Aisha M.", programme: "MSc Marketing", university: "University of Manchester", country: "🇬🇧", service: "Dissertation proposal review", daysAgo: 1 },
  { name: "Carlos R.", programme: "MBA", university: "University of Toronto", country: "🇨🇦", service: "Business case study analysis coaching", daysAgo: 2 },
  { name: "Priya S.", programme: "PhD Education", university: "University of Melbourne", country: "🇦🇺", service: "Literature review structure and gap analysis", daysAgo: 2 },
  { name: "James T.", programme: "BSc Computer Science", university: "University of Leeds", country: "🇬🇧", service: "Final year software project mentoring", daysAgo: 3 },
  { name: "Fatima A.", programme: "MSc Finance", university: "University of Birmingham", country: "🇬🇧", service: "Research methodology coaching", daysAgo: 3 },
  { name: "Omar K.", programme: "MBA", university: "York University", country: "🇨🇦", service: "Strategic management case study guidance", daysAgo: 4 },
  { name: "Yuki H.", programme: "MSc Data Science", university: "University of Sydney", country: "🇦🇺", service: "SPSS data analysis tutoring", daysAgo: 4 },
  { name: "Nour E.", programme: "PhD Business", university: "University of Edinburgh", country: "🇬🇧", service: "Thesis chapter 3 methodology review", daysAgo: 5 },
  { name: "Ravi P.", programme: "MEng Engineering", university: "University of Waterloo", country: "🇨🇦", service: "Technical report structure coaching", daysAgo: 5 },
  { name: "Sara L.", programme: "MSc Nursing", university: "Monash University", country: "🇦🇺", service: "Research ethics and data collection coaching", daysAgo: 6 },
  { name: "Ahmed F.", programme: "MBA", university: "University of London", country: "🇬🇧", service: "Financial analysis framework guidance", daysAgo: 7 },
  { name: "Isabella C.", programme: "PhD Psychology", university: "University of British Columbia", country: "🇨🇦", service: "Qualitative analysis and NVivo coaching", daysAgo: 7 },
  { name: "Daniel O.", programme: "BSc Economics", university: "RMIT University", country: "🇦🇺", service: "Econometrics regression analysis tutoring", daysAgo: 8 },
  { name: "Mariam B.", programme: "MSc International Relations", university: "University of Exeter", country: "🇬🇧", service: "Essay argumentation and critical analysis coaching", daysAgo: 8 },
  { name: "Kevin L.", programme: "PhD Computer Science", university: "University of Waterloo", country: "🇨🇦", service: "AI project architecture review", daysAgo: 9 },
  { name: "Leila Z.", programme: "MSc Public Health", university: "University of Queensland", country: "🇦🇺", service: "Systematic literature review guidance", daysAgo: 9 },
  { name: "Mohammed S.", programme: "MBA", university: "Cranfield University", country: "🇬🇧", service: "Dissertation proposal and topic refinement", daysAgo: 10 },
  { name: "Anya K.", programme: "MSc Accounting", university: "University of Ottawa", country: "🇨🇦", service: "Financial reporting case study coaching", daysAgo: 10 },
  { name: "Lucas M.", programme: "PhD Engineering", university: "University of New South Wales", country: "🇦🇺", service: "Mixed methods research design coaching", daysAgo: 11 },
  { name: "Zara W.", programme: "MSc Human Resources", university: "University of Warwick", country: "🇬🇧", service: "Literature review critical synthesis mentoring", daysAgo: 12 },
];

function daysLabel(n: number) {
  if (n === 1) return "Yesterday";
  if (n <= 7) return `${n} days ago`;
  return `${Math.ceil(n / 7)} week${Math.ceil(n / 7) > 1 ? "s" : ""} ago`;
}

export default function StudentActivity() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 mb-4">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-green-700 text-sm font-semibold">Recent Student Sessions</span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Students We&apos;ve Supported Recently
          </h2>
          <p className="text-slate-500 text-base max-w-xl mx-auto">
            Anonymised records of recent 1-on-1 mentoring sessions. Names and institutions
            are abbreviated to protect student privacy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {activities.map((a, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-indigo-200 hover:bg-indigo-50/30 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <GraduationCap className="w-4 h-4 text-indigo-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-slate-900 text-sm">{a.name}</span>
                  <span className="text-slate-400 text-xs">·</span>
                  <span className="text-slate-600 text-xs">{a.programme}</span>
                  <span className="text-slate-400 text-xs">·</span>
                  <span className="text-sm">{a.country}</span>
                </div>
                <p className="text-slate-500 text-xs mt-0.5 truncate">{a.university}</p>
                <p className="text-indigo-700 text-xs font-medium mt-1">{a.service}</p>
              </div>
              <div className="flex items-center gap-1 text-slate-400 text-xs flex-shrink-0">
                <Clock className="w-3 h-3" />
                <span>{daysLabel(a.daysAgo)}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-slate-400 text-xs mt-6">
          Student names shown as first name + last initial only. University names included with student consent for programme context.
        </p>
      </div>
    </section>
  );
}
