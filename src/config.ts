export const siteConfig = {
  // name: "Ryan Fitzgerald",
  // title: "Senior Software Engineer",
  // description: "Portfolio website of Ryan Fitzgerald",
  // accentColor: "#1d4ed8",
  // social: {
  //   email: "your-email@example.com",
  //   linkedin: "https://linkedin.com/in/yourprofile",
  //   twitter: "https://x.com/rfitzio",
  //   github: "https://github.com/RyanFitzgerald",
  name: "K Satya Narayana Rao",
  title: "Frontend Developer",
  description: "Portfolio website of K Satya Narayana ",
  accentColor: "#5c5adb",
  social: {
    email: "satyak0729@gmail.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://x.com/rfitzio",
    github: "https://github.com/RyanFitzgerald",
  },
  aboutMe:
    "Hi, I'm K. Satya Narayana Rao — a passionate Computer Science student specializing in Artificial Intelligence and Machine Learning at SRM University, AP. I enjoy building full-stack web applications and developing Real-world systems using technologies like React JS, Node.js, Javascript . My work includes projects like Photography contests with voting, blog platforms, and biomedical image classification I'm eager to grow as a software developer and contribute to impactful, real-world tech solutions.",
  skills: ["Javascript", "React", "Node.js", "Python", "DBMS", "GIT"],
  projects: [
    {
      name: "Photography Contest",
      description:
        "Developed a full-stack Photography Contest Platform using MERN. With Authentication which enabling users to participate and vote in live contests. Integrated image uploads, real-time voting, and admin controls for winner selection. Implemented email notifications and a responsive, user-friendly interface.",
      link: "https://photography-contest-phi.vercel.app",
      skills: ["React", "Node.js", "Express.js", "MongoDB", "Redux"],
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
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    }
  ],
  education: [
    {
      school: "SRM UNIVERSITY, AP",
      degree: "Bachelor of Techonolgy",
      dateRange: "2021 - 2025",
      achievements: [
        "Course: Computer Science and Engineering",
        "Specilization: Ai and Ml",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
