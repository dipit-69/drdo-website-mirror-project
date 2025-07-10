
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">About DTTC</h1>
        
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Defence Technology & Test Centre</h2>
            <p className="text-gray-700 mb-4">
              Defence Technology & Test Centre (DTTC), Lucknow is a premier centre of the Defence 
              Research and Development Organisation (DRDO), dedicated to empowering the Indian 
              defense industry through state-of-the-art technologies and systems.
            </p>
            
            <h3 className="text-xl font-semibold mb-3">DTTC operates across six key verticals:</h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Modeling & simulation</li>
              <li>Testing & Evaluation</li>
              <li>Advance Manufacturing</li>
              <li>Training & Skill Development</li>
              <li>Technology Incubation</li>
              <li>Technical Consultancy & Business Development</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Mission</h3>
            <p className="text-gray-700">
              This wing will be hosting facilities e.g. industry proven software as well as high-performance 
              computing infrastructures to focus on different aspects of modelling, simulation, analysis of 
              components, sub-assemblies and products.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Address</h4>
                <p className="text-gray-700">
                  Project Director<br/>
                  Defence Technology & Test Centre<br/>
                  Kanpur Road, Amausi,<br/>
                  Lucknow, UP-226009
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Contact</h4>
                <p className="text-gray-700">
                  Phone: 0522-2317620, 2317617<br/>
                  Fax: 0522 - 2982993<br/>
                  Email: dttclko@drdo.gov.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
