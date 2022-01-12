import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import NotFound from '../components/NotFound';
import Icons from '../components/Icons';

import "../styles/header.scss";

const AppRouter = () => {
  return(
    <Router>
        <Header />
        <Icons />
        <Routes>
          <Route path="/" element={<HomePage />} exact={true} />
          <Route path="/projects" element={<Projects />} exact={true} />
          <Route path="/about" element={<About />} exact={true} />
          <Route path="/contact" element={<Contact />} exact={true} />
          <Route path="/skills" element={<Skills />} exact={true} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
};

export default AppRouter;