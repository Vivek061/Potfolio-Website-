import React, { useEffect, useState } from 'react';
import { X, Download, FileText, MapPin, Mail, Phone, ExternalLink, Database, BrainCircuit } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ResumeProject {
  title: string;
  tech: string;
  githubUrl: string;
  liveAppUrl?: string;
  bullets: { label?: string; text: string }[];
}

interface ResumeData {
  title: string;
  subtitle: string;
  filename: string;
  fileUrl: string;
  locationLine: string;
  summaryTitle: string;
  summary: string;
  skills: { label: string; val: string }[];
  projects: ResumeProject[];
  experience: {
    title: string;
    subtitle: string;
    period: string;
    bullets: string[];
  };
  education: {
    degree: string;
    institution: string;
    period: string;
    cgpa?: string;
  };
  certifications: string[];
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'da' | 'ds'>('da');
  const [isDownloading, setIsDownloading] = useState<boolean>(false);

  const resumes: Record<'da' | 'ds', ResumeData> = {
    da: {
      title: 'Data Analyst',
      subtitle: 'Data Analyst | SQL · Python · Power BI · Excel',
      filename: 'Vivek_Bhosale_Resume_DA.pdf',
      fileUrl: `${import.meta.env.BASE_URL}assets/aistudio/Vivek_Bhosale_Resume_DA_36c3864e.pdf`,
      locationLine: 'Pune, Maharashtra',
      summaryTitle: 'Professional Summary',
      summary:
        'Data Analyst fresher skilled in SQL, Python (Pandas), Excel and Power BI. Completed a 6-month Data Science Consultant internship at Rubixe, cleaning and analyzing 200,000+ records and building KPI dashboards and reports for client stakeholders. Turns raw business data into clear, actionable insights. Certified Data Scientist (DataMites; NASSCOM FutureSkills Prime, Gold).',
      skills: [
        {
          label: 'Data Analysis',
          val: 'Exploratory Data Analysis (EDA), Data Cleaning, Data Wrangling, KPI Tracking & Reporting, Trend Analysis',
        },
        {
          label: 'SQL',
          val: 'Joins, Subqueries, CTEs, Window Functions, Aggregations (GROUP BY / HAVING)',
        },
        {
          label: 'Visualization & BI',
          val: 'Power BI (Dashboards, Data Modeling, DAX Basics, Power Query), Excel (Pivot Tables, VLOOKUP, INDEX-MATCH, COUNTIF/SUMIF), Matplotlib, Seaborn',
        },
        {
          label: 'Programming',
          val: 'Python (Pandas, NumPy), SQL',
        },
        {
          label: 'Databases',
          val: 'MySQL, PostgreSQL, MongoDB',
        },
        {
          label: 'Statistics',
          val: 'Descriptive Statistics, Correlation',
        },
        {
          label: 'Tools & Cloud',
          val: 'Jupyter Notebook, Git/GitHub, VS Code; AWS (Basic), Microsoft Azure (Basic)',
        },
        {
          label: 'Soft Skills',
          val: 'Reporting, Stakeholder Communication, Problem Solving',
        },
      ],
      projects: [
        {
          title: 'Customer Shopping Behavior Analysis',
          tech: 'Python, PostgreSQL, Power BI',
          githubUrl: 'https://github.com/Vivek061/Customer_Behavior_Analysis',
          bullets: [
            {
              label: 'Problem',
              text: 'Analyzed 3,900 customer purchase records in PostgreSQL using SQL to identify revenue drivers, shopping patterns and customer drop-off points.',
            },
            {
              label: 'Insight',
              text: 'Found that 73% of customers were non-subscribers, while loyal/subscribed customers contributed disproportionately more revenue than one-time buyers, revealing a clear subscription-conversion opportunity.',
            },
            {
              label: 'Impact',
              text: 'Built Power BI dashboards to visualize the findings and presented a retention-focused recommendation to stakeholders.',
            },
          ],
        },
        {
          title: 'Insurance Cost Prediction',
          tech: 'Python, Pandas, Scikit-learn, Streamlit',
          githubUrl: 'https://github.com/Vivek061/Insurance-Cost-Prediction-',
          liveAppUrl: 'https://insurance-cost-prediction-public.streamlit.app/',
          bullets: [
            {
              label: 'Problem',
              text: 'Analyzed a 1,338-record insurance dataset to understand which factors (age, BMI, smoking status, region) drive medical insurance charges.',
            },
            {
              label: 'Analysis',
              text: 'Applied feature engineering and one-hot encoding with Pandas and visualized cost patterns in Matplotlib and Seaborn.',
            },
            {
              label: 'Insight',
              text: 'Identified smoking status as the strongest cost driver, with age and BMI also influential; Random Forest delivered the best accuracy (90%) against Linear Regression and Decision Tree baselines.',
            },
            {
              label: 'Deployment',
              text: 'Published the project as a live Streamlit web app: insurance-cost-prediction-public.streamlit.app',
            },
          ],
        },
      ],
      experience: {
        title: 'Rubixe – Data Science Consultant Intern',
        subtitle: 'Pune, Maharashtra, India (6-month internship)',
        period: 'Dec 2025 – Jun 2026',
        bullets: [
          'Delivered 4+ proof-of-concept analytics projects for clients, working with a mentor to scope problems, analyze data and present findings within project timelines.',
          'Cleaned and analyzed datasets of 200,000+ records using Python and Pandas, cutting manual data-prep time and speeding up turnaround on client deliverables.',
          'Developed Power BI dashboards and Excel reports that gave stakeholders self-serve visibility into KPIs and trends, reducing ad-hoc reporting requests.',
          'Wrote SQL queries for data extraction, filtering and aggregation to support recurring client reporting needs.',
        ],
      },
      education: {
        degree: 'Bachelor of Computer Applications (BCA) – CGPA: 8.7 / 10',
        institution: 'KCE M.J. College, Jalgaon, Maharashtra',
        period: 'Apr 2025',
      },
      certifications: [
        'NASSCOM FutureSkills Prime – Certified Data Scientist, Gold Category (Sep 2026)',
        'DataMites – Certified Data Scientist Training Program (Sep 2025 – May 2026)',
      ],
    },
    ds: {
      title: 'Data Science',
      subtitle: 'Data Scientist | Python · SQL · Machine Learning · Predictive Modeling',
      filename: 'Vivek_Bhosale_Resume_DS.pdf',
      fileUrl: `${import.meta.env.BASE_URL}assets/aistudio/Vivek_Bhosale_Resume_DS_339d779b.pdf`,
      locationLine: 'Pune, Maharashtra, India',
      summaryTitle: 'Summary',
      summary:
        'Data Science fresher with a 6-month Data Science Consultant internship at Rubixe, delivering 4+ client proof-of-concept projects in predictive modeling, EDA, and feature engineering on datasets of 200,000+ records. Hands-on with Python, SQL, and Scikit-learn; built a Random Forest regression model with 90% accuracy and deployed it as a live Streamlit app. Certified Data Scientist (DataMites; NASSCOM FutureSkills Prime, Gold).',
      skills: [
        {
          label: 'Programming',
          val: 'Python, SQL',
        },
        {
          label: 'Libraries',
          val: 'Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn',
        },
        {
          label: 'Machine Learning',
          val: 'Supervised Learning (Regression, Classification), Linear Regression, Logistic Regression, Decision Tree, Random Forest, KNN, XGBoost',
        },
        {
          label: 'Statistics',
          val: 'Descriptive Statistics (Mean, Median, Mode, Variance), Correlation',
        },
        {
          label: 'Data Work',
          val: 'EDA, Data Cleaning, Feature Engineering (One-Hot Encoding), Model Evaluation (R², RMSE, Accuracy, Precision/Recall, Cross-Validation)',
        },
        {
          label: 'Databases',
          val: 'MySQL, PostgreSQL, MongoDB',
        },
        {
          label: 'Tools',
          val: 'Jupyter Notebook, Git/GitHub, VS Code, Streamlit, Power BI, Excel',
        },
        {
          label: 'Cloud',
          val: 'AWS (basic), Microsoft Azure (basic)',
        },
      ],
      projects: [
        {
          title: 'Insurance Cost Prediction',
          tech: 'Python, Pandas, Scikit-learn, Matplotlib, Seaborn, Streamlit',
          githubUrl: 'https://github.com/Vivek061/Insurance-Cost-Prediction-',
          liveAppUrl: 'https://insurance-cost-prediction-public.streamlit.app/',
          bullets: [
            {
              text: 'Developed a regression pipeline to predict medical insurance charges from age, BMI, smoking status, and region using a 1,338-record dataset.',
            },
            {
              text: 'Applied feature engineering and one-hot encoding to categorical variables, then trained and compared 3 models: Linear Regression, Decision Tree, and Random Forest.',
            },
            {
              text: 'Achieved 90% accuracy with Random Forest, the best of the 3 models; identified smoking status as the strongest predictor of insurance charges and visualized results with Matplotlib and Seaborn.',
            },
            {
              text: 'Deployed the trained model as a live, publicly accessible Streamlit web app.',
            },
          ],
        },
        {
          title: 'Customer Shopping Behavior Analysis',
          tech: 'Python, SQL, PostgreSQL, Power BI',
          githubUrl: 'https://github.com/Vivek061/Customer_Behavior_Analysis',
          bullets: [
            {
              text: 'Analyzed 3,900 customer purchase records in PostgreSQL to identify revenue drivers, shopping patterns, and customer behavior.',
            },
            {
              text: 'Found that 73% of customers were non-subscribers while loyal/subscribed customers drove disproportionately more revenue than one-time buyers, revealing a major subscription-conversion opportunity.',
            },
            {
              text: 'Visualized findings in Power BI and presented a retention-focused recommendation to stakeholders.',
            },
          ],
        },
      ],
      experience: {
        title: 'Data Science Consultant Intern | Rubixe, Pune, Maharashtra, India',
        subtitle: '',
        period: 'Dec 2025 – Jun 2026',
        bullets: [
          'Delivered 4+ proof-of-concept data science projects for clients over 6 months, working with a mentor to scope problems, build solutions, and present findings on schedule.',
          'Cleaned and explored datasets of 200,000+ records using Python and Pandas (EDA), cutting manual data-prep time and speeding up client deliverables.',
          'Built and evaluated predictive regression models in Scikit-learn, benchmarking Random Forest (90% accuracy) against Linear Regression and Decision Tree baselines.',
          'Wrote SQL queries for data extraction, filtering, and aggregation, and developed Power BI dashboards that gave stakeholders self-serve KPI visibility and reduced ad-hoc reporting requests.',
        ],
      },
      education: {
        degree: 'Bachelor of Computer Applications (BCA) | KCE M.J. College, Jalgaon, Maharashtra',
        institution: 'CGPA: 8.7 / 10',
        period: 'Apr 2025',
      },
      certifications: [
        'NASSCOM FutureSkills Prime – Certified Data Scientist, Gold Category (Sep 2026)',
        'DataMites – Certified Data Scientist Training Program (Sep 2025 – May 2026)',
      ],
    },
  };

  const current = resumes[activeTab];

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

  const handleDownloadPdf = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isDownloading) return;
    setIsDownloading(true);
    try {
      const response = await fetch(current.fileUrl);
      if (!response.ok) throw new Error('Failed to fetch PDF');
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = current.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch {
      const fallbackLink = document.createElement('a');
      fallbackLink.href = current.fileUrl;
      fallbackLink.download = current.filename;
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      document.body.removeChild(fallbackLink);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
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
              <h3 className="text-sm sm:text-base font-bold text-white">
                Curriculum Vitae · Vivek Bhosale
              </h3>
              <p className="text-[11px] text-slate-400">
                Select specialization track to view and download targeted resume
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <a
              href={current.fileUrl}
              download={current.filename}
              onClick={handleDownloadPdf}
              className="px-3.5 py-1.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-slate-950 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm shadow-cyan-400/20 whitespace-nowrap"
              title={`Download ${current.title} Resume (${current.filename})`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isDownloading ? 'Downloading...' : `Download ${current.title} (PDF)`}</span>
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

        {/* Scrollable Clean Resume Body matching exact uploaded PDF */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 flex-1 bg-white text-slate-900 font-sans print:p-0 print:m-0">
          {/* Resume Header */}
          <div className="border-b-2 border-slate-900 pb-4 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 font-display">
              VIVEK BHOSALE
            </h1>
            <p className="text-xs sm:text-sm font-bold text-cyan-700 mt-1">
              {current.subtitle}
            </p>

            <div className="mt-2.5 flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>{current.locationLine}</span>
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-slate-500" />
                <a href="tel:+919370962795" className="text-slate-800 hover:underline">
                  +91 9370962795
                </a>
              </span>
              <span>|</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3 text-slate-500" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-800 hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </span>
              <span>|</span>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-700 hover:underline"
              >
                linkedin.com/in/vivek-bhosale-b556b6277
              </a>
              <span>|</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-700 hover:underline"
              >
                github.com/Vivek061
              </a>
            </div>
          </div>

          {/* Section: Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              {current.summaryTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {current.summary}
            </p>
          </div>

          {/* Section: Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Skills
            </h2>
            <div className="space-y-1 text-xs text-slate-700 leading-relaxed">
              {current.skills.map((sk) => (
                <p key={sk.label}>
                  <strong className="text-slate-900">{sk.label}:</strong> {sk.val}
                </p>
              ))}
            </div>
          </div>

          {/* Section: Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-4">
              {current.projects.map((proj) => (
                <div key={proj.title} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                    <div>
                      <strong className="font-bold text-slate-900">{proj.title}</strong>
                      <span className="text-slate-600"> | {proj.tech}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs shrink-0">
                      {proj.liveAppUrl && (
                        <>
                          <a
                            href={proj.liveAppUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-700 hover:underline inline-flex items-center gap-0.5 font-medium"
                          >
                            <span>Live App</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                          <span className="text-slate-400">|</span>
                        </>
                      )}
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-700 hover:underline inline-flex items-center gap-0.5 font-medium"
                      >
                        <span>GitHub</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700 leading-relaxed">
                    {proj.bullets.map((b, bIdx) => (
                      <li key={bIdx}>
                        {b.label && <strong className="text-slate-900">{b.label}: </strong>}
                        {b.text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2.5">
              Experience
            </h2>
            <div className="space-y-1.5">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                <strong className="font-bold text-slate-900">{current.experience.title}</strong>
                <span className="text-xs text-slate-500 font-mono">{current.experience.period}</span>
              </div>
              {current.experience.subtitle && (
                <p className="text-xs italic text-slate-600">{current.experience.subtitle}</p>
              )}
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700 leading-relaxed pt-0.5">
                {current.experience.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section: Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-0.5 text-xs text-slate-700">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs sm:text-sm">
                <strong className="font-bold text-slate-900">{current.education.degree}</strong>
                <span className="text-xs text-slate-500 font-mono">{current.education.period}</span>
              </div>
              <p className="text-slate-700">{current.education.institution}</p>
            </div>
          </div>

          {/* Section: Certifications */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
              Certifications
            </h2>
            <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-700">
              {current.certifications.map((cert, idx) => (
                <li key={idx}>{cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
