"use client";

import { Link, useLocation } from "react-router-dom";
import { ICONS } from "../../../assets";
import Container from "../../reusable/Container/Container";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Products", href: "/products" },
  { name: "Resources", href: "/resources" },
  { name: "Blogs", href: "/blogs" },
];

const Navbar = () => {
  const location = useLocation();

  return (
    <Container>
      <div className="flex justify-between items-center py-6 font-Inter">
        {/* Logo */}
        <div>
          <img src={ICONS.logo} alt="Logo" className="w-[150px]" />
        </div>

        {/* Nav Links */}
        <div className="flex items-center gap-9">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-[24px] leading-normal transition-colors duration-300 ${
                location.pathname === link.href
                  ? "text-primary-10 underline"
                  : "text-neutral-10 hover:text-primary-10 hover:underline"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Call to Action Button */}
        <Link
          to="/book-a-call"
          className="bg-primary-10 border border-primary-10 hover:bg-white hover:text-primary-10 text-white text-[24px] px-6 py-2 rounded-[36px] shadow transition duration-300"
          style={{ boxShadow: "1px 2px 6px 0px rgba(0, 0, 0, 0.25)" }}
        >
          Book a Call
        </Link>
      </div>
    </Container>
  );
};

export default Navbar;
