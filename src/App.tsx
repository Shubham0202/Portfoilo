import React, { useState, useMemo } from 'react';
import {
    ArrowRightIcon,ContactIcon, GithubIcon, LinkedInIcon, SparkleIcon, TwitterIcon
} from './components/icons';

// --- Data ---

const projectsData = [
    {
        imageSrc: "https://ideogram.ai/assets/image/lossless/response/zoEju7_-QQuBdiTJtnGwVA",
        title: "Apartment Listing Chatbot",
        description: "Developed an AI-powered chatbot for apartment listings, improving user engagement and lead generation with seamless integration.",
        linkText: "See Live",
        category: "AI/ML",
        linkURL: "https://chatbot.hitentechnologies.com/"
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        title: "Job Portal Dashboard",
        description: "Designed and developed a comprehensive dashboard for a job portal, providing users with analytics and application tracking.",
        linkText: "See Live",
        category: "Web App",
        linkURL: ""
    },
    {
        imageSrc: "https://ideogram.ai/assets/progressive-image/balanced/response/gQUOqDaxRNK7-kecEdGS8Q",
        title: "E-commerce Platform",
        description: "Built a full-stack e-commerce solution with features like product management, shopping cart, and secure payment gateway integration.",
        linkText: "View on Github",
        category: "Web App",
        linkURL: ""
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
        title: "Social Media Scheduler",
        description: "A SaaS application to schedule and automate social media posts across multiple platforms using third-party APIs.",
        linkText: "See Live",
        category: "Web App",
        linkURL: ""
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop",
        title: "Portfolio Website Template",
        description: "Designed and developed a modern, responsive, and customizable portfolio template for creatives.",
        linkText: "View on Github",
        category: "UI/UX",
        linkURL: ""
    },
    {
        imageSrc: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop",
        title: "UI Kit for Designers",
        description: "Created a comprehensive UI kit in Figma to streamline the design process and ensure brand consistency across products.",
        linkText: "View on Figma",
        category: "UI/UX",
        linkURL: ""
    },
];

const workExperienceData = [
    {
        title: "Junior Full Stack Developer Intern",
        company: "HitenTechnologies",
        date: "Apr 2023 - 2225 - Present",
        points: [
            "Designed & iterated, using tools like MongoDB, AI, to solve customer problems.",
            "Design of Test, Ihed Mese, India. | Red & Totulizio AFP client Cellise Cods js Pune."
        ]
    }
];

const educationData = [
    {
        degree: "Masters in Computer Science",
        institution: "Nowrsjee Wadia College, Pursuing",
        details: "Pune"
    },
    {
        degree: "Bachelors of Computer Science",
        institution: "Tuljaram Chaturchand College of Arts, Commerce & Science, 7.73 CGPA",
        details: "Baramati, Pune"
    },
    {
        degree: "HSC",
        institution: "Tuljaram Chaturchand College of Arts, Commerce & Science, 81%",
        details: "Baramati, Pune"
    }
];

const skillsData = [
    'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js',
    'Express.js', 'MongoDB', 'REST APIs', 'GraphQL', 'Tailwind CSS', 'Figma',
    'Git & GitHub', 'Webpack', 'Jest', 'UI/UX Design'
];


// --- Reusable Components ---

interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
    linkText: string;
    linkURL?: string;
}

const ProjectCard: React.FC<CardProps> = ({ imageSrc, title, description, linkText,linkURL }) => (
    <div className="bg-[#1C1C1C] rounded-3xl p-6 border border-neutral-800 flex flex-col hover:border-orange-500/50 transition-all duration-300 group">
        <div className="rounded-2xl overflow-hidden mb-6 h-56">
            <img src={imageSrc} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        </div>
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-neutral-400 text-sm mb-6 grow">{description}</p>
        <a target='_blank' href={linkURL} className="self-start bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-full hover:opacity-90 transition-opacity">
            {linkText}
        </a>
    </div>
);


// --- Page Sections ---
const Hero: React.FC = () => (
    <section className="relative min-h-dvh rounded-b-[4rem] overflow-hidden bg-linear-to-br from-orange-600 to-red-700 pt-32 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-center relative z-10">
            <div className="max-w-2xl">
                <p className="text-white text-xl mb-2">Hey, I'm a</p>
                <h2 className="text-white text-5xl md:text-7xl font-extrabold leading-tight">
                    Shubham Chandgude,<br />A Passionate<br />Frontend Developer
                </h2>
                <p className="text-white/80 mt-6 text-lg">
                    Building engaging, beautiful, and perfect user experiences.
                </p>
            </div>
        </div>
        <div className="absolute inset-0 z-0">
            <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop"
                alt="Portrait of a developer"
                className="absolute right-0 bottom-0 w-2/3 md:w-1/2 lg:w-[45%] h-full object-cover object-top opacity-30 md:opacity-40"
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#111111] via-transparent to-transparent"></div>
        </div>
        <div className="absolute right-8 md:right-16 bottom-20 z-10 hidden md:block">
            <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-sm">
                <p className="text-white text-2xl font-semibold">"Great design should feel invisible"</p>
            </div>
        </div>
        
    </section>
);

const AboutSummary: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => (
    <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#161616]">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-neutral-400 mb-8">
                I am a passionate frontend developer dedicated to creating intuitive, high-performance, and visually stunning web applications. With a strong foundation in modern web technologies, I thrive on solving complex problems and turning ideas into reality.
            </p>
            <button
                onClick={() => onNavigate('about')}
                className="bg-white/5 backdrop-blur-sm text-white font-medium py-3 px-6 rounded-full flex items-center space-x-2 border border-white/10 hover:bg-white/10 transition mx-auto">
                <span>Learn More</span>
                <ArrowRightIcon className="w-4 h-4" />
            </button>
        </div>
    </section>
);

const WorkExperience: React.FC = () => (
    <section className="py-24 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-2">Work Experience</h2>
                <p className="text-neutral-400">My professional journey and key contributions.</p>
            </div>
            <div className="bg-[#1C1C1C] rounded-3xl p-8 border border-neutral-800 max-w-4xl mx-auto">
                {workExperienceData.map((job, index) => (
                    <div key={index}>
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4">
                            <h4 className="text-xl font-semibold text-white">{job.title}</h4>
                            <p className="text-orange-500 font-medium">{job.company}</p>
                        </div>
                        <p className="text-neutral-400 mb-6">{job.date}</p>
                        <ul className="space-y-4">
                            {job.points.map((point, i) => (
                                <li key={i} className="flex items-start">
                                    <SparkleIcon className="w-4 h-4 text-orange-500 mr-3 mt-1 shrink-0" />
                                    <span className="text-neutral-300">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const FeaturedProjects: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => (
    <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#161616]">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">Featured Projects</h2>
                    <p className="text-neutral-400">A selection of my best work, showcasing my skills in design and development.</p>
                </div>
                <button
                    onClick={() => onNavigate('projects')}
                    className="mt-4 md:mt-0 bg-white/5 backdrop-blur-sm text-white font-medium py-3 px-6 rounded-full flex items-center space-x-2 border border-white/10 hover:bg-white/10 transition">
                    <span>View All Projects</span>
                    <ArrowRightIcon className="w-4 h-4" />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.slice(0, 3).map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </div>
    </section>
);

const SkillsSection: React.FC = () => (
    <div className="bg-[#1C1C1C] rounded-3xl p-8 border border-neutral-800">
        <h3 className="text-3xl font-bold mb-8 text-center sm:text-left">Technical Skills</h3>
        <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            {skillsData.map((skill, index) => (
                <div key={index} className="bg-[#111111] border border-neutral-700 rounded-lg px-5 py-2 text-neutral-300 font-medium hover:bg-orange-500/10 hover:border-orange-500/50 hover:text-white transition-all duration-300 cursor-default">
                    {skill}
                </div>
            ))}
        </div>
    </div>
);


// --- Page Components ---

const HomePage: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
    return (
        <>
            <Hero />
            <AboutSummary onNavigate={onNavigate} />
            <WorkExperience />
            <FeaturedProjects onNavigate={onNavigate} />
        </>
    );
};

const AboutPage: React.FC = () => {
    return (
        <section className="px-4 sm:px-8 lg:px-16 py-32">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4">About Me</h1>
                    <p className="text-lg text-neutral-400">
                        I am a passionate frontend developer dedicated to creating intuitive, high-performance, and visually stunning web applications. With a strong foundation in modern web technologies, I thrive on solving complex problems and turning ideas into reality. My goal is to craft digital experiences that are not only functional but also delightful for users.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <SkillsSection />
                    <div className="bg-[#1C1C1C] rounded-3xl p-8 border border-neutral-800 mt-12">
                        <h3 className="text-3xl font-bold mb-8">Education</h3>
                        {educationData.map((edu, index) => (
                            <div key={index} className={index > 0 ? "mt-6 border-t border-neutral-800 pt-6" : ""}>
                                <h4 className="text-lg font-semibold">{edu.degree}</h4>
                                <p className="text-neutral-400">{edu.institution}</p>
                                <p className="text-neutral-500 text-sm mt-1">{edu.details}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProjectsPage: React.FC = () => {
    const [selectedFilters, setSelectedFilters] = useState(['All']);
    const categories = ['All', 'Web App', 'AI/ML', 'UI/UX'];

    const handleFilterClick = (category: string) => {
        if (category === 'All') {
            setSelectedFilters(['All']);
            return;
        }

        const currentActiveFilters = new Set(selectedFilters.filter(f => f !== 'All'));

        if (currentActiveFilters.has(category)) {
            currentActiveFilters.delete(category);
        } else {
            currentActiveFilters.add(category);
        }

        const newFilters = Array.from(currentActiveFilters);

        if (newFilters.length === 0) {
            setSelectedFilters(['All']);
        } else {
            setSelectedFilters(newFilters);
        }
    };

    const filteredProjects = useMemo(() => {
        if (selectedFilters.includes('All')) {
            return projectsData;
        }
        return projectsData.filter(p => selectedFilters.includes(p.category));
    }, [selectedFilters]);

    return (
        <section className="px-4 sm:px-8 lg:px-16 py-32">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4">My Creative Portfolio</h1>
                    <p className="text-lg text-neutral-400">
                        Here's a collection of my projects, showcasing a range of skills from web application development to UI/UX design and AI integration.
                    </p>
                </div>

                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => handleFilterClick(category)}
                            className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300
                                ${selectedFilters.includes(category) ? 'bg-linear-to-r from-orange-500 to-red-500 text-white' : 'bg-[#1C1C1C] text-neutral-300 hover:bg-[#2a2a2a]'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ContactPage: React.FC = () => (
    <section className="px-4 sm:px-8 lg:px-16 py-32">
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Get In Touch</h1>
                <p className="text-lg text-neutral-400">
                    Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form below or reach out via my social channels.
                </p>
            </div>
            <div className="bg-[#1C1C1C] rounded-3xl p-8 border border-neutral-800">
                <div className="flex items-center mb-4">
                    <ContactIcon className="w-8 h-8 text-orange-500 mr-3" />
                    <h3 className="text-2xl font-bold">Let's build something amazing!</h3>
                </div>

                <form className="space-y-4 mt-6">
                    <input type="text" placeholder="Name" className="w-full bg-[#111111] border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    <input type="email" placeholder="Email" className="w-full bg-[#111111] border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    <input type="text" placeholder="Subject" className="w-full bg-[#111111] border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    <textarea placeholder="Message" rows={5} className="w-full bg-[#111111] border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                    <button type="submit" className="w-full bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
                        <span>Send Message</span>
                        <ArrowRightIcon className="w-4 h-4" />
                    </button>
                </form>
            </div>
        </div>
    </section>
);


// --- Layout Components ---

interface HeaderProps {
    onNavigate: (page: string) => void;
    currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
    const navItems = ['Home', 'About', 'Projects'];
    return (
        <header className="py-6 px-4 sm:px-8 lg:px-16 absolute top-0 left-0 right-0 z-20">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold cursor-pointer" onClick={() => onNavigate('home')}>Folioblox</h1>
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map(item => (
                        <button key={item} onClick={() => onNavigate(item.toLowerCase())}
                            className={`${currentPage === item.toLowerCase() ? 'text-white' : 'text-neutral-300'} hover:text-white transition`}>
                            {item}
                        </button>
                    ))}
                </nav>
                <button
                    onClick={() => onNavigate('contact')}
                    className="bg-white/10 backdrop-blur-sm text-white font-medium py-2 px-5 rounded-full flex items-center space-x-2 border border-white/20 hover:bg-white/20 transition">
                    <span>Contact Info</span>
                    <ArrowRightIcon className="w-4 h-4" />
                </button>
            </div>
        </header>
    );
}

const Footer: React.FC = () => (
    <footer className="px-4 sm:px-8 lg:px-16 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <p className="text-sm text-neutral-500">Built with React & Tailwind CSS</p>
                <div className="flex justify-center space-x-6">
                    <a href="https://www.linkedin.com/in/shubham-chandgude-6404b7270/" aria-label="LinkedIn"><LinkedInIcon className="w-6 h-6 text-neutral-500 hover:text-white transition-colors" /></a>
                    <a href="https://github.com/Shubham0202" aria-label="Github"><GithubIcon className="w-6 h-6 text-neutral-500 hover:text-white transition-colors" /></a>
                    <a href="#" aria-label="Twitter"><TwitterIcon className="w-6 h-6 text-neutral-500 hover:text-white transition-colors" /></a>
                </div>
                <p className="text-sm text-neutral-500">+91 7709972702</p>
            </div>
        </div>
    </footer>
);

// --- Main App Component ---

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const handleNavigate = (page: string) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomePage onNavigate={handleNavigate} />;
            case 'about':
                return <AboutPage />;
            case 'projects':
                return <ProjectsPage />;
            case 'contact':
                return <ContactPage />;
            default:
                return <HomePage onNavigate={handleNavigate} />;
        }
    };

    return (
        <div className="min-h-dvh text-white bg-[#111111]">
            <Header onNavigate={handleNavigate} currentPage={currentPage} />
            <main>
                {renderPage()}
            </main>
            <Footer />
        </div>
    );
}

export default App;