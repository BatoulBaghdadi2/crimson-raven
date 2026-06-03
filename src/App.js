import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Experience from "./pages/Experience";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/pricing" element={<Pricing />} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;