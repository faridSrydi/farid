'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Deteksi scroll untuk mengubah style navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking on a link
  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/projects' },
    { label: 'About', href: '/about' },
  ];

  return (
    <div className="fixed top-6 inset-x-0 max-w-2xl mx-auto z-50 px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`
          flex items-center justify-between px-6 py-3 rounded-full 
          border transition-all duration-300
          ${scrolled 
            ? 'bg-black/50 border-white/10 backdrop-blur-md shadow-lg shadow-purple-500/10' 
            : 'bg-transparent border-transparent'}
        `}
      >
        {/* Logo minimalis */}
        <Link href="/" className="font-bold text-xl tracking-tighter text-white">
          D<span className="text-purple-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, idx) => (
            <Link key={idx} href={item.href}>
              <motion.div
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                className="px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Contact Button (Gradient Border) */}
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-5 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-200 transition-colors"
          >
            Let's Talk
          </motion.button>
        </Link>
        
        {/* Mobile Toggle (Simple dot) */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 items-end group relative"
        >
           <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
           <span className={`w-4 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mt-4 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-md overflow-hidden shadow-lg shadow-purple-500/20"
        >
          <div className="flex flex-col py-4">
            {navItems.map((item, idx) => (
              <Link key={idx} href={item.href} onClick={handleNavClick}>
                <motion.div
                  whileHover={{ backgroundColor: 'rgba(168,85,247,0.1)' }}
                  className="px-6 py-3 text-base text-gray-300 hover:text-white hover:border-l-2 hover:border-purple-500 transition-colors"
                >
                  {item.label}
                </motion.div>
              </Link>
            ))}
            
            {/* Mobile Contact Button */}
            <Link href="/contact" onClick={handleNavClick}>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mx-4 mb-2 w-full py-3 text-sm font-medium bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
              >
                Let's Talk
              </motion.button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}