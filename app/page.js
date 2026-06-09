"use client";

import { motion } from "framer-motion";

import {
  ArrowRight,
  Play,
  Star,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  Instagram,
  BarChart3,
  Users,
  MessageCircle,
} from "lucide-react";

import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { RiFacebookBoxLine } from "react-icons/ri";

export default function SocialMediaManagerWebsite() {

  const services = [
    {
      title: "Instagram Management",
      desc: "Content strategy, reels planning, engagement growth and audience building.",
      icon: <FiInstagram />,
    },

    {
      title: "Content Creation",
      desc: "Modern content ideas, carousel design, reels concepts and captions.",
      icon: <Sparkles size={28} />,
    },

    {
      title: "Social Media Ads",
      desc: "Meta ads and high-converting campaigns for business growth.",
      icon: <TrendingUp size={28} />,
    },

    {
      title: "Brand Strategy",
      desc: "Build a premium and recognizable online brand identity.",
      icon: <ShieldCheck size={28} />,
    },

    {
      title: "Analytics & Reports",
      desc: "Track engagement, reach, audience growth and campaign performance.",
      icon: <BarChart3 size={28} />,
    },

    {
      title: "Community Management",
      desc: "Manage DMs, comments and audience engagement professionally.",
      icon: <Users size={28} />,
    },
  ];

  const stats = [
    {
      number: "100+",
      text: "Projects Completed",
    },

    {
      number: "80+",
      text: "Happy Clients",
    },

    {
      number: "10M+",
      text: "Social Reach",
    },

    {
      number: "5+",
      text: "Years Experience",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Startup Founder",
      review:
        "Amazing social media management and very professional communication.",
    },

    {
      name: "Priya Verma",
      role: "Fashion Brand Owner",
      review:
        "My Instagram engagement increased massively after working together.",
    },

    {
      name: "Amit Patel",
      role: "Business Coach",
      review:
        "Premium quality content strategy and smooth execution.",
    },
  ];

  return (
    <div className="bg-[#f9f7f2] text-[#111111] overflow-x-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#ffe0d6] blur-[140px] rounded-full opacity-70" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ddd6ff] blur-[140px] rounded-full opacity-70" />

      </div>

      {/* NAVBAR */}
      <header className="px-5 sm:px-6 md:px-12 py-6">

        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >

            <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center">

              <Instagram
                size={28}
                className="text-[#6d5dfc]"
              />

            </div>

            <div>

              <h1 className="text-3xl font-black text-[#6d5dfc]">
                Aneesh Media
              </h1>

              <p className="text-sm text-black/50 font-semibold">
                Social Media Manager
              </p>

            </div>

          </motion.div>

          {/* BUTTON */}
          <button className="hidden md:flex px-6 py-3 rounded-full bg-[#6d5dfc] text-white font-bold shadow-xl">
            Contact Us
          </button>

        </div>

      </header>

      {/* HERO SECTION */}
      <section className="px-5 sm:px-6 md:px-12 py-20">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-lg mb-8">

              <CheckCircle2
                size={18}
                className="text-[#6d5dfc]"
              />

              Trusted by Brands Worldwide

            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1] mb-8">

              We Grow
              <br />

              <span className="text-[#6d5dfc]">
                Brands on
              </span>

              <br />

              Social Media.

            </h1>

            <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-10 max-w-xl">

              We help businesses and creators grow through
              strategic content, Instagram management,
              branding, paid ads and audience engagement.

            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5 mb-12">

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                className="px-8 py-4 rounded-full bg-[#6d5dfc] text-white font-black shadow-[0_15px_40px_rgba(109,93,252,0.35)]"
              >

                Start Growing

              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                className="px-8 py-4 rounded-full bg-white shadow-xl font-black flex items-center gap-3"
              >

                Watch Portfolio

                <Play size={18} />

              </motion.button>

            </div>

            {/* SOCIALS */}
            <div className="flex items-center gap-5">

              {[FiInstagram, FaLinkedin, RiFacebookBoxLine].map(
                (Icon, index) => (

                  <motion.div
                    key={index}
                    whileHover={{
                      y: -5,
                      scale: 1.1,
                    }}
                    className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-xl hover:bg-[#6d5dfc] hover:text-white transition"
                  >

                    <Icon />

                  </motion.div>

                )
              )}

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative flex justify-center"
          >

            {/* MAIN CIRCLE */}
            <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] md:w-[520px] md:h-[520px] rounded-full bg-gradient-to-br from-[#6d5dfc] to-[#9f8cff] flex items-center justify-center relative shadow-[0_30px_80px_rgba(109,93,252,0.35)]">

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
                📱
              </motion.div>

              {/* FLOATING CARDS */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute top-10 left-0 bg-white rounded-2xl px-5 py-4 shadow-xl"
              >

                <div className="flex items-center gap-3">

                  <TrendingUp className="text-[#6d5dfc]" />

                  <div>

                    <h3 className="font-black text-xl">
                      +250%
                    </h3>

                    <p className="text-sm text-black/60">
                      Engagement
                    </p>

                  </div>

                </div>

              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute bottom-10 right-0 bg-white rounded-2xl px-5 py-4 shadow-xl"
              >

                <div className="flex items-center gap-3">

                  <MessageCircle className="text-[#6d5dfc]" />

                  <div>

                    <h3 className="font-black text-xl">
                      10M+
                    </h3>

                    <p className="text-sm text-black/60">
                      Reach Generated
                    </p>

                  </div>

                </div>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* STATS */}
      <section className="px-5 sm:px-6 md:px-12 py-10">

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-[30px] p-8 shadow-xl text-center"
            >

              <h2 className="text-4xl md:text-5xl font-black text-[#6d5dfc] mb-3">
                {item.number}
              </h2>

              <p className="text-black/60 font-semibold">
                {item.text}
              </p>

            </div>

          ))}

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
              What We Do
            </h2>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -10,
                }}
                className="group bg-white rounded-[35px] p-8 shadow-xl hover:shadow-[0_25px_60px_rgba(109,93,252,0.15)] transition-all duration-500"
              >

                {/* ICON */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#6d5dfc] to-[#9f8cff] flex items-center justify-center text-white text-4xl shadow-lg mb-8">

                  {service.icon}

                </div>

                {/* TITLE */}
                <h3 className="text-3xl font-black mb-4">
                  {service.title}
                </h3>

                {/* SUBTITLE */}
                <p className="text-[#6d5dfc] font-bold mb-4">
                  {service.subtitle}
                </p>

                {/* DESCRIPTION */}
                <p className="text-black/60 leading-relaxed mb-8">
                  {service.desc}
                </p>

                {/* BUTTON */}
                <button className="flex items-center gap-3 font-black text-[#6d5dfc]">

                  Learn More

                  <ArrowRight size={18} />

                </button>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="px-5 sm:px-6 md:px-12 py-24">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[0.3em] text-sm font-bold text-[#6d5dfc] mb-4">
              WHY US
            </p>

            <h2 className="text-5xl md:text-7xl font-black mb-8">
              We Create
              <br />
              Results.
            </h2>

            <p className="text-lg text-black/60 leading-relaxed mb-10">

              We focus on strategy, creativity and growth.
              Our goal is to help businesses stand out
              online with powerful content and branding.

            </p>

            <div className="space-y-5">

              {[
                "Premium Content Strategy",
                "High Engagement Growth",
                "Modern Branding Solutions",
                "Consistent Content Planning",
              ].map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <CheckCircle2 className="text-[#6d5dfc]" />

                  <p className="font-semibold text-lg">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white rounded-[35px] p-8 shadow-xl h-60 flex flex-col justify-between">

              <Sparkles
                size={40}
                className="text-[#6d5dfc]"
              />

              <div>

                <h3 className="text-4xl font-black mb-2">
                  Creative
                </h3>

                <p className="text-black/60">
                  Unique social media ideas.
                </p>

              </div>

            </div>

            <div className="bg-[#6d5dfc] text-white rounded-[35px] p-8 shadow-xl h-72 flex flex-col justify-between mt-10">

              <TrendingUp size={40} />

              <div>

                <h3 className="text-4xl font-black mb-2">
                  Growth
                </h3>

                <p className="text-white/70">
                  Audience & engagement boost.
                </p>

              </div>

            </div>

            <div className="bg-[#111111] text-white rounded-[35px] p-8 shadow-xl h-72 flex flex-col justify-between">

              <Users size={40} />

              <div>

                <h3 className="text-4xl font-black mb-2">
                  Community
                </h3>

                <p className="text-white/70">
                  Build loyal audience relationships.
                </p>

              </div>

            </div>

            <div className="bg-white rounded-[35px] p-8 shadow-xl h-60 flex flex-col justify-between mt-10">

              <BarChart3
                size={40}
                className="text-[#6d5dfc]"
              />

              <div>

                <h3 className="text-4xl font-black mb-2">
                  Analytics
                </h3>

                <p className="text-black/60">
                  Performance-based optimization.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="px-5 sm:px-6 md:px-12 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[0.3em] text-sm font-bold text-[#6d5dfc] mb-4">
              TESTIMONIALS
            </p>

            <h2 className="text-5xl md:text-7xl font-black">
              Client Reviews
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {testimonials.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-[35px] p-8 shadow-xl"
              >

                {/* STARS */}
                <div className="flex gap-1 mb-6">

                  {[...Array(5)].map((_, i) => (

                    <Star
                      key={i}
                      size={18}
                      className="fill-[#6d5dfc] text-[#6d5dfc]"
                    />

                  ))}

                </div>

                {/* REVIEW */}
                <p className="text-black/60 leading-relaxed mb-8">
                  {item.review}
                </p>

                {/* USER */}
                <div>

                  <h3 className="font-black text-xl">
                    {item.name}
                  </h3>

                  <p className="text-[#6d5dfc] font-semibold">
                    {item.role}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-5 sm:px-6 md:px-12 py-24">

        <div className="max-w-6xl mx-auto bg-gradient-to-r from-[#6d5dfc] to-[#9f8cff] rounded-[40px] p-10 md:p-20 text-center text-white shadow-[0_30px_80px_rgba(109,93,252,0.3)]">

          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Ready to Grow
            <br />
            Your Brand?
          </h2>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">

            Let's build your online presence with strategic
            social media management and modern branding.

          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            className="px-10 py-5 rounded-full bg-white text-[#6d5dfc] font-black shadow-xl"
          >

            Book a Free Call

          </motion.button>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="px-5 sm:px-6 md:px-12 py-10">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h3 className="text-3xl font-black text-[#6d5dfc]">
              Aneesh Media
            </h3>

            <p className="text-black/50 mt-2">
              Social Media Management Agency
            </p>

          </div>

          <div className="flex items-center gap-5">

            {[FiInstagram, FaLinkedin, RiFacebookBoxLine].map(
              (Icon, index) => (

                <div
                  key={index}
                  className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-xl hover:bg-[#6d5dfc] hover:text-white transition cursor-pointer"
                >

                  <Icon />

                </div>

              )
            )}

          </div>

        </div>

      </footer>

    </div>
  );
                }
