
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <img src="/lovable-uploads/c27ffb19-5667-452e-a26a-87cc1a38574a.png" alt="DRDO Logo" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold text-gov-blue">DTTC</h1>
              <p className="text-sm text-gray-600">Defence Technology & Test Centre</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-gov-blue transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gov-blue transition-colors">
              About
            </Link>
            <Link to="/laboratories" className="text-gray-700 hover:text-gov-blue transition-colors">
              Laboratories
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                className="flex items-center text-gray-700 hover:text-gov-blue transition-colors"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg z-50 border">
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Our Services
                  </Link>
                  <Link
                    to="/schemes-services"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    Schemes & Services
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/facilities" className="text-gray-700 hover:text-gov-blue transition-colors">
              Facilities
            </Link>
            <Link to="/test-facilities" className="text-gray-700 hover:text-gov-blue transition-colors">
              Test Facilities
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gov-blue transition-colors">
              Contact
            </Link>
            <Link
              to="/login"
              className="bg-gov-blue text-white px-4 py-2 rounded-md hover:bg-gov-blue-light transition-colors"
            >
              Login
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className="text-gray-700 hover:text-gov-blue py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-gov-blue py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/laboratories"
                className="text-gray-700 hover:text-gov-blue py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Laboratories
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-gov-blue py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/schemes-services"
                className="text-gray-700 hover:text-gov-blue py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Schemes & Services
              </Link>
              <Link
                to="/facilities"
                className="text-gray-700 hover:text-gov-blue py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Facilities
              </Link>
              <Link
                to="/test-facilities"
                className="text-gray-700 hover:text-gov-blue py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Test Facilities
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-gov-blue py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/login"
                className="bg-gov-blue text-white px-4 py-2 rounded-md hover:bg-gov-blue-light transition-colors inline-block"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
