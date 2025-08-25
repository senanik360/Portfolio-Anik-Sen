import { Education } from '@/types';

export const education: Education[] = [
  {
    id: "1",
    degree: "Master of Computing (By Research)",
    institution: "Multimedia University",
    location: "Malacca, Malaysia",
    duration: "2024 - Present",
    current: true,
    thesis: "Secure Data Sharing: Innovations in Hybrid Machine Learning and Cryptography",
    honors: ["High Achiever Research Scholarship"]
  },
  {
    id: "2",
    degree: "B.Sc in Computer Science and Engineering",
    institution: "American International University-Bangladesh (AIUB)",
    location: "Dhaka, Bangladesh",
    duration: "2019 - 2023",
    gpa: "3.94/4.00",
    current: false,
    thesis: "Innovative Techniques of Data Sharing and Security for Anomaly Detection Using Novel Machine Learning Techniques",
    honors: [
      "Magna Cum Laude",
      "Dean's List Honor (5 consecutive times)",
      "High Achiever Scholarship"
    ]
  },
  {
    id: "3",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Sreemangal Government College",
    location: "Sreemangal, Bangladesh",
    duration: "2016 - 2018",
    current: false,
  }
];
