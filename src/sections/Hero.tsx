import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const glassCards = [
  { title: 'MERN Stack', subtitle: 'Full Stack Dev', icon: '⚡', delay: 0 },
  { title: 'ERP Systems', subtitle: 'Enterprise', icon: '🏢', delay: 0.1 },
  { title: 'React & Node', subtitle: 'Modern Web', icon: '🚀', delay: 0.2 },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Name animation - split characters
      if (nameRef.current) {
        const chars = nameRef.current.textContent?.split('') || [];
        nameRef.current.innerHTML = chars
          .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
          .join('');

        gsap.fromTo(
          nameRef.current.querySelectorAll('span'),
          { y: 100, rotateX: 90, opacity: 0 },
          {
            y: 0,
            rotateX: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.03,
            delay: 0.3,
            ease: 'expo.out',
          }
        );
      }

      // Title typewriter effect
      if (titleRef.current) {
        const text = titleRef.current.textContent || '';
        titleRef.current.textContent = '';
        gsap.to(titleRef.current, {
          duration: 1,
          delay: 0.8,
          ease: 'none',
          onUpdate: function () {
            const progress = this.progress();
            const charIndex = Math.floor(progress * text.length);
            titleRef.current!.textContent = text.slice(0, charIndex);
          },
        });
      }

      // Description fade in
      gsap.fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 1.2, ease: 'expo.out' }
      );

      // CTA buttons
      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 1.4, ease: 'expo.out' }
      );

      // Glass cards 3D orbit entry
      const cards = cardsRef.current?.querySelectorAll('.glass-card-item');
      cards?.forEach((card, i) => {
        gsap.fromTo(
          card,
          { z: -500, opacity: 0, rotateY: 45 },
          {
            z: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1.2,
            delay: 1 + i * 0.15,
            ease: 'back.out(1.2)',
          }
        );
      });

      // Scroll parallax for hero text
      gsap.to(textRef.current, {
        y: -150,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Cards spread on scroll
      gsap.to(cardsRef.current, {
        scale: 0.9,
        opacity: 0.5,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '50% top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#010208]/50 via-transparent to-[#010208]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div ref={textRef} className="space-y-6">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-white/70">Available for opportunities</span>
            </div>

            <div className="space-y-2">
              <p className="text-lg text-white/70 font-light">Hello, I'm</p>
              <h1
                ref={nameRef}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-['Montserrat'] text-white leading-tight"
              >
                Shubham Chandgude
              </h1>
            </div>

            <p
              ref={titleRef}
              className="text-xl sm:text-2xl text-[#d5d8f6] font-medium"
            >
              Software Developer – Full Stack (MERN)
            </p>

            <p
              ref={descRef}
              className="text-base sm:text-lg text-white/60 max-w-xl leading-relaxed"
            >
              I build enterprise-grade ERP systems and full-stack web applications 
              with a focus on scalable, maintainable solutions.
            </p>

            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={handleScrollToProjects}
                className="group relative px-8 py-4 bg-[#d5d8f6] text-[#010208] font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(213,216,246,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Work
                  <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                </span>
              </button>

              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/shubham0202"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shubham-chandgude-6404b7270/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:shubham826852@gmail.com"
                  className="p-3 glass rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Floating Glass Cards */}
          <div ref={cardsRef} className="relative hidden lg:block h-[500px]">
            {glassCards.map((card, index) => (
              <div
                key={card.title}
                className={`glass-card-item absolute glass-card p-6 glow-border animate-float${
                  index === 1 ? '-delayed' : index === 2 ? '-slow' : ''
                }`}
                style={{
                  top: `${20 + index * 25}%`,
                  left: `${10 + index * 15}%`,
                  transform: `rotate(${-5 + index * 5}deg)`,
                  zIndex: 3 - index,
                }}
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="text-sm text-white/50">{card.subtitle}</p>
              </div>
            ))}

            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-[#d5d8f6]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-[#d5d8f6]/5 rounded-full blur-2xl" />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#010208] to-transparent z-10" />
    </section>
  );
}
