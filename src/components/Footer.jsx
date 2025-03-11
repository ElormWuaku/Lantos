import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  // Brand colors
  const brandColors = {
    primary: "#4AA625", // Green as primary
    secondary: "#FC940E", // Orange accent
    dark: "#222222", // Dark text color
    light: "#FFFFFF", // White
  };

  const currentYear = new Date().getFullYear();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const socialLinkVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: {
      scale: 1.15,
      transition: { duration: 0.2 },
    },
  };

  // Quick links - fixed to use href correctly with appropriate path values
  const quickLinks = [
    { title: "Home", href: "#home", id: "home" },
    { title: "About", href: "#about", id: "about" },
    { title: "Art Gallery", href: "#art-gallery", id: "art-gallery" },
    { title: "Smart Table", href: "#smart-table", id: "smart-table" },
    { title: "Shop", href: "#shop", id: "shop" },
    { title: "Contact", href: "#contact", id: "contact" },
  ];

  // Social media links
  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook size={20} />,
      url: "https://facebook.com/lantoscreativeconcept",
      color: "#1877F2",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/lantos_creative_concept?igsh=MTg2a29nbHQ5OXlnMA%3D%3D&utm_source=qr",
      color: "#E4405F",
    },
    {
      name: "X (Twitter)",
      icon: <Twitter size={20} />,
      url: "https://x.com/lantoscreative",
      color: "#000000",
    },
  ];

  return (
    <footer className="relative bg-white">
      {/* Decorative accent line */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(to right, ${brandColors.primary}, ${brandColors.secondary})`,
        }}
      ></div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Company Info - Now wider on larger screens */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col space-y-4 md:col-span-1"
          >
            <h3
              className="text-xl font-bold"
              style={{ color: brandColors.primary }}
            >
              Lanto&apos;s Creative Concept
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: brandColors.dark }}
            >
              Innovating at the intersection of technology and sustainability to
              create smart, eco-friendly furniture solutions for modern living.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-3 mt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full"
                  style={{
                    backgroundColor: brandColors.light,
                    color: social.color,
                    border: `1px solid ${social.color}`,
                  }}
                  variants={socialLinkVariants}
                  whileHover="hover"
                  aria-label={`Visit our ${social.name} page`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links - Centered in the new layout */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col space-y-4 md:col-span-1"
          >
            <h3
              className="text-xl font-bold"
              style={{ color: brandColors.primary }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default anchor behavior
                      document.querySelector(link.href).scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="flex items-center group text-sm hover:text-opacity-80 transition-all duration-300"
                    style={{ color: brandColors.dark }}
                  >
                    <ArrowRight
                      size={16}
                      className="mr-2 transition-transform duration-300 transform group-hover:translate-x-1"
                      style={{ color: brandColors.primary }}
                    />
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {link.title}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info - Now last column */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col space-y-4 md:col-span-1"
          >
            <h3
              className="text-xl font-bold"
              style={{ color: brandColors.primary }}
            >
              Contact Us
            </h3>
            <ul className="flex flex-col space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="mr-2 flex-shrink-0 mt-1"
                  style={{ color: brandColors.primary }}
                />
                <span className="text-sm" style={{ color: brandColors.dark }}>
                  123 Innovation Drive, Accra, Ghana
                </span>
              </li>
              <li className="flex items-center">
                <a
                  href="tel:+233203390633"
                  className="flex items-center hover:underline"
                >
                  <Phone
                    size={20}
                    className="mr-2 flex-shrink-0"
                    style={{ color: brandColors.primary }}
                  />
                  <span className="text-sm" style={{ color: brandColors.dark }}>
                  +233 203 390 633
                  </span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="mailto:info@lantoscreative.com"
                  className="flex items-center hover:underline"
                >
                  <Mail
                    size={20}
                    className="mr-2 flex-shrink-0"
                    style={{ color: brandColors.primary }}
                  />
                  <span className="text-sm" style={{ color: brandColors.dark }}>
                    lantoscreativeconcept@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright Section - Improved responsive layout */}
        <motion.div
          variants={itemVariants}
          className="border-t mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center"
          style={{ borderColor: `${brandColors.dark}20` }}
        >
          <p
            className="text-sm text-center sm:text-left mb-4 sm:mb-0"
            style={{ color: brandColors.dark }}
          >
            © {currentYear} Lanto&apos;s Creative Concept. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <a
              href="/privacy-policy"
              className="text-xs hover:underline transition-colors duration-300"
              style={{ color: brandColors.dark }}
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-xs hover:underline transition-colors duration-300"
              style={{ color: brandColors.dark }}
            >
              Terms of Service
            </a>
            <a
              href="/faq"
              className="text-xs hover:underline transition-colors duration-300"
              style={{ color: brandColors.dark }}
            >
              FAQ
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;