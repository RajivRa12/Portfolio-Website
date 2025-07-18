import { ArrowRight, Code, Database, Globe, Mail, Phone, MapPin, Calendar, Award, ExternalLink, Github, Linkedin, FileCode, FileType2, FileTerminal, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const skills = [
    { name: "JavaScript", level: 90, icon: "/skills/js.png" },
    { name: "React.js", level: 85, icon: "/skills/react.svg" },
    { name: "TypeScript", level: 80, icon: "/skills/typescript.png" },
    { name: "HTML/CSS", level: 95, icon: "/skills/html.png" },
    { name: "Node.js", level: 75, icon: "/skills/nodejs.svg" },
    { name: "Bootstrap", level: 85, icon: "/skills/bootstrap.png" },
    { name: "Python", level: 90, icon: <span className="text-blue-700 text-2xl">🐍</span> }
  ];

  const projects = [
    {
      title: "E-Commerce Website",
      description: "Designed and developed a fully responsive e-commerce website focusing on clean UI/UX and user-friendly navigation. Implemented key features such as product listing, search functionality, shopping cart, and checkout flow.",
      tech: ["HTML", "CSS", "JavaScript", "React", "MySQL"],
      date: "Jan 2025",
      featured: true,
      github: "https://github.com/RajivRa12/Ecommerce-Bot"
    },
    {
      title: "E-Commerce Bot Website",
      description: "Advanced e-commerce platform with integrated chatbot functionality for enhanced customer experience and automated support.",
      tech: ["React", "TypeScript", "Node.js", "API Integration"],
      date: "Jan 2025",
      featured: true,
      github: "https://github.com/RajivRa12/Ecommerce-Bot"
    },
    {
      title: "Study Abroad Consultancy Website",
      description: "Professional consultancy website built with modern React stack, featuring responsive design and interactive components.",
      tech: ["React", "Vite", "TypeScript", "shadcn/ui"],
      date: "Dec 2024",
      featured: true,
      github: "https://github.com/RajivRa12/study-abroad-consultancy-static-website"
    },
    {
      title: "Crypto-Analysis",
      description: "Python script for fetching and analyzing live cryptocurrency data, including market capitalization, prices, and 24-hour changes. Continuously updates Excel file with real-time data from top 50 cryptocurrencies.",
      tech: ["Python", "Matplotlib", "APIs"],
      date: "Nov 2024",
      featured: true,
      github: "https://github.com/RajivRa12/Crypto-Analysis"
    },
    {
      title: "Face Detection System",
      description: "Real-time face detection using OpenCV and Haar Cascade Classifiers with live video processing capabilities.",
      tech: ["Python", "OpenCV", "Computer Vision"],
      date: "Mar 2025",
      featured: true,
      github: "https://github.com/RajivRa12/Face-Detection-main"
    },
    {
      title: "Stopwatch Website",
      description: "Fully functional stopwatch application with Start, Pause, Resume, and Reset features. Clean UI with real-time updates and accurate timing functions.",
      tech: ["JavaScript", "HTML", "CSS"],
      date: "Jun 2024",
      featured: true,
      github: "https://github.com/RajivRa12/StopWatchApp"
    }
  ];

  const experiences = [
    {
      title: "Python Programming Intern",
      company: "YBI Foundation",
      location: "Remote, India",
      period: "Oct 2024 - Nov 2024",
      description: "Completed core Python programming internship focused on data structures, algorithmic thinking, and automated scripts for software development applications."
    },
    {
      title: "Project Manager Intern", 
      company: "RICOZ Connecting Audience Pvt. Ltd.",
      location: "Remote, India",
      period: "Jun 2024 - Oct 2024",
      description: "Managed project milestones, coordinated marketing campaigns, and enhanced team collaboration using modern project management tools and methodologies."
    },
    {
      title: "Human Resources Intern",
      company: "RICOZ Connecting Audience Pvt. Ltd.",
      location: "Remote, India",
      period: "Nov 2024 - Feb 2024",
      description: "Assisted in end-to-end recruitment processes including screening, shortlisting, and coordinating candidate interviews. Engaged with candidates and clients, enhancing professional communication and relationship management skills. Maintained and updated HR records, improved internal communication flow, and supported onboarding activities. Gained hands-on experience in talent acquisition, HR coordination, and real-time hiring strategies."
    },
    {
      title: "Human Resources Intern",
      company: "SKILLGENIC (Pvt. Ltd.)",
      location: "Remote, India", 
      period: "Feb 2024 - Mar 2024",
      description: "Supported recruitment operations, candidate screening, and interview coordination. Assisted in end-to-end recruitment processes, including job posting, resume screening, and scheduling interviews. Coordinated communication between candidates and hiring managers and maintained applicant tracking systems."
    },
    {
      title: "Front-End Developer Intern",
      company: "Dhobi - G",
      location: "Remote, India",
      period: "Jun 2025 - Jul 2025",
      description: "Contributed to the development and optimization of user interfaces for a laundry services platform. Collaborated with cross-functional teams to implement responsive designs, enhance user experience, and ensure seamless integration of new features using modern frontend technologies."
    }
  ];

  const certifications = [
    {
      name: "Programming in Python - Meta | Coursera (Dec 2024)",
      file: "/python.pdf"
    },
    {
      name: "Introduction to Front-End Development - Meta | Coursera (Jan 2025)",
      file: "/frontend.pdf"
    },
    {
      name: "Introduction to Web Development with HTML, CSS, JavaScript - IBM | Coursera (Dec 2024)",
      file: "/IBM.pdf"
    },
    {
      name: "Introduction to Databases - Meta | Coursera (Mar 2025)",
      file: "/database.pdf"
    },
    {
      name: "Programming with JavaScript - Meta | Coursera (Jan 2025)",
      file: "/javascript.pdf"
    },
    {
      name: "SQL (Basic) - Certification by HackerRank (Feb 2025)",
      file: "/sql_basic certificate copy.pdf"
    },
    {
      name: "SQL (Advanced) - Certification by HackerRank (Mar 2025)",
      file: "/sql_advanced certificate copy.pdf"
    },
    {
      name: "Chatbot Evolution Hackathon - VIT-AP (via Unstop)",
      file: "/chatbot.pdf"
    },
    {
      name: "Build with India Hackathon - Hack with India (Unstop)",
      file: "/upstop.pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
              PALLA RAJIV
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">About</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Skills</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Projects</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Experience</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-105">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5 animate-pulse"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 animate-fade-in">
            {/* Left: Intro */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-6xl md:text-8xl font-extrabold mb-4 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 bg-clip-text text-transparent animate-pulse drop-shadow-lg">
                Palla Rajiv
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 animate-typing overflow-hidden whitespace-nowrap pr-5" style={{animation: 'typing 3s steps(30, end)'}}>
                I'm a Frontend Developer
              </h2>
              <style>{`
                @keyframes typing {
                  from { width: 0 }
                  to { width: 100% }
                }
              `}</style>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed transform transition-all duration-700 hover:scale-105">
                Computer Science Engineering student passionate about frontend development, software engineering, 
                and building exceptional user experiences with modern web technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-12">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl" onClick={() => window.open('mailto:RajivGroot20@gmail.com', '_blank')}>
                  <Mail className="mr-2 h-5 w-5" />
                  Mail Message
                </Button>
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl" onClick={() => window.open('https://wa.me/918438327763', '_blank')}>
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16.72 13.06c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49-.17-.01-.36-.01-.56-.01-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43.01 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.92 4.23.69.3 1.23.48 1.65.61.69.22 1.32.19 1.81.12.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34z"/></svg>
                  WhatsApp Message
                </Button>
                <Button variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg" onClick={() => window.open('https://github.com/RajivRa12', '_blank')}>
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                </Button>
                <Button variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg" onClick={() => window.open('https://www.linkedin.com/in/palla-rajiv-502266328', '_blank')}>
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect LinkedIn
                </Button>
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
                  <a href="/Palla Rajiv_cvs.pdf" download className="flex items-center">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Download CV
                  </a>
                </Button>
              </div>
              <div className="flex justify-center space-x-6">
                <div className="flex items-center text-gray-600 transform transition-all duration-300 hover:scale-110">
                  <Phone className="h-5 w-5 mr-2 text-blue-600" />
                  {"+91-84xxxxxx63"}
                </div>
                <div className="flex items-center text-gray-600 transform transition-all duration-300 hover:scale-110">
                  <Mail className="h-5 w-5 mr-2 text-blue-600" />
                  RajivGroot20@gmail.com
                </div>
              </div>
            </div>
            {/* Right: Photo */}
            <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
              <img 
                src="/image.jpg" 
                alt="Palla Rajiv" 
                className="w-[32rem] h-72 md:w-[48rem] md:h-[28rem] object-cover rounded-xl shadow-xl border-4 border-white bg-white animate-pulse-glow" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 transform transition-all duration-500 hover:scale-105">About Me</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 transform transition-all duration-500 hover:text-gray-800">
              I'm a dedicated Computer Science Engineering student at SRM Institute of Science and Technology, 
              specializing in frontend development and software engineering. My expertise spans modern web technologies 
              including React.js, TypeScript, and responsive design principles, with a passion for creating 
              intuitive user interfaces and scalable web applications.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1">
                <CardHeader>
                  <Code className="h-12 w-12 text-blue-600 mx-auto mb-4 animate-bounce" />
                  <CardTitle>Frontend Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Modern web development with React.js, TypeScript, and responsive design frameworks.</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1">
                <CardHeader>
                  <Database className="h-12 w-12 text-indigo-600 mx-auto mb-4 animate-bounce" />
                  <CardTitle>Software Engineering</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Full-stack development, system design, and building scalable applications.</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1">
                <CardHeader>
                  <Globe className="h-12 w-12 text-green-600 mx-auto mb-4 animate-bounce" />
                  <CardTitle>Web Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Expertise in building responsive, high-performance web applications using React.js, TypeScript, JavaScript, HTML, CSS, and modern frameworks. Focused on delivering robust, scalable, and user-friendly solutions.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 transform transition-all duration-500 hover:scale-105">Technical Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {skills.map((skill, index) => (
                <div key={skill.name} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="flex items-center gap-2 font-semibold text-gray-800">
                      {typeof skill.icon === 'string' ? (
                        <img src={skill.icon} alt={skill.name + ' icon'} className="h-6 w-6" />
                      ) : skill.icon}
                      {skill.name}
                    </span>
                    <span className="text-blue-600 font-bold animate-pulse">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 h-3 rounded-full transition-all duration-2000 ease-out animate-pulse"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white/70 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 transform transition-all duration-500 hover:scale-105">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <Card key={idx} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {project.title}
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:text-indigo-700 transition-colors">
                        <Github className="inline h-5 w-5" />
                      </a>
                    </CardTitle>
                    <CardDescription>{project.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-gray-700">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <Badge key={i} className="bg-blue-100 text-blue-700 font-semibold px-3 py-1 rounded-full text-xs shadow-sm">{t}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl" onClick={() => window.open('https://github.com/RajivRa12', '_blank')}>
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-blue-50 to-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-900 transform transition-all duration-500 hover:scale-105">Professional Experiences</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {experiences.map((exp, idx) => (
                <Card key={idx} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-r from-blue-100 to-indigo-100">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {exp.title}
                      <span className="ml-2 text-indigo-600 font-semibold">{exp.company}</span>
                    </CardTitle>
                    <CardDescription className="flex items-center justify-between">
                      <span>{exp.location}</span>
                      <span className="text-blue-600 font-medium">{exp.period}</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-2 text-gray-700 text-left">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 transform transition-all duration-500 hover:scale-105">Certifications</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, idx) => (
                <Card key={idx} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-r from-indigo-100 to-blue-100">
                  <CardContent className="flex items-center justify-between">
                    <p className="text-gray-700 text-left font-medium mb-0">{cert.name}</p>
                    <a href={cert.file} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        className="ml-4 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-md hover:from-blue-600 hover:to-indigo-600 hover:scale-105 transition-all duration-200"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-indigo-600/80 animate-pulse"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-white transform transition-all duration-500 hover:scale-105">Let's Work Together</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto hover:text-white transition-colors duration-300">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
              <Mail className="mr-2 h-5 w-5" />
              RajivGroot20@gmail.com
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl">
              <Phone className="mr-2 h-5 w-5" />
              {"+91-84xxxxxx63"}
            </Button>
          </div>
          <div className="flex justify-center space-x-6">
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 p-3 rounded-full transition-all duration-300 transform hover:scale-125 hover:rotate-12" onClick={() => window.open('https://www.linkedin.com/in/palla-rajiv-502266328', '_blank')}>
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="lg" className="text-white hover:bg-white/10 p-3 rounded-full transition-all duration-300 transform hover:scale-125 hover:rotate-12" onClick={() => window.open('https://github.com/RajivRa12', '_blank')}>
              <Github className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gray-900 text-center">
        <p className="text-gray-400 hover:text-white transition-colors duration-300">
          © 2025 Palla Rajiv. Designed and developed with ❤️
        </p>
      </footer>

      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 40px 0 rgba(99,102,241,0.15), 0 0 0 0 rgba(99,102,241,0.25);
          }
          50% {
            transform: scale(1.06);
            box-shadow: 0 0 80px 10px rgba(99,102,241,0.25), 0 0 0 10px rgba(99,102,241,0.15);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Index;
