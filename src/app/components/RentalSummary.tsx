'use client'

import React from 'react';

interface RentalSummaryProps {
  carName: string;
}

const RentalSummary: React.FC<RentalSummaryProps> = ({ carName }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-4">Rental Summary</h2>
      <p className="text-lg mb-4">You have selected: <strong>{carName}</strong></p>
    </section>
  );
};

export default RentalSummary;
