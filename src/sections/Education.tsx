import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GraduationCap, Calendar, Award, Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Nowrosjee Wadia College',
    location: 'Pune',
    period: '2024 – Present',
    expected: 'Expected Graduation: 2026',
    cgpa: '8.2',
    description: 'Pursuing advanced studies in computer science with focus on software engineering and system design.',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Tuljaram Chaturchand College',
    location: 'Baramati',
    period: '2021 – 2024',
    cgpa: '7.7',
    description: 'Completed undergraduate studies with strong foundation in programming, databases, and software development.',
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards scale pop animation
      const cards = cardsRef.current?.querySelectorAll('.education-card');
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.2,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // SVG line draw animation
      const lines = linesRef.current?.querySelectorAll('.connection-line');
      lines?.forEach((line, i) => {
        const length = (line as SVGPathElement).getTotalLength?.() || 100;
        gsap.fromTo(
          line,
          { strokeDasharray: length, strokeDashoffset: length },
          {
            strokeDashoffset: 0,
            duration: 0.8,
            delay: 0.4 + i * 0.2,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 60%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Parallax effect
      gsap.to(cardsRef.current, {
        y: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d5d8f6]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm text-[#d5d8f6] uppercase tracking-widest mb-4">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Montserrat'] text-white">
            Academic Journey
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            My educational background that laid the foundation for my career in software development.
          </p>
        </div>

        {/* Education Cards with Network Layout */}
        <div ref={cardsRef} className="relative">
          {/* Connection Lines SVG */}
          <svg
            ref={linesRef}
            className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
            style={{ zIndex: 0 }}
          >
            <path
              className="connection-line"
              d="M 400 150 Q 500 200 600 150"
              fill="none"
              stroke="rgba(213, 216, 246, 0.2)"
              strokeWidth="1"
            />
          </svg>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 relative z-10">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="education-card glass-card p-6 lg:p-8 hover:glow-border transition-all duration-500 group"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 glass rounded-xl text-[#d5d8f6] group-hover:bg-[#d5d8f6]/20 transition-colors">
                    <GraduationCap size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white leading-tight">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-white/50 text-sm">
                      <Building2 size={14} />
                      {edu.institution}, {edu.location}
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="flex items-center gap-1 text-white/60">
                      <Calendar size={14} className="text-[#d5d8f6]" />
                      {edu.period}
                    </span>
                    {edu.expected && (
                      <span className="text-[#d5d8f6]/70 text-xs">
                        {edu.expected}
                      </span>
                    )}
                  </div>

                  {/* CGPA Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-lg">
                    <Award size={16} className="text-[#d5d8f6]" />
                    <span className="text-sm text-white/70">CGPA:</span>
                    <span className="text-lg font-semibold text-[#d5d8f6]">
                      {edu.cgpa}
                    </span>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#d5d8f6]/10 to-transparent" />
                </div>
              </div>
            ))}
          </div>

          {/* Central Node */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 glass-strong rounded-full items-center justify-center z-20">
            <div className="w-3 h-3 bg-[#d5d8f6] rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}