import React from 'react';
import { motion } from 'motion/react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle, Calendar, MapPin } from 'lucide-react';

export const EducationCertifications: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Education */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                Academic Background
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Education
              </h2>
            </div>

            {EDUCATION_DATA.map((edu) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                      {edu.institution}
                    </p>
                  </div>
                </div>

                {/* Metadata: Location, Period, Grade (Clean unboxed text) */}
                <div className="pt-2 pb-2 border-y border-slate-800/80 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.location}</span>
                  </span>
                  <span aria-hidden="true" className="text-slate-700">·</span>
                  <span className="flex items-center gap-1 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Completed {edu.period}</span>
                  </span>
                </div>

                {/* Grade Callout */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">Graduation Standing</span>
                    <span className="text-xs font-semibold text-emerald-400">{edu.honors}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block">Cumulative Score</span>
                    <span className="text-lg font-bold text-white font-display tabular-nums">{edu.grade}</span>
                  </div>
                </div>

                {/* Relevant Coursework */}
                <div>
                  <span className="text-xs font-semibold text-slate-300 block mb-2">
                    Key Computer Applications Coursework:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-400">
                    {edu.coursework.map((course) => (
                      <div key={course} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                Industry Credentials
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Professional Certifications
              </h2>
            </div>

            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-4 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                    <div className="flex items-start gap-3 sm:gap-3.5 flex-1 min-w-0">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-amber-950/40 border border-amber-700/40 text-amber-400 shrink-0 mt-0.5">
                        <Award className="w-4 h-4 sm:w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                          {cert.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-semibold text-cyan-400 mt-0.5">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    <span className="self-start sm:self-auto inline-flex items-center px-2.5 py-1 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-[11px] sm:text-xs font-mono text-emerald-300 font-medium shrink-0">
                      {cert.badgeLevel}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills Covered (Clean unboxed text) */}
                  <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs">
                    <span className="text-slate-400 font-medium">Competencies:</span>
                    {cert.skillsCovered.map((s, i) => (
                      <React.Fragment key={s}>
                        <span className="text-slate-200">{s}</span>
                        {i < cert.skillsCovered.length - 1 && (
                          <span className="text-slate-700">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
