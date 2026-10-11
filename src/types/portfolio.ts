export interface Project {
  id: string;
  title: string;
  tagline: string;
  recordCount: string;
  datasetSize: string;
  category: 'Business Intelligence & SQL' | 'Machine Learning & Predictive Modeling';
  summary: string;
  image: string;
  tags: string[];
  technologies: string[];
  findings: string[];
  businessImpact: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  githubUrl: string;
  liveDemoUrl?: string;
  demoType: 'sql_explorer' | 'ml_simulator';
  keyMethodology: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    proficiency: string; // e.g., 'Advanced', 'Proficient', 'Core'
    experienceLevel: number; // 1-100 for visual bar
    context: string;
  }[];
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  status: string;
  description: string;
  achievements: string[];
  technologies: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  honors: string;
  coursework: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  badgeLevel: string;
  date: string;
  credentialId?: string;
  skillsCovered: string[];
  description: string;
}
