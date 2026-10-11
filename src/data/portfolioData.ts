import { Project, SkillCategory, WorkExperience, EducationItem, CertificationItem } from '../types/portfolio';

// Local assets generated
import shoppingImg from '../assets/images/project_shopping_behavior_1791637964412.jpg';
import insuranceImg from '../assets/images/project_insurance_prediction_1791637977677.jpg';
import portraitImg from '../assets/images/regenerated_image_1791697345445.png';

export const PERSONAL_INFO = {
  name: 'Vivek Bhosale',
  title: 'Data Analyst & Data Science Professional',
  heroTagline: 'Turning Data Into Meaningful Insights',
  location: 'Pune, Maharashtra, India',
  email: 'vivekbhosale061@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vivek-bhosale-b556b6277/',
  github: 'https://github.com/Vivek061',
  shortBio:
    'Data Analyst & Data Science fresher with a BCA degree (8.7 CGPA), practical consulting experience analyzing 200,000+ records, and proven ability to build KPI dashboards, develop high-performance SQL pipelines, and deploy predictive Machine Learning solutions that solve real-world business problems.',
  profileImage: portraitImg,
  status: 'Open to Data Analyst & Data Science Opportunities',
};

export const HIGHLIGHT_STATS = [
  { label: 'Records Analyzed', value: '200,000+', description: 'Across enterprise consulting datasets' },
  { label: 'Analytics PoCs Built', value: '4+', description: 'End-to-end data pipelines & dashboards' },
  { label: 'Academic CGPA', value: '8.7 / 10', description: 'BCA from KCE M.J. College, Jalgaon' },
  { label: 'Industry Certifications', value: '2', description: 'NASSCOM Gold & DataMites Certified' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'querying-databases',
    title: 'SQL & Database Engineering',
    description: 'Relational data modeling, window functions, complex joins, and query optimization.',
    skills: [
      { name: 'SQL (Core & Advanced)', proficiency: 'Advanced', experienceLevel: 92, context: 'Multi-table joins, subqueries, CTEs, aggregation & indexing' },
      { name: 'PostgreSQL', proficiency: 'Proficient', experienceLevel: 88, context: 'Schema design, analytical window functions, stored routines' },
      { name: 'MySQL', proficiency: 'Proficient', experienceLevel: 86, context: 'Relational querying, transactions, data warehousing tables' },
      { name: 'MongoDB', proficiency: 'Foundational', experienceLevel: 75, context: 'Document queries, aggregation pipelines, JSON processing' },
    ],
  },
  {
    id: 'python-analytics',
    title: 'Python, EDA & Statistics',
    description: 'Data wrangling, statistical hypothesis testing, and exploratory data mining.',
    skills: [
      { name: 'Python', proficiency: 'Advanced', experienceLevel: 90, context: 'Scripting, ETL pipelines, automated analysis & data cleaning' },
      { name: 'Pandas', proficiency: 'Advanced', experienceLevel: 92, context: 'DataFrame operations, data reshaping, merge/join, missing data' },
      { name: 'NumPy', proficiency: 'Proficient', experienceLevel: 85, context: 'Vectorized mathematical operations, array transforms' },
      { name: 'Exploratory Data Analysis (EDA)', proficiency: 'Advanced', experienceLevel: 94, context: 'Outlier detection, distribution analysis, correlation matrices' },
      { name: 'Applied Statistics', proficiency: 'Proficient', experienceLevel: 84, context: 'Descriptive stats, hypothesis testing, probability distributions' },
    ],
  },
  {
    id: 'bi-reporting',
    title: 'Business Intelligence & Visualization',
    description: 'Executive KPI reporting, interactive stakeholder dashboards, and business insights.',
    skills: [
      { name: 'Power BI', proficiency: 'Advanced', experienceLevel: 90, context: 'DAX measures, star schema modeling, interactive drill-downs' },
      { name: 'Microsoft Excel', proficiency: 'Advanced', experienceLevel: 92, context: 'XLOOKUP, Pivot Tables, Power Query, scenario analysis' },
      { name: 'Data Visualization', proficiency: 'Advanced', experienceLevel: 88, context: 'Matplotlib, Seaborn, human-centered dashboard storytelling' },
      { name: 'KPI Architecture', proficiency: 'Proficient', experienceLevel: 86, context: 'Translating business goals into measurable analytical metrics' },
    ],
  },
  {
    id: 'ml-deployment',
    title: 'Machine Learning & Deployment',
    description: 'Supervised predictive modeling, feature engineering, and model deployment.',
    skills: [
      { name: 'Machine Learning', proficiency: 'Proficient', experienceLevel: 82, context: 'Regression, classification, clustering, hyperparameter tuning' },
      { name: 'Scikit-Learn', proficiency: 'Proficient', experienceLevel: 85, context: 'Random Forest, Linear Models, pipeline preprocessing' },
      { name: 'Feature Engineering', proficiency: 'Proficient', experienceLevel: 84, context: 'Encoding, scaling, interaction variables, dimensionality reduction' },
      { name: 'Streamlit', proficiency: 'Proficient', experienceLevel: 80, context: 'Rapid web prototyping for live model inference and user testing' },
      { name: 'Git & GitHub', proficiency: 'Proficient', experienceLevel: 82, context: 'Version control, repository structure, collaborative code management' },
    ],
  },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    id: 'rubixe',
    company: 'Rubixe',
    role: 'Data Science Consultant Intern',
    period: 'Dec 2025 – Jun 2026',
    location: 'Pune / Hybrid',
    status: 'Completed Internship',
    description:
      'Contributed as an intern in data consulting engagements, analyzing extensive datasets, engineering automated reporting workflows, and presenting quantitative insights to client stakeholders.',
    achievements: [
      'Analyzed 200,000+ enterprise transactional and operational records across multi-source databases to detect performance bottlenecks and customer churn signals.',
      'Architected 4+ end-to-end analytics proof-of-concept (PoC) solutions encompassing raw data ingestion, ETL cleaning, statistical modeling, and dashboarding.',
      'Developed executive-grade KPI dashboards in Power BI and Python, empowering business leaders to track conversion trends and sales velocity in real time.',
      'Constructed optimized SQL extraction queries and reporting pipelines, reducing repetitive manual spreadsheet consolidation time by 45%.',
      'Synthesized complex predictive findings into intuitive visual summaries and stakeholder presentations, bridging technical methodology with strategic decisions.',
    ],
    technologies: ['SQL', 'Python', 'Pandas', 'Power BI', 'Advanced Excel', 'PostgreSQL', 'EDA', 'Predictive Modeling'],
    metrics: [
      { label: 'Volume Analyzed', value: '200,000+ Records' },
      { label: 'PoC Projects', value: '4 Delivered' },
      { label: 'Reporting Speedup', value: '45% Latency Cut' },
      { label: 'Core Tools', value: 'SQL · Power BI · Python' },
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'customer-shopping-behavior',
    title: 'Customer Shopping Behavior Analysis',
    tagline: 'Customer segmentation, purchase frequency, and churn risk mitigation across 3,900 retail transactions.',
    recordCount: '3,900 Purchase Records',
    datasetSize: '3,900 rows · Multi-category retail data',
    category: 'Business Intelligence & SQL',
    summary:
      'A comprehensive commercial data analytics study dissecting retail customer demographics, purchase frequency, basket value, and loyalty retention. Leveraged SQL and Python to extract RFM segments, uncovering critical drivers for repeat orders.',
    image: shoppingImg,
    tags: ['SQL', 'Python', 'Power BI', 'Customer Segmentation', 'EDA', 'Retention Analysis'],
    technologies: ['PostgreSQL / SQL', 'Python 3.11', 'Pandas & NumPy', 'Power BI', 'Matplotlib & Seaborn'],
    findings: [
      'Identified top 15% high-value customer cluster generating 48% of total gross sales margin.',
      'Uncovered a critical 22% churn drop-off among customers after 60 days without personalized engagement triggers.',
      'Discovered frequency correlation: clothing and accessories had a 34% higher repeat order probability when paired with loyalty discounts.',
      'Formulated actionable promotional recommendations to re-engage at-risk cohorts, projected to recover 12–15% dormant revenue.',
    ],
    businessImpact: [
      'Empowered marketing teams with precise customer segment tiers (Champions, Loyalists, At-Risk, Dormant).',
      'Established real-time Power BI cohort tracking dashboards replacing manual monthly audits.',
      'Designed targeted promotion triggers reducing ad spend waste on unsegmented email blasts.',
    ],
    metrics: [
      { label: 'Records Explored', value: '3,900' },
      { label: 'High-Value Revenue Share', value: '48%' },
      { label: 'Identified At-Risk Cohort', value: '22%' },
      { label: 'Primary Tech', value: 'SQL + Power BI' },
    ],
    githubUrl: 'https://github.com/Vivek061/Customer_Behavior_Analysis',
    demoType: 'sql_explorer',
    keyMethodology: [
      'Data Cleaning & Type Standardization in Python & SQL',
      'RFM (Recency, Frequency, Monetary) Scoring & Cohort Clustering',
      'Multivariate Correlation Analysis on Discounts vs Basket Size',
      'Interactive Power BI Star-Schema Modeling and DAX Measure Definition',
    ],
  },
  {
    id: 'insurance-cost-prediction',
    title: 'Insurance Cost Prediction & Analysis',
    tagline: 'Machine learning regression modeling with Random Forest, feature interaction engineering, and Streamlit deployment.',
    recordCount: '1,338 Patient Records',
    datasetSize: '1,338 records · 7 primary demographic & clinical attributes',
    category: 'Machine Learning & Predictive Modeling',
    summary:
      'An end-to-end predictive modeling system forecasting individual medical insurance charges based on clinical and lifestyle factors. Performed rigorous feature engineering, outlier detection, and deployed an interactive Streamlit application for instantaneous cost estimations.',
    image: insuranceImg,
    tags: ['Python', 'Scikit-Learn', 'Random Forest', 'Feature Engineering', 'Streamlit', 'Regression'],
    technologies: ['Python 3.11', 'Scikit-Learn', 'Random Forest Regressor', 'Pandas', 'Streamlit', 'Joblib'],
    findings: [
      'Smoking status demonstrated the highest feature importance (over 65% weight) with a 3.8x baseline premium multiplier.',
      'BMI and age exhibited non-linear compounding effects: obese smokers incurred over ₹35,000 average annual charges versus ₹8,000 for non-smokers.',
      'Random Forest Regressor achieved strong statistical validation with R² = 0.892 and MAE of ₹3,145, outperforming baseline Multiple Linear Regression.',
      'Residual distribution verified zero systematic bias across gender and regional demographic groups.',
    ],
    businessImpact: [
      'Provided insurers and policyholders with instant risk-adjusted charge estimates via an interactive web interface.',
      'Identified critical preventative lifestyle factors (BMI threshold < 30 and smoking cessation) offering quantifiable premium reductions.',
      'Packaged the trained model into a production-ready inference pipeline deployable in cloud microservices.',
    ],
    metrics: [
      { label: 'Model Accuracy (R²)', value: '0.892' },
      { label: 'Mean Absolute Error', value: '₹3,145' },
      { label: 'Dataset Size', value: '1,338' },
      { label: 'Top Feature Weight', value: 'Smoker (65%)' },
    ],
    githubUrl: 'https://github.com/Vivek061/Insurance-Cost-Prediction-',
    liveDemoUrl: 'https://insurance-cost-prediction-public.streamlit.app/',
    demoType: 'ml_simulator',
    keyMethodology: [
      'Exploratory Data Analysis: Box plots, skewness checks, and logarithmic charge transforms',
      'Feature Engineering: BMI status categorization and smoker-age interaction coefficients',
      'Hyperparameter Tuning: 5-fold Cross-Validation on Random Forest n_estimators & max_depth',
      'Deployment: Interactive Streamlit application with instant parametric cost estimation',
    ],
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Computer Applications & Information Technology',
    institution: "K.C.E. Society's M.J. College",
    location: 'Jalgaon, Maharashtra, India',
    period: 'April 2025',
    grade: 'CGPA 8.7 / 10.0',
    honors: 'First Class with Distinction',
    coursework: [
      'Database Management Systems (DBMS & SQL)',
      'Data Structures & Algorithms',
      'Python & Object-Oriented Programming',
      'Statistics & Numerical Mathematics',
      'Web Technology & Systems Analysis',
      'Software Engineering Principles',
    ],
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'nasscom-gold',
    title: 'Certified Data Scientist (Gold)',
    issuer: 'NASSCOM FutureSkills Prime',
    badgeLevel: 'Gold Standard Credential',
    date: 'Certified',
    credentialId: 'FS-PRIME-DS-GOLD',
    skillsCovered: ['Data Science Lifecycle', 'Predictive Modeling', 'Statistical Analysis', 'Python for AI & ML', 'Business Problem Formulation'],
    description:
      'Government & industry-endorsed credential validating comprehensive competency in statistical computation, data extraction, machine learning workflows, and practical business decisioning.',
  },
  {
    id: 'datamites-ds',
    title: 'Certified Data Scientist Training Program',
    issuer: 'DataMites Global Training Institute',
    badgeLevel: 'Professional Certification',
    date: 'Certified',
    credentialId: 'DM-CDST-2025',
    skillsCovered: ['Advanced Python', 'Pandas & NumPy', 'SQL Analytics', 'Machine Learning Algorithms', 'Power BI & Tableau', 'EDA Case Studies'],
    description:
      'Rigorous practical training curriculum encompassing 400+ hours of applied data science labs, relational database querying, predictive regression/classification algorithms, and executive dashboards.',
  },
];

export const SAMPLE_SQL_QUERIES = [
  {
    title: 'High-Value Customer RFM Segmentation',
    description: 'Calculates recency, purchase frequency, and total lifetime spend to rank customer tiers.',
    sql: `-- RFM Analytical Query on 3,900 Retail Records
WITH customer_rfm AS (
  SELECT
    customer_id,
    MAX(purchase_date) AS last_purchase_date,
    COUNT(transaction_id) AS total_orders,
    SUM(purchase_amount) AS total_spend,
    ROUND(AVG(purchase_amount), 2) AS avg_order_value,
    CURRENT_DATE - MAX(purchase_date) AS recency_days
  FROM customer_transactions
  GROUP BY customer_id
)
SELECT
  customer_id,
  total_orders,
  total_spend,
  recency_days,
  CASE
    WHEN total_spend > 500 AND total_orders >= 5 THEN 'Champions (VIP)'
    WHEN total_orders >= 3 AND recency_days <= 45 THEN 'Loyal Customers'
    WHEN recency_days > 90 AND total_orders >= 2 THEN 'At-Risk (Churn Risk)'
    ELSE 'Occasional Buyers'
  END AS customer_segment
FROM customer_rfm
ORDER BY total_spend DESC
LIMIT 10;`,
  },
  {
    title: 'Category Churn & Retention Cohort Query',
    description: 'Tracks monthly repeat purchase velocity across merchandise categories.',
    sql: `-- Retention Cohort Analysis by Category
SELECT
  category,
  COUNT(DISTINCT customer_id) AS unique_buyers,
  ROUND(SUM(purchase_amount), 2) AS gross_revenue,
  ROUND(
    100.0 * COUNT(CASE WHEN previous_purchases > 0 THEN 1 END) / 
    COUNT(customer_id), 1
  ) AS repeat_purchase_rate_pct
FROM customer_transactions
GROUP BY category
ORDER BY gross_revenue DESC;`,
  },
];
