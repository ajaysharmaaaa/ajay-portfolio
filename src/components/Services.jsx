import {
  Layers,
  Code2,
  Workflow,
  RefreshCcw,
  Database,
  Briefcase,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Layers size={22} />,
      title: "Liferay Frontend Development",
      desc: "Build and customize enterprise portals using Liferay DXP 7.4. Expert in Fragments, Themes, Templates, Forms, and React Client Extensions.",
    },
    {
      icon: <Code2 size={22} />,
      title: "React & Modern UI Development",
      desc: "Create responsive and scalable UI using React, Next.js, JavaScript, TypeScript, Bootstrap & Tailwind CSS with reusable components.",
    },
    {
      icon: <Workflow size={22} />,
      title: "Portal Customization & Workflow",
      desc: "Implement multi-level approval workflows using Liferay Kaleo. Manage user roles, permissions, and secure content workflows.",
    },
    {
      icon: <RefreshCcw size={22} />,
      title: "Website Development & Migration",
      desc: "Upgrade and modernize portals like TAFE & Digital Tribe. Expert in Liferay 7.0 → 7.4 migration and UI redesign.",
    },
    {
      icon: <Database size={22} />,
      title: "Dynamic Content Management",
      desc: "Create Structures, Web Content, Templates, and reusable CMS components using Liferay Fragments & Page Layouts.",
    },
    {
      icon: <Briefcase size={22} />,
      title: "Software Developer Expertise",
      desc: "2.5+ years experience at Khichad & Saptam Technologies delivering enterprise, government, and business portal solutions.",
    },
  ];

  return (
    <section id="services" className=" px-4 font-inter text-center">
      {/* Heading */}
      <h5 className="text-[#2B2B2B] font-extrabold text-[32px] md:text-[40px] lg:text-[45px] dark:text-white">
        What I Do
      </h5>

      {/* Sub Heading */}
      <p className="mt-2 text-[12px] md:text-[13px] lg:text-[14px] font-semibold bg-gradient-to-r from-[#4FC3F7] to-[#484E53] bg-clip-text text-transparent">
        My Services
      </p>

      {/* Cards */}
      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-white dark:bg-black p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            {/* Icon */}
            <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-[#BCE7FA] dark:bg-black shadow-md mb-4">
              {item.icon}
            </div>

            {/* Card Heading */}
            <h3 className="text-[#484E53] dark:text-white font-semibold text-[13px] md:text-[14px] lg:text-[15px]">
              {item.title}
            </h3>

            {/* Card Para */}
            <p className="mt-3 text-[#1C1E53] dark:text-white  font-semibold text-[12px] md:text-[13px] lg:text-[14px] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
