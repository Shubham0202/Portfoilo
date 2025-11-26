import React from 'react';

interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
    linkText: string;
    linkURL?: string;
}

const ProjectCard: React.FC<CardProps> = ({ imageSrc, title, description, linkText, linkURL }) => (
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

export default ProjectCard;
