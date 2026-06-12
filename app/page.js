export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-700/30 via-pink-500/20 to-cyan-500/20 blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-28">
          <div className="max-w-4xl">
            <span className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm">
              🚀 Social Media Management & Growth
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold mt-8 leading-tight">
              Grow Your Brand On
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {" "}
                Social Media
              </span>
            </h1>

            <p className="text-gray-300 text-xl mt-6 max-w-2xl">
              Helping businesses generate more leads, engagement, and sales
              through strategic content creation, account management, and growth marketing.
            </p>

            <div className="flex gap-4 mt-10 flex-wrap">
              <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition">
                Book Free Consultation
              </button>

              <button className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/10 transition">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-6">

          {[
            ["50+", "Clients Served"],
            ["100M+", "Views Generated"],
            ["300%", "Average Growth"],
            ["5+", "Years Experience"],
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
            >
              <h3 className="text-4xl font-bold">{item[0]}</h3>
              <p className="text-gray-400 mt-2">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-5xl font-bold text-center">
          Services I Offer
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Everything you need to dominate social media.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {[
            {
              title: "Content Creation",
              desc: "Reels, Shorts, Carousels, Graphics, Captions."
            },
            {
              title: "Account Management",
              desc: "Daily posting, scheduling and audience engagement."
            },
            {
              title: "Growth Strategy",
              desc: "Organic growth systems and content planning."
            },
            {
              title: "Video Editing",
              desc: "Short-form videos optimized for engagement."
            },
            {
              title: "Brand Building",
              desc: "Build authority and trust online."
            },
            {
              title: "Analytics Reporting",
              desc: "Track performance and improve results."
            }
          ].map((service, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-8 hover:scale-105 transition"
            >
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white text-black py-24">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center">
            Results That Speak
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">

            {[
              ["Instagram Growth", "+120K Followers"],
              ["YouTube Shorts", "25M Views"],
              ["Lead Generation", "4X More Leads"],
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-3xl p-8"
              >
                <h3 className="text-2xl font-bold">
                  {item[0]}
                </h3>

                <p className="text-5xl font-black mt-6">
                  {item[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-center">
          Why Clients Work With Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {[
            "Custom Strategy For Every Brand",
            "Fast Communication",
            "Data Driven Decisions",
            "Content That Converts",
            "Affordable Pricing",
            "Long-Term Growth Focus",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl"
            >
              ✓ {item}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-center">
          Client Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl"
            >
              <p className="text-gray-300">
                "Amazing growth and professional communication.
                Highly recommended."
              </p>

              <div className="mt-6">
                <h4 className="font-bold">Client Name</h4>
                <p className="text-gray-500">
                  Business Owner
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold text-center">
          Simple Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {[
            ["Starter", "$299/month"],
            ["Growth", "$599/month"],
            ["Premium", "$999/month"],
          ].map((plan, i) => (
            <div
              key={i}
              className="border border-white/10 bg-white/5 rounded-3xl p-10 text-center"
            >
              <h3 className="text-2xl font-bold">
                {plan[0]}
              </h3>

              <p className="text-5xl font-black mt-6">
                {plan[1]}
              </p>

              <button className="bg-white text-black px-8 py-4 rounded-xl mt-8 font-semibold">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-bold">
            Ready To Grow Your Brand?
          </h2>

          <p className="mt-6 text-xl">
            Let's discuss how we can increase your reach,
            engagement, and revenue.
          </p>

          <button className="bg-white text-black px-10 py-5 rounded-2xl mt-10 font-bold text-lg">
            Book Free Strategy Call
          </button>
        </div>
      </section>

    </main>
  );
}