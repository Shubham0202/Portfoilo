import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../components/icons';

const NotFound: React.FC = () => {
    return (
        <section className="min-h-dvh flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 text-center">
            <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-red-500 mb-4">
                404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Page Not Found</h2>
            <p className="text-lg text-neutral-400 mb-8 max-w-md">
                Oops! The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <Link
                to="/"
                className="bg-white/10 backdrop-blur-sm text-white font-medium py-3 px-8 rounded-full flex items-center space-x-2 border border-white/20 hover:bg-white/20 transition">
                <span>Back to Home</span>
                <ArrowRightIcon className="w-4 h-4" />
            </Link>
        </section>
    );
};

export default NotFound;
