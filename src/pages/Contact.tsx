import React from 'react';
import { ArrowRightIcon, ContactIcon } from '../components/icons';

const Contact: React.FC = () => (
    <section className="px-4 sm:px-8 lg:px-16 py-32">
        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Get In Touch</h1>
                <p className="text-lg text-neutral-400">
                    Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form below or reach out via my social channels.
                </p>
            </div>
            <div className="bg-[#1C1C1C] rounded-3xl p-8 border border-neutral-800">
                <div className="flex items-center mb-4">
                    <ContactIcon className="w-8 h-8 text-orange-500 mr-3" />
                    <h3 className="text-2xl font-bold">Let's build something amazing!</h3>
                </div>

                <form className="space-y-4 mt-6">
                    <input type="text" placeholder="Name" className="w-full bg-[#111111] border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    <input type="email" placeholder="Email" className="w-full bg-[#111111] border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    <input type="text" placeholder="Subject" className="w-full bg-[#111111] border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    <textarea placeholder="Message" rows={5} className="w-full bg-[#111111] border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                    <button type="submit" className="w-full bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2">
                        <span>Send Message</span>
                        <ArrowRightIcon className="w-4 h-4" />
                    </button>
                </form>
            </div>
        </div>
    </section>
);

export default Contact;
