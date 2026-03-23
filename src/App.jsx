import React, { useState } from 'react';
import './App.scss';

function App() {
  // 1. État pour la liste des plats (Correction : suppression de la virgule en trop)
  const [dishes, setDishes] = useState([
    { id: 1, name: "Salade César",  price:  12 },
    { id: 2, name: "Burger Maison",  price:  15 }
  ]);

  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");

 
      
      <button 
        onClick={() => alert('Génération du PDF en cours...')} 
        className='export-btn'
      >
        📥 Exporter en PDF (Simulation)
      </button>
    </div>
  );
}

export default App;