import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Layers, ArrowRight, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'TaskMaster',
    subtitle: 'Task Management Platform',
    description:
      'A modern, collaborative task management application built with full-stack TypeScript architecture. Features real-time updates using Socket.io, project-based organization, and role-based access control (RBAC) for streamlined teamwork and productivity.',
    image: '/images/project-taskmaster.jpg',
    techStack: ['React 19', 'TypeScript', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'Tailwind CSS', 'Zustand'],
    features: [
      'Real-time Collaboration with Socket.io',
      'Project-based Task Organization',
      'Role-Based Access Control (RBAC)',
      'JWT Authentication with HttpOnly cookies',
      'Responsive UI with Framer Motion',
      'TanStack Query for Data Fetching',
    ],
    github: 'https://github.com/Shubham0202/TaskMaster',
    live: 'https://task-master-sable-eight.vercel.app',
    stars: 0,
    forks: 0,
  },
  {
    id: 2,
    title: 'Inventory Manager Pro',
    subtitle: 'E-Commerce & Inventory System',
    description:
      'A modern, enterprise-ready e-commerce and inventory management application built with Next.js and TypeScript. Features an admin dashboard for product CRUD operations, role-based authentication, and a complete full-stack workflow.',
    image: '/images/project-ecommerce.jpg',
    techStack: ['Next.js 14', 'TypeScript', 'MongoDB', 'Tailwind CSS', 'React Hooks', 'ISR'],
    features: [
      'Admin Dashboard for Product Management',
      'Role-based Authentication',
      'Product Catalog with Search & Filters',
      'Static Pages with ISR',
      'Protected Routes',
      'Responsive UI with Dark Mode',
    ],
    github: 'https://github.com/Shubham0202/e-commerce',
    live: 'https://e-commerce-sigma-two-68.vercel.app',
    stars: 0,
    forks: 0,
  },
  {
    id: 3,
    title: 'Gemini Clone',
    subtitle: 'AI Conversational Platform',
    description:
      'A web application that replicates the functionalities of Gemini, a modern conversational AI platform. Users can interact with AI, store previous responses, and utilize text-to-speech functionality for enhanced user experience.',
    image: '/images/project-gemini.jpg',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Gemini API', 'Web Speech API', 'Vite'],
    features: [
      'Conversational AI Interface',
      'Real-time AI Responses',
      'Chat History Storage',
      'Text-to-Speech Functionality',
      'Responsive Design',
      'API Integration',
    ],
    github: 'https://github.com/Shubham0202/Gemini-Clone',
    live: 'https://gemini-clone-dt1m.vercel.app',
    stars: 0,
    forks: 1,
  },
  {
    id: 4,
    title: 'NetSpector',
    subtitle: 'Network Packet Analyzer',
    description:
      'A modern network packet sniffer and analyzer built with JavaFX and Spring Boot. Leverages Pcap4J to capture and analyze network traffic in real-time, providing network administrators with deep insights into network activity.',
    image: '/images/project-netspector.jpg',
    techStack: ['Java', 'JavaFX', 'Spring Boot', 'Pcap4J', 'Maven'],
    features: [
      'Real-time Packet Capture',
      'Detailed Packet Analysis',
      'Source/Destination IP Tracking',
      'Protocol Detection',
      'Packet Size Metrics',
      'Network Interface Monitoring',
    ],
    github: 'https://github.com/Shubham0202/net_spector',
    live: '#',
    stars: 0,
    forks: 0,
  },
  {
    id: 5,
    title: 'BookIt',
    subtitle: 'Travel Booking Platform',
    description:
      'A full-stack web application for booking travel experiences and activities. Built with Next.js and TypeScript, featuring experience browsing, time slot selection, and complete booking workflows with promo code support.',
    image: '/images/project-bookit.jpg',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'React Hooks', 'Lucide React'],
    features: [
      'Browse Travel Experiences',
      'View Detailed Activity Information',
      'Time Slot Selection',
      'Booking with Promo Codes',
      'Booking Confirmations',
      'Clean UI Design',
    ],
    github: 'https://github.com/Shubham0202/highway-delite-assigment',
    live: 'https://highway-delite-assigment.onrender.com',
    stars: 0,
    forks: 0,
  },
  {
    id: 6,
    title: 'YouTube Clone',
    subtitle: 'Video Streaming Platform',
    description:
      'A comprehensive web application that mimics the core functionalities of YouTube. Features video browsing, search functionality, user authentication, and responsive design for a complete video-sharing platform experience.',
    image: '/images/youtube-clone.jpg',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'YouTube Data API', 'Axios', 'React Router'],
    features: [
      'Video Browse & Search',
      'Trending Videos Display',
      'Video Player with Details',
      'Category Filtering',
      'Responsive Design',
      'API Integration',
    ],
    github: 'https://github.com/Shubham0202/YouTube-Clone',
    live: '#',
    stars: 0,
    forks: 0,
  },
  {
    id: 7,
    title: 'Order to Cash (O2C)',
    subtitle: 'Enterprise Resource Planning',
    description:
      'Built an end-to-end O2C ERP system from sales order creation to dispatch and reporting. Implemented the Sales module, improving order processing efficiency by 35%. Developed the Design & BOM module, reducing design-to-production errors by 25%.',
    image: '/images/project-o2c.jpg',
    techStack: ['React.js', 'Tailwind CSS', 'Redux', 'Node.js', 'Express.js', 'SQL Server'],
    features: [
      'Sales Order Management',
      'Design & BOM Module',
      'Inventory & Manufacturing',
      'Quality Checks',
      'Reports & Analytics',
    ],
    github: '#',
    live: '#',
    stars: 0,
    forks: 0,
  },
  {
    id: 8,
    title: 'Procure to Pay (P2P)',
    subtitle: 'Enterprise Resource Planning',
    description:
      'Designed a P2P ERP system covering procurement workflows from request to reporting. Implemented Admin, Purchase, GRN, Inventory, and Quality modules, improving data accuracy and control. Automated purchase and vendor workflows, reducing manual effort.',
    image: '/images/project-p2p.jpg',
    techStack: ['React.js', 'Tailwind CSS', 'Redux', 'Node.js', 'Express.js', 'SQL Server'],
    features: [
      'Purchase Requisitions',
      'Vendor Management',
      'GRN & Inventory',
      'Approval Workflows',
      'Quality Control',
    ],
    github: '#',
    live: '#',
    stars: 0,
    forks: 0,
  },
  {
    id: 9,
    title: 'Job Portal',
    subtitle: 'Hiring & Recruitment Platform',
    description:
      'Built a full-stack job portal for job postings, candidates, and hiring workflows. Integrated AI-based candidate–job matching and interview scheduling features.',
    image: '/images/project-jobportal.jpg',
    techStack: ['React.js', 'Tailwind CSS', 'Redux', 'Node.js', 'Express.js', 'MongoDB'],
    features: [
      'Job Postings',
      'Candidate Profiles',
      'AI-based Matching',
      'Interview Scheduling',
      'Application Tracking',
    ],
    github: '#',
    live: '#',
    stars: 0,
    forks: 0,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards fan out animation
      const cards = cardsRef.current?.querySelectorAll('.project-card');
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            x: 0,
            rotateZ: (i - 1) * 3,
            opacity: 0,
            scale: 0.9,
          },
          {
            x: 0,
            rotateZ: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: i * 0.15,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Image reveal
      const images = cardsRef.current?.querySelectorAll('.project-image');
      images?.forEach((img) => {
        gsap.fromTo(
          img,
          { clipPath: 'inset(100% 0 0 0)' },
          {
            clipPath: 'inset(0% 0 0 0)',
            duration: 0.8,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: img,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d5d8f6]/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm text-[#d5d8f6] uppercase tracking-widest mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Montserrat'] text-white">
            Featured Projects
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            A showcase of my enterprise-level projects, from ERP systems to full-stack
            web applications.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative glass-card overflow-hidden cursor-pointer hover:glow-border transition-all duration-500"
              onClick={() => openModal(project)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#010208] via-transparent to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#d5d8f6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#d5d8f6] mb-2">
                  <Layers size={16} />
                  <span className="text-xs uppercase tracking-wider">
                    {project.subtitle}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#d5d8f6] transition-colors">
                  {project.title}
                </h3>

                <p className="text-white/50 text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs glass rounded-md text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-2 py-1 text-xs glass rounded-md text-white/60">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* View Project */}
                <div className="flex items-center gap-2 text-[#d5d8f6] text-sm font-medium">
                  <span>View Details</span>
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </div>
              </div>

              {/* Holographic sheen on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none overflow-hidden">
                <div
                  className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{ transform: 'skewX(-20deg)' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-[#010208]/95 backdrop-blur-xl" />

          {/* Modal Content */}
          <div
            className="relative w-full max-w-4xl glass-card animate-in fade-in zoom-in duration-300 my-auto"
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 glass rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-all z-10"
            >
              <X size={20} />
            </button>

            {/* Image */}
            <div className="relative h-64 sm:h-80">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#010208] via-[#010208]/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 -mt-20 relative">
              <div className="flex items-center gap-2 text-[#d5d8f6] mb-2">
                <Layers size={16} />
                <span className="text-sm uppercase tracking-wider">
                  {selectedProject.subtitle}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h2>

              <p className="text-white/70 leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-white/60 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-[#d5d8f6] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-white mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 glass rounded-lg text-sm text-white/70"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={selectedProject.live}
                  className="flex items-center gap-2 px-6 py-3 bg-[#d5d8f6] text-[#010208] font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(213,216,246,0.4)] transition-all"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a
                  href={selectedProject.github}
                  className="flex items-center gap-2 px-6 py-3 glass text-white font-semibold rounded-xl hover:bg-white/10 transition-all"
                >
                  <Github size={18} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}