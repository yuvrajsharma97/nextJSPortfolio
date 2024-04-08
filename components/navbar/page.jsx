"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarMenuOptions = [
    { label: "Home", link: "/#home" },
    { label: "Projects", link: "/#projects" },
    { label: "Skills", link: "/#skills" },
    { label: "Contact", link: "/#contact" },
  ];

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-[#f1f4f9] py-2 z-50 transition-opacity duration-300 drop-shadow-md ${
        visible ? "opacity-100" : "opacity-0"
      }`}>
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="flex xs:justify-start md:justify-center items-center h-16">
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {navbarMenuOptions.map((option, index) => (
                <Link key={index} href={option.link}>
                  <span className="text-color1 hover:bg-color2 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    {option.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-color1 hover:text-white hover:bg-color2 focus:outline-none focus:bg-color2 focus:text-white">
              {/* Menu Icon when closed */}
              <FiMenu className={`${isOpen ? "hidden" : "block"} h-6 w-6`} />

              {/* Close Icon when opened */}
              <FiX className={`${isOpen ? "block" : "hidden"} h-6 w-6`} />
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navbarMenuOptions.map((option, index) => (
            <Link
              key={index}
              href={option.link}
              onClick={() => setIsOpen(!isOpen)}>
              <span className="text-color1 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                {option.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
