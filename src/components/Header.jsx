import { useState } from "react";
import { Link } from "react-router";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Tools", href: "/tools" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" }
    
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-indigo-600">MyTools</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-gray-700 hover:text-indigo-600 transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col gap-[5px]"
          >
            <span
              className={`w-7 h-[3px] bg-gray-800 transition ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-7 h-[3px] bg-gray-800 transition ${
                open ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-7 h-[3px] bg-gray-800 transition ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-4 py-3 gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-indigo-600 transition"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
