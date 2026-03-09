import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      exit={{ opacity: 0 }}
      style={{ paddingTop: '180px', textAlign: 'center' }}
    >
      <div className="container">
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Lien direct établi.</h1>
        <p style={{ fontSize: '21px', color: 'var(--texte-gris)', maxWidth: '600px', margin: '0 auto 50px' }}>
          Votre demande est prête. Choisissez votre canal pour finaliser avec un agent privé.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
          <a href="https://wa.me/votre-numero" className="btn btn-primary" style={{ background: '#25D366', minWidth: '280px', fontWeight: 600, color: 'white', textDecoration: 'none', padding: '12px 28px', borderRadius: '980px' }}>Ouvrir WhatsApp</a>
          <a href="mailto:contact@allstore247.com" className="btn btn-outline" style={{ border: '1px solid var(--texte-noir)', padding: '12px 40px', borderRadius: '980px', textDecoration: 'none', color: 'var(--texte-noir)' }}>Envoyer un Email</a>
        </div>

        <p style={{ marginTop: '80px', fontSize: '14px', color: 'var(--texte-gris)' }}>Disponibilité moyenne : <span style={{ color: '#25D366' }}>● Moins de 5 minutes</span></p>
      </div>
    </motion.div>
  );
};

export default Contact;
