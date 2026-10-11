import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle2, Copy, Check, MessageSquare, ExternalLink, RotateCcw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    opportunityType: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedFullDraft, setCopiedFullDraft] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyFullDraft = () => {
    const text = `To: ${PERSONAL_INFO.email}
Subject: [Portfolio Inquiry] ${formData.opportunityType} - ${formData.name || 'Recruiter'}

Hello Vivek,

${formData.message || 'I came across your portfolio and would like to connect.'}

Best regards,
${formData.name || 'Inquirer'}
${formData.email || ''}`;

    navigator.clipboard.writeText(text);
    setCopiedFullDraft(true);
    setTimeout(() => setCopiedFullDraft(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const subject = encodeURIComponent(
    `[Portfolio Inquiry] ${formData.opportunityType ? formData.opportunityType + ' - ' : ''}${formData.name || 'Inquirer'}`
  );
  const body = encodeURIComponent(
    `Hello Vivek,\n\n${formData.message || 'I came across your portfolio and would like to connect.'}\n\nBest regards,\n${formData.name || 'Inquirer'}\n${formData.email ? `Email: ${formData.email}` : ''}`
  );

  const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PERSONAL_INFO.email)}&su=${subject}&body=${body}`;

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Channels & Presence */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                Get In Touch
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                Let&apos;s discuss analytical opportunities and impact.
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                I am actively seeking <strong className="text-white">Data Analyst</strong> and <strong className="text-white">Data Science</strong> roles where I can apply my SQL pipeline engineering, Power BI dashboarding, and quantitative problem-solving skills to business challenges.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3.5 pt-2">
              {/* Email Card with Copy Affordance */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-lg bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-slate-400 block">Direct Email</span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-400 transition-colors truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700/80 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                  <span className="text-[11px]">{copiedEmail ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* LinkedIn Link */}
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-3 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-950/60 border border-blue-800/40 text-blue-400 shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">LinkedIn Profile</span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      linkedin.com/in/vivek-bhosale-b556b6277
                    </span>
                  </div>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-cyan-400">&rarr;</span>
              </a>

              {/* GitHub Link */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-3 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-200 shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block">GitHub Portfolio</span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      github.com/Vivek061
                    </span>
                  </div>
                </div>
                <span className="text-xs text-slate-400 group-hover:text-cyan-400">&rarr;</span>
              </a>

              {/* Location indicator */}
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 flex items-center gap-3 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Based in Pune, Maharashtra, India · Available for On-Site, Hybrid &amp; Remote roles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 relative">
              <h3 className="text-lg font-bold text-white mb-1">
                Send an Inquiry or Job Opportunity
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill in the details below, or click Send to route directly to Vivek&apos;s inbox.
              </p>

              {submitted ? (
                <div className="p-6 rounded-xl bg-slate-950/80 border border-emerald-500/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">
                      Message Prepared Successfully!
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 max-w-md mx-auto">
                      Thank you for reaching out, <span className="text-white font-medium">{formData.name}</span>! You can also launch your local mail application directly to guarantee delivery.
                    </p>
                  </div>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm shadow-cyan-400/20"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Gmail</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyFullDraft}
                      className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700/80 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                      title="Copy complete email draft and recipient to clipboard"
                    >
                      {copiedFullDraft ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-cyan-400" />}
                      <span>{copiedFullDraft ? 'Copied Draft' : 'Copy Draft'}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', opportunityType: '', message: '' });
                      }}
                      className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700/80 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Send Another</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-lg bg-rose-950/50 border border-rose-800/60 text-xs text-rose-300">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="text-xs font-medium text-slate-300 block mb-1">
                        Your Name / Organization <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full py-2 px-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="text-xs font-medium text-slate-300 block mb-1">
                        Email Address <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="s.jenkins@company.com"
                        className="w-full py-2 px-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-opp-type" className="text-xs font-medium text-slate-300 block mb-1">
                      Opportunity Type / Subject
                    </label>
                    <input
                      id="contact-opp-type"
                      type="text"
                      value={formData.opportunityType}
                      onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                      placeholder="e.g. Data Analyst Role, Project Discussion, Collaboration..."
                      className="w-full py-2 px-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="text-xs font-medium text-slate-300 block mb-1">
                      Message <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about the role, technical team stack, or discussion points..."
                      className="w-full py-2 px-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-2.5 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 disabled:opacity-60 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm shadow-cyan-400/20"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </button>

                    <a
                      href={gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Or compose directly in Gmail</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
