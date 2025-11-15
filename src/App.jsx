import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Tools from "./pages/Tools"
import ColorPickerTool from "./AllTools/ColorPickerTool"
import WordCounter from "./AllTools/WordCounter";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ImageFilterTool from "./AllTools/ImageFilterTool";


function App() {
 

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tools" element={<Tools />}></Route>
        <Route path="/about-us" element={<About />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/tool/color-picker" element={<ColorPickerTool />}></Route>
        <Route path="/tool/word-counter" element={<WordCounter />}></Route>
        <Route path="/tool/css-filter" element={<ImageFilterTool />}></Route>
        
        
      </Routes>
      <Footer />
    </Router>
    
    </>
      
  )
}

export default App
