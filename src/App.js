import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Flights from "./pages/Flights";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Hotel from "./pages/Hotel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} exact/>
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/flight" element={<Flights/>} />
            <Route path="/hotel" element={<Hotel/>} />
            <Route path="/contact" element={<Contact/>} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
