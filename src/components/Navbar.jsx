import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Facebook, Instagram, ArrowRight } from "lucide-react";
import { logo } from "../assets/images";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar shrinking on scroll
      const scrolled = window.scrollY > 20;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }

      // Handle section detection for highlighting
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });

      // Handle home section when at the top
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Animation for the "You are here" text
  const cursorVariants = {
    animate: {
      x: [0, 5, 0],
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const centerMenuItems = [
    { title: "Home", href: "#", id: "" },
    { title: "About", href: "#about", id: "about" },
    { title: "Gallery", href: "#gallery", id: "gallery" },
  ];

  const rightMenuItems = [
    { title: "Shop", href: "#shop", id: "shop" },
    { title: "Contact", href: "#contact", id: "contact" },
  ];

  const allMenuItems = [...centerMenuItems, ...rightMenuItems];

  // Check if item is active
  const isActive = (id) => activeSection === id;

  return (
    <nav
      className={`fixed top-0 w-full bg-white dark:bg-gray-900 shadow-lg z-50 text-gray-700 
     dark:text-gray-200 transition-all duration-300 ${
       isScrolled ? "py-1" : "py-2"
     }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <img
              src={logo}
              alt="logo"
              className="h-16 w-auto object-contain max-w-[150px]"
            />
          </motion.div>

          {/* Desktop Menu - Three Section Layout */}
          <div className="hidden md:flex md:flex-1 md:justify-between items-center">
            {/* Center: Navigation Links */}
            <div className="flex-1"></div> {/* Spacer */}
            <div className="flex justify-center space-x-8">
              {centerMenuItems.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  className={`relative font-serif transition-colors duration-200 ${
                    isActive(item.id)
                      ? "text-[#4AA625] dark:text-[#4AA625] font-bold"
                      : "text-gray-700 dark:text-gray-200 hover:text-[#4AA625] dark:hover:text-[#4AA625]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.title}
                  {isActive(item.id) && (
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#4AA625]"
                      layoutId="underline"
                    />
                  )}
                </motion.a>
              ))}
            </div>
            {/* Right: Shop, Contact, Theme Toggle */}
            <div className="flex items-center justify-end flex-1 space-x-4">
              {rightMenuItems.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  className={`relative font-serif transition-colors duration-200 ${
                    isActive(item.id)
                      ? "text-[#4AA625] dark:text-[#4AA625] font-bold"
                      : "text-gray-700 dark:text-gray-200 hover:text-[#4AA625] dark:hover:text-[#4AA625]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.title}
                  {isActive(item.id) && (
                    <motion.span
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#4AA625]"
                      layoutId="underline"
                    />
                  )}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun className="w-5 h-5 text-[#FC930B]" />
                ) : (
                  <Moon className="w-5 h-5 text-[#4AA625]" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
              className="p-2 rounded-md text-[#4AA625] dark:text-[#4AA625]"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden fixed inset-0 top-16 bg-white dark:bg-gray-900 z-40 flex flex-col"
          >
            <div className="flex flex-col h-full px-4 pt-8 pb-6 flex-grow">
              {/* Current Page Indicator */}
              {activeSection && (
                <motion.div
                  className="mb-6 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.p
                    className="font-serif italic text-lg text-[#4AA625] dark:text-[#4AA625] flex items-center justify-center"
                    variants={cursorVariants}
                    animate="animate"
                  >
                    <span>You are here</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                    <span className="ml-2 font-bold not-italic">
                      {allMenuItems.find((item) => item.id === activeSection)
                        ?.title || ""}
                    </span>
                  </motion.p>
                </motion.div>
              )}

              <div className="flex-grow flex flex-col items-center justify-center">
                {allMenuItems.map((item, i) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    variants={linkVariants}
                    custom={i}
                    className={`relative block text-3xl font-semibold py-5 transition-all duration-200 text-center ${
                      isActive(item.id)
                        ? "text-[#4AA625] dark:text-[#4AA625] font-bold"
                        : "text-gray-700 dark:text-gray-200 hover:text-[#4AA625] dark:hover:text-[#4AA625]"
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.title}
                    {isActive(item.id) && (
                      <motion.div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                        <div className="h-1 w-8 bg-[#4AA625] rounded-full"></div>
                      </motion.div>
                    )}
                  </motion.a>
                ))}
              </div>

              {/* Theme Toggle and Social Links */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6 w-full fixed bottom-0 left-0 bg-white dark:bg-gray-900 pb-8">
                <div className="flex justify-center space-x-8 items-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleTheme}
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-[#4AA625] dark:text-[#FC930B]"
                    aria-label="Toggle theme"
                  >
                    {isDark ? (
                      <Sun className="w-6 h-6" />
                    ) : (
                      <Moon className="w-6 h-6" />
                    )}
                  </motion.button>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-[#4AA625] dark:text-[#4AA625] hover:text-[#FC930B] dark:hover:text-[#FC930B]"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-[#4AA625] dark:text-[#4AA625] hover:text-[#FC930B] dark:hover:text-[#FC930B]"
                    aria-label="X (Twitter)"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"
                        fill="currentColor"
                      />
                    </svg>
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-[#4AA625] dark:text-[#4AA625] hover:text-[#FC930B] dark:hover:text-[#FC930B]"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;