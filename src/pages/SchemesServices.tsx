
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SchemesServices = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Schemes and Services</h1>
        
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">A Hub for Startups, MSMEs, and Industry Growth</h2>
            <p className="text-gray-700 mb-4">
              The Testing and Evaluation Centre provides a competitive edge to startups, MSMEs, 
              and industries planning to explore or expand into the defense sector. With access to 
              top-tier testing infrastructure, businesses can quickly prototype, evaluate, and refine 
              their products for defense applications.
            </p>
            <p className="text-gray-700">
              The Centre supports innovation and reduces time-to-market, helping businesses overcome 
              technical challenges and meet stringent quality standards.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Empowering Startup and MSMEs in Fabrication</h2>
            <p className="text-gray-700 mb-4">
              The wing provides comprehensive capabilities in advanced machining, composite material 
              fabrication, and prototyping, ensuring a versatile approach to product development.
            </p>
            <p className="text-gray-700">
              With its cutting-edge machinery and a focus on high-precision operations, this wing 
              serves as a vital resource for businesses aiming to thrive in the defense ecosystem.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Importance of the Centre for Startups, MSMEs, and Industries</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Access to Advanced Software& High-Performance Computing (HPC)</h3>
                <p className="text-gray-700">
                  The Centre offers training in industry-proven software. These software enables 
                  participants to perform sophisticated design, simulation, and analysis, reducing 
                  product development cycles and enhancing innovation potential.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Cutting-Edge Equipment for Skill Enhancement</h3>
                <p className="text-gray-700">
                  Access to an extensive range of industrial equipment essential for manufacturing, 
                  testing, and analysis. Key Domain includes: Testing and Measurement, Fabrication 
                  and Advanced Analysis & Diagnostic Equipment.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Empowering Defence Innovators</h3>
                <p className="text-gray-700">
                  The Training and Skill Development Centre is a crucial enabler for startups, MSMEs, 
                  and established industries aiming to contribute to the defence sector. By providing 
                  access to world-class equipment, software, and skill development programs, DTTC 
                  empowers innovators to excel in defence technology.
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

export default SchemesServices;
