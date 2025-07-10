
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gov-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gov-saffron rounded-full flex items-center justify-center">
                <span className="text-white font-bold">DRDO</span>
              </div>
              <h3 className="text-lg font-bold">DRDO</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Defence Research and Development Organisation is the R&D wing of 
              Ministry of Defence, Government of India.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="ghost" className="text-white hover:text-gov-saffron p-2">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-gov-saffron p-2">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-gov-saffron p-2">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="ghost" className="text-white hover:text-gov-saffron p-2">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-gov-saffron text-sm">About DRDO</a>
              <a href="#" className="block text-gray-300 hover:text-gov-saffron text-sm">Laboratories</a>
              <a href="#" className="block text-gray-300 hover:text-gov-saffron text-sm">Technologies</a>
              <a href="#" className="block text-gray-300 hover:text-gov-saffron text-sm">Careers</a>
              <a href="#" className="block text-gray-300 hover:text-gov-saffron text-sm">Publications</a>
              <a href="#" className="block text-gray-300 hover:text-gov-saffron text-sm">Tenders</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-gov-saffron text-sm">Technology Transfer</a>
              <a href="#" className="block text-gray-300 hover:text-gov-saffron text-sm">Industry Collaboration</a>
              <a href="#" className="block text-gray-300 hover:text-gov-saffron text-sm">Research Partnerships</a>
              <a href="#" className="block text-gray-300 hover:text-gov-saffron text-sm">Training Programs</a>
              <a href="#" className="block text-gray-300 hover:text-gov-saffron text-sm">Consultancy</a>
              <a href="#" className="block text-gray-300 hover:text-gov-saffron text-sm">RTI</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1 text-gov-saffron" />
                <div>
                  <p className="text-gray-300 text-sm">
                    DRDO Bhawan, New Delhi - 110011
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-gov-saffron" />
                <p className="text-gray-300 text-sm">+91-11-23317725</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-gov-saffron" />
                <p className="text-gray-300 text-sm">info@drdo.gov.in</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-medium mb-3">Subscribe to Updates</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Email address" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button size="sm" className="bg-gov-saffron hover:bg-orange-600">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Defence Research and Development Organisation. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-gov-saffron text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-gov-saffron text-sm">Terms of Use</a>
              <a href="#" className="text-gray-300 hover:text-gov-saffron text-sm">Accessibility</a>
              <a href="#" className="text-gray-300 hover:text-gov-saffron text-sm">Site Map</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
