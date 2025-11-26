import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../icons';

const AboutSummary: React.FC = () => (
    <section className="py-24 px-4 sm:px-8 lg:px-16 bg-[#161616]">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-neutral-400 mb-8">
                I am a passionate frontend developer dedicated to creating intuitive, high-performance, and visually stunning web applications. With a strong foundation in modern web technologies, I thrive on solving complex problems and turning ideas into reality.
            </p>
            <Link
                to="/about"
                className="bg-white/5 backdrop-blur-sm text-white font-medium py-3 px-6 rounded-full flex items-center space-x-2 border border-white/10 hover:bg-white/10 transition mx-auto w-fit">
                <span>Learn More</span>
                <ArrowRightIcon className="w-4 h-4" />
            </Link>
        </div>
    </section>
);

export default AboutSummary;
