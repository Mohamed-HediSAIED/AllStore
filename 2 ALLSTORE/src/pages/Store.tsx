import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Store: React.FC = () => {
  const categories = [
    { name: 'Paires', img: 'Samba_ALLSTORE.png' },
    { name: 'Vêtements', img: 'miumiu_ALLSTORE.png' },
    { name: 'Sacs', img: 'gerarddarel_ALLSTORE.png' },
    { name: 'Bijoux', img: 'braceletLV_ALLSTORE.png' },
    { name: 'Montres', img: 'audemarspiguet_ALLSTORE.png' },
    { name: 'Accessoires', img: 'loropiana_ALLSTORE.png' },
    { name: 'Tech', img: 'casqueapple_ALLSTORE.png' },
    { name: 'Optique', img: 'lunette_ALLSTORE.png' },
    { name: 'Parfums', img: 'parfum_ALLSTORE.png' },
  ];

  const products = [
    {
      tag: 'Qualité Miroir',
      tagType: 'orange',
      title: 'Baskets Bekett',
      subtitle: "L'icône Isabel Marant, retravaillée avec des matériaux premium.",
      img: 'isabelmarant.png',
      dark: false,
    },
    {
      tag: 'Sourcing Master',
      tagType: 'white',
      title: 'Rolex Daytona',
      subtitle: 'Acier Oystersteel, 40 mm. Mouvement automatique de précision.',
      img: 'rolexdaytona.png',
      dark: true,
    },
    {
      tag: 'Exclusivité',
      tagType: 'orange',
      title: 'Classique Double Rabat',
      subtitle: "L'élégance intemporelle de Chanel. Cuir d'agneau et finitions dorées.",
      img: 'sacchanel.png',
      dark: false,
    },
    {
      tag: 'Nouveauté',
      tagType: 'orange',
      title: 'Nautilus 5711',
      subtitle: 'Le sommet du luxe. Cadran bleu trame horizontale.',
      img: 'audemarspiguet_ALLSTORE.png',
      dark: false,
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
    >
      <section className="store-header">
        <h1>AllStore.<br /><span>Le meilleur endroit pour trouver l'introuvable.</span></h1>
      </section>

      <div className="category-nav">
        {categories.map((cat, i) => (
          <Link key={i} to="/assistant" className="cat-item">
            <div className="cat-icon">
              <img src={cat.img} alt={cat.name} referrerPolicy="no-referrer" />
            </div>
            <span>{cat.name}</span>
          </Link>
        ))}
      </div>

      <section className="section-container">
        <h2 className="section-title">Les dernières nouveautés. <span>Répliques de haute qualité.</span></h2>
        
        <div className="product-scroll">
          {products.map((prod, i) => (
            <Link key={i} to="/assistant" className={`product-card ${prod.dark ? 'dark' : ''}`}>
              <span className={`card-tag tag-${prod.tagType}`}>{prod.tag}</span>
              <h3 className="card-title">{prod.title}</h3>
              <p className="card-subtitle" style={prod.dark ? { color: '#a1a1a6' } : {}}>{prod.subtitle}</p>
              <div className="card-image-container">
                <img src={prod.img} alt={prod.title} referrerPolicy="no-referrer" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-container" style={{ textAlign: 'center', padding: '100px var(--marge-large) 140px', background: '#fff' }}>
        <h2 style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 600, marginBottom: '20px' }}>Vous ne trouvez pas votre bonheur ?</h2>
        <p style={{ fontSize: 'clamp(18px, 2vw, 24px)', color: 'var(--gris-texte)', maxWidth: '800px', margin: '0 auto 40px' }}>Notre assistant personnel est là pour dénicher n'importe quel article pour vous, avec un niveau d'exigence absolue.</p>
        <Link to="/assistant" className="btn-cta">Démarrer une recherche personnalisée</Link>
      </section>
    </motion.div>
  );
};

export default Store;
