import './App.css';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './utils/Header/Navbar.jsx';
import FooterBox from './utils/Footer/FooterBox.jsx';
import Blog from './pages/Blog.jsx';
import Services from './pages/Services.jsx';
import Blogdetail from './pages/Blogdetail.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blogDetails' element={<Blogdetail />} />
        </Routes>
        <FooterBox />
      </BrowserRouter>
    </>
  );
}

export default App;
