export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center text-center px-4"
    >
      {/* Image */}
      <img
        src="/images/Ajay.jpg"
        alt="profile"
        className="w-40 h-40 rounded-full object-cover mb-6"
      />

      {/* Heading */}
      <h2
        className="
        font-poppins font-bold text-[#484E53] dark:text-white
        text-[40px] md:text-[50px] lg:text-[63px]
        "
      >
        Ajay Sharma
      </h2>

      {/* Designation */}
      <h3
        className="
        font-poppins font-semibold
        text-[22px] md:text-[22px] lg:text-[26px]
        bg-gradient-to-r from-[#4FC3F7] to-[#484E53]
        bg-clip-text text-transparent mt-2
        "
      >
        Frontend Web Developer
      </h3>

      {/* Paragraph */}
      <p
        className="
        font-poppins text-[#484E53] dark:text-white
        text-[14px] md:text-[17px] lg:text-[19px]
        max-w-2xl mt-4 leading-relaxed
        "
      >
        Hi 👋 I’m Ajay, a Frontend Developer with 3+ years in WordPress, React,
        Next.js, TypeScript, and Liferay DXP—building fast, responsive, and
        SEO-friendly websites for startups, businesses, and enterprise projects.
      </p>

      {/* Button */}
      
      <button
      onClick={() =>
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }
        className="
        mt-6 px-8 py-3 rounded-full border border-[#484E53]
        font-montserrat text-[#484E53] dark:text-white
        text-[13px] md:text-[16px] lg:text-[17px]
        font-medium hover:bg-[#484E53] hover:text-white transition
        "
      >
        Contact Me
      </button>
    </section>
  );
}
