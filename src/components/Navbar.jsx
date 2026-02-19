import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
  ];

  // 👉 Scroll Active Change
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  // 👉 Dark Mode Toggle
  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav
      className="sticky top-0 z-50 w-full px-6 lg:px-24 py-4 flex items-center justify-between
      bg-[#C9D2E4] dark:bg-[#1A1A1A] shadow-md"
    >
      {/* LOGO */}
      <a href="#home">
      <h1 className="font-logo font-bold text-[42px] md:text-[50px] lg:text-[50px]">
        Ajay
      </h1>
      </a>

      {/* DESKTOP MENU */}
      <ul
        className="hidden lg:flex gap-10 font-nav font-medium
        text-[14px] md:text-[16px] lg:text-[18px]"
      >
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`transition ${
                active === link.id
                  ? "text-blue-500"
                  : "text-black dark:text-white"
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      <button
      onClick={() =>
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    })
  }
        className="
          px-6 py-2 rounded-xl border border-[#484E53]
          font-montserrat text-[#484E53]
          text-[13px] md:text-[15px] dark:text-white
          font-medium hover:bg-[#484E53] hover:text-white transition
          hidden lg:block
          "
      >
        Contact Me
      </button>

      {/* DESKTOP DARK MODE ONLY */}
      <div className="hidden lg:block">
        <button onClick={toggleDark}>{dark ? <Sun /> : <Moon />}</button>
      </div>

      {/* TABLET/MOBILE BUTTONS */}
      <div className="flex lg:hidden gap-6 items-center">
        {/* Contact Me only on mobile/tablet */}

        {/* Dark Mode toggle */}
        <button onClick={toggleDark}>{dark ? <Sun /> : <Moon />}</button>

        {/* Hamburger Menu */}
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="absolute lg:hidden top-20 left-0 w-full flex flex-col items-center gap-6 py-6
          bg-[#C9D2E4]  dark:bg-[#1A1A1A] font-nav font-medium"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className={`${
                active === link.id
                  ? "text-blue-500"
                  : "text-black dark:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
