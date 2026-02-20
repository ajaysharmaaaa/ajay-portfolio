import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      img: "/images/Khichad.png",
      title: "Khichad Corporate Portal",
      tech: "Liferay, React",
      link: "https://khichad.com/",
    },
    {
      img: "/images/Al Jadaara.png",
      title: "Al Jadaara Website",
      tech: "React",
      link: "https://aljadaara.gov.ae/en/",
    },
    {
      img: "/images/Tafe.png",
      title: "Tafe Portal",
      tech: "Liferay",
      link: "https://www.tafe.com/",
    },
    {
      img: "/images/Gazi Hotel.png",
      title: "Gazi Hotel",
      tech: "Wordpress",
      link: "https://gajihoteljaisalmer.com/",
    },
    {
      img: "/images/The River Garden.png",
      title: "The River Garden",
      tech: "Wordpress",
      link: "https://therivergarden.co.uk/",
    },
    {
      img: "/images/UFC Gym.png",
      title: "UFC GYM Website",
      tech: "React",
      link: "https://ufcgym.in/",
    },
  ];

  return (
    <section id="projects" className="px-4 font-inter text-center">

      {/* Heading */}
      <h5 className="text-black font-extrabold text-[32px] md:text-[40px] lg:text-[45px] dark:text-white">
        Projects
      </h5>

      {/* Sub Heading */}
      <p className="mt-2 text-[17px] md:text-[18px] lg:text-[19px] font-semibold bg-gradient-to-r from-[#4FC3F7] to-[#484E53] bg-clip-text text-transparent">
        Some of my Work
      </p>

      {/* Cards */}
      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((item, i) => (
          <div key={i} className="text-left">

            {/* Image */}
            <div className="relative group overflow-hidden rounded-xl">
              <a
                href={item.link}              >
              <img
                src={item.img}
                alt={item.title}
                className="w-full object-fill h-[220px] transition duration-300 group-hover:scale-105"
              />
              </a>
            </div>

            {/* Title + Icon */}
            <div className="flex items-center justify-between mt-4">
              <a
                href={item.link}
              >
              <h3 className="text-[#484E53] dark:text-white font-bold text-[18px] md:text-[20px] lg:text-[22px]">
                {item.title}
              </h3>
              </a>

              <a
                href={item.link}
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4FC3F7] hover:scale-110 transition"
              >
                <ArrowUpRight className="text-white" size={18} />
              </a>
            </div>

            {/* Tech */}
            <p className="text-[#484E53] dark:text-white font-medium text-[16px] md:text-[18px] lg:text-[20px] mt-1">
              {item.tech}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
