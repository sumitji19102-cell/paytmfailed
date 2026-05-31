"use client";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Moon,
  Star,
  ShieldCheck,
  Rocket,
  Sparkles,
} from "lucide-react";

import { FiInstagram } from "react-icons/fi";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

export default function PremiumPortfolio() {

  const services = [
    {
      title: "Social Media Management",
      subtitle: "Instagram Growth & Branding",
      desc: "Grow your audience with strategic content, reels, branding and engagement systems.",
      icon: "📱",
    },

    {
      title: "Website Development",
      subtitle: "Modern Responsive Websites",
      desc: "Premium websites designed for trust, speed and high conversions.",
      icon: "💻",
    },

    {
      title: "SEO Optimization",
      subtitle: "Rank Higher on Google",
      desc: "Boost your website visibility and generate organic traffic for your business.",
      icon: "🚀",
    },

    {
      title: "Thumbnail Design",
      subtitle: "YouTube CTR Boost",
      desc: "High-converting YouTube thumbnails designed to increase clicks and views.",
      icon: "🎯",
    },

    {
      title: "App Development",
      subtitle: "Android & Web Apps",
      desc: "Scalable and modern applications built for startups and businesses.",
      icon: "📲",
    },

    {
      title: "UI/UX Design",
      subtitle: "Creative User Interfaces",
      desc: "Beautiful user experiences with modern layouts and premium aesthetics.",
      icon: "🎨",
    },
  ];

  const portfolio = [
    {
      title: "YouTube Thumbnail Design",
      category: "YOUTUBE",
      image:
        "https://i.ibb.co/wF78GCD4/lxnsc91-Yi-I-HD.jpg",
    },

    {
      title: "Instagram Theme Page",
      category: "INSTAGRAM",
      image:
        "https://i.ibb.co/Kc55QcsH/Screenshot-20260528-171029-Instagram.png",
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
    <div className="bg-[#f8f6f2] min-h-screen overflow-x-hidden text-[#111111] font-sans relative">

      {/* SOFT BACKGROUND */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#ffd7c8] blur-[140px] rounded-full opacity-50" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#d8d4ff] blur-[140px] rounded-full opacity-50" />

      {/* GRID */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* FLOATING ICONS */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-[15%] right-[10%] text-5xl"
      >
        ✨
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-[15%] left-[10%] text-5xl"
      >
        🚀
      </motion.div>

      {/* NAVBAR */}
      <header className="px-5 sm:px-6 md:px-12 py-6 md:py-8 relative z-10">

        <div className="flex items-center justify-between">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >

            <motion.div
              whileHover={{
                rotate: 180,
                scale: 1.1,
              }}
              className="w-14 h-14 rounded-2xl bg-white border border-black/10 shadow-xl flex items-center justify-center"
            >

              <Rocket size={28} className="text-[#6d5dfc]" />

            </motion.div>

            <div>

              <h1 className="text-3xl md:text-4xl font-black text-[#6d5dfc]">
                AneeshUp
              </h1>

              <p className="text-sm font-semibold text-black/50">
                Creative Digital Agency
              </p>

            </div>

          </motion.div>

          {/* THEME ICON */}
          <motion.div
            whileHover={{
              rotate: 180,
            }}
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center"
          >
            <Moon size={22} />
          </motion.div>

        </div>

      </header>

      {/* HERO */}
      <section className="relative px-5 sm:px-6 md:px-12 pt-10 pb-32 overflow-hidden">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            {/* BADGE */}
            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-lg mb-8"
            >

              <ShieldCheck size={18} className="text-[#6d5dfc]" />

              Trusted By 80+ Clients

            </motion.div>

            <p className="uppercase tracking-[0.3em] text-sm font-bold mb-5 text-[#6d5dfc]">
              DIGITAL AGENCY
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.95] mb-8">

              BUILD
              <br />
              YOUR
              <br />
              BRAND.

            </h1>

            <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-10 max-w-xl">

              Premium websites, SEO systems, branding,
              social media growth and modern digital
              experiences for businesses worldwide.

            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-5 mb-10">

              {[FiInstagram, RiFacebookBoxLine, FaLinkedin].map(
                (Icon, i) => (

                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                    }}
                    className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-xl hover:bg-[#6d5dfc] hover:text-white transition"
                  >

                    <Icon />

                  </motion.div>

                )
              )}

            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5">

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                className="px-8 py-4 rounded-full bg-[#6d5dfc] text-white font-black shadow-[0_10px_30px_rgba(109,93,252,0.35)]"
              >

                CONTACT US

              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                className="px-8 py-4 rounded-full bg-white shadow-lg font-black flex items-center gap-3"
              >

                VIEW PROJECTS

                <ArrowRight size={20} />

              </motion.button>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >

            <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] rounded-full bg-gradient-to-br from-[#6d5dfc] to-[#9f8cff] flex items-center justify-center relative shadow-[0_20px_60px_rgba(109,93,252,0.35)]">

              {/* DECORATIONS */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-10 right-10"
              >
                <Sparkles size={35} className="text-white" />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="text-[120px] md:text-[180px]"
              >
                🚀
              </motion.div>

              {/* FLOAT CARD */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl px-5 py-4 shadow-xl">

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-full bg-[#6d5dfc] flex items-center justify-center text-white">
                    ⭐
                  </div>

                  <div>

                    <h3 className="font-black text-xl">
                      100+
                    </h3>

                    <p className="text-sm text-black/60">
                      Projects Done
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="px-5 sm:px-6 md:px-12 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.3em] text-sm font-bold text-[#6d5dfc] mb-4">
              SERVICES
            </p>

            <h2 className="text-5xl md:text-7xl font-black">
              WHAT WE PROVIDE
            </h2>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="group bg-white rounded-[35px] p-8 shadow-xl hover:shadow-[0_20px_50px_rgba(109,93,252,0.2)] transition-all duration-500"
              >

                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#6d5dfc] to-[#9f8cff] flex items-center justify-center text-4xl mb-8 shadow-lg">

                  {service.icon}

                </div>

                <h3 className="text-3xl font-black mb-4">
                  {service.title}
                </h3>

                <p className="text-[#6d5dfc] font-bold mb-4">
                  {service.subtitle}
                </p>

                <p className="text-black/60 leading-relaxed mb-8">
                  {service.desc}
                </p>

                <button className="flex items-center gap-3 font-black text-[#6d5dfc]">

                  Learn More

                  <ArrowRight size={18} />

                </button>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* PORTFOLIO */}
      <section className="px-5 sm:px-6 md:px-12 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.3em] text-sm font-bold text-[#6d5dfc] mb-4">
              PORTFOLIO
            </p>

            <h2 className="text-5xl md:text-7xl font-black">
              RECENT WORK
            </h2>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {portfolio.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="group bg-white rounded-[35px] overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(109,93,252,0.2)] transition-all duration-500"
              >

                <div className="h-64 overflow-hidden relative">

                  {item.image ? (

                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                  ) : (

                    <div className="h-full bg-gradient-to-br from-[#6d5dfc] to-[#9f8cff] flex items-center justify-center text-7xl">

                      {item.emoji}

                    </div>

                  )}

                </div>

                <div className="p-8">

                  <div className="flex items-center gap-2 mb-3">

                    <Star
                      size={15}
                      className="fill-[#6d5dfc] text-[#6d5dfc]"
                    />

                    <p className="text-[#6d5dfc] font-bold text-sm">
                      {item.category}
                    </p>

                  </div>

                  <h3 className="text-3xl font-black mb-5">
                    {item.title}
                  </h3>

                  <button className="flex items-center gap-3 font-bold text-[#6d5dfc]">

                    See Project

                    <ArrowRight size={18} />

                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}