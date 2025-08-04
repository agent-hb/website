import React from "react";
import Image from "next/image";
import logo from "../../../public/Home/logo.png";

const navLinks = [
  { href: "", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work-process", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#careers", label: "Careers" },
];

const Header: React.FC = () => {
  const pathname = typeof window !== "undefined" ? window.location.hash : "";

  return (
    <header className="px-16 py-4 border-b border-[#262626] w-full">
      <div className="w-[92%] flex items-center justify-between m-auto">
        {/* Logo */}
        <div>
          <Image src={logo} alt="Logo" className="w-[50px] h-auto" />
        </div>
        <nav>
          <ul className="flex space-x-4 items-center m-0 p-0 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`px-[20px] py-[12px] text-[#FFF] rounded-[6px] text-[15px] transition font-[500]
                    ${
                      pathname === link.href
                        ? "bg-[#262626]"
                        : "hover:bg-[#262626]"
                    }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contact"
          className="flex items-center gap-2 rounded-lg bg-[#6E7DC8] px-5 py-2 text-[#262626] font-medium hover:bg-[#5a6ba3] transition-colors"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;
