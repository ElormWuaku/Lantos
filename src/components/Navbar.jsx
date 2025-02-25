import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Facebook, Instagram } from 'lucide-react';
import { logo } from '../assets/images';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== isScrolled) {
        setIsScrolled(isScrolled);
      }  
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2
      }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2
      }
    }
  };

  const linkVariants = {
    closed: { y: 20, opacity: 0 },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  const centerMenuItems = [
    { title: 'Home', href: '#' },
    { title: 'Gallery', href: '#Gallery' },
    { title: 'About', href: '#about' },
  ];

  const rightMenuItems = [
    { title: 'Shop', href: '#shop' },
    { title: 'Contact', href: '#contact' },
  ];

  const allMenuItems = [...centerMenuItems, ...rightMenuItems];

  return (
    <nav className="fixed top-0 w-full dark:bg-gray-900 shadow-lg z-50
    iscrolled:bg-white dark:shadow-lg dark:text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <img src={logo} alt="logo" className='h-16 w-auto object-contain max-w-[150px]' />
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
                  className="text-gray-700 dark:text-gray-200 hover:text-[#4AA625] dark:hover:text-[#4AA625] font-serif transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.title}
                </motion.a>
              ))}
            </div>
            
            {/* Right: Shop, Contact, Theme Toggle */}
            <div className="flex items-center justify-end flex-1 space-x-8">
              {rightMenuItems.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-[#4AA625] dark:hover:text-[#4AA625] font-serif transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.title}
                </motion.a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5 text-[#FC930B]" /> : <Moon className="w-5 h-5 text-[#4AA625]" />}
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
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              <div className="flex-grow flex flex-col items-center justify-center">
                {allMenuItems.map((item, i) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    variants={linkVariants}
                    custom={i}
                    className="block text-3xl font-semibold py-5 text-gray-700 dark:text-gray-200 hover:text-[#4AA625] dark:hover:text-[#4AA625] transition-colors duration-200 text-center"
                    onClick={toggleMenu}
                  >
                    {item.title}
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
                    {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
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
                    {/* Custom X icon since it's not in Lucide */}
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" 
                        fill="currentColor" />
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