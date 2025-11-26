import React from 'react';
import SkillsSection from '../components/sections/SkillsSection';
import { educationData } from '../data/data';

const About: React.FC = () => {
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

export default About;
