import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  companyUrl?: string;
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

interface Skill {
  name: string;
  level: number;
}

interface Award {
  title: string;
  organization: string;
  description?: string;
}

interface Certification {
  title: string;
  organization: string;
  period?: string;
}

interface Language {
  name: string;
  proficiency: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  image?: string;
  year?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px) scale(0.9)' }),
        animate('800ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-50px) rotate(-5deg)' }),
        animate('700ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ opacity: 1, transform: 'translateX(0) rotate(0deg)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(50px) rotate(5deg)' }),
        animate('700ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ opacity: 1, transform: 'translateX(0) rotate(0deg)' }))
      ])
    ]),
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(40px) scale(0.8)' }),
        animate('600ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ opacity: 1, transform: 'translateY(0) scale(1)' }))
      ])
    ]),
    trigger('bounceIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.3)' }),
        animate('600ms cubic-bezier(0.68, -0.55, 0.265, 1.55)', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('rotateIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'rotate(-180deg) scale(0.5)' }),
        animate('800ms cubic-bezier(0.175, 0.885, 0.32, 1.275)', style({ opacity: 1, transform: 'rotate(0deg) scale(1)' }))
      ])
    ]),
    trigger('stagger', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(100, animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })))
        ], { optional: true })
      ])
    ]),
    trigger('scaleIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('500ms cubic-bezier(0.34, 1.56, 0.64, 1)', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(60px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  isDarkMode = true;
  
  // Stats
  stats = {
    technologies: 12,
    projects: 4,
    experience: 4
  };
  
  // Skills organized by category
  skillCategories = {
    frontend: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Sass/SCSS', 'Bootstrap', 'Angular Material', 'PrimeNG','Figma'],
    // backend: ['Node.js', 'RESTful API', 'RxJS'],
    tools: ['Git', 'GitHub', 'Bitbucket', 'Angular CLI', 'NPM', 'VS Code', 'AI - Tools'],
    projectManagement: ['JIRA', 'Confluence', 'Agile/Scrum'],
    stateManagement: ['NgRx', 'RxJS'],
  };
  
  // Personal Information
  name = 'BHAGYALAKSHMI T P';
  title = 'SOFTWARE ENGINEER';
  email = 'bhagubhagya14@gmail.com';
  phone = '+971-565992313, +91-9497025618';
  location = 'ABU DHABI, UAE';
  linkedin = 'https://www.linkedin.com/in/bhagyalakshmitp-dev/';
  github = 'https://github.com/bhagyalakshmy';
  visaStatus = 'Dependent Visa';
  profileImage = 'assets/images/profile-pic.jpeg'; // Update this path to your image
  showPlaceholder = false;
  
  onImageError() {
    this.showPlaceholder = true;
  }
  
  about = 'Highly motivated Frontend Developer specializing in Angular with 4+ years of experience building scalable, enterprise-level web applications. Strong expertise in Angular, TypeScript, RxJS, and NgRx for developing high-performance, reactive frontend solutions. Proven ability to collaborate with cross-functional teams, integrate RESTful APIs, and optimize UI performance to enhance user experience. Experienced in developing responsive, production-ready applications while maintaining clean architecture and coding standards. Currently based in the UAE on a dependent visa and available to join immediately.'
  
  experiences: Experience[] = [
    {
      title: 'Software Engineer',
      company: 'Rawdata Technologies',
      companyUrl: 'https://www.rawdatatech.com/',
      period: 'Dec 2021 - Present',
      description: [
        'Lead front-end development of maritime ERP web applications using Angular',
        'Implemented state management with NgRx to handle complex UI and data synchronization efficiently',
        'Collaborated with product, design, and backend teams to translate business requirements into robust solutions',
        'Mentored junior developers and conducted code reviews to maintain performance and code quality',
        'Optimized application performance and UI responsiveness for large data-driven modules',
        'Key Projects: InTEUtion - Cloud-based ERP/operations platform built specifically for shipping, container, and liner industries (implemented modular architecture and NgRx-based state management)',
        'Customer Portal - Web platform for managing shipping requests and quotes with advanced form handling and validation using Reactive Forms'
      ]
    },
    {
      title: 'Angular Intern',
      company: 'Prvak Technology Solutions Pvt. Ltd',
      companyUrl: 'https://www.linkedin.com/company/prvak-technology-solutions',
      period: 'Sep 2021 - Dec 2021',
      description: [
        'Assisted in front-end development for EPEX, an e-commerce web platform',
        'Implemented dynamic UI components using Angular Material and REST API integrations'
      ]
    },
    {
      title: 'Angular Intern',
      company: 'Aitrich Technologies',
      companyUrl: 'https://aitrich.com/',
      period: 'May 2021 - Aug 2021',
      description: [
        'Developed a food-ordering application using Angular and JHipster',
        'Enhanced form validations, routing, and service communication between UI modules'
      ]
    }
  ];
  
  education: Education[] = [
    {
      degree: 'Bachelor Of Technology, Electrical and Electronics Engineering',
      institution: 'APJ Abdul Kalam Technological University (Kerala Technological University) - Thejus Engineering College, Thrissur, Kerala, India',
      period: 'Mar 2015 - Jun 2019'
    }
  ];
  
  skills: Skill[] = [
    { name: 'TypeScript', level: 95 },
    { name: 'JavaScript (ES6+)', level: 95 },
    { name: 'Angular', level: 95 },
    { name: 'NgRx', level: 90 },
    { name: 'RxJS', level: 90 },
    { name: 'Angular Material', level: 90 },
    { name: 'PrimeNG', level: 85 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'Sass/SCSS', level: 85 },
    { name: 'Bootstrap', level: 85 },
    { name: 'Git/GitHub/Bitbucket', level: 90 }
  ];
  
  awards: Award[] = [
    {
      title: 'Best Frontend Developer',
      organization: 'Rawdata Technologies, Kerala, India',
      description: 'Recognized for excellence in developing intuitive, responsive, and high-performance web applications'
    }
  ];
  
  certifications: Certification[] = [
    {
      title: 'Web-Development',
      organization: 'Aitrich Technologies, Kerala, India'
    }
  ];
  
  languages: Language[] = [
    { name: 'English', proficiency: 'Fluent' },
    { name: 'Malayalam', proficiency: 'Native' }
  ];
  
  keyResponsibilities: string[] = [
    'Develop and maintain web applications using Angular',
    'Manage and analyze client requirements to ensure optimal implementation',
    'Mentor junior developers and provide technical guidance',
    'Collaborate with back-end developers, designers, and product teams',
    'Design and implement responsive user interfaces',
    'Optimize application performance for speed and scalability',
    'Stay updated on new technologies and industry trends',
    'Troubleshoot and fix application issues',
    'Work with the QA team to ensure bug-free software',
    'Participate in Agile/Scrum meetings for planning and coordination',
    'Conduct code reviews to ensure quality and best practices'
  ];
  
  projects: Project[] = [
    {
      title: 'InTEUtion',
      description: 'Cloud-based ERP/operations platform built specifically for shipping, container, and liner industries.',
      technologies: ['Angular', 'NgRx', 'TypeScript', 'RxJS'],
      link: '#',
      github: '#',
      year: '2022'
    },
    {
      title: 'Customer Portal',
      description: 'Web platform for managing shipping requests and quotes with advanced form handling and validation.',
      technologies: ['Angular', 'Reactive Forms', 'TypeScript'],
      link: '#',
      github: '#',
      year: '2023'
    },
    {
      title: 'EPEX',
      description: 'E-commerce web platform with dynamic UI components using Angular Material and REST API integrations.',
      technologies: ['Angular', 'Angular Material', 'TypeScript'],
      link: '#',
      github: '#',
      year: '2021'
    },
    {
      title: 'Food Ordering App',
      description: 'Food ordering application with enhanced form validations, routing, and service communication.',
      technologies: ['Angular', 'JHipster', 'TypeScript'],
      link: '#',
      github: '#',
      year: '2021'
    }
  ];
  
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  currentYear = new Date().getFullYear();

  ngOnInit() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
      this.applyTheme();
    }
  }
  
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
  }
  
  applyTheme() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
  
  getSkillCategories() {
    return [
      { name: 'Frontend', skills: this.skillCategories.frontend },
      // { name: 'Backend', skills: this.skillCategories.backend },
      { name: 'Tools', skills: this.skillCategories.tools },
      { name: 'Project Management', skills: this.skillCategories.projectManagement },
      { name: 'State Management', skills: this.skillCategories.stateManagement },

    ];
  }

  

}