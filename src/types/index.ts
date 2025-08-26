// Personal Information
export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phones: {
    malaysia: string;
    bangladesh: string;
  };
  location: string;
  socialLinks: {
    linkedin: string;
    github: string;
    googleScholar: string;
  };
  about: string;
  researchInterests: string[];
  profileImage?: string;
}

// Work Experience
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  current: boolean;
  description: string[];
  achievements?: string[];
  skills?: string[];
}

// Education
export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  gpa?: string;
  honors?: string[];
  thesis?: string;
  current: boolean;
}

// Publications
export interface Publication {
  id: string;
  type: 'journal' | 'conference' | 'under-publication' | 'submitted';
  title: string;
  authors?: string;
  venue: string;
  year: number;
  doi?: string;
  url?: string;
  pages?: string;
  status: string;
  indexing: string[];
  impact?: string;
  abstract?: string;
}

// Skills
export interface SkillCategory {
  id?: string;
  category: string;
  skills: {
    name: string;
    level: number; // 1-5 scale
    icon?: string;
  }[];
}

// Awards
export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  description: string;
  category: 'academic' | 'research' | 'competition' | 'scholarship';
  certificate?: string;
}

// Activities
export interface Activity {
  id: string;
  title: string;
  organization: string;
  year: number;
  type: 'workshop' | 'training' | 'volunteer' | 'leadership' | 'competition' | 'conference';
  description: string;
  certificate?: string;
}

// Contact Form
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Navigation
export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

// Hero Stats
export interface HeroStats {
  label: string;
  value: string;
}
