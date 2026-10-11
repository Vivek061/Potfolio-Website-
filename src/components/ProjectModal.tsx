import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Database, Sparkles, TrendingUp, Cpu } from 'lucide-react';
import { Project } from '../types/portfolio';
import { InsuranceSimulator } from './InsuranceSimulator';
import { SqlExplorer } from './SqlExplorer';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'interactive' | 'methodology' | 'impact'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#0c121e] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4 shrink-0 bg-slate-900/60">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-cyan-400 font-medium mb-1">
              <span>{project.category}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400 font-mono">{project.recordCount}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
              {project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Sub-navigation Tabs */}
        <div className="flex border-b border-slate-800 px-6 bg-slate-950/40 shrink-0 gap-2 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3 px-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'overview'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Overview &amp; Findings
          </button>
          <button
            onClick={() => setActiveTab('interactive')}
            className={`py-3 px-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
              activeTab === 'interactive'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{project.demoType === 'ml_simulator' ? 'Interactive ML Simulator' : 'Interactive SQL Viewer'}</span>
          </button>
          <button
            onClick={() => setActiveTab('methodology')}
            className={`py-3 px-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'methodology'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Methodology &amp; Architecture
          </button>
          <button
            onClick={() => setActiveTab('impact')}
            className={`py-3 px-3 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
              activeTab === 'impact'
                ? 'border-cyan-400 text-cyan-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Business Impact
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-slate-300 leading-relaxed">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Image Preview */}
              <div className="relative rounded-xl overflow-hidden border border-slate-800 max-h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {project.metrics.map((m) => (
                  <div key={m.label} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="text-base sm:text-lg font-bold text-white font-display tabular-nums block">
                      {m.value}
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Executive Abstract
                </h4>
                <p className="text-slate-300">
                  {project.summary}
                </p>
              </div>

              {/* Key Quantitative Findings */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Key Quantitative Findings
                </h4>
                <ul className="space-y-2.5">
                  {project.findings.map((finding, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack (Clean unboxed metadata) */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs">
                <span className="text-slate-400 font-medium">Core Technologies:</span>
                {project.technologies.map((t, idx) => (
                  <React.Fragment key={t}>
                    <span className="text-slate-200">{t}</span>
                    {idx < project.technologies.length - 1 && (
                      <span className="text-slate-700">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'interactive' && (
            <div className="space-y-4">
              {project.demoType === 'ml_simulator' ? (
                <InsuranceSimulator />
              ) : (
                <SqlExplorer />
              )}
            </div>
          )}

          {activeTab === 'methodology' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                  Step-by-Step Analytical Pipeline
                </h4>
                <ol className="space-y-3">
                  {project.keyMethodology.map((step, idx) => (
                    <li key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-md bg-cyan-950 text-cyan-400 border border-cyan-800/50 flex items-center justify-center text-xs font-mono font-bold shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="text-xs sm:text-sm text-slate-200 font-medium">{step}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-400 space-y-2">
                <p className="font-semibold text-slate-300">Dataset Specifications:</p>
                <p>Volume: {project.datasetSize}</p>
                <p>Integrity: Cleaned for null values, categorical encoding verified, outliers addressed via IQR box plotting.</p>
              </div>
            </div>
          )}

          {activeTab === 'impact' && (
            <div className="space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Strategic Decisions &amp; Organizational Value
              </h4>
              <ul className="space-y-3">
                {project.businessImpact.map((impact, idx) => (
                  <li key={idx} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-3">
                    <TrendingUp className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span className="text-xs sm:text-sm text-slate-200">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-900/80 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium border border-slate-700 flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};
