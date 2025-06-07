import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (skillsRef.current) {
      gsap.fromTo(
        skillsRef.current.children,
        { y: 30, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
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

  const skills = [
    { name: "JavaScript", level: 95, color: "from-yellow-400 to-orange-500" },
    { name: "TypeScript", level: 90, color: "from-blue-400 to-blue-600" },
    { name: "React", level: 92, color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", level: 88, color: "from-green-400 to-green-600" },
    { name: "Python", level: 85, color: "from-yellow-300 to-blue-500" },
    { name: "C++", level: 78, color: "from-cyan-300 to-blue-400" },
    { name: "Docker", level: 82, color: "from-blue-400 to-cyan-500" },
    { name: "AWS", level: 80, color: "from-orange-400 to-yellow-500" },
    { name: "PostgreSQL", level: 87, color: "from-blue-500 to-indigo-600" },
    { name: "Redis", level: 75, color: "from-red-400 to-red-600" },
    { name: "GraphQL", level: 83, color: "from-pink-400 to-purple-500" },
    { name: "Three.js", level: 70, color: "from-purple-400 to-pink-500" },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Programming Languages
          </span>
        </h2>

        <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
          Technologies I work with to bring ideas to life
        </p>

        <div
          ref={skillsRef}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer"
            >
              <div className="text-center">
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-slate-700"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="36"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 36}`}
                      strokeDashoffset={`${
                        2 * Math.PI * 36 * (1 - skill.level / 100)
                      }`}
                      className="transition-all duration-1000 ease-out"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-white">
                      {skill.level}%
                    </span>
                  </div>
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" className="text-purple-400" />
                      <stop offset="100%" className="text-pink-400" />
                    </linearGradient>
                  </defs>
                </div>

                <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
