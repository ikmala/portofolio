import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  Database, 
  Server, 
  Cloud, 
  Monitor, 
  Zap, 
  Shield, 
  GitBranch,
  Terminal,
  Layers,
  Box,
  Cpu
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
      title: 'Development',
      tools: [
        { name: 'VS Code', icon: Code, description: 'Primary code editor with extensive customization' },
        { name: 'Git', icon: GitBranch, description: 'Version control and collaboration' },
        { name: 'Terminal', icon: Terminal, description: 'Command line interface and automation' },
        { name: 'Postman', icon: Zap, description: 'API development and testing' }
      ]
    },
    {
      title: 'Infrastructure',
      tools: [
        { name: 'Docker', icon: Box, description: 'Containerization and deployment' },
        { name: 'AWS', icon: Cloud, description: 'Cloud services and infrastructure' },
        { name: 'Kubernetes', icon: Layers, description: 'Container orchestration' },
        { name: 'Nginx', icon: Server, description: 'Web server and reverse proxy' }
      ]
    },
    {
      title: 'Database & Monitoring',
      tools: [
        { name: 'PostgreSQL', icon: Database, description: 'Primary relational database' },
        { name: 'Redis', icon: Cpu, description: 'In-memory data structure store' },
        { name: 'Grafana', icon: Monitor, description: 'Monitoring and observability' },
        { name: 'Wireshark', icon: Shield, description: 'Network protocol analyzer' }
      ]
    }
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
          The arsenal of tools I use to build, deploy, and maintain applications
        </p>

        <div ref={toolsRef} className="space-y-12">
          {toolCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-6">
              <h3 className="text-2xl font-bold text-center text-green-400">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <div
                    key={tool.name}
                    className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/10 cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-gradient-to-br from-green-500 to-blue-500 p-4 rounded-lg mb-4 group-hover:from-green-400 group-hover:to-blue-400 transition-all duration-300">
                        <tool.icon size={32} className="text-white" />
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                        {tool.name}
                      </h4>
                      
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                ))}
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
              <h4 className="text-lg font-semibold text-white mb-2">Clean Code</h4>
              <p className="text-slate-300 text-sm">
                Writing maintainable, well-documented code that stands the test of time
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-blue-500 p-3 rounded-lg mb-4 w-fit mx-auto">
                <Zap size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Performance</h4>
              <p className="text-slate-300 text-sm">
                Optimizing for speed, efficiency, and scalability in every project
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-500 to-blue-500 p-3 rounded-lg mb-4 w-fit mx-auto">
                <Shield size={24} className="text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Security</h4>
              <p className="text-slate-300 text-sm">
                Building secure applications with proper authentication and data protection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;