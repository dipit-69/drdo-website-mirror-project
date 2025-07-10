
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Modeling & Simulation</h3>
            <p className="text-gray-700">
              State-of-the-art modeling and simulation capabilities for defense applications.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Testing & Evaluation</h3>
            <p className="text-gray-700">
              Comprehensive testing and evaluation services for defense systems and components.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Advanced Manufacturing</h3>
            <p className="text-gray-700">
              Advanced material characterization and manufacturing technologies.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Training & Skill Development</h3>
            <p className="text-gray-700">
              Skill development programs and training workshops for industry professionals.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Technology Incubation</h3>
            <p className="text-gray-700">
              Support for startups and MSMEs in defense technology innovation.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600">Technical Consultancy</h3>
            <p className="text-gray-700">
              Expert technical consultancy and business development services.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
