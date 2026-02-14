import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'React.js', level: 88 },
  { name: 'Node.js', level: 85 },
  { name: 'Express.js', level: 82 },
  { name: 'SQL Server', level: 80 },
  { name: 'MongoDB', level: 78 },
  { name: 'Next.js', level: 75 },
  { name: 'Tailwind CSS', level: 85 },
];

const skillTags = [
  'RESTful APIs',
  'Redux',
  'Git',
  'GitHub',
  'Agile/Scrum',
  'RBAC',
  'ERP Systems',
  'WordPress',
  'SEO',
  'Google Analytics',
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal with blob morph
      gsap.fromTo(
        imageRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Content slide in
      gsap.fromTo(
        contentRef.current?.querySelectorAll('.animate-item') || [],
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Skill bars animation
      const skillBars = skillsRef.current?.querySelectorAll('.skill-bar');
      skillBars?.forEach((bar, i) => {
        const level = skills[i]?.level || 0;
        gsap.fromTo(
          bar,
          { width: 0 },
          {
            width: `${level}%`,
            duration: 1,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: skillsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });

      // Skill tags pop in
      gsap.fromTo(
        tagsRef.current?.querySelectorAll('.skill-tag') || [],
        { scale: 0, opacity: 0, rotate: () => Math.random() * 20 - 10 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: tagsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Parallax on scroll
      gsap.to(imageRef.current, {
        y: -50,
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
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#d5d8f6]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#d5d8f6]/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm text-[#d5d8f6] uppercase tracking-widest mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Montserrat'] text-white">
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Profile Image */}
          <div ref={imageRef} className="relative flex justify-center">
            <div className="relative">
              {/* Blob shape mask */}
              <div
                className="w-72 h-96 sm:w-80 sm:h-[28rem] overflow-hidden"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  animation: 'blob-morph 8s ease-in-out infinite',
                }}
              >
                <img
                  src="/images/profile.jpg"
                  alt="Shubham Chandgude"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative ring */}
              <div
                className="absolute -inset-4 border border-[#d5d8f6]/20 pointer-events-none"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
                  animation: 'blob-morph 8s ease-in-out infinite reverse',
                }}
              />

              {/* Glow effect */}
              <div className="absolute -inset-8 bg-[#d5d8f6]/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>

          {/* Right: Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-4">
              <h3 className="animate-item text-2xl sm:text-3xl font-semibold text-white">
                Full Stack Developer with a passion for{' '}
                <span className="text-gradient">building scalable solutions</span>
              </h3>
              <p className="animate-item text-white/60 leading-relaxed">
                Software Developer with hands-on experience building enterprise-grade ERP 
                systems (O2C, P2P) and full-stack web applications using React, Node.js, 
                and SQL Server. Strong exposure to role-based access, business workflows, 
                and RESTful APIs.
              </p>
              <p className="animate-item text-white/60 leading-relaxed">
                I specialize in converting complex business requirements into modular, 
                layered components that improve maintainability and performance. My focus 
                is on creating solutions that are not just functional, but also scalable 
                and user-friendly.
              </p>
            </div>

            {/* Skills with progress bars */}
            <div ref={skillsRef} className="space-y-4">
              <h4 className="animate-item text-lg font-semibold text-white mb-4">
                Technical Skills
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/70">{skill.name}</span>
                      <span className="text-[#d5d8f6]">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="skill-bar h-full bg-gradient-to-r from-[#d5d8f6] to-[#a5a8d6] rounded-full"
                        style={{ width: 0 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Tags */}
            <div ref={tagsRef} className="flex flex-wrap gap-2">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="skill-tag px-4 py-2 glass rounded-full text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob-morph {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% {
            border-radius: 50% 60% 30% 60% / 30% 60% 70% 40%;
          }
          75% {
            border-radius: 60% 40% 60% 30% / 70% 30% 50% 60%;
          }
        }
      `}</style>
    </section>
  );
}
