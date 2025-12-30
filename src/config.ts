export const siteConfig = {
  name: "K Satya Narayana Rao",
  title: "Frontend Developer",
  description: "Portfolio website of K Satya Narayana ",
  accentColor: "#3db14d",
  accentColors: [
    "#3db14d", // Green
    "#4d8adb", // Blue
    "#db4d4d", // Red
    "#9c4ddb", // Purple
    "#dba84d", // Orange
    "#4ddbdb", // Cyan
  ],
  social: {
    email: "satyak0729@gmail.com",
    linkedin: "https://www.linkedin.com/in/satya-narayana-2003aa246/",
    twitter: "https://x.com/",
    github: "https://github.com/satyaK0729",
  },
  aboutMe:
    `Hi, I'm K. Satya Narayana Rao — I am a Computer Science major specializing in AI and ML at SRM University, AP. I build full-stack web applications using technologies like React JS, Node.js, Express.js, and Javascript. My work includes projects like Photography contests with voting, blog platform, and biomedical image classification. I'm eager to grow as a software developer and contribute some impactful, real-world solutions.`,
  skills: ["Python", "Javascript", "React", "MERN", "BigQuery", "(GCP) Google Cloud Platform ", "DBMS", "GitHub "],
  projects: [
    {
      name: "Photography Contest with voting",
      description:
        "Developed a full-stack Photography Contest Platform using MERN. With Authentication which enabling users to participate and vote in live contests. Integrated image uploads, real-time voting, and admin controls for winner selection. Implemented email notifications and a responsive, user-friendly interface.",
      link: "https://photography-contest-phi.vercel.app",
      skills: ["React", "Node.js", "Express.js", "MongoDB", "Redux"],
    },
    {
      name: "BigQuery: Target E-Commerce Performance Analytics",
      description:
        "Developed and implemented an end-to-end analytics solution on a dataset of over 100,000 e-commerce orders for a target e-commerce platform using Google BigQuery. The project involved ingesting, normalizing, and analyzing data from 8 interconnected tables, ultimately generating key performance indicators (KPIs) for optimizing delivery performance and logistics",
      link: "https://github.com/satyaK0729/Target-Sql-Analysis",
      skills: ["BigQuery", "Google Cloud PLatform (GCP)", "SQL"],
    },
    {
      name: "Automated ETL Data Pipeline on Sales Data in GCP",
      description:
        "Developed and implemented an end-to-end analytics solution on a dataset of over 100,000 e-commerce orders for a target e-commerce platform using Google BigQuery. The project involved ingesting, normalizing, and analyzing data from 8 interconnected tables, ultimately generating key performance indicators (KPIs) for optimizing delivery performance and logistics",
      link: "https://github.com/satyaK0729/Target-Sql-Analysis",
      skills: ["Google Cloud Storage","Google Cloud Functions","BigQuery", "LookerStudio","Airflow","Python Flask"],
    },
    {
      name: "Robust Biomedical Image Classification Using Fuzzy Weighted Ensemble of Deep Neural Networks.",
      description:
        "Implemented  a biomedical image classification system using ensemble deep learning with TensorFlow. Implemented Fuzzy Weighted Majority Voting (FWMV) to enhance model confidence and accuracy. Trained and evaluated multiple architectures like ResNet50, DenseNet121, and ConvNeXt-Tiny. Achieved improved performance and robustness in medica image analysis through fuzzy-based weighting.",
      link: "https://drive.google.com/file/d/1ZhVusUk7AFuKebfblrst3KLw1dkrVAum/view",
      skills: ["Tensorflow", "CNN", "Ensemble Learning", "Deep Learning Models"],
    },
    {
      name: "Full Stack Blog App",
      description:
        "Built a Full Stack Blog Application using the MERN stack (MongoDB, Express, React, Node.js). Enabled users to create, edit, delete, and view blog posts with secure JWT authentication. Designed a responsive and intuitive interface for smooth user experience across all devices. Integrated RESTful APIs and optimized database operations for fast, scalable performance.",
      link: "https://github.com/satyaK0729/Blog-App-Full-Stack",
      skills: ["React", "Node.js", "Express.js", "JWT", "REST API's", "MongoDB"],
    },
  ],
  experience: [
    {
      company: "TechNook",
      title: "Python intern",
      dateRange: "Sep 2024 - Nov 2024",
      bullets: [
        "Acquired proficiency in Python Libraries and Django Web Framework Worked on Developing the e-commerce website using HTML, CSS (Frontend) and Python as (Backend)",
        "Email sender Web App contains the Authentication. Sending the 100 E-mails by the SMTP using the SendGrid .",
      ],
    }
  ],
  education: [
    {
      school: "SRM UNIVERSITY, AP",
      degree: "Bachelor of Techonolgy  B.Tech",
      dateRange: "2021 - 2025",
      achievements: [
        "Course: Computer Science and Engineering",
        "Specilization: Ai and Ml",
      ],
    }

  ],
  resumeLink: "https://drive.google.com/file/d/1FeFD5ooZnzT2yWRE9_BFF5aG8aJdB9Ht/view?usp=sharing",
};
