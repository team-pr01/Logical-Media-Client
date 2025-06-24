import { Link } from "react-router-dom";
import { ICONS } from "../../../assets";
import Container from "../../reusable/Container/Container";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FaInstagram className="text-xl" />, // Adjusted icon size
      url: "https://www.instagram.com",
    },
    {
      id: 2,
      icon: <FaYoutube className="text-xl" />, // Adjusted icon size
      url: "https://www.youtube.com",
    },
    {
      id: 3,
      icon: <FaTwitter className="text-xl" />, // Adjusted icon size
      url: "https://www.twitter.com",
    },
    {
      id: 4,
      icon: <FaLinkedinIn className="text-xl" />, // Adjusted icon size
      url: "https://www.linkedin.com",
    },
  ];

  const links = [
    {
      title: "Company",
      links: [
        { name: "About Us", url: "/about-us" },
        { name: "Contact Us", url: "/contact-us" },
        { name: "Services", url: "/services" },
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms of Services", url: "/terms-of-services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", url: "/case-studies" },
        { name: "Tool Kits", url: "/tool-kits" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: ICONS.call,
      href: "tel:7014381556",
      text: "7014381556",
    },
    {
      icon: ICONS.mail,
      href: "mailto:logicalmedia@gmail.com",
      text: "logicalmedia@gmail.com",
    },
    {
      icon: ICONS.location,
      text: "Tameem House Office Building, Barsha Heights, Dubai, United Arab Emirates",
    },
  ];

  return (
    <div className="bg-primary-10 font-Lato py-16">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-12">
          <div className="w-full lg:max-w-sm">
            <img
              src={ICONS.logoWhite}
              alt="Logical Media Logo"
              className="w-[150px]"
            />
            <h2 className="text-2xl font-medium text-white mt-8 mb-4">
              Reach Out to Us
            </h2>

            <div className="flex items-center border-2 border-white p-1 rounded-full w-full mt-3">
              <input
                type="email"
                placeholder="Enter your email here"
                className="flex-1 bg-transparent text-white px-4 py-2 focus:outline-none placeholder-white"
              />
              <button
                type="submit"
                className="bg-white text-[#db4f3f] p-2 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer transition"
              >
                <img src={ICONS.rightArrow} alt="Submit email" />
              </button>
            </div>

            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ id, icon, url }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-full size-10 flex items-center justify-center  hover:scale-110 transition"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-16">
            {links?.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-bold text-white mb-6">
                  {item.title}
                </h3>
                <div className="mt-6 flex flex-col gap-4">
                  {item?.links?.map((link) => (
                    <Link
                      key={link.name}
                      to={link.url}
                      className="text-base leading-normal text-white hover:underline"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact</h3>
              <div className="mt-6 flex flex-col gap-5">
                {contactInfo?.map((item) =>
                  item.href ? (
                    <a
                      key={item.text}
                      href={item.href}
                      className="text-base leading-normal text-white flex items-center gap-3 hover:underline"
                    >
                      <img src={item.icon} alt="" className="size-5" />
                      <span>{item.text}</span>
                    </a>
                  ) : (
                    <p
                      key={item.text}
                      className="text-base leading-normal text-white flex items-start gap-3 max-w-xs"
                    >
                      <img src={item.icon} alt="" className="size-5" />
                      <span>{item.text}</span>
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
