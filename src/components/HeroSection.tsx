
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Bell, Star, Building, Users, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <>
      {/* Main Hero Section with Background */}
      <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 py-16 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: "url('/lovable-uploads/214e3c88-f20f-4e9f-a64c-607cd0678f80.png')"
          }}
        />
        
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-blue-50/60" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gov-blue mb-4">
              DTTC - Defence Technology & Test Centre
            </h1>
            <p className="text-xl text-gray-700 mb-2">
              Ministry of Defence, Government of India
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Empowering India's Defence through Advanced Technology, Testing & Innovation
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-gov-blue hover:bg-gov-blue-light">
                Explore Our Services
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-gov-blue text-gov-blue hover:bg-gov-blue hover:text-white">
                View Laboratories
              </Button>
            </div>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-l-4 border-l-gov-blue bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Building className="w-8 h-8 text-gov-blue mx-auto mb-2" />
                <h4 className="font-bold text-2xl text-gov-blue">50+</h4>
                <p className="text-sm text-gray-600">DRDO Labs</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-gov-accent bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Users className="w-8 h-8 text-gov-accent mx-auto mb-2" />
                <h4 className="font-bold text-2xl text-gov-blue">25,000+</h4>
                <p className="text-sm text-gray-600">Scientists</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-gov-blue-light bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Award className="w-8 h-8 text-gov-blue-light mx-auto mb-2" />
                <h4 className="font-bold text-2xl text-gov-blue">5,000+</h4>
                <p className="text-sm text-gray-600">Patents</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500 bg-white/95 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <Star className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h4 className="font-bold text-2xl text-gov-blue">6</h4>
                <p className="text-sm text-gray-600">DTTC Verticals</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Announcements and Quick Links Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Announcements */}
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Bell className="w-5 h-5 text-gov-blue" />
                  <h3 className="font-bold text-gov-blue">Latest Announcements</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-gov-blue pl-3">
                    <p className="text-sm font-medium">DTTC Technology Incubation Program 2024</p>
                    <p className="text-xs text-gray-600">Applications open for startups and MSMEs</p>
                    <span className="text-xs text-gov-blue">New</span>
                  </div>
                  <div className="border-l-2 border-gray-300 pl-3">
                    <p className="text-sm font-medium">Advanced Manufacturing Workshop</p>
                    <p className="text-xs text-gray-600">Skill development program registration</p>
                  </div>
                  <div className="border-l-2 border-gray-300 pl-3">
                    <p className="text-sm font-medium">HPC Facility Access Guidelines</p>
                    <p className="text-xs text-gray-600">Updated procedures for researchers</p>
                  </div>
                </div>
                <Button variant="link" className="text-gov-blue p-0 h-auto mt-4">
                  View All Announcements →
                </Button>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="bg-white border border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-gov-blue mb-4">Quick Access</h3>
                <div className="grid grid-cols-2 gap-3">
                  <a href="/facilities" className="block text-sm text-gov-blue hover:underline p-2 bg-gray-50 rounded">
                    🖥️ HPC Facilities
                  </a>
                  <a href="/test-facilities" className="block text-sm text-gov-blue hover:underline p-2 bg-gray-50 rounded">
                    🔬 Testing Equipment
                  </a>
                  <a href="/schemes-services" className="block text-sm text-gov-blue hover:underline p-2 bg-gray-50 rounded">
                    🚀 Startup Programs
                  </a>
                  <a href="/laboratories" className="block text-sm text-gov-blue hover:underline p-2 bg-gray-50 rounded">
                    🏢 DRDO Labs
                  </a>
                  <a href="/services" className="block text-sm text-gov-blue hover:underline p-2 bg-gray-50 rounded">
                    ⚙️ Our Services
                  </a>
                  <a href="/contact" className="block text-sm text-gov-blue hover:underline p-2 bg-gray-50 rounded">
                    📞 Contact Us
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
