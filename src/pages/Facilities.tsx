
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Facilities = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Facilities</h1>
        
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">High-Performance Computing (HPC) Server</h2>
            <p className="text-gray-700 mb-4">
              This cutting-edge solution is designed to meet the demands of modern enterprises, 
              offering unparalleled performance, efficiency, and scalability.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-300 p-3 text-left">Component</th>
                    <th className="border border-gray-300 p-3 text-left">Specification</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">No. of Nodes</td>
                    <td className="border border-gray-300 p-3">07 (Master/ Management Node - 03, GPU for AI Node - 01, IoT and Blockchain Node - 02, Ansys Node - 01)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">CPU/ GPU Types</td>
                    <td className="border border-gray-300 p-3">CPU – Intel Xeon Gold, AMD EPYC<br/>GPU – NVIDIA L40S, NVIDIA H100</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Cores per Node</td>
                    <td className="border border-gray-300 p-3">Master/ Management Node – 2*32 cores each<br/>GPU for AI – 2*32 cores<br/>IoT and Blockchain Node – 2*32 cores each<br/>Ansys Node – 2*64 cores</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Memory (RAM)</td>
                    <td className="border border-gray-300 p-3">Master/ Management Node – 512 GB each<br/>GPU for AI – 02 TB<br/>IoT and Blockchain Node – 01 TB each<br/>Ansys Node – 512 GB</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Interconnect</td>
                    <td className="border border-gray-300 p-3">25Gbps Interconnect on fiber</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Storage System</td>
                    <td className="border border-gray-300 p-3">Master/ Management Node – 8*1.92 TB SSD, 2*480GB SSD<br/>GPU for AI – 4*3.84 TB SSD, 2*480GB SSD<br/>IoT and Blockchain Node – 4*3.84 TB SSD, 2*480GB SSD<br/>Ansys Node – 6*3.84 TB SSD<br/>NAS (Network Attached Storage) – 50 TB usable NVMe, 350TB usable NLSAS</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Cooling System</td>
                    <td className="border border-gray-300 p-3">Air - cooled</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Scheduling Software</td>
                    <td className="border border-gray-300 p-3">Red Hat OpenShift</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold">Operating System</td>
                    <td className="border border-gray-300 p-3">RHEL 9.x (Red Hat Enterprise Linux 9.x)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">Key Software</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Computer-Aided Design (CAD)</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>SOLIDWORKS PREMIUM AND CATIA</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Computer-Aided Engineering (CAE)</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>ABAQUS, SIMUFACT, and ANSYS Mechanical</li>
                  <li>COMSOL MULTIPHYSICS</li>
                  <li>Hexagon ADAMS and DIGIMAT</li>
                  <li>ANSYS CFD</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Embedded Systems</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>ARM KEIL</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Mathematical and Scientific Computing</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li>MATLAB and MAPLE</li>
                  <li>MODE FRONTIER SOFTWARE</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Facilities;
