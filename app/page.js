
export default function Home() {
  const projects = [
    {
      title: "Next Tech Pro",
      category: "Web Development",
      description:
        "Modern digital services website built with Next.js and Tailwind CSS.",
    },
    {
      title: "Social Media Management",
      category: "Marketing",
      description:
        "Content planning, growth strategy and social media management.",
    },
    {
      title: "Portfolio Website",
      category: "Frontend Development",
      description:
        "Responsive portfolio website optimized for performance.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Navbar */}
      <header className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Aneesh Maury
          </h1>

          <nav className="hidden md:flex gap-8 text-gray-600">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-28">

        <span className="text-blue-600 font-medium">
          Frontend Developer • Social Media Manager
        </span>

        <h2 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
          Building Modern Websites
          <br />
          & Growing Brands Online
        </h2>

        <p className="max-w-2xl text-gray-600 text-lg mt-8">
          I help businesses and creators establish a strong online presence
          through web development, content creation and social media management.
        </p>

        <div className="flex gap-4 mt-10 flex-wrap">
          <a
            href="#work"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="border border-gray-300 px-6 py-3 rounded-full"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-200"
      >
        <div className="grid md:grid-cols-2 gap-12">

          <div>
            <h3 className="text-4xl font-bold">
              About Me
            </h3>
          </div>

          <div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Hi, I'm Aneesh Kumar Maury. I help businesses and creators
              improve their online presence through modern websites,
              social media management and digital content strategies.
              My goal is to create solutions that help brands grow and
              connect with their audience.
            </p>
          </div>

        </div>
      </section>

      {/* Work */}
     
{/* Portfolio */}
<section
  id="work"
  className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-200"
>
  <h2 className="text-4xl font-bold mb-4">
    Portfolio
  </h2>

  <p className="text-gray-600 mb-12">
    Real results achieved through social media growth and content strategy.
  </p>

  <div className="bg-white border border-gray-200 rounded-3xl overflow-hidden shadow-sm">

    <img
      src="https://i.ibb.co/MDYGfTNV/photo-2026-06-14-14-32-13.jpg"
      alt="Instagram Growth Result"
      className="w-full object-cover"
    />

    <div className="p-8">

      <span className="text-blue-600 font-medium">
        Instagram Growth
      </span>

      <h3 className="text-3xl font-bold mt-3">
        Organic Instagram Growth
      </h3>

      <p className="text-gray-600 mt-4">
        Successfully grew and managed an Instagram page through
        content strategy, audience engagement and consistent posting.
        This screenshot shows actual account growth and performance.
      </p>

    </div>

  </div>
</section>


      {/* Contact */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-24 border-t border-gray-200"
      >
        <h3 className="text-4xl font-bold">
          Let's Work Together
        </h3>

        <p className="text-gray-600 mt-6 max-w-xl">
          Interested in working together? Feel free to reach out.
        </p>

        <div className="mt-10 space-y-4">

          <p>
            📧 aneeshmaurya1102@gmail.com
          </p>

          <p>
            💼 http://in.linkedin.com/in/aneeshmaury
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between flex-col md:flex-row">

          <p className="text-gray-500">
            © 2026 Aneesh Kumar Maury
          </p>

          <p className="text-gray-500 mt-3 md:mt-0">
            Built with Next.js & Tailwind CSS
          </p>

        </div>
      </footer>

    </main>
  );
}

