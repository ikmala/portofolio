import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Network, Cpu, Wrench, Bot } from "lucide-react";

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
      icon: Cpu,
      title: "IoT Systems Integration",
      description:
        "Delivering end-to-end IoT solutions from device firmware to cloud dashboards",
    },
    {
      icon: Bot,
      title: "AI & Robotics",
      description:
        "Building ROS2-powered robots, computer vision pipelines, and intelligent edge devices",
    },
    {
      icon: Wrench,
      title: "Hardware Engineering",
      description:
        "Assembling, repairing, and optimizing hardware tailored for connected environments",
    },
    {
      icon: Network,
      title: "Network Architecture",
      description:
        "Designing resilient wired and wireless networks that keep devices online",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Building full-stack products across web, mobile, and desktop experiences",
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
            I'm a builder at heart, trained in Computer & Network Engineering at
            SMK and sharpened through countless hardware repairs, IoT deploys,
            and custom software builds for clients who need everything to just
            work. Today I continue my journey in a Computer Engineering degree
            focused on AI and robotics experimentation.
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
                  I started in vocational school mastering network topologies,
                  cabling, and hardware diagnostics. Outside class, I took on
                  repair jobs that taught me how devices behave in the real
                  world and how to fix them fast.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Those experiences naturally evolved into building IoT systems:
                  configuring microcontrollers, stitching sensors to the cloud,
                  and writing the web, mobile, or desktop software that keeps
                  everything visible. In my Computer Engineering studies I dig
                  into ROS2, computer vision, and machine learning so robotics
                  projects can see, decide, and act autonomously. Today I combine
                  hardware instincts with full-stack development to deliver
                  dependable connected products, shipping web apps in React on
                  the front and Laravel or Node.js on the backend depending on
                  what each client needs.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">IoT & Embedded</span>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-[90%]"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">AI & Robotics</span>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-[88%]"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Full-Stack Applications</span>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-[82%]"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Network & Infrastructure</span>
                  <div className="w-32 bg-slate-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full w-[95%]"></div>
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
