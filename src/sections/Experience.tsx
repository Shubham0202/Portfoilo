import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: 'Junior Full Stack Developer',
    company: 'Hiten Technologies',
    location: 'Pune, India',
    period: 'Jan 2025 – Present',
    type: 'Full-time',
    description: [
      'Worked on enterprise ERP and web applications supporting procurement, sales, manufacturing, and recruitment workflows.',
      'Converted business requirements into modular, layered components, improving maintainability.',
      'Developed backend logic for validations, calculations, approvals, and cross-module data consistency.',
      'Optimized database queries and data-access layers to improve transactional reliability and performance.',
      'Implemented RBAC and approval workflows ensuring secure system usage.',
      'Collaborated on UI development and frontend–backend integration to enhance usability.',
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline line draw animation
      gsap.fromTo(
        timelineRef.current?.querySelector('.timeline-line') || [],
        { height: 0 },
        {
          height: '100%',
          duration: 1.5,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards 3D flip in
      const cards = cardsRef.current?.querySelectorAll('.experience-card');
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { rotateY: 90, opacity: 0, x: i % 2 === 0 ? -50 : 50 },
          {
            rotateY: 0,
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: i * 0.2,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 50%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Particle animation along timeline
      const particles = timelineRef.current?.querySelectorAll('.particle');
      particles?.forEach((particle, i) => {
        gsap.to(particle, {
          y: '100%',
          duration: 3 + i * 0.5,
          repeat: -1,
          ease: 'none',
          delay: i * 0.3,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#d5d8f6]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm text-[#d5d8f6] uppercase tracking-widest mb-4">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Montserrat'] text-white">
            Work History
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            My professional journey in software development, building enterprise solutions 
            and full-stack applications.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            ref={timelineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2"
          >
            <div className="timeline-line absolute inset-0 bg-gradient-to-b from-[#d5d8f6] via-[#d5d8f6]/50 to-transparent" />
            
            {/* Particles */}
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="particle absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-[#d5d8f6] rounded-full shadow-[0_0_10px_rgba(213,216,246,0.8)]"
                style={{ top: `${i * 30}%` }}
              />
            ))}
          </div>

          {/* Experience Cards */}
          <div ref={cardsRef} className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`experience-card relative grid md:grid-cols-2 gap-8 items-start ${
                  index % 2 === 0 ? '' : 'md:text-right'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 bg-[#d5d8f6] rounded-full border-4 border-[#010208] shadow-[0_0_20px_rgba(213,216,246,0.5)] z-10" />

                {/* Left side (or right on odd) */}
                <div
                  className={`pl-12 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-16' : 'md:col-start-2 md:pl-16'
                  }`}
                >
                  <div className="glass-card p-6 lg:p-8 hover:glow-border transition-all duration-500 group">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 glass rounded-xl text-[#d5d8f6] group-hover:bg-[#d5d8f6]/20 transition-colors">
                        <Briefcase size={24} />
                      </div>
                      <div className={index % 2 === 0 ? '' : 'md:text-right'}>
                        <h3 className="text-xl font-semibold text-white">
                          {exp.title}
                        </h3>
                        <p className="text-[#d5d8f6]">{exp.company}</p>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div
                      className={`flex flex-wrap gap-4 mb-6 text-sm text-white/50 ${
                        index % 2 === 0 ? '' : 'md:justify-end'
                      }`}
                    >
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-white/60 text-sm leading-relaxed"
                        >
                          <CheckCircle
                            size={16}
                            className="text-[#d5d8f6] mt-0.5 flex-shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                {index % 2 === 0 ? (
                  <div className="hidden md:block" />
                ) : (
                  <div className="hidden md:block md:col-start-1 md:row-start-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
