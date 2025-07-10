
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TestFacilities = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Test Facilities</h1>
        
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Key Equipment</h2>
            <p className="text-gray-700 mb-4">
              The Centre has established a comprehensive array of equipment spanning various 
              domains such as material testing, machining, and environmental simulation.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Material Testing</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Universal Testing Machine</li>
                  <li>Rheometer</li>
                  <li>Thermo Gravimetric Analysis (TGA)</li>
                  <li>Particle Size Analyser</li>
                  <li>FTIR Spectro-Photometer</li>
                  <li>Differential Scanning Calorimetry (DSC)</li>
                  <li>Drop Weight Impact Tester</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Environmental and Non-Destructive Testing (NDT)</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Ultrasonic Flaw Detector</li>
                  <li>Weathering Simulator</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Analytical Testing</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>UV-VIS-NIR Spectro-Photometer</li>
                  <li>GAS Chromatography</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Key Machineries</h2>
            <p className="text-gray-700 mb-4">
              The wing has established array of machineries spanning various domains such as 
              composite fabrication, cutting, and machining etc.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Composite and Polymer Fabrication</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Compression Moulding Press</li>
                  <li>Desktop Autoclave</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">PCB Fabrication</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>PCB Fabrication Machine</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Prototyping and 3D Printing</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Selective LASER Sintering (SLS)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Cutting</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>LASER Cutting Machine</li>
                  <li>Composite Cutting Machine</li>
                  <li>Waterjet Cutting Machine</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Machining</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Vertical Band Saw Machine</li>
                  <li>CNC Lathe Machine</li>
                  <li>Milling Machine</li>
                  <li>CNC 5 Axis Simulator</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Advanced Material Characterization</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Atomic Force Microscope (AFM)</li>
              <li>Dynamic Mechanical Analyzer (DMA)</li>
              <li>Scanning Electronic Microscope (SEM)</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TestFacilities;
