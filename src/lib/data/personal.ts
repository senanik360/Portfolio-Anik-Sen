import { PersonalInfo, HeroStats } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Anik Sen",
  title: "Currently Working on a FRGS Project as a Graduate Research Assistant, Center for Information Security, MMU, Malacca, Malaysia.",
  profileImage: "/ANIK SEN.jpg",
  email: "aniksen360@gmail.com",
  phones: {
    malaysia: "+60 11 126 79199",
    bangladesh: "+880-1796986151"
  },
  location: "Malacca, 75450, Malaysia",
  socialLinks: {
    linkedin: "https://linkedin.com/in/aniksen",
    github: "https://github.com/aniksen",
    googleScholar: "https://scholar.google.com/citations?user=aniksen"
  },
  about: "I am pursuing my Master of Computing (By Research) at Multimedia University, Melaka, Malaysia, with an expected completion in March 2026. I am working on an FRGS-funded research project as a Graduate Research Assistant. I completed my Bachelor of Science in Computer Science & Engineering, specializing in Software Engineering, at American International University-Bangladesh (AIUB). My research interest areas are Information Security, Machine Learning, Federated Learning, and Cryptography.",
  researchInterests: [
    "Information Security",
    "Machine Learning",
    "Artificial Intelligence",
    "Federated Learning",
    "Cryptography",
    "Cybersecurity",
    "Secure Data Sharing"
  ]
};

export const heroStats: HeroStats[] = [
  {
    label: "Publications",
    value: "8+"
  },
  {
    label: "Conferences",
    value: "6+"
  },
  {
    label: "Awards",
    value: "8+"
  },
  {
    label: "Undergraduate CGPA",
    value: "3.94/4.00"
  }
];

export const tagline = "Master of Computing(By Research) | Teacher & Researcher | Information Security, Machine Learning, Artificial Intelligence, Cryptography, Federated Learning";
