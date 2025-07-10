
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gov-blue">About DTTC</h1>
        
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gov-blue">Defence Technology & Test Centre</h2>
            <p className="text-gray-700 mb-4">
              Defence Technology & Test Centre (DTTC), Lucknow is a premier centre of the Defence 
              Research and Development Organisation (DRDO), dedicated to empowering the Indian 
              defense industry through state-of-the-art technologies and systems.
            </p>
            
            <h3 className="text-xl font-semibold mb-3 text-gov-blue">DTTC operates across six key verticals:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Modeling & Simulation</li>
                <li>Testing & Evaluation</li>
                <li>Advanced Manufacturing</li>
              </ul>
              <ul className="list-decimal list-inside space-y-2 text-gray-700" start="4">
                <li>Training & Skill Development</li>
                <li>Technology Incubation</li>
                <li>Technical Consultancy & Business Development</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-gov-blue">DRDO Laboratories Network</h3>
            <p className="text-gray-700 mb-4">
              DRDO operates a vast network of 50+ laboratories across India, each specializing in specific defense technologies.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-gov-blue">Aeronautical Labs</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• ADA - Aeronautical Development Agency</li>
                  <li>• ADE - Aeronautical Development Establishment</li>
                  <li>• ASTE - Aircraft & Systems Testing Establishment</li>
                  <li>• CABS - Centre for Airborne Systems</li>
                  <li>• CEMILAC - Centre for Military Airworthiness</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-gov-blue">Armament & Combat Labs</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• ARDE - Armament Research & Development Establishment</li>
                  <li>• CVRDE - Combat Vehicles Research & Development Establishment</li>
                  <li>• HEMRL - High Energy Materials Research Laboratory</li>
                  <li>• TBRL - Terminal Ballistics Research Laboratory</li>
                  <li>• R&DE(E) - Research & Development Establishment (Engineers)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-gov-blue">Electronics & Instrumentation</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• DLRL - Defence Laboratory</li>
                  <li>• LRDE - Electronics & Radar Development Establishment</li>
                  <li>• SSPL - Solid State Physics Laboratory</li>
                  <li>• CEERI - Central Electronics Engineering Research Institute</li>
                  <li>• DRDO Young Scientist Laboratory</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-gov-blue">Naval Systems</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• NSTL - Naval Science & Technological Laboratory</li>
                  <li>• NPOL - Naval Physical & Oceanographic Laboratory</li>
                  <li>• NMRL - Naval Materials Research Laboratory</li>
                  <li>• INMAS - Institute of Nuclear Medicine & Allied Sciences</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-gov-blue">Materials & Technology</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• DMRL - Defence Metallurgical Research Laboratory</li>
                  <li>• DMSRDE - Defence Materials & Stores Research & Development Establishment</li>
                  <li>• CFEES - Centre for Fire, Explosive & Environment Safety</li>
                  <li>• DRDE - Defence Research & Development Establishment</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-gov-blue">Life Sciences</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• DIBER - Defence Institute of Bio-Energy Research</li>
                  <li>• DIPAS - Defence Institute of Physiology & Allied Sciences</li>
                  <li>• DFRL - Defence Food Research Laboratory</li>
                  <li>• DEBEL - Defence Bio-Engineering & Electromedical Laboratory</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-gov-blue">Mission & Vision</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2 text-gov-blue">Our Mission</h4>
                <p className="text-gray-700">
                  To provide world-class science & technology solutions for the security, development and progress of India through indigenous defense technologies, testing facilities, and skill development programs.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-gov-blue">Our Vision</h4>
                <p className="text-gray-700">
                  To be a global leader in defense technology research and development, ensuring technological superiority and self-reliance in defense systems for India.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3 text-gov-blue">Contact Information</h3>
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
