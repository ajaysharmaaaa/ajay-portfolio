export default function About() {
  return (
    <section
      id="about"
      className="px-4 text-center font-inter"
    >
      {/* Heading */}
      <h4
        className="
        text-[#2B2B2B] dark:text-white font-extrabold
        text-[32px] md:text-[40px] lg:text-[45px]
        "
      >
        About Me
      </h4>

      {/* Sub heading */}
      <p
        className="
         font-semibold
        text-[12px] md:text-[13px] lg:text-[14px]
        bg-gradient-to-r from-[#4FC3F7] to-[#484E53]
        bg-clip-text text-transparent mt-0
        "
      >
        Get to know me
      </p>

      {/* Paragraphs */}
      <div
        className="
        mt-8 max-w-3xl mx-auto
        text-[#1C1E53] dark:text-white font-medium
        text-[13px] md:text-[16px] lg:text-[17px]
        leading-relaxed space-y-6
        "
      >
        <p>
          Hi 👋 I’m Ajay, a Frontend Web Developer with nearly 3 years of experience in WordPress, React.js, and Liferay DXP. I create modern, responsive, and SEO-friendly websites that are fast, clean, and easy to manage. I focus on building scalable UI solutions that improve user experience and business growth.
        </p>

        <p>
          I have worked on enterprise and government projects, handling UI design, frontend development, and performance optimization. From WordPress business sites to React dashboards and Liferay UI customization, I deliver high-quality results. My goal is always to provide reliable and maintainable frontend solutions.
        </p>

        <p>
          I enjoy collaborating with startups, agencies, and businesses to turn ideas into real products. If you need a professional frontend developer for WordPress, React, or Liferay projects, I’d love to connect. Let’s build something amazing together!
        </p>
      </div>

      {/* Button */}
      <a
        href="/public/resume/Ajay Sharma Resume.pdf"
        download
        className="
        inline-block mt-10 px-8 py-3 rounded-full
        border border-[#585858]
        font-montserrat font-medium text-[#1C1E53] dark:text-white
        text-[13px] md:text-[14px] lg:text-[15px]
        hover:bg-[#585858] hover:text-white transition
        "
      >
        Download Resume
      </a>
    </section>
  );
}
