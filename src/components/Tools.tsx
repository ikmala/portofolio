import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code,
  Code2,
  Server,
  Cloud,
  Monitor,
  Zap,
  Shield,
  Terminal,
  Layers,
  Box,
  Cpu,
  Radio,
  CircuitBoard,
  Palette,
  Smartphone,
  Bot,
  Brain,
  Camera,
  Sparkles,
} from 'lucide-react';

const Tools: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (toolsRef.current) {
      gsap.fromTo(
        toolsRef.current.children,
        { y: 50, opacity: 0, rotationY: 15 },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  const toolCategories = [
    {
      title: "AI & Robotics",
      tools: [
        {
          name: "ROS2, Gazebo & RViz",
          icon: Bot,
          description:
            "Robot control, simulation, and visualization pipelines for autonomous systems",
        },
        {
          name: "YOLOv8, OpenCV & DeepStream",
          icon: Camera,
          description:
            "Real-time computer vision for detection, tracking, and spatial awareness",
        },
        {
          name: "TensorFlow, PyTorch & ONNX",
          icon: Brain,
          description:
            "Model training, optimization, and deployment to edge hardware",
        },
        {
          name: "LLMs, LangChain & RAG",
          icon: Sparkles,
          description:
            "Conversational interfaces and intelligent agents for robotics and IoT workflows",
        },
      ],
    },
    {
      title: "IoT & Hardware",
      tools: [
        {
          name: "Arduino IDE & PlatformIO",
          icon: Cpu,
          description:
            "Firmware development and rapid prototyping for microcontroller projects",
        },
        {
          name: "ESP32 / ESPHome",
          icon: Radio,
          description:
            "Wireless connectivity, OTA updates, and sensor integrations for IoT nodes",
        },
        {
          name: "Raspberry Pi & Linux",
          icon: CircuitBoard,
          description:
            "Edge computing, gateways, and on-premise controllers for connected systems",
        },
        {
          name: "KiCad & PCB Prototyping",
          icon: Box,
          description:
            "Schematic design and custom PCB layouts tailored to hardware requirements",
        },
      ],
    },
    {
      title: "Backend & Cloud",
      tools: [
        {
          name: "Node.js, Express & NestJS",
          icon: Server,
          description:
            "Robust APIs, device management backends, and automation services",
        },
        {
          name: "Laravel & PHP Ecosystem",
          icon: Code2,
          description:
            "Modular backend services, REST APIs, and dashboard tooling when projects call for PHP",
        },
        {
          name: "Python & FastAPI",
          icon: Terminal,
          description:
            "Data pipelines, integrations, and IoT orchestration scripts",
        },
        {
          name: "Firebase & Supabase",
          icon: Cloud,
          description:
            "Realtime dashboards, authentication, and secure data storage",
        },
        {
          name: "Docker & CI/CD",
          icon: Layers,
          description:
            "Containerized deployments and repeatable release workflows",
        },
      ],
    },
    {
      title: "Frontend & Apps",
      tools: [
        {
          name: "React, Next.js & Vite",
          icon: Code,
          description:
            "Fast web interfaces for monitoring, control, and client portals",
        },
        {
          name: "React Native & Flutter",
          icon: Smartphone,
          description:
            "Cross-platform mobile apps that interact with connected devices",
        },
        {
          name: "Tailwind CSS & Shadcn UI",
          icon: Palette,
          description:
            "Design systems that stay consistent across dashboards and apps",
        },
        {
          name: "Electron & Tauri",
          icon: Monitor,
          description:
            "Desktop tools for on-site configuration and hardware diagnostics",
        },
      ],
    },
  ];

  return (
    <section
      id="tools"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Tools & Technologies
          </span>
        </h2>
        
        <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
          Tooling that lets me connect hardware in the field with reliable cloud services and polished interfaces.
        </p>

        <div ref={toolsRef} className="space-y-12">
          {toolCategories.map((category) => (
            <div key={category.title} className="space-y-6">
              <h3 className="text-2xl font-bold text-center text-green-400">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={tool.name}
                      className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/10 cursor-pointer"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-gradient-to-br from-green-500 to-blue-500 p-4 rounded-lg mb-4 group-hover:from-green-400 group-hover:to-blue-400 transition-all duration-300">
                          <Icon size={32} className="text-white" />
                        </div>

                        <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                          {tool.name}
                        </h4>

                        <p className="text-sm text-slate-300 leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <h3 className="text-2xl font-bold text-center mb-6 text-green-400">
            Workflow Philosophy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-blue-500 p-3 rounded-lg mb-4 w-fit mx-auto">
                <Code size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">End-to-End Ownership</h4>
              <p className="text-slate-300 text-sm">
                Following every signal path from sensors to AI models to cloud endpoints to keep projects cohesive
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-blue-500 p-3 rounded-lg mb-4 w-fit mx-auto">
                <Zap size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Iterate Fast</h4>
              <p className="text-slate-300 text-sm">
                Rapid prototypes, field feedback, and continuous improvements to reach reliable releases
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-blue-500 p-3 rounded-lg mb-4 w-fit mx-auto">
                <Shield size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Reliability First</h4>
              <p className="text-slate-300 text-sm">
                Stress-testing hardware, firmware, and AI logic so deployments and robot missions stay resilient in the field
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
