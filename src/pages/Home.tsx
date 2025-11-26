import React from 'react';
import Hero from '../components/sections/Hero';
import AboutSummary from '../components/sections/AboutSummary';
import WorkExperience from '../components/sections/WorkExperience';
import FeaturedProjects from '../components/sections/FeaturedProjects';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <AboutSummary />
            <WorkExperience />
            <FeaturedProjects />
        </>
    );
};

export default Home;
