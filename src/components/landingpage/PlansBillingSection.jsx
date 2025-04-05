import React from 'react';

const PricingTier = ({ title, price, features, buttonText }) => {
  return (
    <div className="bg-zinc-900 rounded-lg p-6">
      <h3 className="text-3xl font-semibold mb-2">{title}</h3>
      <p className="text-5xl font-bold mb-4">{price}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index} className="text-secondary-text mb-2">{feature}</li>
        ))}
      </ul>
      <button className="bg-white hover:bg-orange-700 text-black font-bold py-2 px-4 rounded mt-4 flex justify-center">{buttonText}</button>
    </div>
  );
};

const PlansBillingSection = () => {
  const pricingTiers = [
    {
      title: 'Basic',
      price: '$99',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      buttonText: 'Select',
    },
    {
      title: 'Premium',
      price: '$299',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Advanced Feature'],
      buttonText: 'Select',
    },
    {
      title: 'Enterprise',
      price: '$499',
      features: ['All Features', 'Dedicated Support', 'Customization Options'],
      buttonText: 'Contact Us',
    },
  ];

  return (
    <section className="bg-black py-12 text-primary-text">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Plans & Billing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansBillingSection;
