'use client'

import React, { useState } from 'react';
import CarCard from './components/carCard';
import RentalSummary from './components/RentalSummary';
import BillingInfo from './components/BillingInfo';
import RentalInfo from './components/RentalInfo';
import PaymentMethod from './components/PaymentMethod';
import Confirmation from './components/Confirmation';

const Home: React.FC = () => {
  const [selectedCar, setSelectedCar] = useState<string | null>(null);

  // Event handler to update the selected car
  const handleRentNow = (car: string) => {
    setSelectedCar(car);
  };

  return (
    <div className="container mx-auto p-6">
      <header className="text-center mb-10">
        <h1 className="text-3xl font-bold">Car Rental</h1>
      </header>

      {/* Car Display Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Available Cars</h2>
        <div className="grid grid-cols-3 gap-6">
          <CarCard
            image="/cr-v.jpg"
            price="$50"
            name="Honda CR-V"
            onRent={() => handleRentNow('Honda CR-V')}
          />
          <CarCard
            image="/civic.jpg"
            price="$60"
            name="Honda Civic"
            onRent={() => handleRentNow('Honda Civic')}
          />
          <CarCard
            image="/accord.jpg"
            price="$70"
            name="Honda Accord"
            onRent={() => handleRentNow('Honda Accord')}
          />
          <CarCard
            image="/pilot.jpg"
            price="$80"
            name="Honda Pilot"
            onRent={() => handleRentNow('Honda Pilot')}
          />
          <CarCard
            image="/hr-v.jpg"
            price="$90"
            name="Honda HR-V"
            onRent={() => handleRentNow('Honda HR-V')}
          />
          <CarCard
            image="/jazz.jpg"
            price="$100"
            name="Honda Jazz"
            onRent={() => handleRentNow('Honda Jazz')}
          />
        </div>
      </section>

      {/* Rental Summary Section */}
      {selectedCar && <RentalSummary carName={selectedCar} />}

      {/* Billing Info Section */}
      <BillingInfo />

      {/* Rental Info Section */}
      <RentalInfo />

      {/* Payment Method Section */}
      <PaymentMethod />

      {/* Confirmation Section */}
      <Confirmation />
    </div>
  );
};

export default Home;
