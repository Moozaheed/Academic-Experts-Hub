"use client";

import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  categories: string[];
  selected: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
            selected === category
              ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
              : "bg-white border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
