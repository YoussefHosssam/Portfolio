export type LocaleKey = 'home_title' | 'home_subtitle' | 'cta_projects' | 'cta_contact' | 'about_title' | 'experience_title' | 'projects_title' | 'skills_title' | 'contact_title' | 'ready_to_work' | 'certifications' | 'contact' | 'social' | 'experience' | 'specialty' | 'nav_home' | 'nav_about' | 'nav_experience' | 'nav_projects' | 'nav_skills' | 'nav_contact' | 'api_collection' | 'home' | 'about' | 'projects' | 'skills' | 'experience_label' | 'contact_label' | 'name_ar' | 'title_ar' | 'tagline_ar' | 'available_for_work' | 'open_to_opportunities' | 'connect' | 'all_rights_reserved';

export const dictionary = {
  en: {
    home_title: 'Youssef Hossam',
    home_subtitle: 'Backend Developer & Cybersecurity Specialist',
    cta_projects: 'View Projects',
    cta_contact: 'Get In Touch',
    about_title: 'About Me',
    experience_title: 'Experience',
    projects_title: 'Featured Projects',
    skills_title: 'Skills & Expertise',
    contact_title: 'Get In Touch',
    ready_to_work: 'Ready to work',
    certifications: 'Certifications',
    contact: 'Contact',
    social: 'Social',
    experience: 'Experience',
    specialty: 'Specialty',
    nav_home: 'Home',
    nav_about: 'About',
    nav_experience: 'Experience',
    nav_projects: 'Projects',
    nav_skills: 'Skills',
    nav_contact: 'Contact',
    api_collection: 'API Collection',
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    experience_label: 'Experience',
    contact_label: 'Contact',
    name_ar: 'Youssef Hossam',
    title_ar: 'Software Engineer | Backend Developer | .NET & Node.js',
    tagline_ar: 'Building scalable APIs & real-time apps with .NET, Node.js, and cloud services.',
    available_for_work: 'Available for work',
    open_to_opportunities: 'Open to opportunities',
    connect: 'Connect',
    all_rights_reserved: 'All rights reserved.'
  }
};

export const t = (lang: 'en' | 'ar', key: LocaleKey) => dictionary.en[key]; 