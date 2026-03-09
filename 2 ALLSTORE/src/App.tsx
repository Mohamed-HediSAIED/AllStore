import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Store from './pages/Store';
import Services from './pages/Services';
import Assistant from './pages/Assistant';
import Apropos from './pages/Apropos';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Store />} />
              <Route path="/services" element={<Services />} />
              <Route path="/assistant" element={<Assistant />} />
              <Route path="/apropos" element={<Apropos />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
