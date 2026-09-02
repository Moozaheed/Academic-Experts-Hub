import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Academic Experts Hub",
  description:
    "Expert guides on thesis consulting, dissertation guidance, research methodology, data analysis, and academic publishing — practical advice from the Academic Experts Hub consulting team.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
