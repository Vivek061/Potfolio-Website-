import React from 'react';
import { motion } from 'motion/react';
import { MapPin, FileDown, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHT_STATS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-800/60">
      {/* Subtle ambient gradient mesh in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[350px] bg-teal-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Location & Title Line (Clean unboxed text metadata) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400 mb-4">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>Pune, Maharashtra, India</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">Data Analyst &amp; Data Science Professional</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-emerald-400 font-mono text-[11px]">Available for Opportunities</span>
            </div>

            {/* Headline with balanced wrap */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-white tracking-tight leading-[1.15] mb-5 text-balance">
              Turning Data Into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400">
                Meaningful Insights.
              </span>
            </h1>

            {/* Candidate Identity Name */}
            <div className="mb-4">
              <span className="text-lg md:text-xl font-semibold text-slate-200">
                I&apos;m <span className="text-white border-b-2 border-cyan-400/60 pb-0.5">{PERSONAL_INFO.name}</span>
              </span>
            </div>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Data Analyst &amp; Data Science fresher with a BCA degree (8.7 CGPA), practical consulting experience analyzing 200,000+ records, and proven ability to build KPI dashboards, develop high-performance SQL pipelines, and deploy predictive Machine Learning solutions that solve real-world business problems.
            </p>

            {/* Action Buttons: View Projects, Download Resume, Contact Me */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#projects"
                className="px-5 py-3 text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-all duration-200 shadow-sm shadow-cyan-400/25 flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 text-sm font-medium text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-colors flex items-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="px-5 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Subtext highlight */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Specialized in:</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-300">
                <span>PostgreSQL &amp; SQL</span>
                <span className="text-slate-600">/</span>
                <span>Python &amp; Pandas</span>
                <span className="text-slate-600">/</span>
                <span>Power BI Dashboards</span>
                <span className="text-slate-600">/</span>
                <span>Predictive ML</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Prominent Professional Portrait naturally blended */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyan-500/20 via-slate-800/40 to-teal-500/20 rounded-2xl blur-md -z-10" />

              {/* Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl shadow-black/60 group">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt="Vivek Bhosale - Data Analyst & Data Science Professional"
                  className="w-full aspect-square object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Subtle gradient overlay at bottom for seamless integration */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#080c14] via-[#080c14]/70 to-transparent pointer-events-none" />

                {/* Floating caption card */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-white truncate">Vivek Bhosale</p>
                    <p className="text-[11px] text-cyan-400 truncate">Rubixe Consulting Intern Alumni</p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={onOpenResume}
                      className="p-2 text-xs text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-600/60 transition-colors flex items-center gap-1 cursor-pointer"
                      title="View Full Profile Credentials"
                    >
                      <Eye className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="hidden sm:inline text-[11px]">Credentials</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-width Metrics Strip Below the Split (adhering to Portfolio reference guidelines) */}
        <div className="mt-14 pt-10 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {HIGHLIGHT_STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.08 }}
                className="flex flex-col"
              >
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-slate-200 mt-1">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-400 mt-0.5">
                  {stat.description}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
