'use client'

import React, { useState } from 'react';

const BillingInfo: React.FC = () => {
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    townCity: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-lg mb-2">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={billingInfo.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-lg mb-2">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={billingInfo.address}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="phoneNumber" className="block text-lg mb-2">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={billingInfo.phoneNumber}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="townCity" className="block text-lg mb-2">Town/City</label>
        <input
          type="text"
          id="townCity"
          name="townCity"
          value={billingInfo.townCity}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md"
        />
      </div>
    </section>
  );
};

export default BillingInfo;
