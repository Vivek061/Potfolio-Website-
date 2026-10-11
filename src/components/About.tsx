import React from 'react';
import { motion } from 'motion/react';
import { Database, LineChart, Cpu, Lightbulb, GraduationCap, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Database,
      title: 'SQL & Data Wrangling',
      description:
        'Transforming unstructured and relational operational logs into clean, optimized analytical tables using advanced SQL, PostgreSQL, and Python data pipelines.',
    },
    {
      icon: LineChart,
      title: 'Executive Dashboards & BI',
      description:
        'Translating ambiguous business requirements into high-impact Power BI reports, automated KPI scorecards, and interactive drill-down views.',
    },
    {
      icon: Cpu,
      title: 'Predictive Modeling & ML',
      description:
        'Developing supervised regression and classification models using Scikit-Learn, conducting feature engineering, and evaluating model generalization.',
    },
    {
      icon: Lightbulb,
      title: 'Actionable Storytelling',
      description:
        'Synthesizing complex quantitative patterns into plain business recommendations that non-technical leaders and product stakeholders immediately understand.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Professional Profile
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight text-balance">
            Bridging raw computational datasets with practical business decisions.
          </h2>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              I am a results-oriented <strong className="text-white font-semibold">Data Analyst Fresher</strong> with a solid foundation in computer applications from <strong className="text-slate-100">KCE M.J. College, Jalgaon</strong> (graduated April 2025 with an <span className="text-cyan-400 font-semibold">8.7 / 10 CGPA</span>).
            </p>

            <p>
              During my intensive internship as a <strong className="text-slate-100">Data Science Consultant Intern at Rubixe</strong>, I handled complex data workflows analyzing over <strong className="text-white">200,000+ enterprise records</strong>. I spearheaded proof-of-concept projects, engineered SQL reporting pipelines, and built Power BI dashboards that reduced manual reporting overhead by 45%.
            </p>

            <p>
              I believe great data analysis goes far beyond calculating numbers or creating pretty charts. It requires a relentless curiosity to understand the root business dilemma, methodical problem-solving to isolate high-value cohorts, and clear visual communication that empowers stakeholders to make confident, data-backed decisions.
            </p>

            {/* Core Competencies Checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Robust SQL querying &amp; CTE pipelines</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Advanced Power BI modeling &amp; DAX</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Exploratory data analysis with Pandas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Machine learning regression &amp; evaluation</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4 text-sm font-medium">
              <a
                href="#experience"
                className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1 transition-colors"
              >
                <span>Read Rubixe Experience</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href="#education"
                className="text-slate-400 hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                <span>View Academic Qualifications</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Analytical Pillars */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white mb-1.5">
                        {pillar.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
