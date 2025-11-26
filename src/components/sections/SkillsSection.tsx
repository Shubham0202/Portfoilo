import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skillsData } from '../../data/data';

gsap.registerPlugin(ScrollTrigger);

const SkillsSection: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(skillsRef.current?.children || [], {
            scale: 0.8,
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-4 sm:px-8 lg:px-16 bg-[#161616]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-12">Skills & Technologies</h2>
                <div ref={skillsRef} className="flex flex-wrap justify-center gap-4">
                    {skillsData.map((skill, index) => (
                        <span key={index} className="bg-white/5 border border-white/10 text-neutral-300 px-6 py-3 rounded-full text-lg hover:bg-white/10 hover:border-orange-500/50 hover:text-orange-500 transition cursor-default">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
