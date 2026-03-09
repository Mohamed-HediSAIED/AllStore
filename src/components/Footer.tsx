import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <p style={{ marginBottom: '25px', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '25px' }}>
          Tous les articles présentés sont des répliques de haute qualité sourcées avec soin par nos experts. Nous garantissons une fidélité exceptionnelle aux modèles originaux tant au niveau du design que des matériaux utilisés.
        </p>
        <p>Copyright © 2024 ALLSTORE 24/7. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
