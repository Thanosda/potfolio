// Portfolio Data
const portfolioData = {
  personal: {
    name: "DHIVAGAR",
    tagline: "Python Developer | Web Developer ",
    email: "rdhivagar2200@gmail.com.com",
    phone: "+91 9347311766",
    location: "San Francisco, CA",
    linkedin: "https://linkedin.com/in/johndeveloper",
    github: "https://github.com/johndeveloper",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },
  
  about: {
    summary: "B.E. Computer Science Engineering graduate with 2+ years of experience in Python development and growing expertise in DevOps practices. Passionate about building scalable applications and implementing efficient deployment pipelines. Currently transitioning from full-stack development to DevOps engineering.",
    education: {
      degree: "Bachelor of Engineering - Computer Science",
      university: "Tech University",
      year: "2022",
      gpa: "3.8/4.0"
    },
    certifications: [
      "AWS Cloud Practitioner",
      "Docker Fundamentals",
      "Python Developer Certification"
    ]
  },
  
  skills: {
    programming: [
      { name: "Python", level: 90, category: "primary" },
      { name: "JavaScript", level: 80, category: "primary" },
      { name: "HTML/CSS", level: 85, category: "primary" },
      { name: "SQL", level: 75, category: "secondary" },
      { name: "Bash/Shell", level: 70, category: "secondary" }
    ],
    tools: [
      { name: "Git", level: 85, category: "primary" },
      { name: "Docker", level: 80, category: "primary" },
      { name: "AWS", level: 75, category: "primary" },
      { name: "Linux", level: 80, category: "primary" },
      { name: "Jenkins", level: 65, category: "secondary" },
      { name: "Kubernetes", level: 60, category: "secondary" }
    ],
    frameworks: [
      { name: "Django", level: 85, category: "primary" },
      { name: "FastAPI", level: 80, category: "primary" },
      { name: "React", level: 75, category: "secondary" },
      { name: "Flask", level: 70, category: "secondary" }
    ]
  },
  
  projects: [
    {
      id: 1,
      title: "E-Commerce API Platform",
      description: "A scalable REST API built with FastAPI and PostgreSQL, featuring user authentication, payment integration, and comprehensive testing. Deployed using Docker containers on AWS ECS.",
      techStack: ["Python", "FastAPI", "PostgreSQL", "Docker", "AWS ECS", "Redis"],
      githubUrl: "https://github.com/johndeveloper/ecommerce-api",
      liveUrl: "https://ecommerce-api-demo.com",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      featured: true,
      status: "completed"
    },
    {
      id: 2,
      title: "DevOps CI/CD Pipeline",
      description: "Automated deployment pipeline using Jenkins, Docker, and AWS. Includes automated testing, security scanning, and blue-green deployments for zero-downtime releases.",
      techStack: ["Jenkins", "Docker", "AWS", "Terraform", "Python", "Bash"],
      githubUrl: "https://github.com/johndeveloper/cicd-pipeline",
      liveUrl: null,
      image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop",
      featured: true,
      status: "completed"
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description: "WebSocket-based chat application with React frontend and Python backend. Features include real-time messaging, user authentication, and message persistence.",
      techStack: ["Python", "WebSocket", "React", "MongoDB", "Docker"],
      githubUrl: "https://github.com/johndeveloper/realtime-chat",
      liveUrl: "https://chat-app-demo.com",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      featured: false,
      status: "completed"
    },
    {
      id: 4,
      title: "Infrastructure Monitoring Dashboard",
      description: "Comprehensive monitoring solution using Prometheus, Grafana, and custom Python scripts. Provides real-time insights into system performance and alerts.",
      techStack: ["Python", "Prometheus", "Grafana", "Docker", "Kubernetes"],
      githubUrl: "https://github.com/johndeveloper/monitoring-dashboard",
      liveUrl: null,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      featured: false,
      status: "in-progress"
    }
  ],
  
  experience: [
    {
      id: 1,
      title: "Quality Checker Intern",
      company: "Lenovo",
      location: "Remote",
      duration: "Jun 2023 - Aug 2023",
      type: "internship",
      description: "Developed automated testing scripts for hardware validation processes. Improved testing efficiency by 40% through Python automation and implemented quality metrics dashboard.",
      achievements: [
        "Created automated test suites reducing manual testing time by 40%",
        "Developed quality metrics dashboard using Python and Flask",
        "Collaborated with international teams on product validation processes"
      ],
      technologies: ["Python", "Selenium", "Flask", "MySQL", "Git"]
    },
    {
      id: 2,
      title: "Full-Stack Developer",
      company: "Freelance Projects",
      location: "Remote",
      duration: "Jan 2023 - Present",
      type: "freelance",
      description: "Developing web applications for small businesses using Python/Django backend and React frontend. Focus on responsive design and deployment automation.",
      achievements: [
        "Delivered 5+ client projects with 100% satisfaction rate",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Built scalable applications handling 10k+ concurrent users"
      ],
      technologies: ["Python", "Django", "React", "PostgreSQL", "Docker", "AWS"]
    },
    {
      id: 3,
      title: "DevOps Learning Journey",
      company: "Self-Directed Learning",
      location: "Online",
      duration: "Sep 2023 - Present",
      type: "learning",
      description: "Intensive self-study program focusing on DevOps practices, cloud technologies, and infrastructure automation. Completed multiple hands-on projects.",
      achievements: [
        "Obtained AWS Cloud Practitioner certification",
        "Built and deployed 10+ containerized applications",
        "Mastered Infrastructure as Code using Terraform"
      ],
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "Ansible"]
    }
  ],
  
  testimonials: [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Senior DevOps Engineer at TechCorp",
      content: "John's dedication to learning DevOps practices is impressive. His Python background gives him a unique perspective on automation and infrastructure management.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c8fe?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      role: "Team Lead at Lenovo",
      content: "During John's internship, he demonstrated exceptional problem-solving skills and delivered automation solutions that significantly improved our testing processes.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ]
};