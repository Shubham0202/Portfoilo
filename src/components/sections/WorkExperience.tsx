import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { workExperienceData } from '../../data/data';

gsap.registerPlugin(ScrollTrigger);

const WorkExperience: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(listRef.current?.children || [], {
            x: -50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 px-4 sm:px-8 lg:px-16 bg-[#111111]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Work Experience</h2>
                <div ref={listRef} className="space-y-12">
                    {workExperienceData.map((job, index) => (
                        <div key={index} className="relative pl-8 border-l border-neutral-800">
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                            <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                                <span className="text-neutral-500 font-mono text-sm">{job.date}</span>
                            </div>
                            <div className="text-lg text-orange-500 mb-4">{job.company}</div>
                            <ul className="text-neutral-400 leading-relaxed list-disc ml-4">
                                {job.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WorkExperience;
