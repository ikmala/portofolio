import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Network, Zap, Users } from "lucide-react";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "Building scalable web applications with modern technologies",
    },
    {
      icon: Network,
      title: "Network Engineering",
      description:
        "Designing robust network infrastructures and security solutions",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Creating lightning-fast applications with optimal user experience",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading development teams and mentoring junior developers",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <div ref={contentRef}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer and network engineer with over 3 years of
            experience creating innovative solutions that bridge the gap between
            complex technical systems and intuitive user experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-3 rounded-lg mb-4 w-fit">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {title}
                </h3>
                <p className="text-slate-300 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">
                  My Journey
                </h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Started as a network engineer, I discovered my passion for web
                  development when building internal tools to automate network
                  monitoring. This led me to expand into full-stack development,
                  combining my network expertise with modern web technologies.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Today, I specialize in creating high-performance applications
                  that not only look great but also handle complex backend
                  operations with reliability and security.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Frontend Development</span>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Backend Development</span>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-[85%]"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Network Engineering</span>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-[95%]"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">DevOps & Cloud</span>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-[80%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
