import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Header from "./components/Header"
import Tools from "./pages/Tools"
import Blogs from "./pages/Blogs"
import BlogView from "./pages/BlogView"


function App() {
 

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tools" element={<Tools />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/blog/:slug" element={<BlogView />}></Route>
      </Routes>
    </Router>
    
    </>
      
  )
}

export default App
