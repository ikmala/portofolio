import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Mail, MapPin, Send, Github, Linkedin, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        ".contact-item",
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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Animate submit button
    gsap.to(".submit-btn", {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.out",
    });

    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);

    emailjs
      .sendForm(
        "service_qg8yudo", // Replace with your service ID from EmailJS
        "template_ni3drgp", // Replace with your template ID from EmailJS
        formRef.current!, // Form reference to get form data
        "pwjcPQOHn2ct6F_kb" // Replace with your user ID from EmailJS
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          // Reset form after successful submission
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ikmalalais@gmail.com",
      link: "mailto:ikmalalais@gmail.com",
    },
    {
      icon: FaWhatsapp,
      title: "Whatsapp",
      value: "+62 82125488212",
      link: "https://wa.me/6282125488212",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Surabaya",
      link: "https://www.google.com/maps/place/Ketintang,+Kec.+Gayungan,+Surabaya,+Jawa+Timur/@-7.3185784,112.7163752,15z/data=!3m1!4b1!4m6!3m5!1s0x2dd7fb6551205733:0x32a9d1800d0cfc47!8m2!3d-7.3154135!4d112.7301098!16s%2Fg%2F122zkcyz?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/ikmala", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ikmal-al-ais-32a2432b7/",
      label: "LinkedIn",
    },
    { icon: X, href: "https://x.com/IkmalAis", label: "Twitter" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="contact-item">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>

          <p className="text-xl text-slate-300 text-center mb-16 max-w-3xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="contact-item space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-slate-300 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and
                development. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="bg-gradient-to-br from-pink-500 to-purple-500 p-3 rounded-lg group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300">
                    <info.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors duration-300">
                      {info.title}
                    </h4>
                    <p className="text-slate-300">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-500/25 group"
                  >
                    <social.icon
                      size={20}
                      className="text-slate-300 group-hover:text-pink-400 transition-colors duration-300"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-item">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-pink-500/50 focus:ring-2 focus:ring-pink-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="submit-btn w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pink-500/25 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="contact-item mt-16 text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Whether you need a full-stack web application, network
              infrastructure setup, or technical consultation, I'm here to help
              bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/CV Ikmal Al Ais.pdf"
                download
                className="inline-flex items-center justify-center bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
