import React, { useState } from 'react';
import './App.scss';

function App() {
  // 1. État pour la liste des plats
  const [dishes, setDishes] = useState([
    { id: 1, name: "Salade César", price: 12 },
    { id: 2, name: "Burger Maison", price: 15 }
  ]);

  // 2. État pour le formulaire
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState("");
}

export default App;