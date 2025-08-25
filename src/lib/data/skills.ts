import { SkillCategory } from '@/types';

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C", level: 4, icon: "c" },
      { name: "C++", level: 4, icon: "cpp" },
      { name: "Java", level: 5, icon: "java" },
      { name: "C#", level: 3, icon: "csharp" },
      { name: "Python", level: 5, icon: "python" },
      { name: "JavaScript", level: 4, icon: "javascript" },
      { name: "PHP", level: 3, icon: "php" },
      { name: "Rust", level: 3, icon: "rust" }
    ]
  },
  {
    category: "Backend Frameworks",
    skills: [
      { name: "ASP.NET", level: 4, icon: "dotnet" }
    ]
  },
  {
    category: "Frontend Technologies",
    skills: [
      { name: "HTML5", level: 5, icon: "html5" },
      { name: "CSS3", level: 4, icon: "css3" },
      { name: "Bootstrap 5", level: 4, icon: "bootstrap" }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", level: 4, icon: "mysql" },
      { name: "MS SQL", level: 3, icon: "mssql" },
      { name: "PL SQL", level: 3, icon: "plsql" }
    ]
  },
  {
    category: "Testing Tools",
    skills: [
      { name: "Selenium with Java", level: 4, icon: "selenium" }
    ]
  },
  {
    category: "Research Tools",
    skills: [
      { name: "LaTeX", level: 5, icon: "latex" }
    ]
  },
  {
    category: "Machine Learning & AI",
    skills: [
      { name: "TensorFlow", level: 4, icon: "tensorflow" },
      { name: "PyTorch", level: 4, icon: "pytorch" },
      { name: "Scikit-learn", level: 5, icon: "scikit" },
      { name: "OpenCV", level: 3, icon: "opencv" }
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 3, icon: "aws" },
      { name: "Azure", level: 3, icon: "azure" },
      { name: "Docker", level: 3, icon: "docker" },
      { name: "Git", level: 4, icon: "git" }
    ]
  },
  {
    category: "Problem Solving",
    skills: [
      { name: "Data Structures", level: 5, icon: "ds" },
      { name: "Algorithms", level: 5, icon: "algo" },
      { name: "Competitive Programming", level: 4, icon: "cp" }
    ]
  }
];
