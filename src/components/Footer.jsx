import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const socialLinks = [
  {
    icon: FaLinkedinIn,
    link: "http://www.linkedin.com/in/ajaysharma2002",
  },
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/share/1CBS4H4ghn/",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/aaju_sharmaa?igsh=MXh2ZGt4NjE3YnZsZQ==",
  },
];



export default function Footer() {
  return (
    <footer className="font-inter pt-20 md:pt-24 py-10 flex flex-col justify-end px-6 md:px-12 lg:px-20">

      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 py-16">
        <div className="flex flex-col">

        {/* Heading */}
        <h4 className="
          text-[#282938] dark:text-white
          font-medium
          text-[30px] md:text-[40px] lg:text-[63px]
          leading-tight
        ">
          Let’s
        </h4>
        <h4 className="text-[#282938] dark:text-white
          font-medium
          text-[30px] md:text-[40px] lg:text-[63px]
          leading-tight">
          Work Together -
        </h4>
        </div>

        {/* Email Button */}
      <a href="mailto:theajaysharma2002@gmail.com">
  <div
    className="
      inline-flex items-center gap-3
      border border-[#484E53]
      text-[#484E53] dark:text-white
      text-[14px] md:text-[16px] lg:text-[20px]
      font-normal
      px-8 py-4
      rounded-xl
      hover:bg-[#484E53] hover:text-white transition
    "
  >
    <FaEnvelope className="text-[16px] md:text-[18px]" />
    theajaysharma2002@gmail.com
  </div>
</a>


      </div>

      {/* Line */}
      <div className="border-t border-[#484E53]"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-6 gap-6">

        {/* Copyright */}
        <p className="
          text-[#282938] dark:text-white
          text-[13px] md:text-[14px] lg:text-[16px]
        ">
          © 2026 All rights reserved.
        </p>

        {/* Icons */}
        <div className="flex gap-4">
  {socialLinks.map((item, i) => {
    const Icon = item.icon;
    return (
      <a
        key={i}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          w-10 h-10
          flex items-center justify-center
          border border-[#484E53]
          text-[#484E53] dark:text-white
          rounded-full
          hover:bg-[#484E53] hover:text-white transition
        "
      >
        <Icon size={16} />
      </a>
    );
  })}
</div>

      </div>

    </footer>
  );
}
