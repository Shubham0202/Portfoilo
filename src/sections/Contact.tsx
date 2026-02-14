import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Linkedin, Github, CheckCircle, Loader2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'shubham826852@gmail.com',
    href: 'mailto:shubham826852@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7709972702',
    href: 'tel:+917709972702',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Pune, Maharashtra',
    href: '#',
  },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Github, label: 'GitHub', href: 'https://github.com' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const inputsRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Form slide up
      gsap.fromTo(
        formRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Input width expand
      const inputs = inputsRef.current?.querySelectorAll('.input-wrapper');
      inputs?.forEach((input, i) => {
        gsap.fromTo(
          input,
          { width: 0, opacity: 0 },
          {
            width: '100%',
            opacity: 1,
            duration: 0.6,
            delay: 0.3 + i * 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Contact info cards
      const cards = sectionRef.current?.querySelectorAll('.contact-info-card');
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.2 + i * 0.1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setFormState('sent');
    setFormData({ name: '', email: '', message: '' });
    
    // Reset after 3 seconds
    setTimeout(() => setFormState('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d5d8f6]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d5d8f6]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm text-[#d5d8f6] uppercase tracking-widest mb-4">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Montserrat'] text-white">
            Get In Touch
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk and build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  className="contact-info-card flex items-center gap-4 p-4 glass-card hover:glow-border transition-all duration-300 group"
                >
                  <div className="p-3 glass rounded-xl text-[#d5d8f6] group-hover:bg-[#d5d8f6]/20 transition-colors">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-white group-hover:text-[#d5d8f6] transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-white/50 mb-4">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 glass rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-3">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass-card p-6 lg:p-8 space-y-6"
            >
              <div ref={inputsRef} className="space-y-6">
                {/* Name Input */}
                <div className="input-wrapper overflow-hidden">
                  <label className="block text-sm text-white/50 mb-2">Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#d5d8f6]/50 focus:shadow-[0_0_20px_rgba(213,216,246,0.1)] transition-all"
                      placeholder="Your name"
                    />
                    <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-[#d5d8f6] to-transparent w-0 group-focus-within:w-full transition-all duration-500" />
                  </div>
                </div>

                {/* Email Input */}
                <div className="input-wrapper overflow-hidden">
                  <label className="block text-sm text-white/50 mb-2">Email</label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#d5d8f6]/50 focus:shadow-[0_0_20px_rgba(213,216,246,0.1)] transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="input-wrapper overflow-hidden">
                  <label className="block text-sm text-white/50 mb-2">Message</label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-[#d5d8f6]/50 focus:shadow-[0_0_20px_rgba(213,216,246,0.1)] transition-all resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formState !== 'idle'}
                className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-500 ${
                  formState === 'sent'
                    ? 'bg-green-500 text-white'
                    : 'bg-[#d5d8f6] text-[#010208] hover:shadow-[0_0_30px_rgba(213,216,246,0.4)]'
                }`}
              >
                {formState === 'idle' && (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
                {formState === 'sending' && (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                )}
                {formState === 'sent' && (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-24 pt-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="text-xl font-bold font-['Montserrat'] text-white">
                Shubham Chandgude
              </p>
              <p className="text-sm text-white/50">Full Stack Developer (MERN)</p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                Back to Top
              </a>
            </div>

            <p className="text-sm text-white/30">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}