// TypeScript interfaces
export interface PersonalInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
}

export interface About {
  education: string;
  specialty: string;
  experience: string;
  passion: string;
}

export interface Project {
  id: number;
  name: string;
  stack: string[];
  description: string;
  repo: string;
  demo?: string;
  features: string[];
  photo?: string;
  year?: string;
}

export interface SkillItem {
  name: string;
  icon: string;
  logo?: string;
}

export interface SkillCategory {
  name: string;
  items: SkillItem[];
}

export interface ContactForm {
  endpoint: string;
  fields: string[];
  successResponse: {
    status: string;
    message: string;
    timestamp: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Youssef Hossam",
  title: "Backend Developer",
  phone: "01060758396",
  email: "yh55694@gmail.com",
  github: "https://github.com/YoussefHosssam",
  linkedin: "https://www.linkedin.com/in/youssef-hossam-nz/"
};

export const about: About = {
  education: "Faculty of Computers & AI, Cairo University",
  specialty: "Backend Development",
  experience: "Junior Backend Developer",
  passion: "Building secure, scalable APIs and robust backend systems"
};

export const projects: Project[] = [
  {
    id: 1,
    name: "BORRI - Online Booking Store",
    stack: ["Django", "SQLite", "JS"],
    description: "Full-stack web application for managing and borrowing books as part of a college project.",
    repo: "https://github.com/YoussefHosssam/OnlineBookStore",
    features: ["OTP verification", "Role-based Access Control"],
    photo: "/project-borri.jpg",
    year: "2025"
  },
  {
    id: 2,
    name: "SkillZone - Online Learning Platform API's",
    stack: ["Node.js", "MongoDB", "Express.js", "JWT", "OAuth 2.0"],
    description: "Online learning API for managing educational centers, branches, courses, instructors, and student interactions.",
    repo: "https://github.com/YoussefHosssam/SkillZone",
    features: ["JWT Authentication", "Role-based Access Control", "Google OAuth 2.0"],
    photo: "/project-skillzone.jpg",
    year: "2025"
  },
];

export const skills: SkillCategory[] = [
  {
    name: "Backend Technologies",
    items: [
      { name: "Entity Framework Core", icon: "🔧", logo: "/logos/ef-core.svg" },
      { name: "REST APIs", icon: "🌐", logo: "/logos/rest-api.svg" },
      { name: "JWT", icon: "🔐", logo: "/logos/jwt.svg" },
      { name: "SocketIO", icon: "⚡", logo: "/logos/socketio.svg" },
      { name: "SignalR", icon: "📡", logo: "/logos/signalr.svg" }
    ]
  },
  {
    name: "Databases",
    items: [
      { name: "MySQL", icon: "🐬", logo: "/logos/mysql.svg" },
      { name: "SQL Server", icon: "🗄️", logo: "/logos/sqlserver.svg" },
      { name: "MongoDB", icon: "🍃", logo: "/logos/mongodb.svg" }
    ]
  },
  {
    name: "Security & Certifications",
    items: [
      { name: "Network+", icon: "🛡️", logo: "/logos/network-plus.svg" },
      { name: "eJPTv1", icon: "🎯", logo: "/logos/ejpt.svg" },
      { name: "HCIA-Security", icon: "🔐", logo: "/logos/hcia.svg" },
      { name: "CCNA", icon: "🌐", logo: "/logos/ccna.svg" }
    ]
  },
  {
    name: "Development Tools",
    items: [
      { name: "Git", icon: "📝", logo: "/logos/git.svg" },
      { name: "Postman", icon: "📮", logo: "/logos/postman.svg" },
      { name: "Jira", icon: "📋", logo: "/logos/jira.svg" },
      { name: "Docker", icon: "🐳", logo: "/logos/docker.svg" },
      { name: "Azure", icon: "☁️", logo: "/logos/azure.svg" }
    ]
  },
  {
    name: "Programming Languages",
    items: [
      { name: "C#", icon: "💎", logo: "/logos/csharp.svg" },
      { name: "Python", icon: "🐍", logo: "/logos/python.svg" },
      { name: "JavaScript", icon: "🟨", logo: "/logos/javascript.svg" },
      { name: "TypeScript", icon: "🔷", logo: "/logos/typescript.svg" },
      { name: "SQL", icon: "🗃️", logo: "/logos/sql.svg" },
      { name: "PHP", icon: "🐘", logo: "/logos/php.svg" }
    ]
  },
  {
    name: "Frameworks",
    items: [
      { name: "ASP.NET Core", icon: "🟦", logo: "/logos/aspnet.svg" },
      { name: "Django", icon: "🐍", logo: "/logos/django.svg" },
      { name: "Express.js", icon: "🚂", logo: "/logos/express.svg" },
      { name: "Laravel", icon: "🔥", logo: "/logos/laravel.svg" }
    ]
  }
];

export const contactForm: ContactForm = {
  endpoint: "POST /contact",
  fields: ["name", "email", "message"],
  successResponse: {
    status: "200 OK",
    message: "Thanks for reaching out, I'll reply soon!",
    timestamp: new Date().toISOString()
  }
}; 