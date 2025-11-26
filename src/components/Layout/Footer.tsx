import React from 'react';
import { GithubIcon, LinkedInIcon, TwitterIcon } from '../icons';

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

export default Footer;
