// Portfolio Data
const portfolioData = {
  personal: {
    name: "DHIVAGAR",
    tagline: "Python Developer | Web Developer ",
    email: "rdhivagar2200@gmail.com",
    phone: "+91 9347311766",
    location: "San Francisco, CA",
    linkedin: "https://linkedin.com/in/johndeveloper",
    github: "https://github.com/johndeveloper",
    
  },
  
 
  
  skills: {
    programming: [
      { name: "Python", level: 80, category: "primary" },
      { name: "JavaScript", level: 70, category: "primary" },
      { name: "HTML/CSS", level: 90, category: "primary" },
      { name: "SQL", level: 65, category: "secondary" },
    
    ],
    tools: [
      { name: "Github", level: 90, category: "primary" },
      { name: "Bootstarp", level: 80, category: "primary" },
      { name: "node.js", level: 65, category: "primary" },
      { name: "React.js", level: 70, category: "primary" },
      { name: "Django", level: 60, category: "secondary" },

    ],
   
  },
  
  projects: [
    {
      id: 1,
      title: "Office Attendance Management ",
      description: "An AI-powered office attendance system using graph algorithms to ensure accurate tracking, streamlined management, and efficient monitoring of employee presence and productivity",
      techStack: ["HTML", "CSS", "PostgreSQL", "JavaScript"],
      githubUrl: "https://github.com/Thanosda/Office-Attendence.git",
      liveUrl: "https://office-attendence.netlify.app/",
      image: "/img/office.png",
     status: "completed"
    },
    {
      id: 2,
      title: "Live Weather Forecasting Application",
      description: "A real-time weather forecasting application that leverages APIs and AI models to deliver accurate predictions, instant updates, and user-friendly insights for daily planning and decision-making.",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Thanosda/Weather-App.git",
      liveUrl: "https://chill-now.netlify.app/",
      image: "/img/weather.jfif",
      status: "completed"
    },
    {
      id: 3,
      title: "Web Scraping and Data Analysis ",
      description: "A Python-based web scraping and analysis system designed to extract structured data from websites, clean and process information, and generate actionable insights through visualization and reporting.",
      techStack: ["Python","Excel"],
      githubUrl: "https://github.com/Thanosda/Web-scraping.git",
      image: "/img/cybersecurity.png",
      featured: false,
      status: "completed"
    },
    {
      id: 4,
      title: "Photography-website",
      description: "A modern photography website showcasing stunning visuals and providing an immersive experience for clients and visitors.",
      techStack: ["HTML", "CSS", "JavaScript", "React"],
      githubUrl: "https://github.com/Thanosda/Photography-website.git",
      image: "/img/camara.png",
      status: "in-progress"
    }
  ],
  
  experience: [
    {
      id: 1,
      title: "Quality Checker Intern",
      company: "Lenovo",
      location: "Pondicherry, India",
      duration: "May 2024 ",
      type: "internship",
      description: "Worked in the Quality Assurance team to inspect laptops and PCs by checking BIOS settings, outer appearance, packaging, and identifying manufacturing defects to ensure products meet company standards..",
      achievements: [
        "BIOS & System Validation – Verified BIOS settings and system configurations",
        "Defect Detection – Identified and reported hardware and manufacturing defects before delivery.",
        "Process Compliance – Followed standard operating procedures (SOPs) for quality inspections."
      ],
      technologies: ["Quality Assurance", "Hardware Testing", "Defect Detection", "BIOS Validation", "Packaging Standards"]

    },
    {
      id: 2,
      title: "Front-end Developer",
      company: "Zero Devolpers",
      location: "Pondicherry, INDIA",
      duration: "Jul 2024",
      type: "Internship",
      description: "Designed and developed responsive, user-friendly web interfaces using modern front-end technologies to ensure seamless user experience and cross-device compatibility.",
      achievements: [
        "Developed interactive and responsive websites using HTML, CSS, and JavaScript.",
        "Integrated APIs to display dynamic data on web pages.",
        "Implemented modern UI frameworks like Bootstrap for clean and efficient design"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstarp", "SQL", "GitHub"]
    },
    {
      id: 3,
      title: " Full Stack Developer",
      company: "Novi Tech Research And Development",
      location: "Remote",
      duration: "Aug 2024",
      type: "Internship",
      description: "Built and maintained complete web applications by working on both front-end interfaces and back-end logic, ensuring smooth functionality, scalability, and user experience.",
      achievements: [
        "Developed backend services with Node.js / Python .",
        "Integrated databases for storing and managing data.",
        "Used Git/GitHub for version control and collaboration."
      ],
      technologies: ["HTML", "CSS", "JavaScript",  "MongoDB", "GitHub", "Node.js", "Python","Bootstarp"]
    }
  ],
  
 
};