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
      desc: "Custom mobile and web applications for startups and businesses.",
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

            <a href="#team" className="hover:text-cyan-400 transition">
              Team
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>

          </nav>

        </div>

      </header>

      {/* Hero Section */}
      <section className="relative px-6 md:px-16 pt-24 pb-32 overflow-hidden">

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04]">

          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">

            <defs>

              <pattern
                id="grid"
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

            <rect width="100%" height="100%" fill="url(#grid)" />

          </svg>

        </div>

        {/* Floating Orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"
        />

        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full"
        />

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >

              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm mb-8 backdrop-blur-xl"
              >

                <Sparkles size={16} />

                Trusted Digital Solutions For Modern Businesses

              </motion.div>

              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">

                Helping Businesses

                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">

                  Grow Online

                </span>

              </h1>

              <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">

                I build modern websites, scalable applications,
                SEO systems and digital growth solutions that help
                businesses attract customers and grow faster online.

              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 mb-12">

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                  className="px-8 py-4 rounded-2xl bg-white text-black font-semibold flex items-center justify-center gap-2"
                >

                  View My Work

                  <ArrowRight size={18} />

                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                  className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 backdrop-blur-xl"
                >

                  Book A Consultation

                </motion.button>

              </div>

              {/* Reviews */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mb-12"
              >

                {[
                  {
                    initials: "RK",
                    name: "Rahul Kumar",
                    stars: "★★★★★",
                    review: "Very professional website and fast delivery.",
                    color: "from-cyan-400 to-blue-500",
                  },

                  {
                    initials: "AP",
                    name: "Amit Patel",
                    stars: "★★★★☆",
                    review: "SEO and marketing service was excellent.",
                    color: "from-purple-400 to-pink-500",
                  },

                  {
                    initials: "VS",
                    name: "Vikash Singh",
                    stars: "★★★★★",
                    review: "Amazing communication and premium work.",
                    color: "from-green-400 to-emerald-500",
                  },

                  {
                    initials: "SN",
                    name: "Sandeep Nair",
                    stars: "★★★★★",
                    review: "Modern design improved my business trust.",
                    color: "from-orange-400 to-red-500",
                  },

                  {
                    initials: "MJ",
                    name: "Manish Joshi",
                    stars: "★★★★☆",
                    review: "Professional support throughout project.",
                    color: "from-yellow-400 to-amber-500",
                  },
                ].map((item, index) => (

                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
                  >

                    <div className="flex items-center gap-4 mb-4">

                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center font-bold text-black`}>
                        {item.initials}
                      </div>

                      <div>

                        <h4 className="font-semibold">
                          {item.name}
                        </h4>

                        <div className="flex text-yellow-400 text-sm">
                          {item.stars}
                        </div>

                      </div>

                    </div>

                    <p className="text-white/60 text-sm leading-relaxed">
                      “{item.review}”
                    </p>

                  </motion.div>

                ))}

              </motion.div>

            </motion.div>

            {/* Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-2xl p-8 shadow-[0_0_60px_rgba(34,211,238,0.15)]"
              >

                <div className="flex items-center gap-2 mb-8">

                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>

                </div>

                <div className="space-y-6">

                  <div className="p-6 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/20">

                    <div className="flex items-center justify-between mb-5">

                      <h3 className="text-xl font-bold">
                        Business Growth
                      </h3>

                      <Globe className="text-cyan-300" />

                    </div>

                    <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">

                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{
                          duration: 2,
                        }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                      />

                    </div>

                  </div>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </div>

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

      {/* Team Section */}
      <section
        id="team"
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
              Our Team
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Meet The Team
            </h2>

            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A passionate digital team focused on building modern
              business solutions and premium online experiences.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                initial: "A",
                name: "Aneesh Kumar",
                role: "Founder & Developer",
                desc: "Focused on websites and digital systems.",
                color: "from-cyan-400 to-blue-500",
              },

              {
                initial: "R",
                name: "Rahul Sharma",
                role: "SEO Specialist",
                desc: "Improving search visibility and growth.",
                color: "from-purple-400 to-pink-500",
              },

              {
                initial: "V",
                name: "Ajay singh",
                role: "Marketing Manager",
                desc: "Managing branding and digital campaigns.",
                color: "from-green-400 to-emerald-500",
              },

              {
                initial: "A",
                name: "Amit Patel",
                role: "UI/UX Designer",
                desc: "Designing premium digital experiences.",
                color: "from-yellow-400 to-orange-500",
              },
            ].map((member, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}
                className="group p-6 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition duration-500"
              >

                <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${member.color} p-[2px] mx-auto mb-6`}>

                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-3xl font-black">
                    {member.initial}
                  </div>

                </div>

                <h3 className="text-2xl font-bold text-center mb-2">
                  {member.name}
                </h3>

                <p className="text-cyan-400 text-center mb-5">
                  {member.role}
                </p>

                <p className="text-white/60 text-sm text-center leading-relaxed">
                  {member.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 py-10 border-t border-white/10 text-center text-white/50 text-sm">

        © 2026 Aneesh Kumar Maury — All Rights Reserved.

      </footer>

    </div>
  );
}