import type { Metadata } from "next";
import {
  BookOpen,
  FlaskConical,
  BarChart3,
  Search,
  FileText,
  Code2,
  Briefcase,
  Award,
  ArrowRight,
  CheckCircle,
  MessageCircle,
} from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services | Academic Experts Hub",
  description:
    "Comprehensive academic consulting services including thesis writing, research methodology, data analysis, literature review, software engineering projects, and more.",
};

const services = [
  {
    id: "thesis",
    icon: BookOpen,
    title: "Thesis & Dissertation Writing",
    tagline: "From proposal to defense-ready",
    description:
      "Full thesis and dissertation support tailored to your research area, institution requirements, and degree level. We work with postgraduate students across all disciplines, from sciences and engineering to business and humanities.",
    included: [
      "Research proposal and topic development",
      "Chapter-by-chapter writing and editing",
      "Academic argumentation and structure",
      "Citation and referencing (APA, Harvard, MLA, Chicago)",
      "Plagiarism checking and originality guarantee",
      "Supervisor comment integration",
      "Defense preparation and abstract writing",
    ],
    suitable: ["PhD Students", "Masters Students", "MBA Candidates"],
    color: "from-blue-500/10 to-indigo-500/5",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200",
    whatsappMessage:
      "Hi, I need help with my Thesis or Dissertation. Can you assist me?",
  },
  {
    id: "methodology",
    icon: FlaskConical,
    title: "Research Methodology",
    tagline: "Design, justify, and execute your research",
    description:
      "Expert guidance on designing and implementing a rigorous research methodology. We help you select the appropriate approach, justify your choices in academic terms, and ensure your methodology chapter stands up to examiner scrutiny.",
    included: [
      "Research paradigm selection and justification",
      "Quantitative, qualitative, and mixed methods design",
      "Research instrument development (surveys, interview guides)",
      "Sampling strategy and sample size determination",
      "Validity, reliability, and trustworthiness frameworks",
      "Ethical considerations and IRB guidance",
      "Data collection protocol design",
    ],
    suitable: ["PhD Students", "MSc Researchers", "Undergraduate Final Year"],
    color: "from-purple-500/10 to-violet-500/5",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200",
    whatsappMessage:
      "Hi, I need help designing my research methodology. Can you assist me?",
  },
  {
    id: "data-analysis",
    icon: BarChart3,
    title: "Data Analysis",
    tagline: "Rigorous analysis with professional tools",
    description:
      "Statistical data analysis using the tools appropriate to your research design. From descriptive statistics and hypothesis testing to advanced regression modeling, we ensure your analysis is methodologically sound and clearly reported.",
    included: [
      "Descriptive and inferential statistics",
      "SPSS data analysis and output interpretation",
      "R programming for statistical computing",
      "Python (pandas, scipy, statsmodels) analysis",
      "Regression, correlation, and ANOVA",
      "Qualitative data analysis (NVivo, thematic analysis)",
      "Publication-quality visualization and reporting",
    ],
    suitable: ["All Research Students", "MBA Candidates", "Science Students"],
    color: "from-cyan-500/10 to-sky-500/5",
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    borderColor: "border-cyan-200",
    whatsappMessage:
      "Hi, I need help with data analysis for my research. Can you assist me?",
  },
  {
    id: "literature",
    icon: Search,
    title: "Literature Review",
    tagline: "Comprehensive, critically synthesized scholarship",
    description:
      "Professionally structured literature reviews that demonstrate command of the academic field, identify research gaps, and position your work within existing scholarship. Both systematic and narrative review approaches supported.",
    included: [
      "Database search strategy development",
      "Systematic and narrative review approaches",
      "Critical synthesis of scholarly sources",
      "Research gap identification",
      "Thematic and conceptual organization",
      "Conceptual framework development",
      "Reference management and citation accuracy",
    ],
    suitable: ["All Postgraduate Students", "Final Year Undergraduates"],
    color: "from-emerald-500/10 to-teal-500/5",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    whatsappMessage:
      "Hi, I need help writing a literature review. Can you assist me?",
  },
  {
    id: "academic-writing",
    icon: FileText,
    title: "Academic Writing",
    tagline: "Essays, reports, and assignments across all disciplines",
    description:
      "Professional academic writing support for undergraduate and postgraduate coursework. Research-backed content, properly structured arguments, and accurate citations that meet your institution's academic standards.",
    included: [
      "Research essays and argumentative papers",
      "Business and management reports",
      "Case study analysis",
      "Annotated bibliographies",
      "Academic English editing and proofreading",
      "Presentation and poster development",
      "Assignment-specific formatting",
    ],
    suitable: [
      "Undergraduate Students",
      "Postgraduate Students",
      "International Students",
    ],
    color: "from-orange-500/10 to-amber-500/5",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    borderColor: "border-orange-200",
    whatsappMessage:
      "Hi, I need help with academic writing or an assignment. Can you assist me?",
  },
  {
    id: "software",
    icon: Code2,
    title: "Software Engineering Projects",
    tagline: "Full-stack, ML, and AI project implementation",
    description:
      "Complete software engineering project development for final year and postgraduate students. From system design through full implementation, documentation, and deployment — built to the standards of professional software development.",
    included: [
      "System architecture and design",
      "Full-stack web application development (Next.js, React, Node.js)",
      "Machine learning and AI project implementation",
      "Database design and implementation",
      "API development and integration",
      "Technical documentation and README",
      "Code review, testing, and deployment support",
    ],
    suitable: [
      "Computer Science Students",
      "Software Engineering Students",
      "IT Project Students",
    ],
    color: "from-indigo-500/10 to-blue-500/5",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    borderColor: "border-indigo-200",
    whatsappMessage:
      "Hi, I need help with a software engineering project. Can you assist me?",
  },
  {
    id: "business",
    icon: Briefcase,
    title: "Business Studies",
    tagline: "MBA, marketing, finance, and strategy",
    description:
      "Industry-informed academic support for business and management students. We combine rigorous academic frameworks with real-world business understanding to produce work that is both theoretically grounded and practically insightful.",
    included: [
      "MBA dissertation research and writing",
      "Marketing strategy and consumer behavior analysis",
      "Financial modeling and corporate finance assignments",
      "Strategic management case studies",
      "Entrepreneurship and innovation projects",
      "Operations and supply chain analysis",
      "Business research and stakeholder analysis",
    ],
    suitable: ["MBA Students", "Business Masters Students", "Undergraduate Business"],
    color: "from-rose-500/10 to-pink-500/5",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    borderColor: "border-rose-200",
    whatsappMessage:
      "Hi, I need help with a business studies assignment or MBA dissertation. Can you assist me?",
  },
  {
    id: "publication",
    icon: Award,
    title: "Research Publication Support",
    tagline: "From manuscript to published paper",
    description:
      "End-to-end support for researchers preparing academic work for publication. From structuring the manuscript and polishing academic English to selecting appropriate journals and responding to reviewer feedback.",
    included: [
      "Journal paper structure and framing",
      "Academic English editing to publication standard",
      "Abstract and keyword optimization",
      "Journal selection and author guidelines compliance",
      "Revision and response to reviewers",
      "Conference paper and presentation support",
      "Preprint and open access guidance",
    ],
    suitable: ["PhD Students", "Academic Researchers", "Postdoctoral Researchers"],
    color: "from-violet-500/10 to-purple-500/5",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    borderColor: "border-violet-200",
    whatsappMessage:
      "Hi, I need help preparing a research paper for publication. Can you assist me?",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(99,102,241,0.5) 0, transparent 50%), radial-gradient(circle at 70% 20%, rgba(139,92,246,0.4) 0, transparent 50%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
            <span className="text-white/80 text-sm font-medium">What We Deliver</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-5">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-slate-300 text-xl leading-relaxed max-w-2xl mx-auto">
            Professional academic support across all disciplines, from thesis writing and
            research methodology to data analysis and software development.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`flex flex-col lg:flex-row gap-8 p-8 md:p-10 rounded-3xl bg-gradient-to-br ${service.color} border ${service.borderColor} scroll-mt-24`}
                >
                  {/* Left */}
                  <div className="lg:w-2/5 flex flex-col">
                    <div
                      className={`w-12 h-12 rounded-xl ${service.iconBg} flex items-center justify-center mb-5`}
                    >
                      <Icon className={`w-6 h-6 ${service.iconColor}`} />
                    </div>
                    <span className="text-slate-500 text-sm font-medium uppercase tracking-wide mb-2">
                      Service {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                      {service.title}
                    </h2>
                    <p className={`${service.iconColor} font-semibold text-sm mb-4`}>
                      {service.tagline}
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.suitable.map((s) => (
                        <span
                          key={s}
                          className="px-3 py-1.5 rounded-full bg-white text-slate-700 text-xs font-medium border border-slate-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <a
                      href={buildWhatsAppUrl(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-glow w-fit"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Discuss This Service
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Right: what's included */}
                  <div className="lg:w-3/5">
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl border border-white/60 p-6 md:p-8">
                      <h3 className="font-heading font-semibold text-slate-900 mb-5">
                        What&apos;s Included
                      </h3>
                      <ul className="space-y-3">
                        {service.included.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <CheckCircle
                              className={`w-5 h-5 ${service.iconColor} flex-shrink-0 mt-0.5`}
                            />
                            <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950">
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-slate-300 text-lg mb-8">
            Contact us on WhatsApp for a free consultation. We&apos;ll discuss your requirements
            and provide a tailored solution.
          </p>
          <a
            href={buildWhatsAppUrl(
              "Hi, I've reviewed your services and I'd like to discuss my academic project."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-lg hover:opacity-90 transition-opacity shadow-glow"
          >
            <MessageCircle className="w-5 h-5" />
            Book Free Consultation
          </a>
        </div>
      </section>
    </>
  );
}
