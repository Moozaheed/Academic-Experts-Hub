"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, TrendingUp, UserCheck, Clock, Globe, HeadphonesIcon } from "lucide-react";

interface StatItem {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
  iconBg: string;
}

const stats: StatItem[] = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Students Helped",
    description: "International students guided to academic success",
    color: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    icon: TrendingUp,
    value: 98,
    suffix: "%",
    label: "Success Rate",
    description: "Students who met or exceeded their academic goals",
    color: "text-green-600",
    iconBg: "bg-green-50",
  },
  {
    icon: UserCheck,
    value: 50,
    suffix: "+",
    label: "Expert Consultants",
    description: "Industry professionals and academic specialists",
    color: "text-purple-600",
    iconBg: "bg-purple-50",
  },
  {
    icon: Clock,
    value: 3,
    suffix: "+",
    label: "Years Experience",
    description: "Delivering quality academic consulting services",
    color: "text-indigo-600",
    iconBg: "bg-indigo-50",
  },
  {
    icon: Globe,
    value: 30,
    suffix: "+",
    label: "Countries Served",
    description: "Students from every corner of the world",
    color: "text-cyan-600",
    iconBg: "bg-cyan-50",
  },
  {
    icon: HeadphonesIcon,
    value: 24,
    suffix: "/7",
    label: "Support Available",
    description: "WhatsApp support around the clock",
    color: "text-orange-600",
    iconBg: "bg-orange-50",
  },
];

function AnimatedCounter({
  target,
  suffix,
  isVisible,
}: {
  target: number;
  suffix: string;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const duration = 2000;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target]);

  return (
    <span className="font-heading text-4xl md:text-5xl font-bold text-slate-900">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-slate-50 border-y border-slate-100">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-4">
            <span className="text-indigo-600 text-sm font-semibold">Our Track Record</span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Numbers That Speak for Themselves
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Real results from real students across the globe. Every number represents an
            academic success story.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 text-center group"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${stat.iconBg} flex items-center justify-center mx-auto mb-3`}
                >
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>

                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  isVisible={isInView}
                />

                <p className="font-semibold text-slate-800 text-sm mt-1 mb-1">{stat.label}</p>
                <p className="text-slate-400 text-xs leading-relaxed">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
