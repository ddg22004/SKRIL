import React from 'react';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="p-4 rounded-lg bg-zinc-900">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-secondary-text">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="bg-black py-12 text-primary-text">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Diverse Features</h2>
        <p className="text-secondary-text text-center mb-8">Explore our diverse features tailored to meet the dynamic needs of modern businesses.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FeatureCard title="Feature 1" description="Description of feature 1." />
          <FeatureCard title="Feature 2" description="Description of feature 2." />
          <FeatureCard title="Feature 3" description="Description of feature 3." />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
