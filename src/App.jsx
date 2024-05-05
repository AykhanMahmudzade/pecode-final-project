import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ArticlesSection from './components/ArticlesSection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import WhatWeDo from './components/containers/WhatWeDo';
import NotFound from './components/containers/NotFound';
import Career from './components/containers/Career';
import Contact from './components/containers/Contact';
import Blog from './components/containers/Blog';
import Home from './components/containers/Home';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='container'>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/what-we-do' element={<WhatWeDo />} />
          <Route path='/career' element={<Career />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
