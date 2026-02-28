import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import OurPrograms from "./pages/OurPrograms";
import Media from "./pages/Media";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programs" element={<OurPrograms />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
