import { PersonalInfo, HeroStats } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Anik Sen",
  title: "Currently working as Visiting Research Trainee (IIPP, NSTC) at the ISS-NET Lab, National Cheng Kung University (NCKU), Taiwan.",
  profileImage: "/ANIK SEN.jpg",
  email: "aniksen360@gmail.com",
  phones: {
    taiwan: "+886 926729283",
    malaysia: "+60 11 126 79199",
    bangladesh: "+880-1796986151"
  },
  location: "Tainan, Taiwan",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/senanik360/",
    github: "https://github.com/senanik360",
    googleScholar: "https://scholar.google.com/citations?user=aniksen"
  },
  about: "I am working as a visiting research trainee at NCKU, Taiwan. I have completed my work completion defence of my Master of Computing (By Research) programme at Multimedia University, Melaka, Malaysia. I worked on an FRGS-funded research project as a Graduate Research Assistant in the past two years. I completed my Bachelor of Science in Computer Science & Engineering, specializing in Software Engineering, at American International University-Bangladesh (AIUB). My research interest areas are Information Security, Machine Learning, Federated Learning, and Cryptography",
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
