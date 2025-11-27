import React from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ArrowRightIcon, ContactIcon } from '../components/icons';

const Contact: React.FC = () => {
    const form = React.useRef<HTMLFormElement>(null);
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [status, setStatus] = React.useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        // NOTE: Replace these with your actual EmailJS Service ID, Template ID, and Public Key
        // You can find these in your EmailJS dashboard: https://dashboard.emailjs.com/
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(
                () => {
                    setIsSubmitting(false);
                    navigate('/thank-you');
                },
                (error: any) => {
                    setIsSubmitting(false);
                    console.error('FAILED...', error.text);
                    setStatus({
                        type: 'error',
                        message: 'Failed to send message. Please try again or contact me directly via social media.'
                    });
                },
            );
    };

    return (
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

                    {status.type === 'error' && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-lg mb-6">
                            {status.message}
                        </div>
                    )}

                    <form ref={form} onSubmit={sendEmail} className="space-y-4 mt-6">
                        <input
                            type="text"
                            name="user_name"
                            placeholder="Name"
                            required
                            className="w-full bg-[#111111] border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Email"
                            required
                            className="w-full bg-[#111111] border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            className="w-full bg-[#111111] border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows={5}
                            required
                            className="w-full bg-[#111111] border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        ></textarea>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-linear-to-r from-orange-500 to-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <span>Sending...</span>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <ArrowRightIcon className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
