import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navigation-bar/Navbar";
import Home from "./componentes/Home/Home";
import "./index.css";
import Footer from "./componentes/footer/Footer";
import ServiceRout from "./pages/expert/ServiceRout";
import Practice1 from "./pages/practic/Practice1";
import About from "./pages/About/About";
import ContactUs from "./pages/Contact Us/ContactUs";
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/practic" element={<Practice1 />} />
            <Route path="/serviceRout" element={<ServiceRout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
