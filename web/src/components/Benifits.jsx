// components/BenefitsSection.jsx

import React from "react";

const BenefitsSection = () => {
  const benefits = [
    { id: 1, text: "Fresh from farms" },
    { id: 2, text: "100% Organic" },
    { id: 3, text: "Sustainable Practices" },
    { id: 4, text: "No Chemical Additives" },
  ];

  return (
    <section className="bg-green-100 py-8 md:py-16 px-4">
        <div className="w-[80%] mx-auto">
        <p className="font-bold text-3xl mb-6 text-[#1fb025]">Benefits</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="bg-white shadow-md rounded-lg p-4 text-center border border-green-200"
          >
            <p className="text-lg font-medium text-green-800">
              {benefit.text}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
