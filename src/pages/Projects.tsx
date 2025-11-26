import React, { useState, useMemo } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/data';

const Projects: React.FC = () => {
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

export default Projects;
