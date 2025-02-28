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
import { Link } from "react-router-dom"; // Assuming you're using React Router

const Footer = () => {
  // Using the same brand colors from Hero component
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

  // Quick links
  const quickLinks = [
    { title: "Home", href: "#", id: "" },
    { title: "About", href: "#about", id: "about" },
    { title: "Gallery", href: "#gallery", id: "gallery" },
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
      url: "https://instagram.com/lantoscreativeconcept",
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
        className="max-w-7xl mx-auto px-4 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col space-y-4"
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

          {/* Column 2: Quick Links */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col space-y-4"
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
                  <Link to={link.path} className="flex items-center group">
                    <ArrowRight
                      size={16}
                      className="mr-2 transition-all duration-300 transform group-hover:translate-x-1"
                      style={{ color: brandColors.primary }}
                    />
                    <span
                      className="text-sm transition-all duration-300 group-hover:translate-x-1"
                      style={{ color: brandColors.dark }}
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col space-y-4"
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
                <Phone
                  size={20}
                  className="mr-2 flex-shrink-0"
                  style={{ color: brandColors.primary }}
                />
                <span className="text-sm" style={{ color: brandColors.dark }}>
                  +233 500 353 555
                </span>
              </li>
              <li className="flex items-center">
                <Mail
                  size={20}
                  className="mr-2 flex-shrink-0"
                  style={{ color: brandColors.primary }}
                />
                <a
                  href="mailto:info@lantoscreative.com"
                  className="text-sm hover:underline"
                  style={{ color: brandColors.dark }}
                >
                  info@lantoscreative.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col space-y-4"
          >
            <h3
              className="text-xl font-bold"
              style={{ color: brandColors.primary }}
            >
              Stay Updated
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: brandColors.dark }}
            >
              Subscribe to our newsletter for the latest updates on our products
              and innovations.
            </p>
            <form className="flex flex-col space-y-3">
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                  style={{ color: brandColors.primary }}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-10 pr-3 py-2 text-sm rounded-md border focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{
                    borderColor: `${brandColors.primary}50`,
                    "--tw-ring-color": brandColors.primary,
                  }}
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-2 rounded-md text-white text-sm font-medium"
                style={{ backgroundColor: brandColors.primary }}
                whileHover={{ backgroundColor: brandColors.dark }}
                whileTap={{ scale: 0.97 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          variants={itemVariants}
          className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center"
          style={{ borderColor: `${brandColors.dark}20` }}
        >
          <p
            className="text-sm text-center md:text-left"
            style={{ color: brandColors.dark }}
          >
            © {currentYear} Lanto&apos;s Creative Concept. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="/privacy-policy"
              className="text-xs hover:underline"
              style={{ color: brandColors.dark }}
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-xs hover:underline"
              style={{ color: brandColors.dark }}
            >
              Terms of Service
            </a>
            <a
              href="/faq"
              className="text-xs hover:underline"
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
