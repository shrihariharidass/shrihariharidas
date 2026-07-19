// Central content store for the portfolio.
// Edit the arrays/objects below to update the live site — no component changes needed.

export const profile = {
  name: "Shrihari Haridas",
  roles: [
    "Cloud & DevOps Engineer II",
    "AWS Community Builder",
    "Technical Speaker",
    "Technical Writer",
    "Open Source Enthusiast",
  ],
  location: "Bengaluru, Karnataka, India",
  email: "haridasshrihari@gmail.com",
  photoUrl:
    "https://shrihariwebsite.s3.us-east-1.amazonaws.com/WhatsApp+Image+2025-07-01+at+21.43.46.jpeg",
  resumeUrl: "https://shrihariwebsite.s3.amazonaws.com/Shrihari+Resume.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/shrihariharidas",
    medium: "https://medium.com/@shrihariharidas73",
    github: "https://github.com/shrihariharidas",
    twitter: "https://twitter.com/haridasshrihari",
    email: "mailto:haridasshrihari@gmail.com",
  },
};

export const heroIntro =
  "I design, automate, and optimize cloud infrastructure at scale while helping engineering teams build reliable, secure, and efficient platforms. My passion lies in Cloud Computing, DevOps, Kubernetes, Platform Engineering, and AI-powered automation.";

export const heroSecondary =
  "Beyond my day job, I actively contribute to the tech community through technical blogs, conference talks, workshops, mentoring, and open-source initiatives. I strongly believe in learning in public and sharing knowledge with the community.";

export const about = {
  paragraphs: [
    "I'm a Cloud & DevOps Engineer based in Bengaluru, currently working at Illumina, where I help manage and automate cloud infrastructure across more than 140 AWS accounts. My work focuses on cloud operations, platform engineering, automation, infrastructure as code, cost optimization, and developer productivity.",
    "Over the years, I've worked on designing scalable cloud architectures, building CI/CD pipelines, implementing Infrastructure as Code, deploying Kubernetes workloads, and developing automation solutions that improve operational efficiency.",
    "Outside of work, I'm passionate about sharing knowledge. I regularly write technical articles, deliver talks at conferences and community events, mentor students, and contribute to the cloud and DevOps community.",
  ],
  stats: [
    { number: "140+", label: "AWS Accounts Managed" },
    { number: "4", label: "Years AWS Community Builder" },
    { number: "3", label: "AWS/HashiCorp Certifications" },
    { number: "20+", label: "Technical Articles Published" },
  ],
};

export const whatIDo = [
  { icon: "FaCloud", label: "Cloud Architecture on AWS" },
  { icon: "FaTools", label: "DevOps & Platform Engineering" },
  { icon: "FaRocket", label: "CI/CD Automation" },
  { icon: "FaDharmachakra", label: "Kubernetes & Container Platforms" },
  { icon: "FaLayerGroup", label: "Infrastructure as Code (Terraform / OpenTofu)" },
  { icon: "FaRobot", label: "AI-powered DevOps Automation" },
  { icon: "FaChartLine", label: "Monitoring & Observability" },
  { icon: "FaShieldAlt", label: "Cloud Security Best Practices" },
  { icon: "FaPenNib", label: "Technical Writing" },
  { icon: "FaMicrophone", label: "Public Speaking & Community Building" },
];

export const journey = [
  {
    company: "Illumina",
    role: "Cloud & DevOps Engineer II",
    period: "December 2024 — Present",
    location: "Bengaluru, Karnataka, India",
    points: [
      "Manage and automate enterprise-scale cloud infrastructure across 140+ AWS accounts.",
      "Build internal platforms and automation that improve operational efficiency and developer experience.",
      "Own cloud governance, FinOps, and AI-enabled solutions for engineering teams.",
    ],
  },
  {
    company: "Burns & McDonnell India",
    role: "Platform Engineer",
    period: "September 2023 — December 2024",
    location: "Mumbai, Maharashtra, India",
    points: [
      "Supported platform engineering initiatives across cloud infrastructure and internal tooling.",
    ],
  },
  {
    company: "Medium",
    role: "Technical Content Writer",
    period: "December 2022 — December 2024",
    location: "Remote",
    points: [
      "Published beginner-friendly, hands-on technical content on cloud computing and DevOps.",
      "Focused on open-source tools with practical, freely accessible demonstrations.",
    ],
  },
  {
    company: "Ideas To Impacts",
    role: "Associate Cloud & DevOps Engineer",
    period: "January 2022 — August 2023",
    location: "India",
    points: [
      "Built CI/CD pipelines with Jenkins integrating code testing, review, and deployment.",
      "Automated mobile app builds and deployments using CodeMagic.",
      "Designed cloud-native mobile applications on AWS using Lambda, API Gateway, and DynamoDB.",
      "Used Terraform, Puppet, and Ansible for infrastructure as code and configuration management.",
      "Performed load and performance testing using JMeter, Grafana, and InfluxDB.",
      "Worked with Keycloak and Kong API Gateway for authentication and authorization.",
      "Deployed Drupal and managed Kubernetes clusters for scalable web application deployment.",
    ],
  },
];

export const achievements = [
  {
    title: "AWS Certified CloudOps Engineer – Associate",
    year: "2026",
    description:
      "Earned the AWS Certified CloudOps Engineer – Associate certification, strengthening expertise in AWS operations, monitoring, security, automation, and reliability engineering.",
    icon: "FaAws",
  },
  {
    title: "AWS Community Builder (4th Consecutive Year)",
    year: "2023 – 2026",
    description:
      "Selected for the AWS Community Builders Program for the fourth consecutive year, recognizing continued contributions through technical content, community engagement, and knowledge sharing.",
    icon: "FaUsers",
  },
  {
    title: "AWS New Voices 2026",
    year: "2026",
    description:
      "Selected for the AWS New Voices program, helping community members develop public speaking and storytelling skills for technical conferences and events.",
    icon: "FaMicrophoneAlt",
  },
  {
    title: "Jury Award — Illumina Hackathon",
    year: "2026",
    description:
      "Won the Jury Award at the Illumina internal hackathon, recognized by the judging panel for the strength and impact of the solution built.",
    icon: "FaTrophy",
  },
  {
    title: "Conference Speaker",
    year: "Ongoing",
    description:
      "Delivered technical talks and workshops at conferences, community meetups, and engineering colleges on Cloud, Linux, AWS, Kubernetes, DevOps, and modern infrastructure.",
    icon: "FaChalkboardTeacher",
  },
  {
    title: "Technical Writer",
    year: "Ongoing",
    description:
      "Published technical blogs on GitOps, OpenTofu, AWS, Jenkins, Prometheus, Grafana, Docker, Kubernetes, and cloud architecture — simplifying complex topics for beginners.",
    icon: "FaFeatherAlt",
  },
];

export const certifications = [
  { name: "AWS Certified CloudOps Engineer – Associate", issuer: "Amazon Web Services" },
  { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services" },
  { name: "HashiCorp Certified: Terraform Associate (003)", issuer: "HashiCorp" },
  { name: "Red Hat Certified System Administrator (RHCSA)", issuer: "Red Hat" },
  { name: "Cybersecurity Fundamentals", issuer: "Issuing Body" },
];

export const techExpertise = [
  { category: "Cloud", items: ["Amazon Web Services (AWS)"] },
  { category: "Containers", items: ["Docker", "Kubernetes", "Amazon EKS"] },
  { category: "Infrastructure as Code", items: ["Terraform", "OpenTofu", "CloudFormation"] },
  {
    category: "CI/CD",
    items: ["Jenkins", "GitHub Actions", "GitLab CI", "AWS CodePipeline", "CircleCI"],
  },
  { category: "Monitoring", items: ["Prometheus", "Grafana", "Loki"] },
  { category: "Programming", items: ["Python", "Bash", "PowerShell"] },
  { category: "Operating Systems", items: ["Linux", "Red Hat", "Ubuntu", "Windows Server"] },
];

// Placeholder entries — swap in your real posts once ready.
export const blogs = [
  {
    title: "Getting Started with OpenTofu on AWS",
    excerpt: "A practical, beginner-friendly walkthrough of provisioning AWS infrastructure with OpenTofu.",
    url: "https://medium.com/@shrihariharidas73",
    tag: "Infrastructure as Code",
  },
  {
    title: "GitOps in Practice: Deploying to Kubernetes",
    excerpt: "How GitOps workflows simplify Kubernetes deployments and improve reliability.",
    url: "https://medium.com/@shrihariharidas73",
    tag: "Kubernetes",
  },
  {
    title: "Monitoring AWS Workloads with Prometheus & Grafana",
    excerpt: "Setting up an open-source observability stack for AWS-hosted workloads.",
    url: "https://medium.com/@shrihariharidas73",
    tag: "Observability",
  },
];

// Placeholder entries — swap in your real talks once ready.
export const talks = [
  {
    title: "Cloud Cost & Operations at Scale",
    event: "Community Meetup",
    year: "2026",
    url: "https://www.linkedin.com/in/shrihariharidas",
  },
  {
    title: "Kubernetes Fundamentals for Beginners",
    event: "Engineering College Workshop",
    year: "2025",
    url: "https://www.linkedin.com/in/shrihariharidas",
  },
];

// Placeholder entries — swap in your real projects once ready.
export const projects = [
  {
    title: "AWS Multi-Account Governance Automation",
    description:
      "Automation tooling for managing Service Control Policies and governance guardrails across a large AWS organization.",
    tags: ["AWS", "Terraform", "Python"],
    url: "https://github.com/shrihariharidas",
  },
  {
    title: "GitOps Deployment Pipeline",
    description: "A reference CI/CD pipeline using GitOps principles to deploy workloads to Kubernetes.",
    tags: ["Kubernetes", "GitHub Actions", "GitOps"],
    url: "https://github.com/shrihariharidas",
  },
];

// Placeholder entries — swap in real event photos once ready.
export const gallery = [
  { caption: "AWS Community Day" },
  { caption: "Conference Speaking Session" },
  { caption: "Workshop with Students" },
  { caption: "Community Meetup" },
];

export const community = [
  "AWS Community Builder",
  "Technical blogging",
  "Public speaking",
  "Student mentoring",
  "Community meetups",
  "Workshops",
  "Open-source learning",
];

export const education = [
  {
    school: "Sandip University",
    degree: "Bachelor of Technology, Cloud Computing and Information Security",
    period: "2019 — 2022",
  },
  {
    school: "Guru Gobind Singh Polytechnic, Nashik",
    degree: "Diploma, Computer Engineering",
    period: "2016 — 2019",
  },
];

export const philosophy =
  "Technology evolves every day, but the willingness to keep learning is what truly defines an engineer. I believe in building, sharing, mentoring, and continuously improving — not just for myself, but for the community around me.";
