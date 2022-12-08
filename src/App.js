import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import './App.css'

const Links = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
  )
}


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Links />
      </HashRouter>
    </div>
  )
}

export default App
