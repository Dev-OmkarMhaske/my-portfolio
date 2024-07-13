import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PortFolio from "./components/PortFolio";
import Experiance from "./components/Experiance";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <PortFolio />
        <Experiance />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
