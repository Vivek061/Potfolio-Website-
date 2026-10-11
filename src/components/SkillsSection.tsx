import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Database, Terminal, BarChart3, BrainCircuit, Check } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterTabs = [
    { id: 'all', label: 'All Domains' },
    { id: 'querying-databases', label: 'SQL & Databases' },
    { id: 'python-analytics', label: 'Python & Analytics' },
    { id: 'bi-reporting', label: 'BI & Dashboards' },
    { id: 'ml-deployment', label: 'Machine Learning' },
  ];

  const filteredCategories =
    selectedFilter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((cat) => cat.id === selectedFilter);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'querying-databases':
        return Database;
      case 'python-analytics':
        return Terminal;
      case 'bi-reporting':
        return BarChart3;
      case 'ml-deployment':
        return BrainCircuit;
      default:
        return Database;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              Technical Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
              Tools, frameworks, and methodologies across the analytical stack.
            </h2>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedFilter === tab.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {filteredCategories.map((category) => {
            const Icon = getCategoryIcon(category.id);
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-cyan-950/50 text-cyan-400 border border-cyan-800/30">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="mt-6 space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-baseline justify-between text-xs">
                          <span className="font-semibold text-slate-200">
                            {skill.name}
                          </span>
                          <span className="text-slate-400 font-mono tabular-nums text-[11px]">
                            {skill.proficiency} · {skill.experienceLevel}%
                          </span>
                        </div>

                        {/* Visual Progress Bar */}
                        <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-teal-400 rounded-full transition-all duration-500"
                            style={{ width: `${skill.experienceLevel}%` }}
                          />
                        </div>

                        {/* Practical Context (Clean unboxed text) */}
                        <p className="text-[11px] text-slate-400 leading-normal">
                          {skill.context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer strip */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Applied in enterprise consulting &amp; case studies</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
