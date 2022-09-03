
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className='main-panel'>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about-us" element={<Aboutus/>}/>
          <Route path="contact" element={<Contact/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
