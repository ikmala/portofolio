import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  ExternalLink,
  Github,
  Globe,
} from "lucide-react";

const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (projectsRef.current) {
      gsap.fromTo(
        projectsRef.current.children,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
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

  const projects = [
    {
      title: "LED-Predict – IoT LED Monitoring",
      description:
        "I built both the hardware and software of an ESP32-based IoT system designed to monitor LED performance in real time using multiple sensors, with all data stored in Firebase and visualized through a responsive web dashboard.",
      tech: [
        "ESP32",
        "C++ (Arduino)",
        "Firebase Realtime Database",
        "Javascript",
        "React",
        "TailwindCSS"
      ],
      image: "/ledpredict.png",
      features: [
        "Real-time LED sensor monitoring",
        "Multi-sensor data collection (lux, voltage, current, temp, humidity)",
        "Direct Firebase data logging",
        "Live web dashboard visualization",
        "Automatic timestamp sync (NTP)",
        "Device-based data separation"
      ],
      icon: Globe,
      gradient: "from-blue-500 to-purple-600",
      liveUrl: "https://monitorledpredict.visilogi.com/",
      codeUrl: ""
    },
    {
      title: "SmartAttendance – IoT RFID & Fingerprint",
      description:
        "I developed an ESP32-based IoT attendance system using RFID and fingerprint authentication, integrated with a Laravel backend for real-time logging, user management, and attendance reporting.",
      tech: [
        "ESP32",
        "C++ (Arduino)",
        "RFID RC522",
        "Fingerprint Sensor",
        "Laravel",
        "MySQL",
        "REST API"
      ],
      image: "/ledpredict.png",
      features: [
        "Real-time attendance logging",
        "RFID & fingerprint dual authentication",
        "Separate access for students, teachers, and admins",
        "Laravel web dashboard with reports",
        "Secure API communication",
        "Automatic timestamp sync (NTP)"
      ],
      icon: Globe,
      gradient: "from-green-500 to-blue-600",
      liveUrl: "https://absensi.visilogi.com/",
      codeUrl: ""
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
          A showcase of my recent work, demonstrating expertise across
          full-stack development and network engineering
        </p>

        <div
          ref={projectsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div
                    className={`bg-gradient-to-r ${project.gradient} p-2 rounded-lg`}
                  >
                    <project.icon size={20} className="text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center text-sm text-slate-400"
                    >
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/ikmala"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-orange-500/25">
              View All Projects on GitHub
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
