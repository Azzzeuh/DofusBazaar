// src/components/CreateUser.js
import React, { useState } from 'react';

function CreateType({ fetchTypes }) {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newType = { name };

    try {
      const response = await fetch('http://localhost:5000/api/types', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newType),
      });

      if (response.ok) {
        setName('');
        fetchTypes(); // Rafraîchir la liste des types
      } else {
        console.error('Erreur lors de la création du type');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Ajouter type</button>
    </form>
  );
}

export default CreateType;
