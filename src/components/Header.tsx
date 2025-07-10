
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Contact Bar */}
      <div className="bg-gov-blue-dark text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-3 h-3" />
              <span>+91-11-23317725</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-3 h-3" />
              <span>info@drdo.gov.in</span>
            </div>
          </div>
          <div className="hidden md:flex space-x-4 text-xs">
            <a href="#" className="hover:text-blue-300">हिंदी</a>
            <a href="#" className="hover:text-blue-300">Screen Reader</a>
            <a href="#" className="hover:text-blue-300">Skip to Content</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gov-blue border-b-4 border-gov-accent">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo and Title */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-gov-accent">
                <span className="text-gov-blue font-bold text-xl">DRDO</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Defence Research and Development Organisation
                </h1>
                <p className="text-sm text-blue-200">Ministry of Defence, Government of India</p>
              </div>
            </div>

            {/* Search */}
            <div className="hidden md:flex items-center space-x-2">
              <Input 
                placeholder="Search..." 
                className="w-64 bg-white/90 border-blue-300" 
              />
              <Button size="sm" className="bg-gov-accent hover:bg-blue-400 text-gov-blue">
                <Search className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gov-blue-light text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="hidden md:flex space-x-8 py-3">
              <a href="#" className="hover:text-blue-300 transition-colors">Home</a>
              <a href="#" className="hover:text-blue-300 transition-colors">DRDO</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Organisation</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Outreach</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Careers</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Publications</a>
              <a href="#" className="hover:text-blue-300 transition-colors">RTI</a>
              <a href="#" className="hover:text-blue-300 transition-colors">Contact Us</a>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden text-white hover:text-blue-300"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
