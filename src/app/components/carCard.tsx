'use client'

import React from 'react';

interface CarCardProps {
  image: string;
  price: string;
  name: string;
  onRent: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ image, price, name, onRent }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg text-center">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-lg text-gray-600 mb-4">{price} / per day</p>
      <button
        onClick={onRent}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Rent Now
      </button>
    </div>
  );
};

export default CarCard;
