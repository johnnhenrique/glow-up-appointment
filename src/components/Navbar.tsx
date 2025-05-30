
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold font-playfair text-clinic-dark">
            Rosane<span className="text-clinic-primary">Medeiros</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-clinic-dark hover:text-clinic-rose transition-colors">Início</Link>
          <button 
            onClick={() => scrollToSection('servicos')}
            className="text-clinic-dark hover:text-clinic-rose transition-colors"
          >
            Serviços
          </button>
          <button 
            onClick={() => scrollToSection('precos')}
            className="text-clinic-dark hover:text-clinic-rose transition-colors"
          >
            Preços
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-clinic-dark hover:text-clinic-rose transition-colors"
          >
            Sobre Mim
          </button>
          <button 
            onClick={() => scrollToSection('contato')}
            className="text-clinic-dark hover:text-clinic-rose transition-colors"
          >
            Contato
          </button>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/agendar">
            <Button className="bg-clinic-rose hover:bg-clinic-rose/90 text-white flex items-center gap-2">
              <Calendar size={16} />
              Agendar
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-clinic-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link to="/" className="text-clinic-dark hover:text-clinic-rose transition-colors">Início</Link>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-left text-clinic-dark hover:text-clinic-rose transition-colors"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('precos')}
              className="text-left text-clinic-dark hover:text-clinic-rose transition-colors"
            >
              Preços
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-left text-clinic-dark hover:text-clinic-rose transition-colors"
            >
              Sobre Mim
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-left text-clinic-dark hover:text-clinic-rose transition-colors"
            >
              Contato
            </button>
            <div className="flex flex-col space-y-2 pt-2">
              <Link to="/agendar">
                <Button className="w-full justify-center bg-clinic-rose hover:bg-clinic-rose/90 text-white flex items-center gap-2">
                  <Calendar size={16} />
                  Agendar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
