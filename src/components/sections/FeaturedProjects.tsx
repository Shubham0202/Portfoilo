import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRightIcon } from '../icons';
import ProjectCard from '../ProjectCard';
import { projectsData } from '../../data/data';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const cards = Array.from(cardsRef.current?.children || []);

        gsap.set(cards, { opacity: 0, y: 50 });

        gsap.to(cards, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-4 sm:px-8 lg:px-16 bg-[#161616]">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-2">Featured Projects</h2>
                        <p className="text-neutral-400">A selection of my best work, showcasing my skills in design and development.</p>
                    </div>
                    <Link
                        to="/projects"
                        className="mt-4 md:mt-0 bg-white/5 backdrop-blur-sm text-white font-medium py-3 px-6 rounded-full flex items-center space-x-2 border border-white/10 hover:bg-white/10 transition">
                        <span>View All Projects</span>
                        <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                </div>
                <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.slice(0, 3).map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;
