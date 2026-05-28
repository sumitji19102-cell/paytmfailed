"use client";

import { motion } from "framer-motion";

import {
  Instagram,
  Linkedin,
  Twitter,
  ArrowRight,
  Moon,
} from "lucide-react";

export default function MarkitStylePortfolio() {

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
    },

    {
      title: "Modern SaaS UI",
      category: "UI/UX",
    },

    {
      title: "Marketing Dashboard",
      category: "DASHBOARD",
    },

    {
      title: "E-Commerce Design",
      category: "ECOMMERCE",
    },

    {
      title: "Portfolio Website",
      category: "WEB DESIGN",
    },

    {
      title: "SEO Analytics UI",
      category: "SEO",
    },
  ];

  return (
    <div className="bg-[#f3efea] min-h-screen overflow-hidden text-black font-sans">

      {/* Floating Dots */}
      <div className="fixed inset-0 pointer-events-none opacity-70">

        <div className="absolute top-10 left-10 flex flex-col gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full border border-black"
            />
          ))}
        </div>

        <div className="absolute bottom-10 right-10 flex flex-col gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full border border-black"
            />
          ))}
        </div>

      </div>

      {/* Navbar */}
      <header className="px-6 md:px-12 py-8">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >

            <div className="w-14 h-14 border-[3px] border-[#5b6cff] rounded-xl flex items-center justify-center">

              <div className="w-8 h-8 border-[3px] border-[#5b6cff] rotate-45" />

            </div>

            <div>

              <h1 className="text-4xl font-black text-[#5b6cff]">
                AneeshUp
              </h1>

            </div>

          </motion.div>

          <Moon size={32} />

        </div>

      </header>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-10 pb-28">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="uppercase tracking-[0.2em] text-sm font-bold mb-6">
              HELLO WORLD,
              <span className="text-[#5b6cff] ml-2">
                WE ARE
              </span>
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 tracking-tight text-[#5b6cff] drop-shadow-[4px_4px_0px_black]">

              ANEESHUP

            </h1>

            <h2 className="text-3xl md:text-4xl italic font-bold mb-10">
              A Digital Marketing Agency
            </h2>

            <p className="text-black/60 text-xl leading-relaxed max-w-xl mb-10">

              We are a team of enthusiastic individuals who help
              brands grow by unleashing the potential of modern
              digital marketing and websites.

            </p>

            {/* Socials */}
         {/* Socials */}
<div className="flex items-center gap-6 mb-12">

  <div className="w-12 h-12 rounded-full border-[3px] border-black flex items-center justify-center text-xl font-black hover:bg-black hover:text-white transition">
    I
  </div>

  <div className="w-12 h-12 rounded-full border-[3px] border-black flex items-center justify-center text-xl font-black hover:bg-black hover:text-white transition">
    L
  </div>

  <div className="w-12 h-12 rounded-full border-[3px] border-black flex items-center justify-center text-xl font-black hover:bg-black hover:text-white transition">
    T
  </div>

</div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className="px-10 py-5 rounded-full border-[3px] border-black bg-white text-lg font-bold shadow-[6px_6px_0px_black]"
              >

                CONTACT US

              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className="text-lg font-bold flex items-center gap-3"
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
            className="relative flex justify-center"
          >

            {/* Circle */}
            <div className="w-[500px] h-[500px] rounded-full bg-[#6d7df6] relative flex items-center justify-center">

              {/* Rocket */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="text-[180px]"
              >
                🚀
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute top-10 left-10 text-6xl"
              >
                💬
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute bottom-20 left-10 text-6xl"
              >
                ▶️
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute top-20 right-20 text-6xl"
              >
                😂
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className="absolute bottom-16 right-10 text-6xl"
              >
                ❤️
              </motion.div>

            </div>

            {/* Stats */}
            <div className="absolute bottom-10 left-0 px-8 py-5 bg-white rounded-full border-[3px] border-black shadow-[5px_5px_0px_black]">

              <div className="flex items-center gap-5">

                <h3 className="text-5xl font-black">
                  30+
                </h3>

                <div>

                  <p className="text-[#5b6cff] font-bold">
                    HAPPY
                  </p>

                  <p className="font-bold">
                    CLIENTS
                  </p>

                </div>

              </div>

            </div>

            <div className="absolute bottom-0 right-0 px-8 py-5 bg-white rounded-full border-[3px] border-black shadow-[5px_5px_0px_black]">

              <div className="flex items-center gap-5">

                <h3 className="text-5xl font-black">
                  999+
                </h3>

                <div>

                  <p className="font-bold">
                    PROJECTS
                  </p>

                  <p className="text-[#5b6cff] font-bold">
                    COMPLETED
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* Services */}
      <section className="px-6 md:px-12 py-28">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl md:text-7xl font-black text-center mb-20">
            OUR SERVICES
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {services.map((service, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="bg-[#f8f5f1] rounded-[40px] p-10 shadow-[6px_6px_0px_black] border-[3px] border-black"
              >

                <h3 className="text-3xl font-black mb-10 uppercase">
                  {service.title}
                </h3>

                <h4 className="text-2xl font-bold mb-8">
                  {service.subtitle}
                </h4>

                <p className="text-black/60 text-lg leading-relaxed">
                  {service.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Portfolio */}
      <section className="px-6 md:px-12 py-28">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl md:text-7xl font-black text-center mb-16">
            PORTFOLIO
          </h2>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-10 mb-20 font-bold">

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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {portfolio.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="bg-[#f8f5f1] rounded-[35px] overflow-hidden border-[3px] border-black shadow-[6px_6px_0px_black]"
              >

                {/* Image */}
                <div className="h-64 bg-gradient-to-br from-[#6d7df6] to-[#9f8cff] flex items-center justify-center text-7xl">

                  💻

                </div>

                {/* Content */}
                <div className="p-8">

                  <p className="text-[#5b6cff] font-bold text-sm mb-3 uppercase">
                    {item.category}
                  </p>

                  <h3 className="text-3xl font-black mb-6">
                    {item.title}
                  </h3>

                  <button className="font-bold flex items-center gap-3">

                    See Project

                    <ArrowRight size={18} />

                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-14 border-t-[3px] border-black">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <h3 className="text-3xl font-black text-[#5b6cff]">
            AneeshUp
          </h3>

          <p className="font-bold">
            © 2026 Aneesh Kumar Maury
          </p>

        </div>

      </footer>

    </div>
  );
}