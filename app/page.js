"use client";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Moon,
  Sparkles,
  Star,
  BadgeCheck,
  CheckCircle2,
  Globe,
  Rocket,
  ShieldCheck,
} from "lucide-react";

import { FiInstagram } from "react-icons/fi";
import { RiFacebookBoxLine } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";

export default function PremiumPortfolio() {

  const services = [
    {
      title: "Social Media Management",
      subtitle: "Instagram, LinkedIn and more",
      desc: "Amplify your social media impact through expert management services and growth strategies.",
      icon: "📱",
    },

    {
      title: "Website Development",
      subtitle: "Modern websites for brands",
      desc: "Premium responsive websites designed for business trust and conversions.",
      icon: "💻",
    },

    {
      title: "SEO Optimization",
      subtitle: "Improve online visibility",
      desc: "Boost search rankings and attract more organic business traffic.",
      icon: "🚀",
    },

    {
      title: "App Development",
      subtitle: "Android & Web Apps",
      desc: "Scalable mobile and web applications built for modern businesses.",
      icon: "📲",
    },

    {
      title: "UI/UX Design",
      subtitle: "Modern User Experience",
      desc: "Beautiful interfaces designed for engagement and conversion.",
      icon: "🎨",
    },

    {
      title: "Brand Strategy",
      subtitle: "Identity & Growth",
      desc: "Creative branding solutions for digital-first businesses.",
      icon: "⚡",
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

  const reviews = [
    {
      name: "Rahul Sharma",
      review:
        "Excellent communication and premium work quality. Highly recommended.",
    },

    {
      name: "Amit Patel",
      review:
        "Professional website development with modern UI and smooth delivery.",
    },

    {
      name: "Vikash Singh",
      review:
        "Amazing SEO optimization and branding support for our company.",
    },
  ];

  const team = [
    {
      name: "Aneesh Kumar",
      role: "Founder & Developer",
      emoji: "👨‍💻",
    },

    {
      name: "Rahul Sharma",
      role: "SEO Expert",
      emoji: "📈",
    },

    {
      name: "Amit Patel",
      role: "UI/UX Designer",
      emoji: "🎨",
    },
  ];

  return (
    <div className="bg-[#f3efea] min-h-screen overflow-x-hidden text-black font-sans relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#6d7df6]/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-400/20 blur-[120px] rounded-full" />

      {/* Background Noise */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-0">

        <svg width="100%" height="100%">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
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

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-[20%] right-[10%] text-5xl"
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
        className="absolute bottom-[20%] left-[10%] text-5xl"
      >
        🚀
      </motion.div>

      {/* NAVBAR */}
      <header className="px-5 sm:px-6 md:px-12 py-6 md:py-8 relative z-10">

        <div className="flex items-center justify-between">

          {/* Logo */}
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
              className="w-14 h-14 border-2 border-[#5b6cff] rounded-2xl flex items-center justify-center bg-white shadow-[5px_5px_0px_black]"
            >

              <Rocket size={28} className="text-[#5b6cff]" />

            </motion.div>

            <div>

              <h1 className="text-3xl md:text-4xl font-black text-[#5b6cff]">
                AneeshUp
              </h1>

              <p className="text-sm font-semibold text-black/60">
                Creative Digital Agency
              </p>

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

      {/* HERO */}
      <section className="relative px-5 sm:px-6 md:px-12 pt-10 pb-32 overflow-hidden">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-black bg-white shadow-[4px_4px_0px_black] mb-8"
            >

              <ShieldCheck size={18} />

              Trusted By 80+ Clients

            </motion.div>

            <p className="uppercase tracking-[0.3em] text-sm font-bold mb-5 text-[#5b6cff]">
              DIGITAL AGENCY
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[0.95] mb-8 text-[#5b6cff]">

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

            {/* Social Icons */}
            <div className="flex items-center gap-5 mb-10">

              {[FiInstagram, RiFacebookBoxLine, FaLinkedin].map(
                (Icon, i) => (

                  <motion.div
                    key={i}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                    }}
                    className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center bg-white shadow-[4px_4px_0px_black] text-xl hover:bg-black hover:text-white transition"
                  >

                    <Icon />

                  </motion.div>

                )
              )}

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                className="relative overflow-hidden px-8 py-4 rounded-full bg-gradient-to-r from-[#6d7df6] to-[#9f8cff] text-white font-black border-2 border-black shadow-[5px_5px_0px_black]"
              >

                <span className="absolute inset-0 bg-white/20 translate-x-[-100%] hover:translate-x-[100%] transition duration-1000" />

                CONTACT US

              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                className="px-8 py-4 rounded-full border-2 border-black bg-white font-black shadow-[5px_5px_0px_black] flex items-center gap-3"
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

            {/* Main Circle */}
            <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] rounded-full bg-gradient-to-br from-[#6d7df6] to-[#9f8cff] flex items-center justify-center relative shadow-[10px_10px_0px_black]">

              {/* Floating Icons */}
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

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute top-10 left-10 text-5xl"
              >
                🌍
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute bottom-10 right-10 text-5xl"
              >
                💡
              </motion.div>

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-0"
              >
                <Sparkles size={40} />
              </motion.div>

            </div>

            {/* Stats */}
            <div className="absolute bottom-0 left-0 bg-white rounded-full px-6 py-4 border-2 border-black shadow-[5px_5px_0px_black]">

              <h2 className="text-4xl font-black">
                80+
              </h2>

              <p className="font-bold text-[#5b6cff]">
                Happy Clients
              </p>

            </div>

            <div className="absolute top-0 right-0 bg-white rounded-full px-6 py-4 border-2 border-black shadow-[5px_5px_0px_black]">

              <h2 className="text-4xl font-black">
                100+
              </h2>

              <p className="font-bold text-[#5b6cff]">
                Projects
              </p>

            </div>

          </motion.div>

        </div>

      </section>

      {/* MARQUEE */}
      <section className="py-16 overflow-hidden">

        <motion.div
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-20 whitespace-nowrap text-5xl font-black text-black/10"
        >

          <span>SEO</span>
          <span>MARKETING</span>
          <span>BRANDING</span>
          <span>WEBSITES</span>
          <span>DESIGN</span>
          <span>APPS</span>

        </motion.div>

      </section>

      {/* SERVICES */}
      <section className="px-5 sm:px-6 md:px-12 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.3em] text-sm font-bold text-[#5b6cff] mb-4">
              SERVICES
            </p>

            <h2 className="text-5xl md:text-7xl font-black">
              WHAT WE DO
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                  rotate: -1,
                }}
                className="bg-white/70 backdrop-blur-md rounded-[30px] hover:shadow-[0_0_40px_#6d7df6] transition-all duration-500 p-8 border-2 border-black"
              >

                <div className="text-6xl mb-6">
                  {service.icon}
                </div>

                <h3 className="text-3xl font-black mb-4">
                  {service.title}
                </h3>

                <h4 className="font-bold text-[#5b6cff] mb-4">
                  {service.subtitle}
                </h4>

                <p className="text-black/60 leading-relaxed">
                  {service.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* PORTFOLIO */}
      <section className="px-5 sm:px-6 md:px-12 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.3em] text-sm font-bold text-[#5b6cff] mb-4">
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
                className="bg-white rounded-[35px] overflow-hidden border-2 border-black shadow-[6px_6px_0px_black]"
              >

                <div className="h-64 bg-gradient-to-br from-[#6d7df6] to-[#9f8cff] flex items-center justify-center text-7xl">

                  {item.emoji}

                </div>

                <div className="p-8">

                  <div className="flex items-center gap-2 mb-3">

                    <Star
                      size={15}
                      className="fill-[#5b6cff] text-[#5b6cff]"
                    />

                    <p className="text-[#5b6cff] font-bold text-sm">
                      {item.category}
                    </p>

                  </div>

                  <h3 className="text-3xl font-black mb-5">
                    {item.title}
                  </h3>

                  <button className="flex items-center gap-3 font-bold">

                    See Project

                    <ArrowRight size={18} />

                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* TEAM */}
      <section className="px-5 sm:px-6 md:px-12 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.3em] text-sm font-bold text-[#5b6cff] mb-4">
              TEAM
            </p>

            <h2 className="text-5xl md:text-7xl font-black">
              OUR TEAM
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {team.map((member, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="bg-white rounded-[30px] p-8 border-2 border-black shadow-[6px_6px_0px_black] text-center"
              >

                <div className="text-7xl mb-6">
                  {member.emoji}
                </div>

                <h3 className="text-3xl font-black mb-3">
                  {member.name}
                </h3>

                <p className="text-[#5b6cff] font-bold">
                  {member.role}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* REVIEWS */}
      <section className="px-5 sm:px-6 md:px-12 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.3em] text-sm font-bold text-[#5b6cff] mb-4">
              REVIEWS
            </p>

            <h2 className="text-5xl md:text-7xl font-black">
              CLIENT FEEDBACK
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {reviews.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="bg-white rounded-[30px] p-8 border-2 border-black shadow-[6px_6px_0px_black]"
              >

                <div className="flex gap-1 mb-5">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#5b6cff] text-[#5b6cff]"
                    />
                  ))}

                </div>

                <p className="text-black/70 leading-relaxed mb-6">
                  {item.review}
                </p>

                <div className="flex items-center gap-3">

                  <CheckCircle2 className="text-[#5b6cff]" />

                  <h4 className="font-black">
                    {item.name}
                  </h4>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* WAVE */}
      <div className="w-full overflow-hidden leading-none">

        <svg
          viewBox="0 0 1440 200"
          className="w-full h-[120px]"
          preserveAspectRatio="none"
        >

          <path
            fill="#6d7df6"
            fillOpacity="1"
            d="M0,96L80,90.7C160,85,320,75,480,90.7C640,107,800,149,960,149.3C1120,149,1280,107,1360,85.3L1440,64L1440,320L0,320Z"
          />

        </svg>

      </div>

      {/* CTA */}
      <section className="bg-[#6d7df6] px-5 sm:px-6 md:px-12 py-24 text-white text-center">

        <Globe size={60} className="mx-auto mb-8" />

        <h2 className="text-5xl md:text-7xl font-black mb-8">

          LET'S BUILD
          <br />
          SOMETHING AMAZING

        </h2>

        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">

          Premium digital experiences crafted for modern brands.

        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          className="px-8 py-4 rounded-full bg-white text-black font-black border-2 border-black shadow-[5px_5px_0px_black]"
        >

          START PROJECT

        </motion.button>

      </section>

      {/* FOOTER */}
      <footer className="px-5 sm:px-6 md:px-12 py-10 border-t-2 border-black">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <h3 className="text-3xl font-black text-[#5b6cff]">
            AneeshUp
          </h3>

          <p className="font-bold text-center">
            © 2026 Aneesh Kumar Maury
          </p>

        </div>

      </footer>

    </div>
  );
}