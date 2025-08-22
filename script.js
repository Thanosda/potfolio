// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initTypewriter();
    initProjects();
    initSkills();
    initExperience();
    initContactForm();
    initScrollAnimations();
    initSmoothScroll();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// Typewriter effect for hero section
function initTypewriter() {
    const typewriterText = document.getElementById('typewriter-text');
    const text = portfolioData.personal.tagline;
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typewriterText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    // Start typewriter effect after a short delay
    setTimeout(typeWriter, 1000);
}

// Projects section functionality
function initProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Render projects
    function renderProjects(projects = portfolioData.projects) {
        projectsGrid.innerHTML = '';
        
        projects.forEach((project, index) => {
            const projectCard = createProjectCard(project, index);
            projectsGrid.appendChild(projectCard);
        });
    }

    // Create project card
    function createProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = 'project-card fade-in';
        card.style.animationDelay = `${index * 100}ms`;

        const badgeClass = project.featured ? 'featured' : project.status;
        const badgeText = project.featured ? '⭐ Featured' : 
                         project.status === 'completed' ? 'Completed' : 'In Progress';

        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
                <div class="project-badge ${badgeClass}">${badgeText}</div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="tech-stack">
                    ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.githubUrl}" target="_blank" class="project-link github">
                        <i class="fab fa-github"></i> Code
                    </a>
                    ${project.liveUrl ? `
                        <a href="${project.liveUrl}" target="_blank" class="project-link live">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>
                    ` : ''}
                </div>
            </div>
        `;

        return card;
    }

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            const filter = button.dataset.filter;
            let filteredProjects = portfolioData.projects;

            if (filter !== 'all') {
                filteredProjects = portfolioData.projects.filter(project => {
                    if (filter === 'featured') return project.featured;
                    return project.status === filter;
                });
            }

            renderProjects(filteredProjects);
        });
    });

    // Initial render
    renderProjects();
}

// Skills section functionality
function initSkills() {
    const programmingSkills = document.getElementById('programming-skills');
    const devopsSkills = document.getElementById('devops-skills');
    const frameworkSkills = document.getElementById('framework-skills');

    // Render skills
    function renderSkills(container, skills, category) {
        container.innerHTML = '';
        
        skills.forEach((skill, index) => {
            const skillItem = document.createElement('div');
            skillItem.className = 'skill-item fade-in';
            skillItem.style.animationDelay = `${index * 100}ms`;

            skillItem.innerHTML = `
                <div class="skill-header">
                    <span class="skill-name">${skill.name}</span>
                    <span class="skill-level">${skill.level}%</span>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress ${skill.category}" data-level="${skill.level}"></div>
                </div>
            `;

            container.appendChild(skillItem);
        });
    }

    // Animate skill bars when in view
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        skillBars.forEach(bar => {
            const level = bar.dataset.level;
            bar.style.width = level + '%';
        });
    }

    // Render all skills
    renderSkills(programmingSkills, portfolioData.skills.programming, 'programming');
    renderSkills(devopsSkills, portfolioData.skills.tools, 'devops');
    renderSkills(frameworkSkills, portfolioData.skills.frameworks, 'frameworks');

    // Animate skill bars when skills section is in view
    const skillsSection = document.getElementById('skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(animateSkillBars, 500);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(skillsSection);
}

// Experience timeline functionality
function initExperience() {
    const timelineItems = document.getElementById('timeline-items');

    function renderExperience() {
        timelineItems.innerHTML = '';

        portfolioData.experience.forEach((exp, index) => {
            const isLeft = index % 2 === 0;
            const timelineItem = document.createElement('div');
            timelineItem.className = `timeline-item ${isLeft ? 'left' : 'right'} fade-in`;
            timelineItem.style.animationDelay = `${index * 200}ms`;

            const iconClass = getExperienceIcon(exp.type);
            const nodeColor = getExperienceColor(exp.type);

            timelineItem.innerHTML = `
                <div class="timeline-node" style="background: ${nodeColor}">
                    <i class="${iconClass}"></i>
                </div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <h3 class="timeline-title">${exp.title}</h3>
                        <div class="timeline-company">${exp.company}</div>
                        <div class="timeline-meta">
                            <span><i class="fas fa-calendar"></i> ${exp.duration}</span>
                            <span><i class="fas fa-map-marker-alt"></i> ${exp.location}</span>
                        </div>
                    </div>
                    <p class="timeline-description">${exp.description}</p>
                    <div class="timeline-achievements">
                        <h4>Key Achievements:</h4>
                        <ul>
                            ${exp.achievements.map(achievement => 
                                `<li>${achievement}</li>`
                            ).join('')}
                        </ul>
                    </div>
                    <div class="timeline-tech">
                        <h4>Technologies:</h4>
                        <div class="timeline-tech-list">
                            ${exp.technologies.map(tech => 
                                `<span class="timeline-tech-tag">${tech}</span>`
                            ).join('')}
                        </div>
                    </div>
                </div>
            `;

            timelineItems.appendChild(timelineItem);
        });
    }

    function getExperienceIcon(type) {
        switch (type) {
            case 'internship': return 'fas fa-graduation-cap';
            case 'freelance': return 'fas fa-user';
            case 'learning': return 'fas fa-book';
            default: return 'fas fa-briefcase';
        }
    }

    function getExperienceColor(type) {
        switch (type) {
            case 'internship': return 'linear-gradient(135deg, #10b981, #059669)';
            case 'freelance': return 'linear-gradient(135deg, #667eea, #764ba2)';
            case 'learning': return 'linear-gradient(135deg, #f59e0b, #d97706)';
            default: return 'linear-gradient(135deg, #6b7280, #4b5563)';
        }
    }

    renderExperience();
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');
    const submitBtn = contactForm.querySelector('.btn-submit');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Show loading state
        btnText.style.display = 'none';
        btnLoader.style.display = 'flex';
        submitBtn.disabled = true;

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Show success message
        formSuccess.style.display = 'flex';
        contactForm.reset();

        // Reset button state
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
        submitBtn.disabled = false;

        // Hide success message after 5 seconds
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 5000);
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));
}

// Smooth scrolling for navigation links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
}

// Download CV functionality
function downloadCV() {
    // Create a simple alert for demo purposes
    alert('CV download functionality would be implemented here. You would typically link to a PDF file.');
    
    // In a real implementation, you might do something like:
     const link = document.createElement('a');
     link.href = 'Resume.pdf'; // Path to your CV file
    link.download = 'Dhivagar_CV.pdf';
    link.click();
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add some additional interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    const body = document.body;
    body.style.opacity = '0';
    body.style.transition = 'opacity 0.5s ease';
    
    window.addEventListener('load', () => {
        body.style.opacity = '1';
    });

    // Add cursor effects for better interactivity
    const interactiveElements = document.querySelectorAll('button, a, .project-card, .skill-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            document.body.style.cursor = 'pointer';
        });
        
        element.addEventListener('mouseleave', () => {
            document.body.style.cursor = 'default';
        });
    });

    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', debounce(() => {
        const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = scrolled + '%';
    }, 10));
});