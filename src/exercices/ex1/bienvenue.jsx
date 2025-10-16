import React, { useState } from 'react';

const Bienvenue = () => {
  const [nom, setNom] = useState('');

  return (
    <div className="bienvenue-card">
      <h2>Bienvenue</h2>
      
      <input
        type="text"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
        placeholder="Entrez votre nom"
        className="nom-input"
      />

      {nom && (
        <p className="message-bienvenue">Bienvenue {nom}</p>
      )}
    </div>
  );
};

export default Bienvenue;