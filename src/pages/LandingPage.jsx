import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Menu,
  X,
  Code2,
  Wrench,
  Zap,
  Shield,
  Database,
  Globe,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import profileImage from "../assets/profile-picture.jpg";

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSampleSitesModal, setShowSampleSitesModal] = useState(false);
  const [formStatus, setFormStatus] = useState(""); // "", "sending", "success", "error"
  const navigate = useNavigate();

  const sampleSites = [
    {
      url: "https://lorencep22.github.io/sample_site1/",
      title: "Sample Site 1",
    },
    {
      url: "https://lorencep22.github.io/sample_site2/",
      title: "Sample Site 2",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "services", "projects", "about", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mojjyvdl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
        setTimeout(() => setFormStatus(""), 5000);
      } else {
        setFormStatus("error");
        setTimeout(() => setFormStatus(""), 5000);
      }
    } catch (error) {
      setFormStatus("error");
      setTimeout(() => setFormStatus(""), 5000);
    }
  };

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Website Maintenance & Updates",
      description:
        "Keep your website running smoothly with regular updates, backups, and security patches.",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Custom WordPress Development",
      description:
        "Build or enhance your site with custom WordPress themes, features, and plugins.",
      color: "from-teal-500 to-emerald-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Speed Optimization",
      description:
        "Improve load times and performance for better user experience and SEO rankings.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "HTML/CSS/JS Web Development",
      description:
        "Build modern static or React-based websites tailored for performance and design.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Emergency Website Recovery",
      description: "Restore hacked or broken websites quickly and securely.",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description:
        "Optimize and manage your databases for improved performance and reliability.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Laravel Development",
      description:
        "Build robust and scalable web applications using Laravel framework with modern PHP best practices.",
      color: "from-red-600 to-orange-600",
    },
  ];

  const projects = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "WordPress Security Recovery",
      description:
        "Complete security audit and recovery of compromised websites including malware removal, SEO spam, and firewall setup.",
      tags: ["WordPress", "Security", "PHP"],
      color: "from-red-500 to-orange-500",
      url: "https://lorencep22.github.io/portfolio/incident-report-page.html",
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Monthly Website Maintenance",
      description:
        "Ongoing monthly maintenance and optimization services for multiple affordable websites including performance monitoring.",
      tags: ["Maintenance", "Optimization", "Backup", "SEO"],
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "React Sample Site",
      description:
        "Modern, responsive React application with clean design and smooth interactions.",
      tags: ["React", "Vite", "Tailwind"],
      color: "from-blue-500 to-cyan-500",
      hasModal: true,
    },
    {
      icon: <Code2 className="w-12 h-12" />,
      title: "Laravel Multi-Tenant Business System",
      description:
        "Production-level multi-tenant application featuring inventory tracking, project management workflows, and API-driven integration with React frontend.",
      tags: ["Laravel", "Multi-Tenant", "React", "API", "MySQL"],
      color: "from-red-600 to-orange-600",
      route: "/laravel-experience",
    },
  ];

  const skills = [
    {
      category: "Frontend Development",
      items: [
        "React.js",
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      category: "Backend & Database",
      items: [
        "PHP",
        "Laravel",
        "MySQL",
        "PostgreSQL",
        "Node.js",
        "API Integration",
      ],
    },
    {
      category: "Tools & Hosting",
      items: ["Git", "cPanel", "AWS", "VS Code", "WordPress", "WP CLI"],
    },
    {
      category: "Security & Incident Response",
      items: [
        "Malware Removal",
        "Firewall Setup",
        "Security Audits",
        "Backup Solutions",
      ],
    },
    {
      category: "Content Management",
      items: [
        "WordPress",
        "Custom Themes",
        "Plugin Development",
        "WooCommerce",
      ],
    },
    {
      category: "SEO & Optimization",
      items: [
        "Page Speed",
        "SEO Best Practices",
        "Performance Tuning",
        "Analytics",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Lorence Palisan - Professional Web Developer & Software Engineer
        </title>
        <meta
          name="description"
          content="Professional Web Developer and Software Engineer specializing in WordPress development, Laravel applications, React.js, and full-stack web solutions. 5+ years experience building secure, performant websites."
        />
        <meta
          name="keywords"
          content="web developer, software engineer, WordPress developer, Laravel developer, React developer, full-stack developer, PHP developer, frontend developer, backend developer, Lorence Palisan, portfolio"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lorencepalisan.com/" />
        <meta
          property="og:title"
          content="Lorence Palisan - Professional Web Developer & Software Engineer"
        />
        <meta
          property="og:description"
          content="Professional Web Developer specializing in WordPress, Laravel, React.js, and full-stack development. Building secure, performant websites and applications."
        />
        <meta
          property="og:image"
          content="https://lorencepalisan.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://lorencepalisan.com/" />
        <meta
          property="twitter:title"
          content="Lorence Palisan - Professional Web Developer & Software Engineer"
        />
        <meta
          property="twitter:description"
          content="Professional Web Developer specializing in WordPress, Laravel, React.js, and full-stack development."
        />
        <meta
          property="twitter:image"
          content="https://lorencepalisan.com/og-image.jpg"
        />

        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Lorence Palisan",
            url: "https://lorencepalisan.com",
            image: "https://lorencepalisan.com/profile.jpg",
            jobTitle: "Software Engineer & Web Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance",
            },
            sameAs: [
              "https://www.linkedin.com/in/lorencepalisan",
              "https://github.com/lorencep22",
            ],
            knowsAbout: [
              "Web Development",
              "Software Engineering",
              "WordPress",
              "Laravel",
              "React.js",
              "PHP",
              "JavaScript",
              "Full-Stack Development",
            ],
            address: {
              "@type": "PostalAddress",
              addressCountry: "Philippines",
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        {/* Navigation */}
        <nav
          className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Lorence Palisan
                </h1>
              </div>

              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {["Home", "Services", "Projects", "About", "Contact"].map(
                    (item) => (
                      <button
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                          activeSection === item.toLowerCase()
                            ? "text-teal-400 bg-slate-800"
                            : "text-gray-300 hover:text-teal-400 hover:bg-slate-800/50"
                        }`}
                      >
                        {item}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {["Home", "Services", "Projects", "About", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-teal-400 hover:bg-slate-800"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                    Professional
                    <br />
                    <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Website Developer
                    </span>
                  </h1>
                  <p className="text-xl text-gray-400 max-w-lg">
                    Specializing in creating websites that run smoothly, stay
                    secure, and offer a clean experience for visitors.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all transform hover:-translate-y-0.5"
                  >
                    View My Work
                  </button>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-8 py-3 border-2 border-teal-500 rounded-lg font-semibold hover:bg-teal-500/10 transition-all"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>

              <div className="relative group">
                <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden hover:border-teal-500/30 transition-all duration-300">
                  {/* Window Header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer group/red relative">
                        <X className="w-2 h-2 absolute inset-0 m-auto text-red-900 opacity-0 group-hover/red:opacity-100 transition-opacity" />
                      </div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer group/yellow relative">
                        <Menu className="w-2 h-2 absolute inset-0 m-auto text-yellow-900 opacity-0 group-hover/yellow:opacity-100 transition-opacity" />
                      </div>
                      <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer group/green relative">
                        <ChevronDown className="w-2 h-2 absolute inset-0 m-auto text-green-900 opacity-0 group-hover/green:opacity-100 transition-opacity rotate-90" />
                      </div>
                    </div>
                    <div className="text-xs text-gray-500 font-medium">
                      developer.js
                    </div>
                  </div>

                  {/* Code Content */}
                  <div className="p-6">
                    <pre className="text-sm overflow-x-auto">
                      <code className="font-mono">
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-blue-300">developer</span>{" "}
                        <span className="text-gray-300">=</span>{" "}
                        <span className="text-yellow-300">{"{"}</span>
                        {"\n  "}
                        <span className="text-red-300">name</span>
                        <span className="text-gray-300">:</span>{" "}
                        <span className="text-green-300">
                          "Lorence Palisan"
                        </span>
                        <span className="text-gray-300">,</span>
                        {"\n  "}
                        <span className="text-red-300">location</span>
                        <span className="text-gray-300">:</span>{" "}
                        <span className="text-green-300">"Philippines"</span>
                        <span className="text-gray-300">,</span>
                        {"\n  "}
                        <span className="text-red-300">experience</span>
                        <span className="text-gray-300">:</span>{" "}
                        <span className="text-green-300">"5+ years"</span>
                        <span className="text-gray-300">,</span>
                        {"\n\n  "}
                        <span className="text-red-300">skills</span>
                        <span className="text-gray-300">:</span>{" "}
                        <span className="text-yellow-300">{"["}</span>
                        {"\n    "}
                        <span className="text-green-300">"WordPress"</span>
                        <span className="text-gray-300">,</span>{" "}
                        <span className="text-green-300">"React.js"</span>
                        <span className="text-gray-300">,</span>
                        {"\n    "}
                        <span className="text-green-300">"Laravel"</span>
                        <span className="text-gray-300">,</span>{" "}
                        <span className="text-green-300">"PHP"</span>
                        <span className="text-gray-300">,</span>
                        {"\n    "}
                        <span className="text-green-300">"JavaScript"</span>
                        <span className="text-gray-300">,</span>{" "}
                        <span className="text-green-300">"MySQL"</span>
                        {"\n  "}
                        <span className="text-yellow-300">{"]"}</span>
                        <span className="text-gray-300">,</span>
                        {"\n\n  "}
                        <span className="text-red-300">focus</span>
                        <span className="text-gray-300">:</span>{" "}
                        <span className="text-green-300">
                          "Building reliable
                        </span>
                        {"\n         "}
                        <span className="text-green-300">
                          websites with clean
                        </span>
                        {"\n         "}
                        <span className="text-green-300">code and optimal</span>
                        {"\n         "}
                        <span className="text-green-300">performance"</span>
                        {"\n"}
                        <span className="text-yellow-300">{"}"}</span>
                        <span className="text-gray-300">;</span>
                      </code>
                    </pre>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-full blur-3xl -z-10 group-hover:from-teal-500/30 group-hover:to-cyan-500/30 transition-all duration-300"></div>
              </div>
            </div>

            <div className="flex justify-center mt-16 animate-bounce">
              <ChevronDown className="w-8 h-8 text-teal-400" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">My Services</h2>
              <p className="text-xl text-gray-400">
                Comprehensive WordPress and web development solutions for your
                business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} p-3 mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <button className="text-teal-400 hover:text-teal-300 font-medium flex items-center gap-2 group">
                    Learn more
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Recent Projects</h2>
              <p className="text-xl text-gray-400">
                Showcasing successful transformations and developments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => {
                    if (project.hasModal) {
                      setShowSampleSitesModal(true);
                    } else if (project.route) {
                      navigate(project.route);
                    } else if (project.url) {
                      window.open(project.url, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className={`group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 ${
                    project.hasModal || project.route || project.url
                      ? "cursor-pointer"
                      : ""
                  }`}
                >
                  <div
                    className={`h-48 bg-gradient-to-r ${project.color} p-8 flex items-center justify-center group-hover:scale-105 transition-transform`}
                  >
                    <div className="text-white">{project.icon}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <p className="text-gray-400 leading-relaxed">
                  I'm Lorence Palisan, a dedicated Web Developer and Software
                  Engineer specializing in WordPress development, Laravel
                  applications, website maintenance, and custom frontend
                  solutions. With extensive experience in both WordPress and
                  modern web technologies, I focus on building websites and
                  applications that perform smoothly, stay secure, and look
                  great.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I have been honing my expertise in website security,
                  responsive design, WordPress installations, and Laravel
                  development. My goal is to help businesses by taking care of
                  their online presence so they can focus on what they do best.
                  Whether it's fixing broken sites, improving speed, building
                  new WordPress customizations, or developing robust Laravel
                  APIs, I aim to make the process simple and effective.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  With strong experience in ReactJS, Laravel, PHP, MySQL, and
                  modern frontend frameworks, I specialize in building
                  full-stack applications. My Laravel expertise includes RESTful
                  API development, real-time features with Laravel Reverb,
                  Eloquent ORM, authentication systems, and scalable backend
                  architectures. I also enjoy creating custom solutions using
                  the latest web technologies and best practices.
                </p>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-500 p-1">
                  <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-72 h-72 mx-auto mb-4 rounded-full overflow-hidden border-4 border-teal-400/50 shadow-2xl">
                        <img
                          src={profileImage}
                          alt="Lorence Palisan"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">
                        Lorence Palisan
                      </h3>
                      <p className="text-teal-400 mb-4">
                        Software Engineer & Web Developer
                      </p>
                      <div className="flex justify-center gap-4">
                        <a
                          href="https://www.linkedin.com/in/lorencepalisan"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-slate-800 hover:bg-teal-500 flex items-center justify-center transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                          href="https://github.com/D0N311"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-slate-800 hover:bg-teal-500 flex items-center justify-center transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="mt-16">
              <h3 className="text-3xl font-bold mb-8 text-center">
                Technical Skills
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-teal-500/50 transition-all"
                  >
                    <h4 className="text-lg font-semibold mb-4 text-teal-400">
                      {skill.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
              <p className="text-xl text-gray-400">
                Ready to transform your website? Let's discuss your project
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:lorencepalisan@gmail.com"
                      className="text-teal-400 hover:text-teal-300"
                    >
                      lorencepalisan@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Viber</h3>
                    <a
                      href="viber://chat?number=%2B639282219343"
                      className="text-teal-400 hover:text-teal-300"
                    >
                      +63 9282219343
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-gray-400">Philippines</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "sending" ? "Sending..." : "Send Message"}
                </button>

                {formStatus === "success" && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
                    Failed to send message. Please try again or contact me
                    directly.
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  Lorence Palisan
                </h3>
                <p className="text-gray-400">
                  Building modern, secure websites with user-friendly
                  experience.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Website Maintenance & Updates</li>
                  <li>Custom WordPress Development</li>
                  <li>Speed Optimization</li>
                  <li>HTML/CSS/JS Web Development</li>
                  <li>Emergency Website Recovery</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/lorencepalisan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-teal-500 flex items-center justify-center transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/D0N311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-teal-500 flex items-center justify-center transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:lorence.palisan@example.com"
                    className="w-10 h-10 rounded-full bg-slate-800 hover:bg-teal-500 flex items-center justify-center transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-800 text-center text-gray-400">
              <p>© 2026 Lorence Palisan. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Sample Sites Modal */}
        {showSampleSitesModal && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowSampleSitesModal(false)}
          >
            <div
              className="bg-slate-800/95 backdrop-blur-md rounded-2xl border border-slate-700/50 max-w-2xl w-full p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Sample Sites
                </h3>
                <button
                  onClick={() => setShowSampleSitesModal(false)}
                  className="w-10 h-10 rounded-full bg-slate-700 hover:bg-red-500 flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="text-gray-400 mb-6">
                Check out these sample projects showcasing modern web design and
                development
              </p>

              <div className="space-y-4">
                {sampleSites.map((site, index) => (
                  <a
                    key={index}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 hover:transform hover:-translate-y-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-teal-400 transition-colors">
                            {site.title}
                          </h4>
                          <p className="text-sm text-gray-400 font-mono break-all">
                            {site.url}
                          </p>
                        </div>
                        <ExternalLink className="w-6 h-6 text-teal-400 group-hover:translate-x-1 group-hover:translate-y-[-4px] transition-transform flex-shrink-0 ml-4" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default LandingPage;
