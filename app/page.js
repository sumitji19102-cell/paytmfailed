// app/page.jsx

export default function PortfolioWebsite() {
  const services = [
    {
      title: "Website Development",
      desc: "Modern, fast and responsive business websites built for conversions.",
    },
    {
      title: "App Development",
      desc: "Custom mobile and web applications for startups and businesses.",
    },
    {
      title: "Digital Marketing",
      desc: "Growth-focused marketing strategies for better reach and leads.",
    },
    {
      title: "SEO Optimization",
      desc: "Improve rankings, visibility and organic traffic for your business.",
    },
    {
      title: "E-Commerce Management",
      desc: "Store setup, optimization and management for online businesses.",
    },
    {
      title: "System Integration",
      desc: "Integrating APIs, payment systems and automation workflows.",
    },
  ];

  const projects = [
    {
      title: "Business Landing Page",
      tech: "Next.js • Tailwind CSS",
    },
    {
      title: "E-Commerce Dashboard",
      tech: "React • Firebase",
    },
    {
      title: "Fitness Mobile App UI",
      tech: "Figma • React Native",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 md:px-16 py-6 border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <h1 className="text-2xl font-bold tracking-wide">Aneesh</h1>

        <nav className="hidden md:flex gap-8 text-sm text-white/70">
          <a href="#services" className="hover:text-white transition">
            Services
          </a>
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#about" className="hover:text-white transition">
            About
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-16 py-24 md:py-36 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/10 to-cyan-500/20 blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-sm text-white/50 mb-6">
            Digital Solutions Expert
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Helping Brands Grow
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Through Digital Innovation
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            I provide website development, app development, SEO,
            international marketing, e-commerce management and digital
            business solutions for startups, creators and businesses.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <button className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">
              View My Work
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition">
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="px-6 md:px-16 py-24 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              What I Can Do For You
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {service.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-6 md:px-16 py-24 border-t border-white/10"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
              Portfolio
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Featured Projects
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-3xl overflow-hidden bg-white/5 border border-white/10"
              >
                <div className="h-56 bg-gradient-to-br from-cyan-500/30 to-purple-500/30"></div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-white/60 mb-6">{project.tech}</p>

                  <button className="px-5 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="px-6 md:px-16 py-24 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Building Modern Digital Experiences
          </h2>

          <p className="text-lg text-white/70 leading-relaxed max-w-3xl mx-auto">
            I help businesses and creators establish a strong online presence
            through websites, applications, SEO strategies and digital growth
            systems. My focus is on creating premium experiences that look
            modern, perform fast and help brands grow internationally.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-16 py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto rounded-[40px] p-12 text-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready To Build Your Next Project?
          </h2>

          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Let’s work together to create a modern digital presence for your
            business.
          </p>

          <button className="px-10 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition">
            Start A Project
          </button>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 md:px-16 py-24 border-t border-white/10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s Connect
          </h2>

          <p className="text-white/70 text-lg mb-10">
            Available for freelance projects, collaborations and long-term work.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-2xl bg-white text-black font-semibold">
              WhatsApp
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition">
              Email Me
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-10 border-t border-white/10 text-center text-white/50 text-sm">
        © 2026 Aneesh Kumar Maury — All Rights Reserved.
      </footer>
    </div>
  );
}
