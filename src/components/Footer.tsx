import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#121416] text-white py-16 px-4 md:px-12 lg:px-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Logo and Social Media Section */}
          <div className="mb-8 lg:mb-0">
            <img src="/logo.png" alt="Logo" className="h-12 w-auto mb-4" />
            <p className="text-gray-400 mb-4">Follow us on Social Media</p>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-white hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Three Column Section */}
          <div className="grid grid-cols-1 md:w-[60%] md:grid-cols-3 gap-8 lg:gap-16">
            {/* Product Column */}
            <div>
              <h3 className="text-lg font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><Link to="/table-water" className="text-white hover:text-gray-300">Table Water</Link></li>
                <li><Link to="/sachet-water" className="text-white hover:text-gray-300">Sachet Water</Link></li>
                <li><Link to="/refill-jars" className="text-white hover:text-gray-300">Refill Jars</Link></li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-white hover:text-gray-300">About Us</Link></li>
                <li><Link to="/services" className="text-white hover:text-gray-300">Services</Link></li>
                <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Us Column */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>info@kilenaby.com</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-1" />
                  <span>123 Water Street, City, State 12345</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white mb-4 md:mb-0">Copyright © {new Date().getFullYear()} KlienAby Water</p>
            <div className="flex space-x-4">
              <Link to="/terms" className="text-white hover:text-gray-300">Terms and Conditions</Link>
              <span className="text-white">|</span>
              <Link to="/privacy" className="text-white hover:text-gray-300">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;