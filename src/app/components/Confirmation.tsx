'use client'

import React, { useState } from 'react';

const Confirmation: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-4">Confirmation</h2>

      <div className="mb-4">
        <input
          type="checkbox"
          id="terms"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label htmlFor="terms" className="text-lg">
          I agree to the <a href="/terms" className="text-blue-500">terms and conditions</a>.
        </label>
      </div>

      <div className="mb-4">
        <input
          type="checkbox"
          id="rental"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label htmlFor="rental" className="text-lg">
          I confirm my car rental booking.
        </label>
      </div>

      <button
        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
        disabled={!isChecked}
      >
        Rent Now
      </button>
    </section>
  );
};

export default Confirmation;
