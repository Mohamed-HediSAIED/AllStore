import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Assistant: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0 }}
      className="container"
      style={{ paddingTop: '100px' }}
    >
      <div className="assistant-card">
        <span className="step">ÉTAPES 1 SUR 2</span>
        <h2 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '10px' }}>Que cherchez-vous ?</h2>
        <p style={{ color: 'var(--gris-texte)', marginBottom: '30px' }}>Notre IA va analyser les stocks mondiaux pour vous.</p>
        <div className="options">
          <Link to="/contact" className="opt-btn">Horlogerie & Bijoux Rares</Link>
          <Link to="/contact" className="opt-btn">Demande de Conciergerie</Link>
          <Link to="/contact" className="opt-btn">Produits Tech & Gaming</Link>
          <Link to="/contact" className="opt-btn">Autre demande spécifique</Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Assistant;
