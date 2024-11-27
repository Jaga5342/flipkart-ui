import React, { useState } from 'react';


const Card = ({ image, title, description, onClick, isSelected }) => {
  return (
    <div
      className={`p-4 ${isSelected ? 'bg-blue-200' : 'bg-slate-200'} cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex gap-5 mt-1">
        <img src={image} width="150px" height="150px" alt="images" />
      </div>
      <div className="flex gap-8 mt-4">
        <p className="mt-2 text-sm text-blue-500 font-bold">{title}</p>
      </div>
      {isSelected && (
        <p className="text-gray-600 mt-2">{description}</p> // Display description when selected
      )}
    </div>
  );
};

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState(null); // State to track selected card

  
  const cardData = [
    {
      id: 1,
      image: 'image/hp1.jpeg',
      title: 'Best wireless Headphone',
      description: 'A selection of the best wireless headphones available.',
    },
    {
      id: 2,
      image: 'image/logo1.jpeg',
      title: 'Popular Branded Items',
      description: 'Explore our range of popular branded items.',
    },
    {
      id: 3,
      image: 'image/ap3.jpeg',
      title: 'Home Appliances',
      description: 'Check out the best home appliances in the market.',
    },
    {
      id: 4,
      image: 'image/cl1.jpeg',
      title: 'Prime Shirts',
      description: 'High quality shirts for every occasion.',
    },
    {
      id: 5,
      image: 'image/s4.jpeg',
      title: 'Healthy Face Washes',
      description: 'Nourishing face washes for healthy skin.',
    },
    {
      id: 6,
      image: 'image/s3.jpeg',
      title: 'Shampoos and Conditioners',
      description: 'The best shampoos and conditioners for your hair.',
    },
  ];

  // Handle card click event
  const handleCardClick = (id) => {
    setSelectedCard((prev) => (prev === id ? null : id)); // Toggle selection
  };

  return (
    <div className="grid grid-cols-6 grid-rows-6 gap-2 m-4 p-3">
      {cardData.map((card) => (
        <Card
          key={card.id}
          image={card.image}
          title={card.title}
          description={card.description}
          isSelected={selectedCard === card.id}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export default Cards;
