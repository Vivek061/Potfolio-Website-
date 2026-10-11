import React, { useEffect, useState } from 'react';
import { X, Download, FileText, MapPin, Mail, Award, GraduationCap, Briefcase, Database, BrainCircuit } from 'lucide-react';
import { PERSONAL_INFO, WORK_EXPERIENCE, EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'da' | 'ds'>('da');

  const resumeLinks = {
    da: {
      title: 'Data Analyst',
      subtitle: 'DATA ANALYST',
      filename: 'Vivek_Bhosale_Resume_DA.pdf',
      githubUrl: 'https://github.com/Vivek061/Potfolio-Website-/blob/main/Vivek_Bhosale_Resume_DA.pdf',
      rawUrl: './Vivek_Bhosale_Resume_DA.pdf',
      summary:
        'Data Analyst fresher skilled in SQL, Python (Pandas), Excel and Power BI. Completed a 6-month Data Science Consultant internship at Rubixe, cleaning and analyzing 200,000+ records and building KPI dashboards and reports for client stakeholders. Turns raw business data into clear, actionable insights. Certified Data Scientist (DataMites; NASSCOM FutureSkills Prime, Gold)',
      skills: [
        { label: 'SQL & Relational Databases', val: 'SQL (Core & Advanced), PostgreSQL, MySQL, Complex Joins, Window Functions, CTEs, Indexing' },
        { label: 'BI & Executive Reporting', val: 'Power BI (DAX Measures, Star Schema Modeling, Interactive Drill-Downs), Advanced Excel (XLOOKUP, Pivot Tables)' },
        { label: 'Python & Data Wrangling', val: 'Python 3, Pandas, NumPy, Data Cleaning, Outlier Detection, Exploratory Data Analysis (EDA)' },
        { label: 'Analytics & Storytelling', val: 'Applied Statistics, RFM Customer Segmentation, Cohort Analysis, KPI Architecture, Stakeholder Presentations' },
      ],
      projects: [
        {
          title: 'Customer Shopping Behavior Analysis',
          dataset: '3,900 Purchase Records',
          tech: 'SQL (PostgreSQL), Python (Pandas), Power BI, RFM Segmentation',
          bullets: [
            'Conducted recency, frequency, and monetary (RFM) clustering to classify customers into Champions, Loyalists, and At-Risk tiers.',
            'Discovered top 15% high-value customer cluster generating 48% of gross retail margin.',
            'Identified 22% churn drop-off among dormant customers (>60 days), developing retention strategies projected to reclaim 12-15% lost revenue.',
          ],
        },
        {
          title: 'Insurance Cost Risk & Exploratory Analytics',
          dataset: '1,338 Demographic & Clinical Records',
          tech: 'Python, SQL, Pandas, Matplotlib, Seaborn',
          bullets: [
            'Analyzed healthcare charges across age, BMI, and lifestyle variables to identify high-exposure risk cohorts.',
            'Demonstrated non-linear compounding cost multipliers for obese smokers with charge disparities over ₹35,000 vs ₹8,000 baseline.',
            'Constructed automated data validation checks and correlation matrices for actuarial decision support.',
          ],
        },
      ],
    },
    ds: {
      title: 'Data Science',
      subtitle: 'DATA SCIENTIST',
      filename: 'Vivek_Bhosale_Resume_DS.pdf',
      githubUrl: 'https://github.com/Vivek061/Potfolio-Website-/blob/main/Vivek_Bhosale_Resume_DS.pdf',
      rawUrl: './Vivek_Bhosale_Resume_DS.pdf',
      summary:
        'Methodical and mathematically-grounded Data Science Professional with a Bachelor of Computer Applications (8.7 CGPA) and consulting experience developing 4+ end-to-end analytics proof-of-concepts (PoCs). Proficient in supervised machine learning regression and classification using Scikit-Learn, complex feature engineering, residual diagnostics, exploratory statistical modeling, and full-stack model deployment with Streamlit.',
      skills: [
        { label: 'Machine Learning & Modeling', val: 'Scikit-Learn, Random Forest Regressor, Linear Regression, Classification, Hyperparameter Cross-Validation' },
        { label: 'Feature Engineering & Math', val: 'Non-Linear Interaction Features, One-Hot/Label Encoding, StandardScaler, Logarithmic Transforms, Applied Statistics' },
        { label: 'Data Science Stack', val: 'Python 3, Pandas, NumPy, Scikit-Learn, Joblib, Matplotlib, Seaborn, SQL Analytics' },
        { label: 'Deployment & Tools', val: 'Streamlit Web Applications, Git/GitHub Version Control, Model Inference Pipelines, Cloud Prototyping' },
      ],
      projects: [
        {
          title: 'Insurance Cost Prediction & Machine Learning System',
          dataset: '1,338 Clinical Records',
          tech: 'Python, Scikit-Learn, Random Forest, Feature Engineering, Streamlit',
          bullets: [
            'Engineered interaction variables (smoker × BMI interaction) and trained a Random Forest Regressor achieving R² = 0.892 and MAE of ₹3,145.',
            'Isolated smoking status as the #1 predictive feature (65%+ weight) with an empirical 3.8x baseline premium multiplier.',
            'Deployed an interactive Streamlit application enabling real-time risk-adjusted cost estimation for policyholders and underwriters.',
          ],
        },
        {
          title: 'Retail Customer Behavior Predictive Segmentation',
          dataset: '3,900 Retail Records',
          tech: 'Python, Pandas, Unsupervised Clustering, SQL, Statistical EDA',
          bullets: [
            'Implemented RFM clustering algorithms and multi-variate statistical distributions on retail transactional logs.',
            'Modelled purchase recurrence probabilities, uncovering 34% higher repeat order velocity when discounts paired with category loyalty.',
            'Constructed end-to-end data pipelines transitioning raw sales transactions into cleansed analytical feature vectors.',
          ],
        },
      ],
    },
  };

  const current = resumeLinks[activeTab];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="relative w-full max-w-4xl bg-[#0b0f17] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-900/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950/60 border border-cyan-800/40 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-white">
                  Curriculum Vitae · Vivek Bhosale
                </h3>
              </div>
              <p className="text-[11px] text-slate-400">
                Select specialization track to view and download targeted resume
              </p>
            </div>
          </div>

          {/* Action Buttons: Pure direct download from submitted GitHub raw URL */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <a
              href={current.rawUrl}
              download={current.filename}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm shadow-cyan-400/20 whitespace-nowrap"
              title={`Download original ${current.title} Resume (${current.filename})`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download {current.title} (PDF)</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2 Specialization Track Segmented Tabs */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-[#090d15] px-4 sm:px-6 py-2.5 shrink-0">
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveTab('da')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'da'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>Data Analyst Resume</span>
            </button>

            <button
              onClick={() => setActiveTab('ds')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'ds'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>Data Science Resume</span>
            </button>
          </div>
        </div>

        {/* Scrollable Clean Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 flex-1 bg-white text-slate-900 font-sans print:p-0 print:m-0">
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display">
                  VIVEK BHOSALE
                </h1>
                <span className="text-xs sm:text-sm font-bold text-cyan-700 tracking-wide mt-0.5 block">
                  {current.subtitle}
                </span>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>Pune, Maharashtra, India</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-500" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-800 hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </span>
              <span>·</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline">
                LinkedIn Profile
              </a>
              <span>·</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline">
                GitHub: Vivek061
              </a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.summary}
            </p>
          </div>

          {/* Section: Work Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Work Experience
            </h2>
            {WORK_EXPERIENCE.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                  <div>
                    <strong className="font-bold text-slate-900">{exp.role}</strong>
                    <span className="text-slate-700"> — {exp.company}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">{exp.period} · {exp.location}</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700 leading-relaxed">
                  {exp.achievements.map((ach, idx) => (
                    <li key={idx}>{ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Section: Key Projects (Targeted per track) */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Key Projects
            </h2>
            <div className="space-y-4">
              {current.projects.map((proj, pIdx) => (
                <div key={pIdx} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                    <strong className="font-bold text-slate-900">{proj.title}</strong>
                    <span className="text-xs text-slate-500 font-mono">Dataset: {proj.dataset}</span>
                  </div>
                  <p className="text-xs text-slate-600 italic">
                    Technologies: {proj.tech}
                  </p>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700 leading-relaxed">
                    {proj.bullets.map((bullet, bIdx) => (
                      <li key={bIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Education
            </h2>
            {EDUCATION_DATA.map((edu) => (
              <div key={edu.degree} className="space-y-1 text-xs text-slate-700">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                  <strong className="font-bold text-slate-900">{edu.degree}</strong>
                  <span className="text-xs text-slate-500 font-mono">Completed {edu.period}</span>
                </div>
                <div className="flex justify-between">
                  <span>{edu.institution}, {edu.location}</span>
                  <span className="font-semibold text-slate-900">Score: {edu.grade} ({edu.honors})</span>
                </div>
                <p className="text-slate-600 text-[11px] pt-0.5">
                  Relevant Coursework: {edu.coursework.join(', ')}
                </p>
              </div>
            ))}
          </div>

          {/* Section: Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Certifications &amp; Credentials
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-1.5 text-xs text-slate-700">
              {CERTIFICATIONS_DATA.map((cert) => (
                <li key={cert.id}>
                  <strong className="text-slate-900">{cert.title}</strong> — {cert.issuer} ({cert.badgeLevel})
                </li>
              ))}
            </ul>
          </div>

          {/* Section: Technical Skills Matrix (Targeted per track) */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Technical Skills Matrix
            </h2>
            <div className="space-y-1.5 text-xs text-slate-700">
              {current.skills.map((sk, sIdx) => (
                <p key={sIdx}>
                  <strong className="text-slate-900">{sk.label}:</strong> {sk.val}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
