"use client";

import { motion } from "framer-motion";
import { ArrowRight, Moon } from "lucide-react";

export default function PremiumPortfolio() {

  const services = [
    {
      title: "Social Media Management",
      subtitle: "Instagram, LinkedIn and more",
      desc: "Amplify your social media impact through expert management services and growth strategies.",
    },

    {
      title: "Website Development",
      subtitle: "Modern websites for brands",
      desc: "Premium responsive websites designed for business trust and conversions.",
    },

    {
      title: "SEO Optimization",
      subtitle: "Improve online visibility",
      desc: "Boost search rankings and attract more organic business traffic.",
    },
  ];

  const portfolio = [
    {
      title: "Business Landing Page",
      category: "WEBSITE",
      emoji: "💻",
    },

    {
      title: "Modern SaaS UI",
      category: "UI/UX",
      emoji: "🚀",
    },

    {
      title: "Marketing Dashboard",
      category: "DASHBOARD",
      emoji: "📊",
    },

    {
      title: "E-Commerce Design",
      category: "ECOMMERCE",
      emoji: "🛒",
    },

    {
      title: "Portfolio Website",
      category: "WEB DESIGN",
      emoji: "🎨",
    },

    {
      title: "SEO Analytics UI",
      category: "SEO",
      emoji: "📈",
    },
  ];

  return (
    <div className="bg-[#f3efea] min-h-screen overflow-x-hidden text-black font-sans relative">

      {/* Noise Background */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0">

        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="4"
              stitchTiles="stitch"
            />
          </filter>

          <rect
            width="100%"
            height="100%"
            filter="url(#noise)"
          />
        </svg>

      </div>

      {/* Left Vertical Line */}
      <div className="fixed left-3 md:left-6 top-0 h-full w-[3px] bg-black z-50">

        <div className="absolute top-5 -left-[10px] w-6 h-6 rounded-full border-[3px] border-black bg-[#f3efea]" />

        <div className="absolute bottom-5 -left-[10px] w-6 h-6 rounded-full border-[3px] border-black bg-[#f3efea]" />

      </div>

      {/* Right Vertical Line */}
      <div className="fixed right-3 md:right-6 top-0 h-full w-[3px] bg-black z-50">

        <div className="absolute top-20 -left-[10px] w-6 h-6 rounded-full border-[3px] border-black bg-[#f3efea]" />

        <div className="absolute bottom-20 -left-[10px] w-6 h-6 rounded-full border-[3px] border-black bg-[#f3efea]" />

      </div>

      {/* Floating Circles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-[120px] left-[35%] w-10 h-10 rounded-full border-[3px] border-black bg-[#d8d3cc]"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-[900px] right-[20%] w-14 h-14 rounded-full border-[3px] border-black bg-[#d8d3cc]"
      />

      {/* Dot Grid */}
      <div className="absolute right-10 top-[700px] grid grid-cols-4 gap-3 opacity-70">

        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-black"
          />
        ))}

      </div>

      {/* Navbar */}
      <header className="px-5 sm:px-6 md:px-12 py-6 md:py-8 relative z-10">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 md:gap-4"
          >

            <motion.div
              whileHover={{
                rotate: 180,
              }}
              transition={{
                duration: 0.5,
              }}
              className="w-12 h-12 md:w-14 md:h-14 border-[3px] border-[#5b6cff] rounded-xl flex items-center justify-center bg-white"
            >

              <div className="w-6 h-6 md:w-8 md:h-8 border-[3px] border-[#5b6cff] rotate-45" />

            </motion.div>

            <div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#5b6cff]">
                AneeshUp
              </h1>

            </div>

          </motion.div>

          <motion.div
            whileHover={{
              rotate: 180,
            }}
          >
            <Moon size={28} />
          </motion.div>

        </div>

      </header>

      {/* Hero */}
      <section className="relative px-5 sm:px-6 md:px-12 pt-6 md:pt-10 pb-24 md:pb-32 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#6d7df620,transparent_40%)]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >

            <p className="uppercase tracking-[0.2em] text-xs sm:text-sm font-bold mb-5 md:mb-6">
              HELLO WORLD,
              <span className="text-[#5b6cff] ml-2">
                WE ARE
              </span>
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.95] mb-6 tracking-tight text-[#5b6cff] drop-shadow-[3px_3px_0px_black]">

              ANEESHUP

            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl italic font-bold mb-8">
              A Digital Marketing Agency
            </h2>

            <p className="text-black/60 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mb-10">

              We are a team of enthusiastic individuals who help
              brands grow by unleashing the potential of modern
              digital marketing and websites.

            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 sm:gap-6 mb-10 md:mb-12">

              {["I", "L", "T"].map((item, i) => (

                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                  }}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-[3px] border-black flex items-center justify-center text-lg sm:text-xl font-black hover:bg-black hover:text-white transition bg-white"
                >

                  {item}

                </motion.div>

              ))}

            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-5 w-full">

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className="px-8 sm:px-10 py-4 sm:py-5 rounded-full border-[3px] border-black bg-white text-base sm:text-lg font-bold shadow-[6px_6px_0px_black]"
              >

                CONTACT US

              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className="text-base sm:text-lg font-bold flex items-center gap-3"
              >

                DOWNLOAD BROCHURE

                <ArrowRight size={22} />

              </motion.button>

            </div>

          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center order-1 lg:order-2"
          >

            {/* Circle */}
            <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[500px] md:h-[500px] rounded-full bg-[#6d7df6] relative flex items-center justify-center mx-auto shadow-[10px_10px_0px_black]">

              {/* Rocket */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="text-[100px] sm:text-[140px] md:text-[180px]"
              >
                🚀
              </motion.div>

              {/* Floating Icons */}
              {["💬", "▶️", "😂", "❤️"].map((emoji, i) => (

                <motion.div
                  key={i}
                  animate={{
                    y: [0, i % 2 === 0 ? -15 : 15, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                  }}
                  className={`absolute text-3xl sm:text-5xl md:text-6xl ${
                    i === 0
                      ? "top-10 left-6 sm:left-10"
                      : i === 1
                      ? "bottom-16 left-4 sm:left-10"
                      : i === 2
                      ? "top-12 right-6 sm:right-20"
                      : "bottom-12 right-4 sm:right-10"
                  }`}
                >

                  {emoji}

                </motion.div>

              ))}

            </div>

            {/* Stats */}
            <div className="absolute -bottom-6 left-0 sm:left-4 md:left-0 px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-full border-[3px] border-black shadow-[4px_4px_0px_black]">

              <div className="flex items-center gap-3 sm:gap-5">

                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black">
                  30+
                </h3>

                <div>

                  <p className="text-[#5b6cff] font-bold text-xs sm:text-base">
                    HAPPY
                  </p>

                  <p className="font-bold text-xs sm:text-base">
                    CLIENTS
                  </p>

                </div>

              </div>

            </div>

            <div className="absolute -bottom-16 right-0 sm:right-4 md:right-0 px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-full border-[3px] border-black shadow-[4px_4px_0px_black]">

              <div className="flex items-center gap-3 sm:gap-5">

                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black">
                  999+
                </h3>

                <div>

                  <p className="font-bold text-xs sm:text-base">
                    PROJECTS
                  </p>

                  <p className="text-[#5b6cff] font-bold text-xs sm:text-base">
                    COMPLETED
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Divider */}
      <div className="w-full flex justify-center py-10">

        <div className="w-[80%] h-[3px] bg-black rounded-full relative">

          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-[3px] border-black bg-[#f3efea]" />

          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-[3px] border-black bg-[#f3efea]" />

        </div>

      </div>

      {/* Services */}
      <section className="px-5 sm:px-6 md:px-12 py-24 md:py-28 relative z-10">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-center mb-16">
            OUR SERVICES
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  rotate: -1,
                }}
                className="bg-[#f8f5f1] rounded-[30px] p-6 sm:p-8 md:p-10 shadow-[5px_5px_0px_black] border-[3px] border-black"
              >

                <h3 className="text-2xl sm:text-3xl font-black mb-8 uppercase">
                  {service.title}
                </h3>

                <h4 className="text-xl sm:text-2xl font-bold mb-6">
                  {service.subtitle}
                </h4>

                <p className="text-black/60 text-base sm:text-lg leading-relaxed">
                  {service.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Divider */}
      <div className="w-full flex justify-center py-10">

        <div className="w-[80%] h-[3px] bg-black rounded-full relative">

          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-[3px] border-black bg-[#f3efea]" />

          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-[3px] border-black bg-[#f3efea]" />

        </div>

      </div>

      {/* Portfolio */}
      <section className="px-5 sm:px-6 md:px-12 py-24 md:py-28 relative z-10">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-center mb-16">
            PORTFOLIO
          </h2>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-5 sm:gap-10 mb-16 md:mb-20 font-bold text-sm sm:text-base">

            <button className="text-[#5b6cff] border-b-4 border-[#5b6cff] pb-2">
              ALL
            </button>

            <button>
              WEBSITES
            </button>

            <button>
              DASHBOARDS
            </button>

            <button>
              UI/UX
            </button>

          </div>

          {/* Portfolio Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {portfolio.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="group bg-[#f8f5f1] rounded-[35px] overflow-hidden border-[3px] border-black shadow-[6px_6px_0px_black] hover:shadow-[10px_10px_0px_black] transition-all duration-300"
              >

                {/* Image */}
                <div className="h-48 sm:h-56 md:h-64 bg-gradient-to-br from-[#6d7df6] to-[#9f8cff] flex items-center justify-center text-5xl sm:text-6xl md:text-7xl overflow-hidden">

                  <div className="group-hover:scale-110 transition-transform duration-500">

                    {item.emoji}

                  </div>

                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">

                  <p className="text-[#5b6cff] font-bold text-xs sm:text-sm mb-3 uppercase">
                    {item.category}
                  </p>

                  <h3 className="text-2xl sm:text-3xl font-black mb-6">
                    {item.title}
                  </h3>

                  <button className="relative font-bold group flex items-center gap-3">

                    See Project

                    <ArrowRight size={18} />

                    <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#5b6cff] transition-all duration-300 group-hover:w-full" />

                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="px-5 sm:px-6 md:px-12 py-10 md:py-14 border-t-[3px] border-black relative z-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <h3 className="text-2xl sm:text-3xl font-black text-[#5b6cff]">
            AneeshUp
          </h3>

          <p className="font-bold text-center text-sm sm:text-base">
            © 2026 Aneesh Kumar Maury
          </p>

        </div>

      </footer>

    </div>
  );
}