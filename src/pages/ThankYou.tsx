import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../components/icons';

const ThankYou: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-8 lg:px-16 py-32">
            <div className="max-w-2xl mx-auto text-center">
                <div className="mb-8 flex justify-center">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center">
                        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Message Sent!</h1>
                <p className="text-lg text-neutral-400 mb-10">
                    Thanks for reaching out. I've received your message and will get back to you as soon as possible.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center justify-center bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity space-x-2"
                >
                    <span>Back to Home</span>
                    <ArrowRightIcon className="w-4 h-4" />
                </Link>
            </div>
        </section>
    );
};

export default ThankYou;
