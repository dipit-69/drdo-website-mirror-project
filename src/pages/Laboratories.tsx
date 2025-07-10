
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Laboratories = () => {
  const labCategories = [
    {
      title: "Aeronautical Development",
      description: "Advanced aircraft and aerospace systems",
      labs: [
        { name: "ADA", full: "Aeronautical Development Agency", location: "Bangalore" },
        { name: "ADE", full: "Aeronautical Development Establishment", location: "Bangalore" },
        { name: "ASTE", full: "Aircraft & Systems Testing Establishment", location: "Bangalore" },
        { name: "CABS", full: "Centre for Airborne Systems", location: "Bangalore" },
        { name: "CEMILAC", full: "Centre for Military Airworthiness", location: "Bangalore" },
      ]
    },
    {
      title: "Electronics & Radar",
      description: "Electronic warfare and radar systems",
      labs: [
        { name: "LRDE", full: "Electronics & Radar Development Establishment", location: "Bangalore" },
        { name: "DLRL", full: "Defence Laboratory", location: "Hyderabad" },
        { name: "SSPL", full: "Solid State Physics Laboratory", location: "Delhi" },
        { name: "CEERI", full: "Central Electronics Engineering Research Institute", location: "Pilani" },
      ]
    },
    {
      title: "Naval Systems",
      description: "Marine and underwater defense systems",
      labs: [
        { name: "NSTL", full: "Naval Science & Technological Laboratory", location: "Visakhapatnam" },
        { name: "NPOL", full: "Naval Physical & Oceanographic Laboratory", location: "Kochi" },
        { name: "NMRL", full: "Naval Materials Research Laboratory", location: "Mumbai" },
        { name: "INMAS", full: "Institute of Nuclear Medicine & Allied Sciences", location: "Delhi" },
      ]
    },
    {
      title: "Armament & Combat",
      description: "Weapons systems and combat vehicles",
      labs: [
        { name: "ARDE", full: "Armament Research & Development Establishment", location: "Pune" },
        { name: "CVRDE", full: "Combat Vehicles Research & Development Establishment", location: "Chennai" },
        { name: "HEMRL", full: "High Energy Materials Research Laboratory", location: "Pune" },
        { name: "TBRL", full: "Terminal Ballistics Research Laboratory", location: "Chandigarh" },
      ]
    },
    {
      title: "Materials Science",
      description: "Advanced materials and metallurgy",
      labs: [
        { name: "DMRL", full: "Defence Metallurgical Research Laboratory", location: "Hyderabad" },
        { name: "DMSRDE", full: "Defence Materials & Stores Research & Development Establishment", location: "Kanpur" },
        { name: "CFEES", full: "Centre for Fire, Explosive & Environment Safety", location: "Delhi" },
        { name: "DRDE", full: "Defence Research & Development Establishment", location: "Gwalior" },
      ]
    },
    {
      title: "Life Sciences",
      description: "Bio-medical and life support systems",
      labs: [
        { name: "DIBER", full: "Defence Institute of Bio-Energy Research", location: "Haldwani" },
        { name: "DIPAS", full: "Defence Institute of Physiology & Allied Sciences", location: "Delhi" },
        { name: "DFRL", full: "Defence Food Research Laboratory", location: "Mysore" },
        { name: "DEBEL", full: "Defence Bio-Engineering & Electromedical Laboratory", location: "Bangalore" },
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gov-blue">DRDO Laboratories</h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700">
              DRDO operates 50+ specialized laboratories across India, each contributing to India's defense technology advancement
            </p>
          </div>

          <div className="space-y-8">
            {labCategories.map((category, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-2 text-gov-blue">{category.title}</h2>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.labs.map((lab, labIndex) => (
                      <div key={labIndex} className="border-l-4 border-l-gov-blue pl-4 py-2">
                        <h3 className="font-semibold text-gov-blue">{lab.name}</h3>
                        <p className="text-sm text-gray-700">{lab.full}</p>
                        <p className="text-xs text-gray-500">📍 {lab.location}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-gradient-to-r from-gov-blue to-gov-blue-light text-white">
            <CardContent className="p-6 text-center">
              <h2 className="text-2xl font-bold mb-4">DTTC - Your Gateway to DRDO</h2>
              <p className="text-lg">
                Defence Technology & Test Centre serves as a central hub connecting all DRDO laboratories, 
                providing integrated testing, manufacturing, and technology transfer services.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Laboratories;
