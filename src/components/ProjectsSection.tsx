import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { Github, ExternalLink, ArrowRight, CheckCircle2, Sparkles, Layers } from 'lucide-react';
import { InsuranceSimulator } from './InsuranceSimulator';
import { SqlExplorer } from './SqlExplorer';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeInteractiveProject, setActiveInteractiveProject] = useState<string>('insurance-cost-prediction');

  return (
    <section id="projects" className="py-20 md:py-28 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            Featured Case Studies
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            End-to-end data analytics and predictive machine learning projects.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            From raw database ingestion and SQL cohort pipelines to interactive Power BI dashboards and deployed regression algorithms.
          </p>
        </div>

        {/* 2 Featured Project Showcase Cards */}
        <div className="space-y-16">
          {FEATURED_PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-slate-900/60 border border-slate-800 relative overflow-hidden"
              >
                {/* 2-Column Split */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center`}>
                  {/* Visual Preview Column */}
                  <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-xl overflow-hidden border border-slate-700/80 bg-slate-950 group">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      {/* Floating metadata overlay */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                        <span className="font-mono text-[11px] text-cyan-300 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700">
                          {project.recordCount}
                        </span>
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-3 py-1 bg-cyan-400 text-slate-950 font-semibold rounded-md text-[11px] hover:bg-cyan-300 transition-colors cursor-pointer flex items-center gap-1"
                        >
                          <span>Explore Deep Dive</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 flex flex-col justify-between ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      {/* Category & Status (Clean unboxed text) */}
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                        <span className="text-cyan-400 font-medium">{project.category}</span>
                        <span aria-hidden="true" className="text-slate-700">·</span>
                        <span className="font-mono text-[11px] text-slate-300">{project.recordCount}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                        {project.summary}
                      </p>

                      {/* Concise Findings (Clean list) */}
                      <div className="space-y-2 mb-6">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                          Key Analytical Discoveries
                        </span>
                        {project.findings.slice(0, 3).map((f, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-300 leading-normal">
                            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Tags (Clean unboxed text with subtle dividers) */}
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-slate-400 mb-6 pb-6 border-b border-slate-800">
                        <span className="text-slate-500 font-medium">Stack:</span>
                        {project.tags.map((tag, i) => (
                          <React.Fragment key={tag}>
                            <span className="text-slate-200">{tag}</span>
                            {i < project.tags.length - 1 && (
                              <span className="text-slate-700">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Full Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>GitHub Code</span>
                      </a>

                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-xs font-medium text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700/80 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm hover:border-slate-600"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Embedded Interactive Laboratory Section */}
        <div className="mt-16 pt-12 border-t border-slate-800/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
                <Sparkles className="w-4 h-4" />
                <span>Interactive Analysis Laboratory</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Experience Vivek&apos;s analytical models live in your browser
              </h3>
            </div>

            {/* Switcher tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl self-start sm:self-auto">
              <button
                onClick={() => setActiveInteractiveProject('insurance-cost-prediction')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  activeInteractiveProject === 'insurance-cost-prediction'
                    ? 'bg-slate-800 text-cyan-300 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ML Cost Predictor
              </button>
              <button
                onClick={() => setActiveInteractiveProject('customer-shopping-behavior')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  activeInteractiveProject === 'customer-shopping-behavior'
                    ? 'bg-slate-800 text-cyan-300 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                SQL Cohort Explorer
              </button>
            </div>
          </div>

          {/* Active Interactive Widget */}
          {activeInteractiveProject === 'insurance-cost-prediction' ? (
            <InsuranceSimulator />
          ) : (
            <SqlExplorer />
          )}
        </div>

        {/* Project Modal Deep Dive */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
