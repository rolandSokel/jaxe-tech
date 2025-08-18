"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("hero");


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Accueil", href: "#hero" },
    { name: "À propos", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Méthode", href: "#method" },
  ]

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let id = entry.target.id;
            if (id === "hero") id = "";
            setActiveSection(id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);



  return (
    <div
      className={`fixed w-full flex justify-center z-50 transition-all duration-300 ${isScrolled ? "top-2" : "top-4"
        }`}
    >
      <div
        className={`relative p-4 px-6 md:px-8 rounded-2xl md:rounded-4xl backdrop-blur-[32px] w-full mx-4 border text-white flex justify-between items-center transition-all duration-500 ${isScrolled ? "bg-[#1419473D] border-gray-600/50 shadow-2xl max-w-full" : "bg-[#202224]/90 max-w-[882px] border-gray-400/30 shadow-xl"
          }`}
      >
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-40 animate-pulse delay-1000"></div>

        {/* Logo */}
        <div className="text-xl md:text-2xl font-clashdisplay font-bold bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
          JAXE TECH
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-8">
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "").replace("/", "");

            const isActive =
              (sectionId === "" && (activeSection === "" || activeSection === "hero")) ||
              activeSection === sectionId;

            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative font-DM_Sans font-medium transition-all duration-300 group ${isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                ></span>
              </a>
            );
          })}
        </nav>



        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-2">
          <button className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2.5 rounded-xl font-medium overflow-hidden group hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
            <Link
              href="#contact"
              className="relative z-10">Contact</Link>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1c1e]/95 backdrop-blur-[32px] border border-gray-600/50 rounded-2xl p-6 shadow-2xl md:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white/90 font-DM_Sans font-medium hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-xl font-medium mt-4 hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}
