
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Bell, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-gov-navy mb-4">
                Advancing Defence Through Innovation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                DRDO is the R&D wing of Ministry of Defence, Government of India, 
                with a vision to empower India with cutting-edge defence technologies.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-gov-saffron hover:bg-orange-600">
                  Explore Technologies
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="outline" className="border-gov-green text-gov-green">
                  View Laboratories
                </Button>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-l-4 border-l-gov-saffron">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Star className="w-8 h-8 text-gov-saffron" />
                    <div>
                      <h4 className="font-bold text-gov-navy">50+ Labs</h4>
                      <p className="text-sm text-gray-600">Research Centers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-gov-green">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Star className="w-8 h-8 text-gov-green" />
                    <div>
                      <h4 className="font-bold text-gov-navy">5000+ Patents</h4>
                      <p className="text-sm text-gray-600">Technologies Developed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Star className="w-8 h-8 text-blue-500" />
                    <div>
                      <h4 className="font-bold text-gov-navy">25000+ Scientists</h4>
                      <p className="text-sm text-gray-600">Research Personnel</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Announcements Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Bell className="w-5 h-5 text-gov-saffron" />
                  <h3 className="font-bold text-gov-navy">Latest Announcements</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-gov-saffron pl-3">
                    <p className="text-sm font-medium">DRDO Recruitment 2024</p>
                    <p className="text-xs text-gray-600">Apply for Scientist positions</p>
                    <span className="text-xs text-gov-saffron">New</span>
                  </div>
                  <div className="border-l-2 border-gray-300 pl-3">
                    <p className="text-sm font-medium">Technology Transfer Guidelines</p>
                    <p className="text-xs text-gray-600">Updated procedures released</p>
                  </div>
                  <div className="border-l-2 border-gray-300 pl-3">
                    <p className="text-sm font-medium">Annual Report 2023-24</p>
                    <p className="text-xs text-gray-600">Download now available</p>
                  </div>
                </div>
                <Button variant="link" className="text-gov-green p-0 h-auto mt-4">
                  View All Announcements →
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-bold text-gov-navy mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-gov-green hover:underline">Online Application Portal</a>
                  <a href="#" className="block text-sm text-gov-green hover:underline">Technology Database</a>
                  <a href="#" className="block text-sm text-gov-green hover:underline">Publications</a>
                  <a href="#" className="block text-sm text-gov-green hover:underline">RTI Information</a>
                  <a href="#" className="block text-sm text-gov-green hover:underline">Tender Notices</a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
