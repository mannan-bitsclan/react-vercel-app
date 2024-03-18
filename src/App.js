import React, { useState, useEffect } from 'react';
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
import LoadingBar from 'react-top-loading-bar';
import ScrollToTop from './components/ScrollTop/ScrollToTop.jsx';

function App() {

  const [progress, setProgress] = useState(10);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <LoadingBar
          color='#f11946'
          progress={progress}
        /> */}
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<About />} />
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
