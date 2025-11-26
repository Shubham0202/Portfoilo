import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(textRef.current?.children || [], {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        })
            .from(imageRef.current, {
                x: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            }, "-=0.8");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-dvh rounded-b-[4rem] overflow-hidden bg-linear-to-br from-orange-600 to-red-700 pt-32 px-4 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto h-full flex flex-col justify-center relative z-10">
                <div ref={textRef} className="max-w-2xl">
                    <p className="text-white text-xl mb-2">Hey, I'm a</p>
                    <h2 className="text-white text-5xl md:text-7xl font-extrabold leading-tight">
                        Shubham Chandgude,<br />A Passionate<br />Frontend Developer
                    </h2>
                    <p className="text-white/80 mt-6 text-lg">
                        Building engaging, beautiful, and perfect user experiences.
                    </p>
                </div>
            </div>
            <div className="absolute inset-0 z-0">
                <img
                    ref={imageRef}
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop"
                    alt="Portrait of a developer"
                    className="absolute right-0 bottom-0 w-2/3 md:w-1/2 lg:w-[45%] h-full object-cover object-top opacity-30 md:opacity-40"
                />
                <div className="absolute inset-0 bg-linear-to-r from-[#111111] via-transparent to-transparent"></div>
            </div>
            <div className="absolute right-8 md:right-16 bottom-20 z-10 hidden md:block">
                <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 max-w-sm">
                    <p className="text-white text-2xl font-semibold">"Great design should feel invisible"</p>
                </div>
            </div>

        </section>
    );
};

export default Hero;
