import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";


const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add effect to prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className=" mx-5 md:container md:mx-auto">
        {/* Desktop Navigation */}
        <div
          className={`hidden mx-10 md:flex justify-between items-center mt-4 rounded-full h-16 px-6 transition-all duration-300 ${
            scrolled ? "bg-white shadow-md" : "bg-white/20 backdrop-blur-lg"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-16 w-16" />
          </Link>

          {/* Center Navigation Links */}
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium text-sm uppercase tracking-wide transition-all duration-300 ${
                  isActivePath(link.path)
                    ? "font-extrabold"
                    : scrolled
                    ? "text-black"
                    : "text-gray-800"
                } hover:scale-95`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Place Other Button */}
          <Link
            to="/order"
            className="bg-[#101828] text-white px-6 py-2 rounded-full hover:bg-[#1d2939] transition-colors"
          >
            Place Order
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden w-full justify-between items-center mx-0 mt-4">
          <div className={`flex justify-between items-center w-full rounded-full px-4 py-2 shadow-sm transition-all duration-300 ${
            scrolled ? "bg-white" : "bg-white/20 backdrop-blur-lg"
          }`}>
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Logo" className="h-10 w-10" />
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-1 h-10 w-10 rounded-full ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              <Menu size={24} />
            </Button>
          </div>
        </div>

        {/* Dark Overlay */}
        <div 
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-[70%] bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6">
            <div className="flex justify-end">
              <Button
                variant="ghost"
                onClick={() => setIsMenuOpen(false)}
                className="p-0 rounded-full bg-[#101828] h-12 w-12 flex items-center justify-center"
              >
                <X className="h-6 w-6 text-white" />
              </Button>
            </div>

            <div className="flex flex-col items-start space-y-0 mt-12">
              {navLinks.map((link, index) => (
                <div key={link.name} className="w-full">
                  <Link
                    to={link.path}
                    className={`text-xl font-medium transition-all duration-300 block py-4 ${
                      isActivePath(link.path) ? "font-bold text-black" : "text-black"
                    } hover:scale-90`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <div className="h-px w-full bg-gray-300"></div>
                  )}
                </div>
              ))}
              
              {/* Using a spacer div for better control of spacing */}
              <div className="flex-grow min-h-16"></div>
              
              <div className="w-full pt-0">
                <Link
                  to="/order"
                  className="bg-[#101828] text-white px-6 w-full text-center py-2 rounded-full hover:bg-[#1d2939] transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Place Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;