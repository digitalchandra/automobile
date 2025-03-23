import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import PngToJpeg from "./pages/PngToJpeg";
import JpegToPng from "./pages/JpegToPng";

const services = [
  { id: 1, name: "PNG to JPEG", path: "/png-to-jpeg" },
  { id: 2, name: "JPEG to PNG", path: "/jpeg-to-png" },
  { id: 3, name: "WEBP to JPEG", path: "/webp-to-jpeg" },
];

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-6"> Convert any Image by Image Converter</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link 
            key={service.id} 
            to={service.path}
            className="block p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold">{service.name}</h2>
            <p className="text-gray-600">Convert {service.name.split(" ")[0]} images.</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/png-to-jpeg" element={<PngToJpeg />} />
        <Route path="/jpeg-to-png" element={<JpegToPng/>} />
        <Route path="/webp-to-jpeg" element={<div>WEBP to JPEG Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;