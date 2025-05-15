import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-dark/90 backdrop-blur-md" : "bg-transparent"
      } border-b border-dark-light`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="text-2xl font-bold text-white flex items-center" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
          >
            <span className="text-[#0DF0FF] text-shadow-cyan">YOGA</span>
            <span className="text-[#FF2DB6] text-shadow-pink">KARTHIK</span>
            <span className="text-[#6EFF41] text-shadow-green">RAJ</span>
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'gaming', label: 'Gaming' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'contact', label: 'Contact' }
            ].map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                className={`transition-colors ${
                  activeSection === item.id 
                    ? item.id === 'gaming' ? 'text-[#FF2DB6]' 
                    : item.id === 'gallery' ? 'text-[#6EFF41]' 
                    : 'text-[#0DF0FF]' 
                    : 'text-white'
                } hover:${
                  item.id === 'gaming' ? 'text-[#FF2DB6]' 
                  : item.id === 'gallery' ? 'text-[#6EFF41]' 
                  : 'text-[#0DF0FF]'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} mt-4 border-t border-dark-light pt-4`}>
          <div className="flex flex-col space-y-4">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'gaming', label: 'Gaming' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'contact', label: 'Contact' }
            ].map(item => (
              <a 
                key={item.id}
                href={`#${item.id}`}
                className={`transition-colors ${
                  activeSection === item.id 
                    ? item.id === 'gaming' ? 'text-[#FF2DB6]' 
                    : item.id === 'gallery' ? 'text-[#6EFF41]' 
                    : 'text-[#0DF0FF]' 
                    : 'text-white'
                } hover:${
                  item.id === 'gaming' ? 'text-[#FF2DB6]' 
                  : item.id === 'gallery' ? 'text-[#6EFF41]' 
                  : 'text-[#0DF0FF]'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
