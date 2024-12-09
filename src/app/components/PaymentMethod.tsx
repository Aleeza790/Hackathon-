'use client'

import React, { useState } from 'react';

const PaymentMethod: React.FC = () => {
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);

  const handlePaymentSuccess = () => {
    setPaymentStatus('Payment Successful');
  };

  const handlePaymentFailure = () => {
    setPaymentStatus('Payment Failed');
  };

  return (
    <section className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
      
      {/* Payment options */}
      <button
        onClick={handlePaymentSuccess}
        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 mb-4"
      >
        Pay with Credit Card
      </button>
      <button
        onClick={handlePaymentFailure}
        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
      >
        Pay with PayPal
      </button>

      {/* Display payment status */}
      {paymentStatus && (
        <p className="mt-4 text-lg">{paymentStatus}</p>
      )}
    </section>
  );
};

export default PaymentMethod;
