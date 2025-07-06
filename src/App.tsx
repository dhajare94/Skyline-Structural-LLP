import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import WhyChooseUs from './pages/WhyChooseUs';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <Home />
          </MainLayout>
        } />
        <Route path="/about" element={
          <MainLayout className="bg-slate-50">
            <About />
          </MainLayout>
        } />
        <Route path="/services" element={
          <MainLayout className="bg-slate-50">
            <Services />
          </MainLayout>
        } />
        <Route path="/projects" element={
          <MainLayout className="bg-slate-50">
            <Projects />
          </MainLayout>
        } />
        <Route path="/why-choose-us" element={
          <MainLayout className="bg-slate-50">
            <WhyChooseUs />
          </MainLayout>
        } />
        <Route path="/contact" element={
          <MainLayout className="bg-slate-50">
            <Contact />
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;