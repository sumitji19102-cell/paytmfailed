"use client";

import { motion } from "framer-motion";

import {
  Globe,
  Code2,
  Smartphone,
  ShoppingCart,
  Search,
  Workflow,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function PortfolioWebsite() {

  const services = [
    {
      title: "Website Development",
      desc: "Modern and responsive business websites built for conversions.",
      icon: <Code2 size={34} />,
    },

    {
      title: "App Development",
      desc: "Custom mobile and web applications for businesses and startups.",
      icon: <Smartphone size={34} />,
    },

    {
      title: "Digital Marketing",
      desc: "Growth-focused marketing strategies for better reach and sales.",
      icon: <Globe size={34} />,
    },

    {
      title: "SEO Optimization",
      desc: "Improve rankings, visibility and organic business traffic.",
      icon: <Search size={34} />,
    },

    {
      title: "E-Commerce",
      desc: "Store setup, optimization and management for online businesses.",
      icon: <ShoppingCart size={34} />,
    },

    {
      title: "System Integration",
      desc: "Integrating APIs, payment systems and automation workflows.",
      icon: <Workflow size={34} />,
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen overflow-hidden relative font-sans">

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <motion.div
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -60, 60, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -120, 120, 0],
            y: [0, 100, -100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-500/20 rounded-full blur-3xl"
        />

      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">

        <div className="flex items-center justify-between px-6 md:px-16 py-5">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center gap-4"
          >

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 p-[2px] shadow-[0_0_30px_rgba(34,211,238,0.5)]"
            >

              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">

                <motion.span
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="font-bold text-xl"
                >
                  A
                </motion.span>

              </div>

            </motion.div>

            <div>

              <h1 className="text-2xl md:text-3xl font-black tracking-wide">
                Aneesh
              </h1>

              <p className="text-xs text-cyan-400 tracking-[0.3em] uppercase">
                Digital Solutions
              </p>

            </div>

          </motion.div>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8 text-white/70">

            <a href="#services" className="hover:text-cyan-400 transition">
              Services
            </a>

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>

          </nav>

        </div>

      </header>

      {/* Hero */}
      <section className="relative px-6 md:px-16 py-28 md:py-40">

        {/* SVG Grid */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.04]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="smallGrid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>

          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >

          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm mb-8"
          >

            <Sparkles size={16} />

            Helping Brands Grow Digitally

          </motion.div>

          <motion.h1
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="text-5xl md:text-7xl font-black leading-tight"
          >

            Building
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              {" "}Modern Digital{" "}
            </span>
            Experiences

          </motion.h1>

          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed">

            I help startups, creators and businesses grow through
            website development, SEO, app development, e-commerce
            systems and digital marketing solutions.

          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">

            <motion.button
              whileHover={{
                scale: 1.08,
                y: -5,
              }}
              className="px-8 py-4 rounded-2xl bg-white text-black font-semibold flex items-center justify-center gap-2"
            >

              View Projects

              <ArrowRight size={18} />

            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.08,
                y: -5,
              }}
              className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10"
            >

              Contact Me

            </motion.button>

          </div>

        </motion.div>

      </section>

      {/* Services */}
      <section
        id="services"
        className="px-6 md:px-16 py-24 border-t border-white/10"
      >

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >

          <div className="text-center mb-16">

            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Services
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              What I Can Do For You
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {services.map((service, index) => (

              <motion.div
                key={index}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                }}
                className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition duration-500 backdrop-blur-xl hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
              >

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-purple-500/20 flex items-center justify-center text-cyan-300 mb-6 group-hover:scale-110 transition">

                  {service.icon}

                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {service.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </section>

      {/* About */}
      <section
        id="about"
        className="px-6 md:px-16 py-24 border-t border-white/10"
      >

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >

          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Premium Digital Solutions
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">

            I focus on building high-quality digital experiences
            with modern technologies, smooth user interfaces,
            SEO optimization and scalable business systems.

          </p>

        </motion.div>

      </section>

      {/* CTA */}
      <section
        id="contact"
        className="px-6 md:px-16 py-24 border-t border-white/10"
      >

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto rounded-[40px] p-12 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl text-center"
        >

          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Let’s Build Something Amazing
          </h2>

          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">

            Available for freelance projects, collaborations and
            long-term partnerships.

          </p>

          <motion.button
            whileHover={{
              scale: 1.08,
              y: -5,
            }}
            className="px-10 py-4 rounded-2xl bg-white text-black font-semibold inline-flex items-center gap-2"
          >

            Start A Project

            <ArrowRight size={18} />

          </motion.button>

        </motion.div>

      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-10 border-t border-white/10 text-center text-white/50 text-sm">

        © 2026 Aneesh Kumar Maury — All Rights Reserved.

      </footer>

    </div>
  );
}