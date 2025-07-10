
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, FileText, Award, Rocket } from "lucide-react";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "DRDO Successfully Tests Advanced Air Defence System",
      excerpt: "The indigenous air defence system demonstrated exceptional performance in recent trials, marking a significant milestone in India's defence capabilities.",
      date: "2024-01-08",
      category: "Technology",
      icon: <Rocket className="w-5 h-5" />,
      featured: true
    },
    {
      id: 2,
      title: "Young Scientist Laboratory Awards 2024",
      excerpt: "Recognizing outstanding contributions by young researchers in defence technology development and innovation.",
      date: "2024-01-05",
      category: "Awards",
      icon: <Award className="w-5 h-5" />
    },
    {
      id: 3,
      title: "New Guidelines for Industry Collaboration",
      excerpt: "Updated framework for private sector participation in defence research and development projects.",
      date: "2024-01-03",
      category: "Policy",
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 4,
      title: "International Conference on Defence Technologies",
      excerpt: "DRDO hosts global experts to discuss emerging trends in defence research and future technologies.",
      date: "2024-01-01",
      category: "Events",
      icon: <Calendar className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gov-navy mb-4">News & Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest developments, achievements, and announcements from DRDO
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured News */}
          <div className="lg:col-span-2">
            {newsItems
              .filter(item => item.featured)
              .map(item => (
                <Card key={item.id} className="mb-6 border-l-4 border-l-gov-saffron">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gov-saffron/10 p-3 rounded-lg">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="secondary" className="bg-gov-saffron text-white">
                            {item.category}
                          </Badge>
                          <span className="text-sm text-gray-500 flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(item.date).toLocaleDateString('en-IN')}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gov-navy mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 mb-4">
                          {item.excerpt}
                        </p>
                        <Button variant="link" className="text-gov-green p-0 h-auto">
                          Read Full Article
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

            {/* Regular News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {newsItems
                .filter(item => !item.featured)
                .map(item => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline">{item.category}</Badge>
                        <span className="text-xs text-gray-500 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(item.date).toLocaleDateString('en-IN')}
                        </span>
                      </div>
                      <CardTitle className="text-lg text-gov-navy leading-tight">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-gray-600 text-sm mb-3">
                        {item.excerpt}
                      </p>
                      <Button variant="link" className="text-gov-green p-0 h-auto text-sm">
                        Learn More →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-gov-navy">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-4 border-l-gov-green pl-4">
                  <h4 className="font-medium text-sm">Tech Symposium 2024</h4>
                  <p className="text-xs text-gray-600">15-17 January 2024</p>
                  <p className="text-xs text-gray-500">New Delhi</p>
                </div>
                <div className="border-l-4 border-l-blue-500 pl-4">
                  <h4 className="font-medium text-sm">Innovation Workshop</h4>
                  <p className="text-xs text-gray-600">22-23 January 2024</p>
                  <p className="text-xs text-gray-500">Bangalore</p>
                </div>
                <div className="border-l-4 border-l-purple-500 pl-4">
                  <h4 className="font-medium text-sm">Career Fair</h4>
                  <p className="text-xs text-gray-600">5 February 2024</p>
                  <p className="text-xs text-gray-500">Multiple Cities</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-gov-navy">Publications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <a href="#" className="block text-sm text-gov-green hover:underline">
                  Annual Report 2023-24
                </a>
                <a href="#" className="block text-sm text-gov-green hover:underline">
                  Technology Focus Newsletter
                </a>
                <a href="#" className="block text-sm text-gov-green hover:underline">
                  Research Journal Archives
                </a>
                <a href="#" className="block text-sm text-gov-green hover:underline">
                  Patent Database
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-gov-green hover:bg-green-700">
            View All News & Updates
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
