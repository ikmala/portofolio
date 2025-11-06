import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    if (titleRef.current) {
      tl.fromTo(
        titleRef.current.children,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
      );
    }

    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      );
    }

    if (ctaRef.current) {
      tl.fromTo(
        ctaRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
        "-=0.3"
      );
    }

    // Floating animation for scroll indicator
    gsap.to(".scroll-indicator", {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: aboutSection.offsetTop - 80, autoKill: false },
        ease: "power3.inOut",
      });
    }
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center px-6 relative"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            IoT & Full-Stack
          </span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Engineer
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          From network-focused vocational training to hands-on hardware and
          robotics builds, I craft IoT ecosystems, AI-driven robots, and
          multi-platform apps that connect devices with outstanding user
          experiences.
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <button
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            Explore My Work
          </button>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/ikmala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ikmal-al-ais-32a2432b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ikmalalais@gmail.com?subject=Subject%20Text&body=Body%20Text"
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div
          className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToAbout}
        >
          <ChevronDown size={32} className="text-cyan-400 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
