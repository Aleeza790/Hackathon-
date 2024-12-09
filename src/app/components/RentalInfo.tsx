'use client'

import React, { useState } from 'react';

const RentalInfo: React.FC = () => {
  const [rentalInfo, setRentalInfo] = useState({
    pickUpLocation: '',
    pickUpTime: '',
    pickUpDate: '',
    dropOffLocation: '',
    dropOffTime: '',
    dropOffDate: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRentalInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-4">Rental Information</h2>

      <div className="mb-4">
        <label htmlFor="pickUpLocation" className="block text-lg mb-2">Pick-up Location</label>
        <input
          type="text"
          id="pickUpLocation"
          name="pickUpLocation"
          value={rentalInfo.pickUpLocation}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="pickUpTime" className="block text-lg mb-2">Pick-up Time</label>
        <input
          type="time"
          id="pickUpTime"
          name="pickUpTime"
          value={rentalInfo.pickUpTime}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="pickUpDate" className="block text-lg mb-2">Pick-up Date</label>
        <input
          type="date"
          id="pickUpDate"
          name="pickUpDate"
          value={rentalInfo.pickUpDate}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="dropOffLocation" className="block text-lg mb-2">Drop-off Location</label>
        <input
          type="text"
          id="dropOffLocation"
          name="dropOffLocation"
          value={rentalInfo.dropOffLocation}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="dropOffTime" className="block text-lg mb-2">Drop-off Time</label>
        <input
          type="time"
          id="dropOffTime"
          name="dropOffTime"
          value={rentalInfo.dropOffTime}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="dropOffDate" className="block text-lg mb-2">Drop-off Date</label>
        <input
          type="date"
          id="dropOffDate"
          name="dropOffDate"
          value={rentalInfo.dropOffDate}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>
    </section>
  );
};

export default RentalInfo;
