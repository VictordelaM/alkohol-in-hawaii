import React, { useState } from 'react';
import Nav2 from '../../../components/nav/Nav2'
import Footer from '../../../components/footer/Footer'
import './addDrink.css'
import { useDataContext } from '../../DataContext';

function AddDrink() {
  const { addDrink } = useDataContext();

  const [formData, setFormData] = useState({
    name: '',
    category: '',
    imageURL: '',
    instructions: '',
    ingredient1: '',
    quantity1: '',
    ingredient2: '',
    quantity2: '',
    ingredient3: '',
    quantity3: '',
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    const newData = {
      name: formData.name,
      category: formData.category,
      imageURL: formData.imageURL,
      instructions: formData.instructions,
      ingredients: [
        { name: formData.ingredient1, quantity: formData.quantity1 },
        { name: formData.ingredient2, quantity: formData.quantity2 },
        { name: formData.ingredient3, quantity: formData.quantity3 },
      ],
    };

    addDrink(newData);

    setFormData({
      name: '',
      category: '',
      imageURL: '',
      instructions: '',
      ingredient1: '',
      quantity1: '',
      ingredient2: '',
      quantity2: '',
      ingredient3: '',
      quantity3: '',
    });
  };

  return (
    <>
      <Nav2 />
      <div>
        <h2>Füge deine eigenen Getränke hinzu!</h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
        />

        {/* Kategorie */}
        <input
          type="text"
          placeholder="Kategorie"
          value={formData.category}
          onChange={(e) => handleInputChange('category', e.target.value)}
        />
        {/* Bild URL */}
        <input
          type="text"
          placeholder="Bild URL"
          value={formData.imageURL}
          onChange={(e) => handleInputChange('imageURL', e.target.value)}
        />
        {/* Anleitung */}
        <input
          type="text"
          placeholder="Anleitung"
          value={formData.instructions}
          onChange={(e) => handleInputChange('instructions', e.target.value)}
        />
        {/* Zutat 1 */}
        <input
          type="text"
          placeholder="Zutat 1"
          value={formData.ingredient1}
          onChange={(e) => handleInputChange('ingredient1', e.target.value)}
        />
        {/* Menge Zutat 1 */}
        <input
          type="text"
          placeholder="Menge Zutat 1"
          value={formData.quantity1}
          onChange={(e) => handleInputChange('quantity1', e.target.value)}
        />
        {/* Zutat 2 */}
        <input
          type="text"
          placeholder="Zutat 2"
          value={formData.ingredient2}
          onChange={(e) => handleInputChange('ingredient2', e.target.value)}
        />
        {/* Menge Zutat 2 */}
        <input
          type="text"
          placeholder="Menge Zutat 2"
          value={formData.quantity2}
          onChange={(e) => handleInputChange('quantity2', e.target.value)}
        />
        {/* Zutat 3 */}
        <input
          type="text"
          placeholder="Zutat 3"
          value={formData.ingredient3}
          onChange={(e) => handleInputChange('ingredient3', e.target.value)}
        />
        {/* Menge Zutat 3 */}
        <input
          type="text"
          placeholder="Menge Zutat 3"
          value={formData.quantity3}
          onChange={(e) => handleInputChange('quantity3', e.target.value)}
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>

      <Footer />
    </>
  );
}

export default AddDrink;
