import React from 'react';
import { motion } from 'motion/react';
import { WORK_EXPERIENCE } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Layers, Clock } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Work Experience
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Consulting experience delivering high-impact business analytics.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Real-world engagements analyzing large-scale datasets, developing proof-of-concept solutions, and translating data into executive visibility.
          </p>
        </div>

        {/* Experience Timeline Item */}
        <div className="space-y-12">
          {WORK_EXPERIENCE.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 relative overflow-hidden"
            >
              {/* Subtle accent glow in top right */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 blur-3xl rounded-full pointer-events-none" />

              {/* Header Row */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <div className="text-base font-semibold text-cyan-400">
                        {exp.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metadata: Period, Location, Status (Clean unboxed text) */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-700">·</span>
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.location}</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-700">·</span>
                  <span className="text-emerald-400 font-medium">{exp.status}</span>
                </div>
              </div>

              {/* Metrics Ribbon */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-6 border-b border-slate-800/80">
                {exp.metrics.map((m) => (
                  <div key={m.label} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/70">
                    <div className="text-lg sm:text-xl font-bold text-white font-display tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievements & Responsibilities */}
              <div className="py-6 space-y-3.5">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Key Deliverables &amp; Business Impact
                </h4>
                <ul className="space-y-3">
                  {exp.achievements.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Employed (Clean unboxed metadata) */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs">
                <span className="text-slate-400 font-medium">Applied Stack:</span>
                {exp.technologies.map((tech, i) => (
                  <React.Fragment key={tech}>
                    <span className="text-slate-200">{tech}</span>
                    {i < exp.technologies.length - 1 && (
                      <span className="text-slate-700">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
