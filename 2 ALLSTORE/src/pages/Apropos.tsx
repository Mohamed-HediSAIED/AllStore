import React from 'react';
import { motion } from 'framer-motion';

const Apropos: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="container" 
      style={{ paddingTop: '180px' }}
    >
      <div style={{ maxWidth: '700px' }}>
        <span style={{ color: 'var(--accent-bleu)', fontWeight: 600, fontSize: '14px', letterSpacing: '1px' }}>NOTRE MISSION</span>
        <h1 style={{ fontSize: '48px', margin: '20px 0' }}>Redéfinir le service de proximité digitale.</h1>
        <p style={{ fontSize: '21px', lineHeight: 1.5, color: 'var(--texte-noir)', marginBottom: '30px' }}>
          ALLSTORE 24/7 n'est pas qu'une boutique, c'est une interface de confiance. Nous utilisons l'intelligence artificielle pour structurer vos besoins les plus complexes et les transmettre instantanément à des experts humains.
        </p>
        <p style={{ fontSize: '18px', color: 'var(--texte-gris)' }}>
          Qu'il s'agisse de trouver une pièce de collection ou d'organiser une logistique d'urgence, notre engagement est simple : réponse immédiate, solution absolue.
        </p>
      </div>
    </motion.div>
  );
};

export default Apropos;
