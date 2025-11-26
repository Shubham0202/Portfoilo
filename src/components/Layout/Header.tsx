import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRightIcon } from '../icons';

const Header: React.FC = () => {
    const location = useLocation();
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' }
    ];

    return (
        <header className="py-6 px-4 sm:px-8 lg:px-16 absolute top-0 left-0 right-0 z-20">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold cursor-pointer">Portfolio</Link>
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map(item => (
                        <Link key={item.name} to={item.path}
                            className={`${location.pathname === item.path ? 'text-white' : 'text-neutral-300'} hover:text-white transition`}>
                            {item.name}
                        </Link>
                    ))}
                </nav>
                <Link
                    to="/contact"
                    className="bg-white/10 backdrop-blur-sm text-white font-medium py-2 px-5 rounded-full flex items-center space-x-2 border border-white/20 hover:bg-white/20 transition">
                    <span>Contact Info</span>
                    <ArrowRightIcon className="w-4 h-4" />
                </Link>
            </div>
        </header>
    );
}

export default Header;
