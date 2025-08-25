import { Experience } from '@/types';

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Graduate Research Assistant",
    company: "Multimedia University",
    location: "Melaka, Malaysia",
    duration: "05/2024 - Current",
    current: true,
    description: [
      "Conducting research on privacy-preserving machine learning to secure data sharing in Federated Learning settings",
      "Integrating cryptographic techniques, including Homomorphic Encryption, to enhance data privacy",
      "Exploring applications of Generative AI and Large Language Models (LLMs)",
      "Working on FRGS-funded research project under Prof. Ts. Dr. Heng Swee Huay",
    ],
    achievements: [
      "Published 8+ research papers in international journals and conferences",
      "Presented research findings at 6+ international conferences",
      "Received High Achiever Research Scholarship for academic excellence"
    ]
  },
  {
    id: "2",
    title: "Computer Science Teacher",
    company: "Canadian Trillinium International School",
    location: "Bangladesh",
    duration: "2023 - 2024",
    current: false,
    description: [
      "Programming in Python (Grade 9)",
      "Programming in C++ (Grade 10)",
      "Cyber Security & Technical Support(Grade 11 & 12)"
    ]
  },
  {
    id: "3",
    title: "Research Assistant",
    company: "AIRIL (Artificial Intelligence Research and Innovation Lab)",
    location: "Bangladesh",
    duration: "2022 - 2023",
    current: false,
    description: [
      "Conducted research on artificial intelligence and machine learning applications",
      "Assisted in developing AI-powered solutions for various domains",
      "Collaborated with research team on innovative projects"
    ]
  },
  {
    id: "4",
    title: "Cloud Computing Trainee",
    company: "Tech Company",
    location: "Bangladesh",
    duration: "2021 - 2022",
    current: false,
    description: [
      "Learned cloud computing technologies and deployment strategies",
      "Worked with AWS and Azure platforms for application deployment",
      "Gained hands-on experience with containerization and microservices"
    ]
  },
  {
    id: "5",
    title: "QA Functional Testing Intern",
    company: "Software Company",
    location: "Bangladesh",
    duration: "2020 - 2021",
    current: false,
    description: [
      "Performed functional testing of software applications using Selenium",
      "Developed automated test scripts for web applications",
      "Collaborated with development team to identify and resolve bugs"
    ]
  }
];
