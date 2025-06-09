import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoW from '../images/logowhite.svg';
import logo from '../images/logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Pourquoi Nous", href: "#why-us" },
    { name: "Réalisations", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom">
        <nav className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img
              src={
                isScrolled
                  ?logo// logo vert
                  : logoW // logo blanc
              }
              alt="Moderne Irrigation Technique"
              className="h-12 md:h-14 transition-all duration-300"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-secondary transition-colors ${isScrolled ? 'text-primary' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-accent text-sm font-medium text-primary">
              Contactez-nous
            </a>
          </div>

          {/* Mobile Navigation */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X className={isScrolled ? 'text-primary' : 'text-white'} size={24} />
            ) : (
              <Menu className={isScrolled ? 'text-primary' : 'text-white'} size={24} />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 px-4 z-50 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-primary text-sm font-medium hover:text-secondary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-accent text-sm font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Contactez-nous
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
