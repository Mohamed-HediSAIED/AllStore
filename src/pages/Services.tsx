import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Horlogerie de Collection',
      desc: 'Accès direct aux marchés gris et aux collectionneurs privés pour les pièces Rolex, Patek Philippe et Audemars Piguet. Authentification garantie.'
    },
    {
      title: 'High-Tech & Gaming',
      desc: 'Sourcing de composants rares, consoles en édition limitée et matériel informatique professionnel en rupture de stock mondiale.'
    },
    {
      title: 'Conciergerie Lifestyle',
      desc: 'Réservations de dernière minute, accès à des événements privés et logistique de luxe personnalisée pour nos membres privilégiés.'
    },
    {
      title: 'Sourcing Mode & Rare',
      desc: 'Recherche de maroquinerie de luxe et de sneakers de collection. Nous trouvons les tailles et les coloris les plus demandés.'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      <section className="hero">
        <div className="container">
          <span style={{ color: 'var(--accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>Nos Prestations</span>
          <h1 style={{ marginTop: '20px' }}>L'art du sourcing,<br />la rigueur de l'IA.</h1>
          <p>Découvrez comment nous transformons vos demandes les plus complexes en réalités immédiates.</p>
        </div>
      </section>

      <section className="container" style={{ paddingBottom: '100px' }}>
        <div className="grid-services">
          {services.map((service, i) => (
            <div key={i} className="card-luxe" style={{ textAlign: 'left' }}>
              <h3 style={{ color: 'var(--noir)', marginBottom: '15px' }}>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '80px', textAlign: 'center' }}>
          <p style={{ fontSize: '20px', marginBottom: '30px' }}>Besoin d'une recherche personnalisée ?</p>
          <Link to="/assistant" className="btn-primary">Lancer une recherche Or</Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Services;
